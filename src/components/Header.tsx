import React from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['Home', 'About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'];

  return (
    <header className="fixed w-full bg-gradient-to-r from-primary-900/90 to-primary-800/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link 
            to="home" 
            smooth={true} 
            className="text-2xl font-bold text-white cursor-pointer hover:text-primary-200 transition-colors"
          >
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                className="text-white/80 hover:text-white cursor-pointer transition-colors text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                className="block py-2 text-white/80 hover:text-white cursor-pointer transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;