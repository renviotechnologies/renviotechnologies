// "use client";

// import { useEffect, useRef, useState } from "react";

// interface Message {
//   role: "user" | "assistant";
//   content: string;
// }

// const QUICK_CHIPS = [
//   "App Development",
//   "Web Development",
//   "Performance Marketing",
//   "SEO & Analytics",
// ];

// const WELCOME_MESSAGE: Message = {
//   role: "assistant",
//   content:
//     "Hello! I am John, your strategic advisor at RenvioTechnologies.\nHow can I help accelerate your business today?",
// };

// const SPEECH_TEXTS = [
//   "Grow your business online! 🚀",
//   "Need a stunning website?",
//   "Boost your ROI with us!",
//   "Top-ranked SEO services!",
//   "Let's build your app!",
//   "Performance marketing experts!",
//   "Get more leads today!",
//   "Digital growth starts here!",
// ];

// // Simple markdown renderer: bold, italic, numbered lists, line breaks
// function renderMarkdown(text: string): string {
//   return text
//     // Escape HTML
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     // Bold **text**
//     .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
//     // Italic *text*
//     .replace(/\*([^*\n]+?)\*/g, "<em>$1</em>")
//     // Numbered list items: "1. text" → styled list item
//     .replace(/^(\d+)\.\s+(.+)$/gm, '<div class="jf-list-item"><span class="jf-list-num">$1.</span><span>$2</span></div>')
//     // Line breaks
//     .replace(/\n/g, "<br/>");
// }

// export default function JohnFloat() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [apiError, setApiError] = useState<string | null>(null);
//   const [speechIndex, setSpeechIndex] = useState(0);
//   const [speechVisible, setSpeechVisible] = useState(true);
//   const bottomRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   useEffect(() => {
//     if (open) setTimeout(() => inputRef.current?.focus(), 150);
//   }, [open]);

//   // Rotate speech bubble text every 3 seconds
//   useEffect(() => {
//     if (open) return;
//     const interval = setInterval(() => {
//       setSpeechVisible(false);
//       setTimeout(() => {
//         setSpeechIndex((prev) => (prev + 1) % SPEECH_TEXTS.length);
//         setSpeechVisible(true);
//       }, 400);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [open]);

