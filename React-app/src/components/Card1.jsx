

import React, { useState } from 'react'
import AspectRatioSelector from './Ratio';
import Presents from './presents';

const Card1 = () => {
  const [quality, setQuality] = useState(50);

  return (
    <div className='flex flex-col h-fit sm:h-fit w-full sm:border sm:border-zinc-800 rounded-2xl p-3 sm:p-5 justify-start sm:justify-between space-y-6 sm:space-y-0 space-y-3 sm:space-y-5'>
      {/* Top Controls Area */}
      <div className='flex flex-col space-y-3 sm:space-y-5'>
        
        {/* Header/Logo Line */}
        <div className="flex justify-between items-center">
          <h1 className='select-none font-orbitron text-[20px] md:text-xl font-bold uppercase tracking-wider text-white'>
            I<span className="text-[#df7829]">Gen</span>
          </h1>
          <button className='px-4 py-2 sm:py-2 sm:px-4 rounded-lg bg-[#df7829] text-white text-sm md:text-xs font-semibold cursor-pointer hover:opacity-90 active:scale-95 transition-all'>
            Toggle Mode
          </button>
        </div>

        {/* Section Title */}
        <div>
          <h2 className='text-white text-2xl pt-3 sm:pt-0 sm:text-3xl font-semibold sm:font-semibold tracking-tight'>Generate Images</h2>
        </div>

        {/* Prompt Input Box */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Your Prompt</label>
          <textarea 
            className='w-full h-[120px] bg-zinc-800/80 border border-zinc-700/60 rounded-xl p-3.5 focus:outline-none focus:border-[#df7829] text-zinc-100 placeholder-zinc-500 text-sm resize-none transition-colors' 
            placeholder="A cybernetic artifact hidden inside a misty mountain shrine..."
            id="prompt-input"
          />
        </div>

        {/* Quality Controls Slider */}
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            <span>Quality Setting</span>
            <span className="text-[#df7829] font-bold font-mono text-sm">{quality}%</span>
          </div>
          
          <input 
            type="range" 
            min="1" 
            max="100" 
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="w-full h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-[#df7829] focus:outline-none"
          />
        </div>

        {/* Child Sub-Selectors */}
        <div className="space-y-4 pt-1">
          <AspectRatioSelector/>
          <Presents/>
        </div>

      </div>

      {/* Primary Action Trigger Button */}
      <div className="pt-5 mt-4 border-t border-zinc-800/80">
        <button className="w-full py-3 bg-[#df7829] hover:bg-[#c9661e] text-white rounded-xl font-bold text-sm tracking-wide transition-all active:scale-[0.99] shadow-lg shadow-[#df7829]/10">
          Generate Masterpiece ✨
        </button>
      </div>

    </div>
  )
}

export default Card1
