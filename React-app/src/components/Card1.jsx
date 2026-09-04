


import React, { useState } from 'react'
import AspectRatioSelector from './Ratio';
import Presents from './presents';

const Card1 = ({prompt,setprompt,setImageUrl,loading,setLoading}) => {
  const [quality, setQuality] = useState(50);
  // const [prompt, setprompt] = useState("");
  
  // States to handle image output, loading animations, and errors
  // const [imageUrl, setImageUrl] = useState("");
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 100% Free image generation function (No API key or dashboard login needed)
  async function generateAndGetImage() {
    if (!prompt.trim()) {
      setError("Please enter a prompt first!");
      return;
    }
setprompt("")
    setLoading(true);
    setError("");
    setImageUrl(""); // Clear past image while loading

    // Safely encode the prompt text for the URL string
    const encodedPrompt = encodeURIComponent(prompt.trim()+ 'the quality of image should be' + {quality});
    
    // Public community proxy; no API key or authorization header is required.
    const url = `https://image.pollinations.ai/p/${encodedPrompt}?model=flux&width=1024&height=1240`;

    try {
        // Clean GET request with zero authorization headers to bypass CORS and 401 blocks
        const response = await fetch(url, { method: 'GET' });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const imageBlob = await response.blob();
        const localImageUrl = URL.createObjectURL(imageBlob);
        
        console.log("Local browser image URL:", localImageUrl);
        setImageUrl(localImageUrl); // Save the image blob link to display it

    } catch (error) {
        console.error("Error generating image:", error);
        setError(error.message || "Failed to generate image. Please try again.");
    } finally {
        setLoading(false);
    }
  }


  function handlechange(e) {
    setprompt(e.target.value)
  }



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
            value={prompt}
            onChange={handlechange}
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
          {/* <AspectRatioSelector/> */}
          <Presents/>
        </div>

      </div>

      {/* Dynamic Image Display Viewport */}
      {/* {(loading || imageUrl || error) && (
        <div className="mt-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col items-center justify-center min-h-[200px]">
          {loading && <p className="text-zinc-400 animate-pulse text-sm">Crafting your masterpiece...</p>}
          {error && <p className="text-red-400 text-sm">{error}</p>}
          {imageUrl && !loading && (
            <img 
              src={imageUrl} 
              alt="AI Output" 
              className="max-h-[400px] w-auto object-cover rounded-lg shadow-md"
            />

//             <div className="image-grid">
//   {imageUrls.map((url, index) => (
//     <div key={index} className="image-card">
//       <img src={url} alt={`Generated variation ${index + 1}`} />
//     </div>
//   ))}
// </div>
          )}
        </div>
      )} */}

      {/* Primary Action Trigger Button */}
      <div className="pt-5 mt-4 border-t border-zinc-800/80">
        <button 
          onClick={generateAndGetImage}
          disabled={loading}
          className="w-full py-3 bg-[#df7829] hover:bg-[#c9661e] disabled:bg-zinc-700 disabled:cursor-not-allowed text-white rounded-xl font-bold text-sm tracking-wide transition-all active:scale-[0.99] shadow-lg shadow-[#df7829]/10"
        >
          {loading ? 'Processing ✨' : 'Generate Masterpiece ✨'}
        </button>
      </div>

    </div>
  )
}

export default Card1;