//   async function sendMessage(text: string) {
//     if (!text.trim() || loading) return;
//     setApiError(null);
//     const userMsg: Message = { role: "user", content: text.trim() };
//     const updated = [...messages, userMsg];
//     setMessages(updated);
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await fetch("/api/ai", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           messages: updated.map((m) => ({ role: m.role, content: m.content })),
//         }),
//       });

//       // Log raw response for debugging
//       const rawText = await res.text();
//       console.log("[JohnFloat] Raw API response:", rawText);

//       if (!res.ok) {
//         throw new Error(`API error ${res.status}: ${rawText}`);
//       }

//       // Safely parse JSON
//       let data: any;
//       try {
//         data = JSON.parse(rawText);
//       } catch {
//         throw new Error(`Invalid JSON from API: ${rawText.slice(0, 120)}`);
//       }

//       // Try every common response key
//       const reply =
//         data?.reply ??
//         data?.response ??
//         data?.message ??
//         data?.content ??
//         data?.text ??
//         data?.answer ??
//         (Array.isArray(data?.content)
//           ? data.content.find((c: any) => c.type === "text")?.text
//           : null) ??
//         null;

//       if (!reply || typeof reply !== "string" || !reply.trim()) {
//         console.error("[JohnFloat] Unexpected API shape:", JSON.stringify(data));
//         throw new Error(`Unexpected response shape. Keys: ${Object.keys(data || {}).join(", ")}`);
//       }

//       setMessages((prev) => [...prev, { role: "assistant", content: reply.trim() }]);
//     } catch (err: any) {
//       console.error("[JohnFloat] Error:", err);
//       setApiError(err.message || "Unknown error");
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content:
//             "Apologies, I ran into a hiccup! Please try again or reach us directly on WhatsApp.",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
//     if (e.key === "Enter") sendMessage(input);
//   }

//   return (
//     <>
//       <style>{`
//         .jf * { box-sizing: border-box; }

//         /* ── FAB ── */
//         .jf-fab {
//           position: fixed;
//           bottom: 24px;
//           right: 24px;
//           width: 72px;
//           height: 72px;
//           border-radius: 50%;
//           background: linear-gradient(145deg, #1a6fdb, #0d47a1);
//           border: none;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 8px 28px rgba(26,111,219,0.55), 0 0 0 3px rgba(26,111,219,0.15);
//           z-index: 9999;
//           padding: 0;
//           overflow: visible;
//           transition: transform 0.25s ease, box-shadow 0.25s ease;
//         }
//         .jf-fab:hover {
//           transform: scale(1.08) translateY(-3px);
//           box-shadow: 0 14px 40px rgba(26,111,219,0.65), 0 0 0 4px rgba(26,111,219,0.2);
//         }
//         .jf-fab:active { transform: scale(0.95); }

//         .jf-fab-img {
//           width: 80px;
//           height: 80px;
//           object-fit: contain;
//           transition: transform 0.3s ease;
//           margin-top: 6px;
//           border-radius: 0;
//         }
//         .jf-fab:hover .jf-fab-img { transform: scale(1.1) rotate(-5deg); }

//         /* ── SPEECH BUBBLE ── */
//         .jf-speech-wrap {
//           position: absolute;
//           right: calc(100% + 14px);
//           bottom: 50%;
//           transform: translateY(50%);
//           pointer-events: none;
//         }
//         .jf-speech {
//           background: linear-gradient(135deg, #0a2a6e, #1a4faa);
//           color: #e8f1ff;
//           font-size: 12.5px;
//           font-weight: 600;
//           padding: 8px 14px;
//           border-radius: 22px;
//           white-space: nowrap;
//           border: 1px solid rgba(100,160,255,0.35);
//           box-shadow: 0 4px 16px rgba(26,111,219,0.3);
//           transition: opacity 0.35s ease, transform 0.35s ease;
//           letter-spacing: 0.01em;
//         }
//         .jf-speech.hidden {
//           opacity: 0;
//           transform: translateX(-6px);
//         }
//         .jf-speech.visible {
//           opacity: 1;
//           transform: translateX(0);
//         }
//         .jf-speech::after {
//           content: '';
//           position: absolute;
//           left: 100%;
//           top: 50%;
//           transform: translateY(-50%);
//           border: 7px solid transparent;
//           border-left-color: #1a4faa;
//         }

//         /* Pulse ring */
//         @keyframes jfRing {
//           0%   { transform: scale(1);   opacity: 0.55; }
//           100% { transform: scale(1.7); opacity: 0; }
//         }
//         .jf-ring {
//           position: fixed;
//           bottom: 24px;
//           right: 24px;
//           width: 72px;
//           height: 72px;
//           border-radius: 50%;
//           border: 2px solid rgba(26,111,219,0.5);
//           z-index: 9998;
//           animation: jfRing 2.4s ease-out infinite;
//           pointer-events: none;
//         }

//         /* ── PANEL ── */
//         @keyframes jfIn {
//           from { opacity: 0; transform: translateY(22px) scale(0.96); }
//           to   { opacity: 1; transform: translateY(0) scale(1); }
//         }
//         .jf-panel {
//           position: fixed;
//           bottom: 112px;
//           right: 24px;
//           width: 360px;
//           max-height: 560px;
//           background: #040e24;
//           border: 1px solid rgba(26,111,219,0.25);
//           border-radius: 22px;
//           box-shadow:
//             0 28px 80px rgba(0,0,0,0.7),
//             0 0 0 1px rgba(26,111,219,0.08),
//             inset 0 1px 0 rgba(255,255,255,0.05);
//           display: flex;
//           flex-direction: column;
//           overflow: hidden;
//           z-index: 9999;
//           animation: jfIn 0.28s cubic-bezier(0.34,1.56,0.64,1) both;
//         }

//         /* ── HEADER ── */
//         .jf-header {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           padding: 12px 14px;
//           background: linear-gradient(135deg, #0a2a6e, #0d3896);
//           border-bottom: 1px solid rgba(26,111,219,0.2);
//           flex-shrink: 0;
//           position: relative;
//           overflow: hidden;
//         }
//         .jf-header::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
//           pointer-events: none;
//         }
//         .jf-header-mascot {
//           width: 46px;
//           height: 46px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.08);
//           border: 1.5px solid rgba(100,160,255,0.35);
//           overflow: hidden;
//           flex-shrink: 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .jf-header-mascot img {
//           width: 52px;
//           height: 52px;
//           object-fit: contain;
//           margin-top: 4px;
//         }
//         .jf-header-name {
//           font-size: 14px;
//           font-weight: 600;
//           color: #e8f1ff;
//           line-height: 1.2;
//         }
//         .jf-header-sub {
//           font-size: 11px;
//           color: #7eb3ff;
//           display: flex;
//           align-items: center;
//           gap: 5px;
//           margin-top: 2px;
//         }
//         .jf-dot {
//           width: 6px;
//           height: 6px;
//           border-radius: 50%;
//           background: #22c55e;
//           box-shadow: 0 0 6px rgba(34,197,94,0.7);
//           flex-shrink: 0;
//         }
//         .jf-close {
//           margin-left: auto;
//           background: rgba(255,255,255,0.08);
//           border: none;
//           color: #7eb3ff;
//           cursor: pointer;
//           width: 28px;
//           height: 28px;
//           border-radius: 8px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 14px;
//           transition: background 0.2s, color 0.2s;
//           flex-shrink: 0;
//         }
//         .jf-close:hover { background: rgba(255,255,255,0.14); color: #fff; }

//         /* ── MESSAGES ── */
//         .jf-messages {
//           flex: 1;
//           overflow-y: auto;
//           padding: 16px 14px 8px;
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//           scroll-behavior: smooth;
//           background: radial-gradient(ellipse at 20% 0%, rgba(13,55,150,0.12) 0%, transparent 60%);
//         }
//         .jf-messages::-webkit-scrollbar { width: 4px; }
//         .jf-messages::-webkit-scrollbar-thumb { background: rgba(26,111,219,0.3); border-radius: 4px; }

//         /* ── BUBBLES ── */
//         .jf-bubble {
//           max-width: 84%;
//           padding: 10px 14px;
//           font-size: 13px;
//           line-height: 1.65;
//           word-break: break-word;
//           border-radius: 16px;
//         }
//         .jf-bot {
//           background: linear-gradient(135deg, #0d2d6b, #0f3880);
//           border: 1px solid rgba(26,111,219,0.25);
//           color: #d6e8ff;
//           border-bottom-left-radius: 4px;
//           align-self: flex-start;
//         }
//         .jf-bot strong { color: #ffffff; font-weight: 600; }
//         .jf-bot em { color: #a8c8ff; font-style: italic; }
//         .jf-user {
//           background: linear-gradient(135deg, #1a6fdb, #1557b8);
//           color: #fff;
//           border-bottom-right-radius: 4px;
//           align-self: flex-end;
//           box-shadow: 0 4px 12px rgba(26,111,219,0.3);
//         }

//         /* Numbered list items inside bubble */
//         .jf-list-item {
//           display: flex;
//           gap: 8px;
//           margin: 4px 0;
//           align-items: flex-start;
//         }
//         .jf-list-num {
//           color: #5ba3ff;
//           font-weight: 700;
//           flex-shrink: 0;
//           min-width: 18px;
//         }

//         /* ── TYPING ── */
//         @keyframes jfBounce {
//           0%, 80%, 100% { transform: translateY(0); opacity: 0.35; }
//           40% { transform: translateY(-5px); opacity: 1; }
//         }
//         .jf-typing {
//           display: flex;
//           align-items: center;
//           gap: 5px;
//           padding: 10px 14px;
//           background: linear-gradient(135deg, #0d2d6b, #0f3880);
//           border: 1px solid rgba(26,111,219,0.25);
//           border-radius: 16px;
//           border-bottom-left-radius: 4px;
//           align-self: flex-start;
//           width: fit-content;
//         }
//         .jf-typing span {
//           width: 6px;
//           height: 6px;
//           border-radius: 50%;
//           background: #5ba3ff;
//           display: inline-block;
//           animation: jfBounce 1.2s ease-in-out infinite;
//         }
//         .jf-typing span:nth-child(2) { animation-delay: 0.18s; }
//         .jf-typing span:nth-child(3) { animation-delay: 0.36s; }

//         /* ── CHIPS ── */
//         .jf-chips {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 6px;
//           padding: 8px 14px 4px;
//           flex-shrink: 0;
//         }
//         .jf-chip {
//           background: rgba(26,111,219,0.12);
//           border: 1px solid rgba(26,111,219,0.3);
//           color: #7eb3ff;
//           font-size: 11px;
//           padding: 5px 12px;
//           border-radius: 20px;
//           cursor: pointer;
//           white-space: nowrap;
//           transition: all 0.2s;
//         }
//         .jf-chip:hover {
//           background: rgba(26,111,219,0.25);
//           border-color: #1a6fdb;
//           color: #b8d8ff;
//           transform: translateY(-1px);
//         }

//         /* ── ERROR ── */
//         .jf-err {
//           background: rgba(239,68,68,0.08);
//           border-top: 1px solid rgba(239,68,68,0.18);
//           padding: 6px 14px;
//           font-size: 11px;
//           color: #f87171;
//           flex-shrink: 0;
//           font-family: monospace;
//           overflow-x: auto;
//           white-space: nowrap;
//         }

//         /* ── INPUT ROW ── */
//         .jf-input-row {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           padding: 10px 12px 14px;
//           border-top: 1px solid rgba(26,111,219,0.12);
//           flex-shrink: 0;
//           background: rgba(4,14,36,0.8);
//         }
//         .jf-input {
//           flex: 1;
//           background: rgba(13,55,150,0.18);
//           border: 1px solid rgba(26,111,219,0.22);
//           border-radius: 24px;
//           padding: 9px 15px;
//           color: #e8f1ff;
//           font-size: 13px;
//           outline: none;
//           transition: border-color 0.2s, background 0.2s;
//         }
//         .jf-input::placeholder { color: #3a5a8a; }
//         .jf-input:focus {
//           border-color: rgba(26,111,219,0.55);
//           background: rgba(13,55,150,0.28);
//         }
//         .jf-send {
//           width: 38px;
//           height: 38px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #1a6fdb, #0d47a1);
//           border: none;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//           box-shadow: 0 4px 14px rgba(26,111,219,0.45);
//           transition: transform 0.2s, box-shadow 0.2s;
//         }
//         .jf-send:hover { transform: scale(1.08); box-shadow: 0 6px 20px rgba(26,111,219,0.6); }
//         .jf-send:active { transform: scale(0.93); }
//         .jf-send:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

//         /* ── MOBILE ── */
//         @media (max-width: 480px) {
//           .jf-panel { width: calc(100vw - 20px); right: 10px; bottom: 104px; }
//           .jf-fab   { right: 14px; bottom: 14px; }
//           .jf-ring  { right: 14px; bottom: 14px; }
//           .jf-speech { font-size: 11px; padding: 6px 11px; }
//         }
//       `}</style>

//       <div className="jf">
//         {!open && <div className="jf-ring" />}

//         {open && (
//           <div className="jf-panel">
//             <div className="jf-header">
//               <div className="jf-header-mascot">
//                 <img src="/mascot.png" alt="John" />
//               </div>
//               <div>
//                 <div className="jf-header-name">John</div>
//                 <div className="jf-header-sub">
//                   <span className="jf-dot" />
//                   Strategic Advisor · Online
//                 </div>
//               </div>
//               <button className="jf-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
//             </div>

//             <div className="jf-messages">
//               {messages.map((m, i) => (
//                 <div
//                   key={i}
//                   className={`jf-bubble ${m.role === "assistant" ? "jf-bot" : "jf-user"}`}
//                   {...(m.role === "assistant"
//                     ? { dangerouslySetInnerHTML: { __html: renderMarkdown(m.content) } }
//                     : { children: m.content }
//                   )}
//                 />
//               ))}
//               {loading && (
//                 <div className="jf-typing"><span /><span /><span /></div>
//               )}
//               <div ref={bottomRef} />
//             </div>

//             {messages.length <= 1 && (
//               <div className="jf-chips">
//                 {QUICK_CHIPS.map((chip) => (
//                   <button key={chip} className="jf-chip" onClick={() => sendMessage(chip)}>{chip}</button>
//                 ))}
//               </div>
//             )}

//             {apiError && (
//               <div className="jf-err">⚠ {apiError}</div>
//             )}

//             <div className="jf-input-row">
//               <input
//                 ref={inputRef}
//                 className="jf-input"
//                 placeholder="Ask John anything..."
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={handleKey}
//                 disabled={loading}
//               />
//               <button
//                 className="jf-send"
//                 onClick={() => sendMessage(input)}
//                 disabled={loading || !input.trim()}
//                 aria-label="Send"
//               >
//                 <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//                   <path d="M22 2L11 13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         )}

//         <button
//           className="jf-fab"
//           onClick={() => setOpen((v) => !v)}
//           aria-label="Chat with John"
//         >
//           {open ? (
//             <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//               <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
//             </svg>
//           ) : (
//             <>
//               <img src="/mascot.png" alt="Chat" className="jf-fab-img" />
//               <div className="jf-speech-wrap">
//                 <div className={`jf-speech ${speechVisible ? "visible" : "hidden"}`}>
//                   {SPEECH_TEXTS[speechIndex]}
//                 </div>
//               </div>
//             </>
//           )}
//         </button>
//       </div>
//     </>
//   );
// }





"use client";

import { useEffect, useRef, useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_CHIPS = [
  "App Development",
  "Web Development",
  "Performance Marketing",
  "SEO & Analytics",
];

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hello! I am John, your strategic advisor at RenvioTechnologies.\nHow can I help accelerate your business today?",
};

const SPEECH_TEXTS = [
  "Grow your business online! 🚀",
  "Need a stunning website?",
  "Boost your ROI with us!",
  "Top-ranked SEO services!",
  "Let's build your app!",
  "Performance marketing experts!",
  "Get more leads today!",
  "Digital growth starts here!",
];

function renderMarkdown(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*\n]+?)\*/g, "<em>$1</em>")
    .replace(/^(\d+)\.\s+(.+)$/gm, '<div class="jf-list-item"><span class="jf-list-num">$1.</span><span>$2</span></div>')
    .replace(/\n/g, "<br/>");
}

