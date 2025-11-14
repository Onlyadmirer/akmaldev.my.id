function Header() {
  return (
    <div className='space-y-4 border-b pb-6 border-primary/50'>
      <div className='space-y-2'>
        <h1 className='text-3xl font-semibold'>Hi I{"'"}m Akmal</h1>
        <ul className='list-disc ml-5 flex text-muted-foreground flex-row gap-12'>
          <li>Based in Enrekang, Indonesia ID</li>
          <li>Onsite</li>
        </ul>
      </div>
      <div>
        <p className='leading-loose text-primary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, id quo
          reiciendis cum nemo eaque dolores ducimus magnam est alias! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates
          soluta nesciunt libero, ipsa voluptatem cumque sequi provident error
          eos aut cum doloremque, alias non deleniti magni quam iste harum?
        </p>
      </div>
    </div>
  );
}

export default Header;
