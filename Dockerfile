# Development stage: Vite serves the mounted source with hot reload.
FROM node:24.11.1 AS development

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy dependency manifests and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Step 4: Copy the rest of the application code
COPY . .

# Expose Vite for development containers.
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Production build stage.
FROM development AS builder

# Build the React app for production - will make a 'dist'
RUN npm run build

# Stage 1 based on FROM
# Step 6: Use an nginx server to serve the built app

# Step 7: Specify the base image for the Nginx web server
FROM nginx:alpine AS server

# Step 8: Copy files from Docker docker build stage - builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Step 9: Container to listen to port 80
EXPOSE 80

# Step 10: Default commands to run when container starts
CMD ["nginx", "-g", "daemon off;"]
