import Navbar from "../shared/navbar/Navbar";
import Background from "./background/Background";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-6xl mx-auto px-4 relative py-6  min-h-screen'>
      <Background />
      <div className='grid grid-cols-[250px_1fr]'>
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layouts;
