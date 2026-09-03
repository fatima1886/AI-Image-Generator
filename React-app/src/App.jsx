import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';

function App() {

  // usestates


  return (
    <section className='h-screen w-screen bg-[#181818] overflow-x-hidden flex flex-col md:grid md:grid-cols-3 gap-3 p-3 md:p-4 font-sans text-white'>
      <Card1 />
      <Card2/>
      <Card3/>
    </section>
  );
}

export default App;







