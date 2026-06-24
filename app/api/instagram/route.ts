import { NextResponse } from "next/server";

const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN!;
const IG_USER_ID = process.env.INSTAGRAM_USER_ID!;

export async function GET() {
  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${IG_USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${ACCESS_TOKEN}`,
      { next: { revalidate: 3600 } } // cache 1 hour
    );

    const data = await res.json();

    // Filter only reels/videos
    const reels = data.data
      .filter((item: any) => item.media_type === "VIDEO")
      .map((item: any, index: number) => ({
        id: index + 1,
        title: item.caption?.slice(0, 40) || "Instagram Reel",
        brand: "Aerovince Technologies",
        thumbnail: item.thumbnail_url || item.media_url,
        instagramUrl: item.permalink,
        views: "—",
        likes: "—",
        duration: "—",
        description: item.caption || "",
        engagement: "—",
      }));

    return NextResponse.json(reels);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reels" }, { status: 500 });
  }
}