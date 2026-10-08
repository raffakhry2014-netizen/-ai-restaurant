import * as caffeDemo from "./_menus/caffe-demo.js";

const STATIC_MENUS = { "caffe-demo": caffeDemo };

// GET /api/menu?r=caffe-demo — static demo menu for the guest page.
export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const menu = STATIC_MENUS[String(req.query?.r || "")];
  if (!menu) return res.status(404).json({ error: "Menu not found" });

  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=300");
  return res.status(200).json({
    restaurant: menu.restaurant,
    categories: menu.categories,
    items: menu.items
  });
}
