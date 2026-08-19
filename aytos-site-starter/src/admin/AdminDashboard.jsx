// Admin dashboard stub
// Allows authenticated clients to upload and replace images
// Integrates with Supabase storage + images table

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-cream p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-ink mb-8">Image Management</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* TODO: Fetch and display image slots from siteConfig */}
          <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gold">
            <div className="h-40 flex items-center justify-center text-gray-400 mb-4">
              No image
            </div>
            <input
              type="file"
              accept="image/*"
              className="w-full px-4 py-2 border border-gold rounded-lg"
            />
            <button className="w-full mt-4 btn-primary">
              Replace Image
            </button>
          </div>
        </div>

        <button className="mt-8 text-ink hover:text-gold">
          ← Back to Site
        </button>

        <p className="text-xs text-ink/60 mt-8 max-w-2xl">
          This is a stub component. To fully implement:
          <ul className="list-disc ml-6 mt-2">
            <li>Connect to Supabase auth for magic-link verification</li>
            <li>Query the clients table to get client_id and available image slots</li>
            <li>Fetch current images from storage bucket</li>
            <li>Implement image upload → replace in Supabase storage</li>
            <li>Update images table with new image URLs</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
