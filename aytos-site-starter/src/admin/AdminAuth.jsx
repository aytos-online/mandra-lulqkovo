// Admin authentication stub
// Connects to Supabase magic-link auth
// Only render this component if siteConfig.supabase.enabled = true

export default function AdminAuth() {
  return (
    <div className="min-h-screen bg-ink flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-cream rounded-lg p-8">
        <h1 className="text-2xl font-bold text-ink mb-6 text-center">Admin Access</h1>
        <p className="text-ink/70 mb-4 text-center">
          Send a magic link to your email to access the admin panel.
        </p>

        <input
          type="email"
          placeholder="your@email.com"
          className="w-full px-4 py-2 border border-gold rounded-lg mb-4 focus:outline-none focus:border-rust"
        />

        <button className="w-full btn-primary">
          Send Magic Link
        </button>

        <p className="text-xs text-ink/60 text-center mt-4">
          This is a stub component. Connect to Supabase to enable.
        </p>
      </div>
    </div>
  );
}
