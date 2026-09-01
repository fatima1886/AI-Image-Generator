// import React, { useState } from 'react'

// const AspectRatioSelector = () => {
//   const [ratio, setRatio] = useState("1:1");
//   const options = ["1:1", "16:9", "9:16"];

//   return (
//     <div className="flex flex-col space-y-2">
//       <span className="text-zinc-400 text-xs font-semibold uppercase">Aspect Ratio</span>
      
//       <div className="flex gap-2">
//         {options.map((opt) => (
//           <button
//             key={opt}
//             onClick={() => setRatio(opt)}
//             className={`px-4 py-2 text-sm font-medium rounded-md transition-colors border ${
//               ratio === opt 
//                 ? 'bg-cyan-500 text-white border-cyan-500' 
//                 : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:border-zinc-500'
//             }`}
//           >
//             {opt}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AspectRatioSelector;


import React, { useState } from 'react'

const AspectRatioSelector = () => {
  const [ratio, setRatio] = useState("1:1");
  const options = ["1:1", "16:9", "9:16"];

  return (
    <div className="flex flex-col space-y-2 mt-4">
      <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Aspect Ratio</span>
      
      <div className="flex gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setRatio(opt)}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors border cursor-pointer ${
              ratio === opt 
                ? 'bg-[#df7829] text-white border-[#df7829]' 
                : 'bg-zinc-800/60 text-zinc-400 border-zinc-700/60 hover:border-zinc-500'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AspectRatioSelector;



