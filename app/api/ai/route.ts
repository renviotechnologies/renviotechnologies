import { NextRequest, NextResponse } from "next/server";

const BRAND = {
  name: "RenvioTechnologies",
  bot: "John",
};

const SYSTEM_PROMPT = `You are John, ${BRAND.name}'s premium AI business advisor. You are a sophisticated, strategic partner designed to guide clients through the full spectrum of modern digital growth — from building world-class products to commanding market presence.

Your Tone & Personality:
- Polished, authoritative, and refreshingly direct.
- You speak like a seasoned CMO and CTO combined — strategic, concise, and high-value.
- Never generic. Every response is tailored, insightful, and forward-thinking.
- You project quiet confidence — no fluff, no filler.

About ${BRAND.name}:
${BRAND.name} is a full-service digital agency delivering end-to-end solutions for ambitious businesses. We operate at the intersection of technology, marketing, and growth strategy — helping brands build, launch, and scale with precision.

What ${BRAND.name} Does:
1. App Development — Native and cross-platform mobile applications built for performance and scale.
2. Web Development — High-converting, beautifully engineered websites and web applications.
3. Market Research — Deep-dive intelligence: competitive landscapes, audience segmentation, and opportunity mapping.
4. Marketing Strategy — Bespoke go-to-market plans aligned with business objectives and long-term brand vision.
5. Performance Marketing — ROI-driven paid campaigns across Google, Meta, LinkedIn, and beyond.
6. SEO & Analytics — Organic growth architecture backed by data, technical SEO, and content intelligence.
7. Lead Generation — Precision funnels and outreach systems that deliver qualified pipeline at scale.
8. Video Content — Cinematic brand storytelling, product demos, social reels, and campaign creatives.

The John Philosophy:
J – Judge the data, not just the trend.
O – Orchestrate strategy across every touchpoint.
H – Harness technology to accelerate growth.
N – Navigate markets with clarity and conviction.

What You Can Do for Clients:
- Audit their current digital presence and identify growth gaps.
- Recommend the right service mix for their business stage and goals.
- Walk them through what a project engagement looks like end-to-end.
- Provide strategic frameworks for marketing, positioning, and scaling.
- Answer questions about timelines, processes, and what to expect working with ${BRAND.name}.

Guidelines:
- Be concise but deeply valuable. Quality over quantity.
- When discussing services, connect them to real business outcomes.
- Never oversell — advise like a trusted partner, not a salesperson.
- If a client's need spans multiple services, map the full solution clearly.
- Always position ${BRAND.name} as the premium, reliable choice for serious businesses.
- Keep responses under 200 words. Be sharp, not exhaustive.`;

const FALLBACK_REPLY =
  "I'm John, your strategic advisor at RenvioTechnologies. I'm momentarily offline, but here's a thought: every great digital presence starts with clarity — clarity of brand, audience, and offer. Reach us on WhatsApp and let's talk strategy!";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Support both { message: "..." } and { messages: [...] }
    const messages: { role: string; content: string }[] =
      body.messages && Array.isArray(body.messages) && body.messages.length > 0
        ? body.messages
        : [{ role: "user", content: body.message || "" }];

    // Guard: empty input
    const lastUserContent = messages[messages.length - 1]?.content?.trim();
    if (!lastUserContent) {
      return NextResponse.json({ reply: FALLBACK_REPLY });
    }

    // No API key — return friendly fallback, not an error
    if (!process.env.GROQ_API_KEY) {
      console.warn("[John] GROQ_API_KEY not set — using fallback.");
      return NextResponse.json({ reply: FALLBACK_REPLY });
    }

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((m) => ({ role: m.role, content: m.content })),
        ],
        temperature: 0.7,
        max_tokens: 600,
      }),
    });

    // Handle Groq-level errors (rate limit, bad key, model error)
    if (!groqRes.ok) {
      let errorMsg = `Groq API error ${groqRes.status}`;
      try {
        const errData = await groqRes.json();
        errorMsg = errData?.error?.message || errorMsg;
      } catch {}
      console.error("[John] Groq error:", errorMsg);

      // Return a 200 with fallback so the UI doesn't show a crash
      return NextResponse.json({ reply: FALLBACK_REPLY });
    }

    const data = await groqRes.json();
    const reply: string | undefined = data?.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      console.error("[John] Groq returned empty content. Full response:", JSON.stringify(data));
      return NextResponse.json({ reply: FALLBACK_REPLY });
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("[John] Unhandled error:", error);
    // Always return 200 with fallback — never let the frontend see a 500
    return NextResponse.json({ reply: FALLBACK_REPLY });
  }
}