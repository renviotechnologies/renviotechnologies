// // 'use client';

// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { MessageCircle } from 'lucide-react';

// // export default function WhatsAppFloat() {
// //     const handleClick = () => {
// //         window.open('https://wa.me/918527664228?text=Hi! I would like to know more about your services.', '_blank');
// //     };

// //     return (
// //         <motion.button
// //             onClick={handleClick}
// //             initial={{ scale: 0 }}
// //             animate={{ scale: 1 }}
// //             whileHover={{ scale: 1.1 }}
// //             whileTap={{ scale: 0.9 }}
// //             className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors duration-300 group"
// //             aria-label="Chat on WhatsApp"
// //         >
// //             {/* Pulse animation */}
// //             <motion.div
// //                 className="absolute inset-0 bg-green-500 rounded-full"
// //                 animate={{
// //                     scale: [1, 1.5, 1],
// //                     opacity: [0.5, 0, 0.5],
// //                 }}
// //                 transition={{
// //                     duration: 2,
// //                     repeat: Infinity,
// //                     ease: 'easeInOut'
// //                 }}
// //             />

// //             {/* WhatsApp Icon */}
// //             <MessageCircle className="w-8 h-8 relative z-10" />

// //             {/* Notification badge */}
// //             <motion.div
// //                 initial={{ scale: 0 }}
// //                 animate={{ scale: 1 }}
// //                 transition={{ delay: 0.5 }}
// //                 className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
// //             >
// //                 1
// //             </motion.div>

// //             {/* Tooltip on hover */}
// //             <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
// //                 <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
// //                     Chat with us on WhatsApp
// //                     <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 transform rotate-45 -mt-1" />
// //                 </div>
// //             </div>
// //         </motion.button>
// //     );
// // }




// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// // WhatsApp SVG icon (official shape, no external dep needed)
// function WhatsAppIcon() {
//   return (
//     <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path
//         d="M16 3C9.373 3 4 8.373 4 15c0 2.385.68 4.61 1.857 6.496L4 29l7.733-1.827A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3z"
//         fill="white"
//       />
//       <path
//         d="M16 5.5c-5.238 0-9.5 4.262-9.5 9.5 0 2.1.685 4.044 1.845 5.62l-1.19 4.33 4.468-1.156A9.455 9.455 0 0016 24.5c5.238 0 9.5-4.262 9.5-9.5S21.238 5.5 16 5.5zm4.93 13.07c-.207.578-1.21 1.106-1.654 1.144-.444.038-.862.21-2.9-.605-2.43-.983-3.97-3.46-4.09-3.62-.12-.16-.98-1.305-.98-2.49s.617-1.767.836-2.01c.218-.24.476-.3.635-.3l.457.009c.147.006.344-.056.538.41.2.478.68 1.652.74 1.773.06.12.1.26.02.42-.08.16-.12.26-.238.4-.12.14-.252.312-.36.42-.12.12-.244.25-.105.49.14.24.62 1.02 1.33 1.652.914.813 1.685 1.064 1.924 1.183.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.578-.147 1.155z"
//         fill="#25D366"
//       />
//     </svg>
//   );
// }

// export default function WhatsAppFloat() {
//   const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918527664228";
//   const message = encodeURIComponent("Hi! I would like to know more about your services.");
//   const waUrl = `https://wa.me/${phone}?text=${message}`;

//   const handleClick = () => {
//     window.open(waUrl, "_blank");
//   };

//   return (
//     <motion.button
//       onClick={handleClick}
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       // Positioned above JohnFloat (bottom-24 = 96px, JohnFloat is at bottom-6 = 24px)
//       className="fixed z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebe5d] transition-colors duration-300 group"
//       style={{ bottom: "104px", right: "24px" }}
//       aria-label="Chat on WhatsApp"
//     >
//       {/* Pulse ring */}
//       <motion.div
//         className="absolute inset-0 bg-[#25D366] rounded-full"
//         animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
//         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Icon */}
//       <div className="relative z-10">
//         <WhatsAppIcon />
//       </div>

//       {/* Notification badge */}
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.5 }}
//         className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
//       >
//         1
//       </motion.div>

//       {/* Tooltip */}
//       <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//         <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
//           Chat with us on WhatsApp
//           <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 transform rotate-45 -mt-1" />
//         </div>
//       </div>
//     </motion.button>
//   );
// }








// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// function WhatsAppIcon() {
//   return (
//     <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path
//         d="M16 3C9.373 3 4 8.373 4 15c0 2.385.68 4.61 1.857 6.496L4 29l7.733-1.827A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3z"
//         fill="white"
//       />
//       <path
//         d="M16 5.5c-5.238 0-9.5 4.262-9.5 9.5 0 2.1.685 4.044 1.845 5.62l-1.19 4.33 4.468-1.156A9.455 9.455 0 0016 24.5c5.238 0 9.5-4.262 9.5-9.5S21.238 5.5 16 5.5zm4.93 13.07c-.207.578-1.21 1.106-1.654 1.144-.444.038-.862.21-2.9-.605-2.43-.983-3.97-3.46-4.09-3.62-.12-.16-.98-1.305-.98-2.49s.617-1.767.836-2.01c.218-.24.476-.3.635-.3l.457.009c.147.006.344-.056.538.41.2.478.68 1.652.74 1.773.06.12.1.26.02.42-.08.16-.12.26-.238.4-.12.14-.252.312-.36.42-.12.12-.244.25-.105.49.14.24.62 1.02 1.33 1.652.914.813 1.685 1.064 1.924 1.183.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.578-.147 1.155z"
//         fill="#25D366"
//       />
//     </svg>
//   );
// }

// export default function WhatsAppFloat() {
//   const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918527664228";
//   const message = encodeURIComponent("Hi! I would like to know more about your services.");
//   const waUrl = `https://wa.me/${phone}?text=${message}`;

//   const handleClick = () => {
//     window.open(waUrl, "_blank");
//   };

//   return (
//     <motion.button
//       onClick={handleClick}
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       className="fixed z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebe5d] transition-colors duration-300 group"
//       style={{ bottom: "112px", right: "24px" }}
//       aria-label="Chat on WhatsApp"
//     >
//       {/* Pulse ring */}
//       <motion.div
//         className="absolute inset-0 bg-[#25D366] rounded-full"
//         animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
//         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Icon */}
//       <div className="relative z-10">
//         <WhatsAppIcon />
//       </div>

//       {/* Notification badge */}
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.5 }}
//         className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
//       >
//         1
//       </motion.div>

//       {/* Tooltip on hover */}
//       <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//         <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
//           Chat with us on WhatsApp
//           <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 transform rotate-45 -mt-1" />
//         </div>
//       </div>
//     </motion.button>
//   );
// }







'use client';

import React from 'react';
import { motion } from 'framer-motion';

function WhatsAppIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 3C9.373 3 4 8.373 4 15c0 2.385.68 4.61 1.857 6.496L4 29l7.733-1.827A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3z"
        fill="white"
      />
      <path
        d="M16 5.5c-5.238 0-9.5 4.262-9.5 9.5 0 2.1.685 4.044 1.845 5.62l-1.19 4.33 4.468-1.156A9.455 9.455 0 0016 24.5c5.238 0 9.5-4.262 9.5-9.5S21.238 5.5 16 5.5zm4.93 13.07c-.207.578-1.21 1.106-1.654 1.144-.444.038-.862.21-2.9-.605-2.43-.983-3.97-3.46-4.09-3.62-.12-.16-.98-1.305-.98-2.49s.617-1.767.836-2.01c.218-.24.476-.3.635-.3l.457.009c.147.006.344-.056.538.41.2.478.68 1.652.74 1.773.06.12.1.26.02.42-.08.16-.12.26-.238.4-.12.14-.252.312-.36.42-.12.12-.244.25-.105.49.14.24.62 1.02 1.33 1.652.914.813 1.685 1.064 1.924 1.183.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.578-.147 1.155z"
        fill="#25D366"
      />
    </svg>
  );
}

export default function WhatsAppFloat() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917489951514";
  const message = encodeURIComponent("Hi! I would like to know more about your services.");
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  const handleClick = () => {
    window.open(waUrl, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed z-50 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#1ebe5d] transition-colors duration-300 group"
      style={{ bottom: "112px", right: "24px", padding: "14px" }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 bg-[#25D366] rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Icon */}
      <div className="relative z-10">
        <WhatsAppIcon />
      </div>

      {/* Notification badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center z-20"
      >
        1
      </motion.div>

      {/* Tooltip on hover */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
        <div className="bg-gray-900 text-white text-xs font-medium px-3 py-2 rounded-xl whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 transform rotate-45 -mt-1" />
        </div>
      </div>
    </motion.button>
  );
}