import Navbar from "../shared/navbar/Navbar";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-6xl mx-auto px-4 py-6 grid grid-cols-[250px_1fr] min-h-screen'>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layouts;
