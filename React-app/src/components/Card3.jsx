// import React from 'react'

// const Card3 = () => {
//   return (
//     <div className='flex flex-col gap-4'>
// <div className='flex h-[46vh] w-full gap-[2px] bg-blue-400 overflow-x-scroll'>
// <div className="h-full w-1/2 border-none rounded-sm "><img src="/bg-img.jpg" alt="" className='w-full h-full object-fit: cover  bg-blue-100' /></div>
// <div className="h-full w-1/2 border-none rounded-sm "><img src="/bg-img.jpg" alt="" className='w-full h-full object-fit: cover  bg-blue-100' /></div>
// <div className="h-full w-1/2 border-none rounded-sm "><img src="/bg-img.jpg" alt="" className='w-full h-full object-fit: cover  bg-blue-100' /></div>
// </div>
// <div className='h-[46vh] w-full bg-blue-400'></div>
//     </div>
//   )
// }

// export default Card3


import React from 'react'
import HistoryButton from './Animation'

const Card3 = () => {
  return (
    <div className='flex flex-col gap-4 h-full w-full'>
      {/* Upper Box: Horizontal Scroll for 3 images */}
      <div className='flex h-[80vh] w-full gap-[4px] overflow-x-auto flex-nowrap scrollbar:w-2
   [&::-webkit-scrollbar]:h-2
  [&::-webkit-scrollbar-track]:bg-[#181818]
  [&::-webkit-scrollbar-thumb]:bg-[#df7829]
  [&::-webkit-scrollbar-thumb]:rounded-md
  hover:[&::-webkit-scrollbar-thumb]:bg-slate-400'>
        <div className="h-full min-w-[50%] flex-shrink-0 border-none rounded-sm">
          <img src="/bg-img.jpg" alt="" className='w-full h-full object-cover border-none rounded-xl' />
        </div>
        <div className="h-full min-w-[50%] flex-shrink-0 border-none rounded-sm">
          <img src="/bg-img.jpg" alt="" className='w-full h-full object-cover border-none rounded-xl' />
        </div>
        <div className="h-full min-w-[50%] flex-shrink-0 border-none rounded-sm">
          <img src="/bg-img.jpg" alt="" className='w-full h-full object-cover border-none rounded-xl' />
        </div>
      </div>

      {/* Lower Box: Vertical Scroll for history */}
   <button className="flex mt-6 items-center justify-center gap-2 px-5 py-2.5 bg-[#df7829] hover:opacity-90 active:scale-95 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md shadow-indigo-600/10 border border-indigo-500/20 group">
  {/* Branding Icon (Optional but premium) */}
  <div>
  <svg 
    xmlns="http://w3.org" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="group-hover:rotate-[-15deg] transition-transform duration-200"
    >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
    <path d="M3 3v5h5"/>
    <path d="M12 7v5l4 2"/>
  </svg>
  </div>
  <div>
  <span>Watch History</span>
  </div>
</button>

    </div>
  )
      
}

export default Card3
