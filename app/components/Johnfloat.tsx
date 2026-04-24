// // "use client";

// // import { useEffect, useRef, useState } from "react";

// // interface Message {
// //   role: "user" | "assistant";
// //   content: string;
// // }

// // const QUICK_CHIPS = [
// //   "App Development",
// //   "Web Development",
// //   "Performance Marketing",
// //   "SEO & Analytics",
// // ];

// // const WELCOME_MESSAGE: Message = {
// //   role: "assistant",
// //   content:
// //     "Hello! I am John, your strategic advisor at RenvioTechnologies.\nHow can I help accelerate your business today?",
// // };

// // export default function JohnFloat() {
// //   const [open, setOpen] = useState(false);
// //   const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
// //   const [input, setInput] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [apiError, setApiError] = useState<string | null>(null);
// //   const bottomRef = useRef<HTMLDivElement>(null);
// //   const inputRef = useRef<HTMLInputElement>(null);

// //   useEffect(() => {
// //     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages, loading]);

// //   useEffect(() => {
// //     if (open) setTimeout(() => inputRef.current?.focus(), 150);
// //   }, [open]);

// //   async function sendMessage(text: string) {
// //     if (!text.trim() || loading) return;

// //     setApiError(null);
// //     const userMsg: Message = { role: "user", content: text.trim() };
// //     const updated = [...messages, userMsg];
// //     setMessages(updated);
// //     setInput("");
// //     setLoading(true);

// //     try {
// //       const res = await fetch("/api/ai", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           messages: updated.map((m) => ({
// //             role: m.role,
// //             content: m.content,
// //           })),
// //         }),
// //       });

// //       if (!res.ok) {
// //         const errorText = await res.text();
// //         console.error("John API error " + res.status + ":", errorText);
// //         throw new Error("API returned " + res.status + ": " + errorText);
// //       }

// //       const data = await res.json();
// //       const reply = data.reply || data.response || data.message || data.content || null;

// //       if (!reply) {
// //         console.error("John API: unexpected response shape", data);
// //         throw new Error("Empty response from API");
// //       }

// //       setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
// //     } catch (err: any) {
// //       console.error("JohnFloat error:", err);
// //       setApiError(err.message || "Unknown error");
// //       setMessages((prev) => [
// //         ...prev,
// //         {
// //           role: "assistant",
// //           content:
// //             "I'm having trouble connecting right now. Please check your API setup or try again in a moment.",
// //         },
// //       ]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
// //     if (e.key === "Enter") sendMessage(input);
// //   }

