export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing SUPABASE_URL or SUPABASE_ANON_KEY");
    return res.status(500).json({
      error: "Supabase environment variables are missing"
    });
  }

  res.setHeader("Cache-Control", "no-store, max-age=0");

  return res.status(200).json({
    supabaseUrl,
    supabaseAnonKey
  });
}
