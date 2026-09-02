import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { ChevronDown, Sparkles, Flame } from 'lucide-react';

const Hero3DScene = lazy(() => import('./Hero3DScene'));

export default function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      aria-label="Ana sayfa — Cura Studio 3D sanatçı ve oyun geliştirici"
      className="relative min-h-screen w-full overflow-hidden grid-bg noise-overlay"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ember-500/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-crimson-500/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ember-600/10 rounded-full blur-[150px]" />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><div className="w-16 h-16 border-4 border-ember-500/30 border-t-ember-500 rounded-full animate-spin" /></div>}>
          <Hero3DScene />
        </Suspense>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 pointer-events-auto"
        >
          <Sparkles className="w-4 h-4 text-ember-500" />
          <span className="text-xs font-medium tracking-wide text-[var(--text-secondary)]">3D Sanat &amp; Oyun Geliştirme</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 max-w-3xl"
        >
          <span className="block text-[var(--text-primary)]">Tasarım ve Teknolojinin</span>
          <span className="block text-gradient">Buluşması</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-10 pointer-events-auto"
        >
          3D sanat ve oyun geliştirme dünyasında yaratıcı vizyonlarınızı gerçeğe dönüştürüyorum.
          Low poly karakterlerden sinematik ortamlara, AI destekli iş akışlarından oynanabilir oyun prototiplerine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
        >
          <button
            onClick={scrollToPortfolio}
            aria-label="Portfolyo bölümüne git"
            className="group relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-ember-500 to-crimson-600 text-white font-medium text-sm tracking-wide overflow-hidden transition-transform hover:scale-105 glow-orange"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Flame className="w-4 h-4" />
              Portfolyoyu Keşfet
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-crimson-600 to-ember-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Hakkımda bölümüne git"
            className="px-8 py-3.5 rounded-xl glass font-medium text-sm tracking-wide text-[var(--text-primary)] hover:scale-105 transition-transform"
          >
            Hakkımda
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[var(--text-tertiary)]"
        >
          <span className="text-xs tracking-widest uppercase">Kaydır</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