// //   return (
// //     <>
// //       <style>{`
// //         .john-float-widget * { box-sizing: border-box; }
// //         .john-fab {
// //           position: fixed; bottom: 28px; right: 28px;
// //           width: 64px; height: 64px; border-radius: 50%;
// //           background: linear-gradient(135deg, #6366f1, #a78bfa);
// //           border: none; cursor: pointer;
// //           display: flex; align-items: center; justify-content: center;
// //           box-shadow: 0 8px 32px rgba(99,102,241,0.5);
// //           z-index: 9999;
// //           transition: transform 0.25s ease, box-shadow 0.25s ease;
// //         }
// //         .john-fab:hover { transform: scale(1.08) translateY(-2px); box-shadow: 0 12px 40px rgba(99,102,241,0.65); }
// //         .john-fab:active { transform: scale(0.96); }
// //         .john-fab-letter { font-size: 26px; font-weight: 700; color: white; line-height: 1; user-select: none; }
// //         @keyframes fabRing {
// //           0%   { transform: scale(1);   opacity: 0.5; }
// //           100% { transform: scale(1.6); opacity: 0;   }
// //         }
// //         .john-fab-ring {
// //           position: fixed; bottom: 28px; right: 28px;
// //           width: 64px; height: 64px; border-radius: 50%;
// //           border: 2px solid rgba(99,102,241,0.5);
// //           z-index: 9998;
// //           animation: fabRing 2.5s ease-out infinite;
// //           pointer-events: none;
// //         }
// //         @keyframes panelIn {
// //           from { opacity: 0; transform: translateY(20px) scale(0.97); }
// //           to   { opacity: 1; transform: translateY(0) scale(1); }
// //         }
// //         .john-panel {
// //           position: fixed; bottom: 108px; right: 28px;
// //           width: 360px; max-height: 540px;
// //           background: #0d1117;
// //           border: 1px solid rgba(99,102,241,0.2);
// //           border-radius: 20px;
// //           box-shadow: 0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,102,241,0.1);
// //           display: flex; flex-direction: column; overflow: hidden;
// //           z-index: 9999;
// //           animation: panelIn 0.25s ease both;
// //         }
// //         .john-panel-header {
// //           display: flex; align-items: center; gap: 10px;
// //           padding: 14px 16px;
// //           background: #111827;
// //           border-bottom: 1px solid rgba(99,102,241,0.15);
// //           flex-shrink: 0;
// //         }
// //         .john-header-avatar {
// //           width: 38px; height: 38px; border-radius: 50%;
// //           background: linear-gradient(135deg, #4f46e5, #7c3aed);
// //           display: flex; align-items: center; justify-content: center;
// //           font-size: 16px; font-weight: 700; color: white;
// //           flex-shrink: 0; border: 1.5px solid rgba(99,102,241,0.4);
// //         }
// //         .john-header-name { font-size: 14px; font-weight: 600; color: #f1f5f9; line-height: 1.2; }
// //         .john-header-sub { font-size: 11px; color: #6366f1; display: flex; align-items: center; gap: 5px; margin-top: 1px; }
// //         .john-online-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; flex-shrink: 0; }
// //         .john-close-btn {
// //           margin-left: auto; background: none; border: none; color: #64748b;
// //           cursor: pointer; font-size: 18px; line-height: 1; padding: 4px;
// //           border-radius: 6px; transition: color 0.2s, background 0.2s;
// //           display: flex; align-items: center; justify-content: center;
// //         }
// //         .john-close-btn:hover { color: #f1f5f9; background: rgba(255,255,255,0.06); }
// //         .john-messages {
// //           flex: 1; overflow-y: auto; padding: 16px 14px 8px;
// //           display: flex; flex-direction: column; gap: 12px; scroll-behavior: smooth;
// //         }
// //         .john-messages::-webkit-scrollbar { width: 4px; }
// //         .john-messages::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 4px; }
// //         .john-bubble {
// //           max-width: 85%; padding: 10px 13px; border-radius: 14px;
// //           font-size: 13px; line-height: 1.6; white-space: pre-wrap; word-break: break-word;
// //         }
// //         .john-bubble-assistant {
// //           background: #1e1b4b; border: 1px solid rgba(99,102,241,0.2);
// //           color: #e2e8f0; border-bottom-left-radius: 4px; align-self: flex-start;
// //         }
// //         .john-bubble-user {
// //           background: linear-gradient(135deg, #4f46e5, #7c3aed);
// //           color: white; border-bottom-right-radius: 4px; align-self: flex-end;
// //         }
// //         .john-error-banner {
// //           background: rgba(239,68,68,0.1); border-top: 1px solid rgba(239,68,68,0.2);
// //           padding: 6px 14px; font-size: 11px; color: #f87171;
// //           flex-shrink: 0; font-family: monospace; overflow-x: auto; white-space: nowrap;
// //         }
// //         @keyframes dotBounce {
// //           0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
// //           40%            { transform: translateY(-5px); opacity: 1; }
// //         }
// //         .john-typing {
// //           display: flex; align-items: center; gap: 5px;
// //           padding: 10px 13px; background: #1e1b4b;
// //           border: 1px solid rgba(99,102,241,0.2);
// //           border-radius: 14px; border-bottom-left-radius: 4px;
// //           align-self: flex-start; width: fit-content;
// //         }
// //         .john-typing span {
// //           width: 6px; height: 6px; border-radius: 50%; background: #6366f1;
// //           display: inline-block; animation: dotBounce 1.2s ease-in-out infinite;
// //         }
// //         .john-typing span:nth-child(2) { animation-delay: 0.2s; }
// //         .john-typing span:nth-child(3) { animation-delay: 0.4s; }
// //         .john-chips { display: flex; flex-wrap: wrap; gap: 6px; padding: 8px 14px; flex-shrink: 0; }
// //         .john-chip {
// //           background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.25);
// //           color: #a78bfa; font-size: 11px; padding: 5px 11px; border-radius: 20px;
// //           cursor: pointer; transition: background 0.2s, border-color 0.2s, color 0.2s; white-space: nowrap;
// //         }
// //         .john-chip:hover { background: rgba(99,102,241,0.22); border-color: #6366f1; color: #c4b5fd; }
// //         .john-input-row {
// //           display: flex; align-items: center; gap: 8px;
// //           padding: 10px 12px 14px;
// //           border-top: 1px solid rgba(99,102,241,0.12); flex-shrink: 0;
// //         }
// //         .john-input {
// //           flex: 1; background: #1a1f2e; border: 1px solid rgba(99,102,241,0.2);
// //           border-radius: 24px; padding: 9px 14px; color: #f1f5f9;
// //           font-size: 13px; outline: none; transition: border-color 0.2s;
// //         }
// //         .john-input::placeholder { color: #475569; }
// //         .john-input:focus { border-color: rgba(99,102,241,0.5); }
// //         .john-send-btn {
// //           width: 36px; height: 36px; border-radius: 50%;
// //           background: linear-gradient(135deg, #6366f1, #a78bfa);
// //           border: none; cursor: pointer;
// //           display: flex; align-items: center; justify-content: center;
// //           flex-shrink: 0; transition: transform 0.2s, box-shadow 0.2s;
// //           box-shadow: 0 4px 12px rgba(99,102,241,0.4);
// //         }
// //         .john-send-btn:hover { transform: scale(1.08); box-shadow: 0 6px 18px rgba(99,102,241,0.55); }
// //         .john-send-btn:active { transform: scale(0.94); }
// //         .john-send-btn:disabled { opacity: 0.45; cursor: not-allowed; transform: none; }
// //         @media (max-width: 480px) {
// //           .john-panel { width: calc(100vw - 24px); right: 12px; bottom: 96px; }
// //           .john-fab { right: 16px; bottom: 16px; }
// //           .john-fab-ring { right: 16px; bottom: 16px; }
// //         }
// //       `}</style>

