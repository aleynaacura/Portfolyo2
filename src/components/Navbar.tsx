import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Flame } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const navLinks = [
  { id: 'home', label: 'Anasayfa' },
  { id: 'portfolio', label: 'Portfolyo' },
  { id: 'about', label: 'Hakkında' },
  { id: 'contact', label: 'İletişim' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => l.id);
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass py-3' : 'py-5 bg-transparent'
        }`}
        aria-label="Ana navigasyon"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 group">
            <div className="relative">
              <Flame className="w-7 h-7 text-ember-500 group-hover:text-ember-400 transition-colors" />
              <div className="absolute inset-0 blur-md opacity-50">
                <Flame className="w-7 h-7 text-ember-500" />
              </div>
            </div>
            <span className="font-display font-bold text-lg tracking-wider">
              CURA<span className="text-gradient">STUDIO</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  activeSection === link.id
                    ? 'text-ember-500'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-ember-500 to-crimson-500 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass hover:scale-110 transition-transform"
              aria-label="Tema değiştir"
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <Sun className="w-5 h-5 text-ember-400" />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Moon className="w-5 h-5 text-crimson-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg glass"
              aria-label="Menü"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden glass border-t"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left text-base font-medium py-2 ${
                    activeSection === link.id ? 'text-ember-500' : 'text-[var(--text-secondary)]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
