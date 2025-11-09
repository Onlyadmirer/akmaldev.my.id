import Navbar from "../navbar/Navbar";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-7xl mx-auto px-6'>
      <div className='grid p-4 min-h-screen grid-cols-[240px_1fr]'>
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layouts;