// //       <div className="john-float-widget">
// //         {!open && <div className="john-fab-ring" />}

// //         {open && (
// //           <div className="john-panel">
// //             <div className="john-panel-header">
// //               <div className="john-header-avatar">J</div>
// //               <div>
// //                 <div className="john-header-name">John</div>
// //                 <div className="john-header-sub">
// //                   <span className="john-online-dot" />
// //                   Strategic Advisor · Online
// //                 </div>
// //               </div>
// //               <button className="john-close-btn" onClick={() => setOpen(false)} aria-label="Close">✕</button>
// //             </div>

// //             <div className="john-messages">
// //               {messages.map((m, i) => (
// //                 <div key={i} className={"john-bubble " + (m.role === "assistant" ? "john-bubble-assistant" : "john-bubble-user")}>
// //                   {m.content}
// //                 </div>
// //               ))}
// //               {loading && (
// //                 <div className="john-typing"><span /><span /><span /></div>
// //               )}
// //               <div ref={bottomRef} />
// //             </div>

// //             {messages.length <= 1 && (
// //               <div className="john-chips">
// //                 {QUICK_CHIPS.map((chip) => (
// //                   <button key={chip} className="john-chip" onClick={() => sendMessage(chip)}>{chip}</button>
// //                 ))}
// //               </div>
// //             )}

// //             {apiError && (
// //               <div className="john-error-banner">⚠ {apiError}</div>
// //             )}

// //             <div className="john-input-row">
// //               <input
// //                 ref={inputRef}
// //                 className="john-input"
// //                 placeholder="Ask John anything..."
// //                 value={input}
// //                 onChange={(e) => setInput(e.target.value)}
// //                 onKeyDown={handleKey}
// //                 disabled={loading}
// //               />
// //               <button
// //                 className="john-send-btn"
// //                 onClick={() => sendMessage(input)}
// //                 disabled={loading || !input.trim()}
// //                 aria-label="Send"
// //               >
// //                 <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
// //                   <path d="M22 2L11 13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
// //                   <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
// //                 </svg>
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         <button className="john-fab" onClick={() => setOpen((v) => !v)} aria-label="Chat with John">
// //           {open ? (
// //             <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
// //               <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
// //             </svg>
// //           ) : (
// //             <span className="john-fab-letter">J</span>
// //           )}
// //         </button>
// //       </div>
// //     </>
// //   );
// // }




// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

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

// export default function JohnFloat() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [apiError, setApiError] = useState<string | null>(null);
//   const bottomRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   useEffect(() => {
//     if (open) setTimeout(() => inputRef.current?.focus(), 150);
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

//       if (!res.ok) {
//         const errorText = await res.text();
//         throw new Error(`API returned ${res.status}: ${errorText}`);
//       }

//       const data = await res.json();
//       const reply = data.reply || data.response || data.message || data.content || null;
//       if (!reply) throw new Error("Empty response from API");

//       setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
//     } catch (err: any) {
//       setApiError(err.message || "Unknown error");
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: "I'm having trouble connecting right now. Please try again in a moment." },
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
//           overflow: hidden;
//           transition: transform 0.25s ease, box-shadow 0.25s ease;
//         }
//         .jf-fab:hover {
//           transform: scale(1.08) translateY(-3px);
//           box-shadow: 0 14px 40px rgba(26,111,219,0.65), 0 0 0 4px rgba(26,111,219,0.2);
//         }
//         .jf-fab:active { transform: scale(0.95); }

//         /* Mascot inside FAB */
//         .jf-fab-img {
//           width: 80px;
//           height: 80px;
//           object-fit: contain;
//           transition: transform 0.3s ease;
//           margin-top: 6px;
//         }
//         .jf-fab:hover .jf-fab-img { transform: scale(1.1) rotate(-5deg); }

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
//           to   { opacity: 1; transform: translateY(0)    scale(1); }
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
//           white-space: pre-wrap;
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
//         .jf-user {
//           background: linear-gradient(135deg, #1a6fdb, #1557b8);
//           color: #fff;
//           border-bottom-right-radius: 4px;
//           align-self: flex-end;
//           box-shadow: 0 4px 12px rgba(26,111,219,0.3);
//         }

//         /* ── TYPING ── */
//         @keyframes jfBounce {
//           0%, 80%, 100% { transform: translateY(0);   opacity: 0.35; }
//           40%            { transform: translateY(-5px); opacity: 1; }
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
//         }
//       `}</style>

//       <div className="jf">
//         {/* Pulse ring — only when closed */}
//         {!open && <div className="jf-ring" />}

//         {/* ── CHAT PANEL ── */}
//         {open && (
//           <div className="jf-panel">

//             {/* Header */}
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

//             {/* Messages */}
//             <div className="jf-messages">
//               {messages.map((m, i) => (
//                 <div key={i} className={`jf-bubble ${m.role === "assistant" ? "jf-bot" : "jf-user"}`}>
//                   {m.content}
//                 </div>
//               ))}
//               {loading && (
//                 <div className="jf-typing"><span /><span /><span /></div>
//               )}
//               <div ref={bottomRef} />
//             </div>

//             {/* Quick chips — first open only */}
//             {messages.length <= 1 && (
//               <div className="jf-chips">
//                 {QUICK_CHIPS.map((chip) => (
//                   <button key={chip} className="jf-chip" onClick={() => sendMessage(chip)}>{chip}</button>
//                 ))}
//               </div>
//             )}

//             {/* Error banner */}
//             {apiError && <div className="jf-err">⚠ {apiError}</div>}

//             {/* Input */}
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

//         {/* ── FAB ── */}
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
//             <img src="/mascot.png" alt="Chat" className="jf-fab-img" />
//           )}
//         </button>
//       </div>
//     </>
//   );
// }










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

// export default function JohnFloat() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [apiError, setApiError] = useState<string | null>(null);
//   const bottomRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   useEffect(() => {
//     if (open) setTimeout(() => inputRef.current?.focus(), 150);
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

//       if (!res.ok) {
//         const errorText = await res.text();
//         throw new Error(`API returned ${res.status}: ${errorText}`);
//       }

//       const data = await res.json();
//       const reply = data.reply || data.response || data.message || data.content || null;
//       if (!reply) throw new Error("Empty response from API");

//       setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
//     } catch (err: any) {
//       setApiError(err.message || "Unknown error");
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: "I'm having trouble connecting right now. Please try again in a moment." },
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

