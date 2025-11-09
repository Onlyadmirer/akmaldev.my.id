import Navbar from "../shared/navbar/Navbar";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-7xl mx-auto md:px-6'>
      <div className='md:grid min-h-screen md:grid-cols-[240px_1fr] md:py-12'>
        <Navbar />
        <main className='pt-24 md:pt-0'>{children}</main>
      </div>
    </div>
  );
}

export default Layouts;
