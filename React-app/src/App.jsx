import Card1 from './components/Card1';
import Card2 from './components/Card2';

function App() {
  return (
    <section className='h-screen w-screen bg-[#181818] overflow-x-hidden flex flex-col md:grid md:grid-cols-3 gap-3 p-3 md:p-4 font-sans text-white'>
      <Card1 />
      <Card2/>
      
      <div className='bg-[#1e1e1e] border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-500'>Workspace 3</div>
    </section>
  );
}

export default App;







