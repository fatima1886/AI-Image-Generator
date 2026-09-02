// import React from 'react'

// const Card2 = () => {
//   return (
//    <div
//     style={{ backgroundImage: `url(/bg-img.jpg)` }}
//     className=" border border-zinc-800 rounded-2xl flex flex-col items-center justify-center p-6 text-center group min-h-[400px] sm:h-full">
//   {/* Inner Dotted Art Canvas Box */}
//   <div className="w-full h-full border-2 border-dashed border-zinc-800/80 rounded-xl flex flex-col items-center justify-center p-8 transition-colors duration-300 group-hover:border-zinc-700/60 bg-[#161616]/30">
    
//     {/* Minimalist Image Graphic Icon */}
//     <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-zinc-600 mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:text-zinc-500 shadow-inner">
//       <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://w3.org">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
//       </svg>
//     </div>

//     {/* Text Description */}
//     <h3 className="text-zinc-400 font-semibold text-sm tracking-wide mb-1">
//       Ready to Create
//     </h3>
//     <p className="text-zinc-600 text-xs max-w-[220px] leading-relaxed">
//       Type a prompt in the control panel and click <span className="text-[#df7829]/80 font-medium">Generate</span> to view your art canvas.
//     </p>

//   </div>
// </div>

//   )
// }

// export default Card2



import React from 'react'

const Card2 = () => {
  return (
    <div
      style={{ backgroundImage: `url(/bg-new.jpg)`, objectFit: "cover", objectPosition: "left" }}
      /* FIXED: Added bg-cover, bg-center, bg-no-repeat, and relative position utilities */
      className=" border border-zinc-800 rounded-2xl flex flex-col items-center justify-center p-6 text-center group min-h-[400px] sm:h-[95vh] relative overflow-hidden bg-cover bg-center bg-no-repeat"
    >
      {/* ADDED: A smooth, dark gradient overlay so your icons/text remain highly readable over the background image */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/95 via-[#161616]/60 to-transparent z-0"></div> */}
<div className="absolute inset-0 bg-gradient-to-t from-[#161616]/95 via-[#161616]/40 to-[#df7829]/25 z-0 mix-blend-screen"></div>
      {/* Inner Dotted Art Canvas Box (FIXED: Added z-10 so it sits perfectly above the overlay) */}
      <div className="w-full h-full border-2 border-dashed border-zinc-800/80 rounded-xl flex flex-col items-center justify-center p-8 transition-colors duration-300 group-hover:border-zinc-700/60 bg-[#161616]/30 backdrop-blur-[1px] z-10">
        
        {/* Minimalist Image Graphic Icon */}
        <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 mb-4 text-[#df7829]  animate-pulse [animation-duration-3]">
          {/* FIXED: Restored the complete xmlns string address */}
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://w3.org">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </div>

        {/* Text Description */}
        <h3 className="text-zinc-300 font-semibold text-sm tracking-wide mb-1 uppercase font-orbitron">
          Ready to Create
        </h3>
        <p className="text-zinc-400 text-xs max-w-[220px] leading-relaxed">
          Type a prompt in the control panel and click <span className="text-[#df7829] font-medium">Generate</span> to view your art canvas.
        </p>

      </div>
    </div>
  )
}

export default Card2
