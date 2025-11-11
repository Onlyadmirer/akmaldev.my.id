import Featured from "./components/Featured";
import Header from "./components/Header";
import Skils from "./components/Skils";

function Home() {
  return (
    <div className='h-[999px]'>
      <Header />
      <Skils />
      <Featured />
    </div>
  );
}

export default Home;