//         /* Mascot inside FAB */
//         .jf-fab-img {
//           width: 80px;
//           height: 80px;
//           object-fit: contain;
//           transition: transform 0.3s ease;
//           margin-top: 6px;
//           border-radius: 0;
//         }
//         .jf-fab:hover .jf-fab-img { transform: scale(1.1) rotate(-5deg); }

//         /* Speech bubble */
//         .jf-speech {
//           position: absolute;
//           right: calc(100% + 12px);
//           bottom: 50%;
//           transform: translateY(50%);
//           background: #0a2a6e;
//           color: #e8f1ff;
//           font-size: 12px;
//           font-weight: 500;
//           padding: 7px 13px;
//           border-radius: 20px;
//           white-space: nowrap;
//           border: 1px solid rgba(26,111,219,0.4);
//           pointer-events: none;
//           animation: jfSpeechPulse 3s ease-in-out infinite;
//           box-shadow: 0 2px 10px rgba(26,111,219,0.25);
//         }
//         .jf-speech::after {
//           content: '';
//           position: absolute;
//           left: 100%;
//           top: 50%;
//           transform: translateY(-50%);
//           border: 6px solid transparent;
//           border-left-color: #0a2a6e;
//         }
//         @keyframes jfSpeechPulse {
//           0%, 100% { opacity: 1; transform: translateY(50%) scale(1); }
//           50% { opacity: 0.75; transform: translateY(50%) scale(0.97); }
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
//           to   { opacity: 1; transform: translateY(0)    scale(1); }
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
//           white-space: pre-wrap;
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
//         .jf-user {
//           background: linear-gradient(135deg, #1a6fdb, #1557b8);
//           color: #fff;
//           border-bottom-right-radius: 4px;
//           align-self: flex-end;
//           box-shadow: 0 4px 12px rgba(26,111,219,0.3);
//         }

//         /* ── TYPING ── */
//         @keyframes jfBounce {
//           0%, 80%, 100% { transform: translateY(0);   opacity: 0.35; }
//           40%            { transform: translateY(-5px); opacity: 1; }
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
//           .jf-speech { font-size: 11px; padding: 5px 10px; }
//         }
//       `}</style>

//       <div className="jf">
//         {/* Pulse ring — only when closed */}
//         {!open && <div className="jf-ring" />}

//         {/* ── CHAT PANEL ── */}
//         {open && (
//           <div className="jf-panel">

//             {/* Header */}
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

//             {/* Messages */}
//             <div className="jf-messages">
//               {messages.map((m, i) => (
//                 <div key={i} className={`jf-bubble ${m.role === "assistant" ? "jf-bot" : "jf-user"}`}>
//                   {m.content}
//                 </div>
//               ))}
//               {loading && (
//                 <div className="jf-typing"><span /><span /><span /></div>
//               )}
//               <div ref={bottomRef} />
//             </div>

//             {/* Quick chips — first open only */}
//             {messages.length <= 1 && (
//               <div className="jf-chips">
//                 {QUICK_CHIPS.map((chip) => (
//                   <button key={chip} className="jf-chip" onClick={() => sendMessage(chip)}>{chip}</button>
//                 ))}
//               </div>
//             )}

//             {/* Error banner */}
//             {apiError && <div className="jf-err">⚠ {apiError}</div>}

//             {/* Input */}
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

//         {/* ── FAB ── */}
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
//               <div className="jf-speech">Chat with me!</div>
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

