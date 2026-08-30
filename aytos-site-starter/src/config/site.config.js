export const siteConfig = {
  business: {
    name: "Aytos Client",
    tagline: "Your business tagline here",
    phone: "+1 (555) 000-0000",
    email: "hello@example.com",
    address: "123 Main St, City, State 12345",
  },
  colors: {
    // defaults inherit from tailwind.config.js brand tokens
    // override only if a client needs a different accent
    accent: null,
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    googleBusinessUrl: "https://google.com/business",
  },
  services: [
    {
      title: "Service One",
      description: "Description of your first service offering",
      icon: "🎯",
    },
    {
      title: "Service Two",
      description: "Description of your second service offering",
      icon: "⚡",
    },
    {
      title: "Service Three",
      description: "Description of your third service offering",
      icon: "✨",
    },
  ],
  emailjs: {
    serviceId: "",
    ownerTemplateId: "",
    autoReplyTemplateId: "",
    publicKey: "",
  },
  supabase: {
    enabled: false, // Set to true if client has self-service image add-on
    url: "",
    anonKey: "",
    clientId: "",
  },
};