export default function JohnFloat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [speechIndex, setSpeechIndex] = useState(0);
  const [speechVisible, setSpeechVisible] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  useEffect(() => {
    if (open) return;
    const interval = setInterval(() => {
      setSpeechVisible(false);
      setTimeout(() => {
        setSpeechIndex((prev) => (prev + 1) % SPEECH_TEXTS.length);
        setSpeechVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [open]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();

      // API always returns { reply } now — even on errors
      const reply: string = data?.reply || "Something went wrong. Please try again!";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Network issue detected. Please check your connection and try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") sendMessage(input);
  }

  return (
    <>
      <style>{`
        .jf * { box-sizing: border-box; }

        .jf-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(145deg, #1a6fdb, #0d47a1);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 28px rgba(26,111,219,0.55), 0 0 0 3px rgba(26,111,219,0.15);
          z-index: 9999;
          padding: 0;
          overflow: visible;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .jf-fab:hover {
          transform: scale(1.08) translateY(-3px);
          box-shadow: 0 14px 40px rgba(26,111,219,0.65), 0 0 0 4px rgba(26,111,219,0.2);
        }
        .jf-fab:active { transform: scale(0.95); }

        .jf-fab-img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          transition: transform 0.3s ease;
          margin-top: 6px;
          border-radius: 0;
        }
        .jf-fab:hover .jf-fab-img { transform: scale(1.1) rotate(-5deg); }

        .jf-speech-wrap {
          position: absolute;
          right: calc(100% + 14px);
          bottom: 50%;
          transform: translateY(50%);
          pointer-events: none;
        }
        .jf-speech {
          background: linear-gradient(135deg, #0a2a6e, #1a4faa);
          color: #e8f1ff;
          font-size: 12.5px;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 22px;
          white-space: nowrap;
          border: 1px solid rgba(100,160,255,0.35);
          box-shadow: 0 4px 16px rgba(26,111,219,0.3);
          transition: opacity 0.35s ease, transform 0.35s ease;
          letter-spacing: 0.01em;
        }
        .jf-speech.hidden { opacity: 0; transform: translateX(-6px); }
        .jf-speech.visible { opacity: 1; transform: translateX(0); }
        .jf-speech::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 7px solid transparent;
          border-left-color: #1a4faa;
        }

        @keyframes jfRing {
          0%   { transform: scale(1);   opacity: 0.55; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .jf-ring {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          border: 2px solid rgba(26,111,219,0.5);
          z-index: 9998;
          animation: jfRing 2.4s ease-out infinite;
          pointer-events: none;
        }

        @keyframes jfIn {
          from { opacity: 0; transform: translateY(22px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .jf-panel {
          position: fixed;
          bottom: 112px;
          right: 24px;
          width: 360px;
          max-height: 560px;
          background: #040e24;
          border: 1px solid rgba(26,111,219,0.25);
          border-radius: 22px;
          box-shadow: 0 28px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(26,111,219,0.08), inset 0 1px 0 rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 9999;
          animation: jfIn 0.28s cubic-bezier(0.34,1.56,0.64,1) both;
        }

        .jf-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          background: linear-gradient(135deg, #0a2a6e, #0d3896);
          border-bottom: 1px solid rgba(26,111,219,0.2);
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }
        .jf-header::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
          pointer-events: none;
        }
        .jf-header-mascot {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(100,160,255,0.35);
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .jf-header-mascot img { width: 52px; height: 52px; object-fit: contain; margin-top: 4px; }
        .jf-header-name { font-size: 14px; font-weight: 600; color: #e8f1ff; line-height: 1.2; }
        .jf-header-sub { font-size: 11px; color: #7eb3ff; display: flex; align-items: center; gap: 5px; margin-top: 2px; }
        .jf-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 6px rgba(34,197,94,0.7); flex-shrink: 0; }
        .jf-close {
          margin-left: auto;
          background: rgba(255,255,255,0.08);
          border: none;
          color: #7eb3ff;
          cursor: pointer;
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: background 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .jf-close:hover { background: rgba(255,255,255,0.14); color: #fff; }

        .jf-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px 14px 8px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          scroll-behavior: smooth;
          background: radial-gradient(ellipse at 20% 0%, rgba(13,55,150,0.12) 0%, transparent 60%);
        }
        .jf-messages::-webkit-scrollbar { width: 4px; }
        .jf-messages::-webkit-scrollbar-thumb { background: rgba(26,111,219,0.3); border-radius: 4px; }

        .jf-bubble {
          max-width: 84%;
          padding: 10px 14px;
          font-size: 13px;
          line-height: 1.65;
          word-break: break-word;
          border-radius: 16px;
        }
        .jf-bot {
          background: linear-gradient(135deg, #0d2d6b, #0f3880);
          border: 1px solid rgba(26,111,219,0.25);
          color: #d6e8ff;
          border-bottom-left-radius: 4px;
          align-self: flex-start;
        }
        .jf-bot strong { color: #ffffff; font-weight: 600; }
        .jf-bot em { color: #a8c8ff; font-style: italic; }
        .jf-user {
          background: linear-gradient(135deg, #1a6fdb, #1557b8);
          color: #fff;
          border-bottom-right-radius: 4px;
          align-self: flex-end;
          box-shadow: 0 4px 12px rgba(26,111,219,0.3);
        }
        .jf-list-item {
          display: flex;
          gap: 8px;
          margin: 4px 0;
          align-items: flex-start;
        }
        .jf-list-num { color: #5ba3ff; font-weight: 700; flex-shrink: 0; min-width: 18px; }

        @keyframes jfBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.35; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
        .jf-typing {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 10px 14px;
          background: linear-gradient(135deg, #0d2d6b, #0f3880);
          border: 1px solid rgba(26,111,219,0.25);
          border-radius: 16px;
          border-bottom-left-radius: 4px;
          align-self: flex-start;
          width: fit-content;
        }
        .jf-typing span {
          width: 6px; height: 6px; border-radius: 50%; background: #5ba3ff;
          display: inline-block; animation: jfBounce 1.2s ease-in-out infinite;
        }
        .jf-typing span:nth-child(2) { animation-delay: 0.18s; }
        .jf-typing span:nth-child(3) { animation-delay: 0.36s; }

        .jf-chips { display: flex; flex-wrap: wrap; gap: 6px; padding: 8px 14px 4px; flex-shrink: 0; }
        .jf-chip {
          background: rgba(26,111,219,0.12);
          border: 1px solid rgba(26,111,219,0.3);
          color: #7eb3ff;
          font-size: 11px;
          padding: 5px 12px;
          border-radius: 20px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s;
        }
        .jf-chip:hover { background: rgba(26,111,219,0.25); border-color: #1a6fdb; color: #b8d8ff; transform: translateY(-1px); }

        .jf-input-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px 14px;
          border-top: 1px solid rgba(26,111,219,0.12);
          flex-shrink: 0;
          background: rgba(4,14,36,0.8);
        }
        .jf-input {
          flex: 1;
          background: rgba(13,55,150,0.18);
          border: 1px solid rgba(26,111,219,0.22);
          border-radius: 24px;
          padding: 9px 15px;
          color: #e8f1ff;
          font-size: 13px;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .jf-input::placeholder { color: #3a5a8a; }
        .jf-input:focus { border-color: rgba(26,111,219,0.55); background: rgba(13,55,150,0.28); }

        .jf-send {
          width: 38px; height: 38px; border-radius: 50%;
          background: linear-gradient(135deg, #1a6fdb, #0d47a1);
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(26,111,219,0.45);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .jf-send:hover { transform: scale(1.08); box-shadow: 0 6px 20px rgba(26,111,219,0.6); }
        .jf-send:active { transform: scale(0.93); }
        .jf-send:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

        @media (max-width: 480px) {
          .jf-panel { width: calc(100vw - 20px); right: 10px; bottom: 104px; }
          .jf-fab   { right: 14px; bottom: 14px; }
          .jf-ring  { right: 14px; bottom: 14px; }
          .jf-speech { font-size: 11px; padding: 6px 11px; }
        }
      `}</style>

      <div className="jf">
        {!open && <div className="jf-ring" />}

        {open && (
          <div className="jf-panel">
            <div className="jf-header">
              <div className="jf-header-mascot">
                <img src="/mascot.png" alt="John" />
              </div>
              <div>
                <div className="jf-header-name">John</div>
                <div className="jf-header-sub">
                  <span className="jf-dot" />
                  Strategic Advisor · Online
                </div>
              </div>
              <button className="jf-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
            </div>

            <div className="jf-messages">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`jf-bubble ${m.role === "assistant" ? "jf-bot" : "jf-user"}`}
                  {...(m.role === "assistant"
                    ? { dangerouslySetInnerHTML: { __html: renderMarkdown(m.content) } }
                    : { children: m.content }
                  )}
                />
              ))}
              {loading && (
                <div className="jf-typing"><span /><span /><span /></div>
              )}
              <div ref={bottomRef} />
            </div>

            {messages.length <= 1 && (
              <div className="jf-chips">
                {QUICK_CHIPS.map((chip) => (
                  <button key={chip} className="jf-chip" onClick={() => sendMessage(chip)}>{chip}</button>
                ))}
              </div>
            )}

            <div className="jf-input-row">
              <input
                ref={inputRef}
                className="jf-input"
                placeholder="Ask John anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                disabled={loading}
              />
              <button
                className="jf-send"
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                aria-label="Send"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        <button
          className="jf-fab"
          onClick={() => setOpen((v) => !v)}
          aria-label="Chat with John"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <>
              <img src="/mascot.png" alt="Chat" className="jf-fab-img" />
              <div className="jf-speech-wrap">
                <div className={`jf-speech ${speechVisible ? "visible" : "hidden"}`}>
                  {SPEECH_TEXTS[speechIndex]}
                </div>
              </div>
            </>
          )}
        </button>
      </div>
    </>
  );
}