export default function JohnFloat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
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

  // Rotate speech bubble text every 3 seconds
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
    setApiError(null);
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

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`API returned ${res.status}: ${errorText}`);
      }

      const data = await res.json();
      const reply = data.reply || data.response || data.message || data.content || null;
      if (!reply) throw new Error("Empty response from API");

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err: any) {
      setApiError(err.message || "Unknown error");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm having trouble connecting right now. Please try again in a moment.",
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

        /* ── FAB ── */
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

        /* ── SPEECH BUBBLE ── */
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
        .jf-speech.hidden {
          opacity: 0;
          transform: translateX(-6px);
        }
        .jf-speech.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .jf-speech::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 7px solid transparent;
          border-left-color: #1a4faa;
        }

        /* Pulse ring */
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

        /* ── PANEL ── */
        @keyframes jfIn {
          from { opacity: 0; transform: translateY(22px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
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
          box-shadow:
            0 28px 80px rgba(0,0,0,0.7),
            0 0 0 1px rgba(26,111,219,0.08),
            inset 0 1px 0 rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 9999;
          animation: jfIn 0.28s cubic-bezier(0.34,1.56,0.64,1) both;
        }

        /* ── HEADER ── */
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
        .jf-header-mascot img {
          width: 52px;
          height: 52px;
          object-fit: contain;
          margin-top: 4px;
        }
        .jf-header-name {
          font-size: 14px;
          font-weight: 600;
          color: #e8f1ff;
          line-height: 1.2;
        }
        .jf-header-sub {
          font-size: 11px;
          color: #7eb3ff;
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 2px;
        }
        .jf-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 6px rgba(34,197,94,0.7);
          flex-shrink: 0;
        }
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

        /* ── MESSAGES ── */
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

        /* ── BUBBLES ── */
        .jf-bubble {
          max-width: 84%;
          padding: 10px 14px;
          font-size: 13px;
          line-height: 1.65;
          white-space: pre-wrap;
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
        .jf-user {
          background: linear-gradient(135deg, #1a6fdb, #1557b8);
          color: #fff;
          border-bottom-right-radius: 4px;
          align-self: flex-end;
          box-shadow: 0 4px 12px rgba(26,111,219,0.3);
        }

        /* ── TYPING ── */
        @keyframes jfBounce {
          0%, 80%, 100% { transform: translateY(0);   opacity: 0.35; }
          40%            { transform: translateY(-5px); opacity: 1; }
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
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #5ba3ff;
          display: inline-block;
          animation: jfBounce 1.2s ease-in-out infinite;
        }
        .jf-typing span:nth-child(2) { animation-delay: 0.18s; }
        .jf-typing span:nth-child(3) { animation-delay: 0.36s; }

        /* ── CHIPS ── */
        .jf-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 8px 14px 4px;
          flex-shrink: 0;
        }
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
        .jf-chip:hover {
          background: rgba(26,111,219,0.25);
          border-color: #1a6fdb;
          color: #b8d8ff;
          transform: translateY(-1px);
        }

        /* ── ERROR ── */
        .jf-err {
          background: rgba(239,68,68,0.08);
          border-top: 1px solid rgba(239,68,68,0.18);
          padding: 6px 14px;
          font-size: 11px;
          color: #f87171;
          flex-shrink: 0;
          font-family: monospace;
          overflow-x: auto;
          white-space: nowrap;
        }

        /* ── INPUT ROW ── */
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
        .jf-input:focus {
          border-color: rgba(26,111,219,0.55);
          background: rgba(13,55,150,0.28);
        }
        .jf-send {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a6fdb, #0d47a1);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(26,111,219,0.45);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .jf-send:hover { transform: scale(1.08); box-shadow: 0 6px 20px rgba(26,111,219,0.6); }
        .jf-send:active { transform: scale(0.93); }
        .jf-send:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

        /* ── MOBILE ── */
        @media (max-width: 480px) {
          .jf-panel { width: calc(100vw - 20px); right: 10px; bottom: 104px; }
          .jf-fab   { right: 14px; bottom: 14px; }
          .jf-ring  { right: 14px; bottom: 14px; }
          .jf-speech { font-size: 11px; padding: 6px 11px; }
        }
      `}</style>

      <div className="jf">
        {/* Pulse ring — only when closed */}
        {!open && <div className="jf-ring" />}

        {/* ── CHAT PANEL ── */}
        {open && (
          <div className="jf-panel">
            {/* Header */}
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

            {/* Messages */}
            <div className="jf-messages">
              {messages.map((m, i) => (
                <div key={i} className={`jf-bubble ${m.role === "assistant" ? "jf-bot" : "jf-user"}`}>
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="jf-typing"><span /><span /><span /></div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick chips — first open only */}
            {messages.length <= 1 && (
              <div className="jf-chips">
                {QUICK_CHIPS.map((chip) => (
                  <button key={chip} className="jf-chip" onClick={() => sendMessage(chip)}>{chip}</button>
                ))}
              </div>
            )}

            {/* Error banner */}
            {apiError && <div className="jf-err">⚠ {apiError}</div>}

            {/* Input */}
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

        {/* ── FAB ── */}
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
              {/* Rotating speech bubble */}
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