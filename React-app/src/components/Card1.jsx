


import React, { useState } from 'react'
import AspectRatioSelector from './Ratio';
import Presents from './presents';
import ThemeToggle from './ThemeToggle';

const Card1 = ({prompt,setprompt,setImageUrl,loading,setLoading,setotherprompt}) => {
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
    setotherprompt(prompt)
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
    <div className='flex h-fit w-full flex-col justify-start space-y-3  rounded-2xl bg-white p-3 shadow-xl shadow-gray-400 sm:justify-between sm:space-y-5 sm:border sm:border-zinc-200 sm:p-5 dark:border-zinc-800 dark:bg-zinc-900'>
      {/* Top Controls Area */}
      <div className='flex flex-col space-y-3 sm:space-y-5'>
        
        {/* Header/Logo Line */}
        <div className="flex justify-between items-center">
          <h1 className='select-none font-orbitron text-[20px] font-bold uppercase tracking-wider text-zinc-900 md:text-xl dark:text-white'>
            I<span className="text-[#df7829]">Gen</span>
          </h1>
          <ThemeToggle />
        </div>

        {/* Section Title */}
        <div>
          <h2 className='pt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:pt-0 sm:text-3xl dark:text-white'>Generate Images</h2>
        </div>

        {/* Prompt Input Box */}
        <div className="flex flex-col space-y-1.5 ">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Your Prompt</label>
          <textarea 
            className='h-[120px] w-full resize-none rounded-sm border border-[#df7829] bg-white p-3.5 text-sm text-zinc-800 placeholder-zinc-400 transition-colors focus:border-[#df7829] focus:outline-none dark:bg-zinc-800/80 dark:text-zinc-100 dark:placeholder-zinc-500 [&::-webkit-scrollbar]:w-2
 
  [&::-webkit-scrollbar-track]:rounded-lg
 [&::-webkit-scrollbar-thumb]:bg-[#df7829]
  [&::-webkit-scrollbar-thumb]:rounded-lg
  [hover:&::-webkit-scrollbar-thumb]:bg-[#f08c3f]">' 
            placeholder="A cybernetic artifact hidden inside a misty mountain shrine..."
            id="prompt-input"
            value={prompt}
            onChange={handlechange}
          />
        </div>

        {/* Quality Controls Slider */}
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <span>Quality Setting</span>
            <span className="text-[#df7829] font-bold font-mono text-sm">{quality}%</span>
          </div>
          
          <input 
            type="range" 
            min="1" 
            max="100" 
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-[#df7829] focus:outline-none dark:bg-zinc-700"
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
      <div className="mt-4 border-t border-zinc-200/80 pt-5 dark:border-zinc-800/80">
        <button 
          onClick={generateAndGetImage}
          disabled={loading}
          className="w-full rounded-xl bg-[#df7829] py-3 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#df7829]/10 transition-all hover:bg-[#c9661e] active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-zinc-300 dark:disabled:bg-zinc-700"
        >
          {loading ? 'Processing ✨' : 'Generate Masterpiece ✨'}
        </button>
      </div>

    </div>
  )
}

export default Card1;



