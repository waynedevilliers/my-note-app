// Navbar.jsx
const Navbar = () => {
    return (
      <nav className="w-full bg-base-300 p-4 border-b border-accent flex justify-center">
        <div className="max-w-7xl w-full flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-accent">My Notes</a>
          <ul className="flex gap-4">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  