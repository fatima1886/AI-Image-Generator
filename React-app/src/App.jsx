import { useState } from 'react';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';

function App() {

  // usestates
 const [mainprompt, setmainprompt] = useState("");
 const [mainimageUrl, setmainImageUrl] = useState("");
  const [mainloading, setmainLoading] = useState(false);

  return (
    <section className='h-screen w-screen bg-[#181818] overflow-x-hidden flex flex-col md:grid md:grid-cols-3 gap-3 p-3 md:p-4 font-sans text-white'>
      <Card1 prompt={mainprompt} setprompt={setmainprompt} imageUrl={mainimageUrl} setImageUrl={setmainImageUrl} loading={mainloading} setLoading={setmainLoading}/>
      <Card2 imageUrl={mainimageUrl} loading={mainloading}/>
      <Card3/>
    </section>
  );
}

export default App;







