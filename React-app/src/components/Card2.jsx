


import React from 'react'



const Card2 = ({ imageUrl, loading, setimages, otherprompt, images, setotherprompt, setImageUrl }) => {
  function handlesave() {
    setimages([...images, { imageUrl, otherprompt }])
    setotherprompt("")
    setImageUrl("")
    console.log(images)
  }
  return (
    <>
      {loading &&
        <div className="relative w-full h-full aspect-square border border-zinc-800 rounded-xl bg-zinc-950 flex flex-col items-center justify-center overflow-hidden shadow-2xl">
          {/* 1. Pulsing Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 animate-pulse" />

          {/* 2. Outer Rotating Laser Ring */}
          <div className="relative w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-t-[#df7829] border-r-transparent border-b-[#df7829]/20 border-l-transparent animate-spin duration-1000" />

            {/* Inner Pulsing Core Icon */}
            <span className="text-2xl animate-pulse drop-shadow-[0_0_8px_rgba(223,120,41,0.5)]">✨</span>
          </div>

          {/* 3. Soft Animated Typography */}
          <div className="mt-4 flex flex-col items-center space-y-1 z-10">
            <span className="text-sm font-semibold tracking-wide text-zinc-200 animate-bounce">
              Creating Masterpiece
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 animate-pulse">
              AI engine thinking...
            </span>
          </div>

          {/* 4. Bottom Horizontal Infinite Processing Line */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-zinc-900 overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#df7829] to-transparent rounded-full animate-[shuttle_1.5s_ease-in-out_infinite]"
              style={{
                animation: 'shuttle 1.5s ease-in-out infinite',
                keyframes: '@keyframes shuttle { 0% { transform: translateX(-100%); } 100% { transform: translateX(300%); } }'
              }}
            />
          </div>
        </div>




      }



      {!imageUrl && !loading && <div
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
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
      </div>}





      {imageUrl && <div className="relative border-zinc-800 rounded-2xl flex flex-col items-center justify-center  text-center group min-h-[400] h-full w-full sm:h-[95vh] relative overflow-hidden">
        <img src={imageUrl} alt="" className='object-cover h-full w-full [image-rendering:crisp-edges] contrast-105 brightness-100 saturated-105 rounded-xl' />
        <button onClick={handlesave} className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-neutral-950 text-white font-semibold text-xs tracking-wider uppercase px-6 py-2.5 rounded-lg border border-[#df7829] shadow-xl cursor-pointer transition-all duration-300 transform ease-out hover:scale-105 hover:-translate-y-1 hover:border-[#df7829] hover:shadow-[#df7829]">
          Add to History
        </button>
      </div>}

    </>
  )
}

export default Card2
