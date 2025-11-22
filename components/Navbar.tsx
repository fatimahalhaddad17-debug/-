import React, { useState, useEffect } from 'react';
    import { Menu, X } from 'lucide-react';
    
    const Navbar: React.FC = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const navLinks = [
        { name: 'عني', href: '#about' },
        { name: 'الخدمات', href: '#services' },
        { name: 'أعمالي', href: '#portfolio' },
        { name: 'آراء العملاء', href: '#testimonials' },
        { name: 'تواصل', href: '#contact' },
      ];
    
      return (
        <header 
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
          }`}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="text-2xl font-bold text-[#3e004a]">
              فاطمة <span className="text-[#3e004a]/80 border-b-4 border-[#D8E59C]">طاهر</span>
            </a>
    
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-slate-600 hover:text-[#3e004a] font-medium transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#D8E59C] transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-[#3e004a] text-white px-5 py-2 rounded-full font-bold hover:bg-[#2d0036] transition-colors shadow-lg shadow-purple-900/10 text-sm"
              >
                احجز استشارة
              </a>
            </nav>
    
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#3e004a] focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
    
          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="md:hidden bg-white absolute top-full w-full border-t border-slate-100 shadow-lg">
              <div className="flex flex-col p-4 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-slate-700 font-medium hover:text-[#3e004a] hover:bg-slate-50 p-2 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                    href="#contact" 
                    className="bg-[#3e004a] text-center text-white px-5 py-3 rounded-lg font-bold hover:bg-[#2d0036] transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                  احجز استشارة
                </a>
              </div>
            </div>
          )}
        </header>
      );
    };
    
    export default Navbar;