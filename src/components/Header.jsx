import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200" >BlogPlatform</Link>

    
        <div className="flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-blue-50" >Home</Link>

          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-blue-50" >About</Link>

          <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-blue-50" >Blog</Link>

          <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-blue-50" >Contact</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
