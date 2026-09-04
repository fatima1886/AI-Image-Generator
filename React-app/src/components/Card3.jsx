import React from 'react'
import { ImageOff, Sparkles } from 'lucide-react' 

const Card3 = ({ images,setprompt,setImageUrl }) => {
  function handleback(image) {
    setprompt(image.otherprompt)
    setImageUrl(image.imageUrl)
  }
  return (
    !images?.length ? (
        ( <div className="flex flex-col items-center justify-center text-center p-8 border border border-[#df7829] bg-slate-800/50 rounded-xl h-[95vh] h-[70%] min-h-[250px] w-full group transition-all duration-500 hover:border-[#df7829]/50">
      
      {/* Animated Icon Container */}
      <div className="relative mb-4 flex items-center justify-center">
        {/* Pulsing outer glow ring */}
        <div className="absolute inset-0 bg-[#df7829]/10 rounded-full blur-xl animate-pulse duration-1000" />
        
        {/* Floating/Bouncing background blob */}
        <div className="absolute -inset-2 bg-gradient-to-tr from-[#df7829]/20 to-transparent rounded-full opacity-50 blur group-hover:scale-110 transition-transform duration-500" />
        
        {/* Main Icon with subtle hover tilt */}
        <div className="relative bg-slate-800 p-4 rounded-full border border-slate-700 shadow-xl text-slate-400 group-hover:text-[#df7829] group-hover:border-[#df7829]/30 transition-all duration-300 transform group-hover:rotate-6">
          <ImageOff size={36} className="animate-wiggle" />
        </div>

        {/* Floating little sparkles that bounce */}
        <Sparkles 
          size={16} 
          className="absolute -top-1 -right-1 text-[#df7829] animate-bounce delay-100"
        />
      </div>

      {/* Text Elements */}
      <h3 className="text-md font-semibold  tracking-tight transition-colors duration-300 text-[#df7829] group-hover:text-white font-orbitron">
        No Images Created Yet
      </h3>
      
      <p className="text-xs text-slate-400 max-w-[220px] mt-1 leading-relaxed">
        Your creative history is blank. Type a prompt above to bring your imagination to life!
      </p>

    </div>)
    ) : (
     <div className='flex flex-col gap-4 h-full w-full border border-slate-700 bg-slate-900 rounded-xl p-4 shadow-md'>
      <h1 className='text-xl md:text-2xl text-[#df7829] font-semibold tracking-tight text-center'>
        Your History Images
      </h1>
      
      <div
       className="overflow-y-auto w-full h-[75%] bg-slate-900 rounded-lg p-2 space-y-2 flex-1 scrollbar-thin scrollbar-thumb-slate-600 cursor-pointer">
        {images && images.map((img, index) => (
          <div 
            key={index} 
        onClick={() => handleback(img)}
            className='flex items-center gap-3 w-full bg-gray-950 border border-[#df7829] rounded-lg p-2 shadow-sm h-16 transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300'

            // className='flex items-center gap-3 w-full bg-slate-700 border border-[#df7829] hover:shadow-md transition-all duration-300 rounded-lg p-2 shadow-sm h-16 hover:bg-slate-650 transition-colors'
          >
            <img 
              src={img.imageUrl} 
              alt={img.otherprompt || "History thumb"} 
              className="w-12 h-12 object-cover rounded-md flex-shrink-0 bg-slate-600" 
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-200 line-clamp-2 leading-tight">
                {img.otherprompt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
  );
}


export default Card3
