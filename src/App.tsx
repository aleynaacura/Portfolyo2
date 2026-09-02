import { ThemeProvider } from '@/context/ThemeContext';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';

function App() {
  return (
    <ThemeProvider>
      <SEO />
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500">
        <Navbar />
        <main>
          <Hero />
          <Portfolio />
          <About />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
