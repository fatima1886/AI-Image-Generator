// import React,{useState} from 'react'

// const Presents = () => {
// const [SelectedStyle, setSelectedStyle] = useState("")
//     const stylePresets = ["none","elegent","wonderfull"]
//   return (
//     <div className="flex flex-col space-y-2 mt-6">
//   <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Art Style</span>
//   <div className="flex flex-wrap gap-2">
//     {stylePresets.map((style) => (
//       <button
//         key={style}
      
//         onClick={() => setSelectedStyle(style)}
//         className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all border cursor-pointer ${
//           SelectedStyle === style 
//             ? 'bg-purple-600 text-white border-purple-500 shadow-md shadow-purple-600/30' 
//             : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:border-zinc-500'
//         }`}
//       >
//         {style}
//       </button>
//     ))}
//   </div>
// </div>

//   )
// }

// export default Presents


import React, { useState } from 'react'

const Presents = () => {
  const [selectedStyle, setSelectedStyle] = useState("none")
  const stylePresets = ["none", "elegant", "wonderful","beautiful","wow"]

  return (
    <div className="flex flex-col space-y-2 mt-4">
      <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Art Style</span>
      <div className="flex flex-wrap gap-2">
        {stylePresets.map((style) => (
          <button
            key={style}
            onClick={() => setSelectedStyle(style)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all border cursor-pointer uppercase tracking-wider ${
              selectedStyle === style 
                ? 'bg-[#df7829] text-white border-[#df7829] shadow-md shadow-[#df7829]/20' 
                : 'bg-zinc-800/60 text-zinc-400 border-zinc-700/60 hover:border-zinc-500'
            }`}
          >
            {style}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Presents
