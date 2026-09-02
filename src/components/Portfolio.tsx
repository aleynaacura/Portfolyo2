import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Wrench, ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '@/data/portfolioData';

const categories = [
  { id: 'all', label: 'Tümü' },
  { id: '3d-modelleme', label: '3D Modelleme' },
  { id: 'animasyon', label: 'Animasyon' },
  { id: 'oyun-gelistirme', label: 'Oyun Geliştirme' },
  { id: 'tasarim', label: 'Tasarım' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" aria-label="Portfolyo — 3D sanat ve oyun geliştirme projeleri" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ember-500/30 to-transparent" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-ember-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-ember-500">Portfolyo</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-4">
            Seçilmiş <span className="text-gradient">Projeler</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            3D modelleme, animasyon, oyun geliştirme ve tasarım alanındaki 12 örnek projeden oluşan portfolyo koleksiyonu.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-ember-500 to-crimson-600 text-white glow-orange'
                  : 'glass text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:scale-105'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                aria-label={`${project.title} projesini görüntüle`}
                className="group relative cursor-pointer rounded-2xl overflow-hidden glass aspect-[4/3] hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.description}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 mb-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-ember-500/20 text-ember-300 border border-ember-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-1">{project.title}</h3>
                  <p className="text-xs text-white/70 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-white/50">{project.year}</span>
                    <div className="w-8 h-8 rounded-full bg-ember-500/30 flex items-center justify-center group-hover:bg-ember-500 transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full glass rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto scrollbar-hide"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-ember-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 md:h-80 overflow-hidden">
                <img src={selectedProject.image} alt={`${selectedProject.title} — ${selectedProject.description}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-ember-500/15 text-ember-400 border border-ember-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">{selectedProject.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{selectedProject.longDescription}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
                    <Calendar className="w-4 h-4 text-ember-500" />
                    <span>{selectedProject.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
                    <Wrench className="w-4 h-4 text-ember-500" />
                    <span>{selectedProject.tools.join(' · ')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
