import { motion } from 'framer-motion';
import {
  Box, Clapperboard, Gamepad2, BrainCircuit, Sparkles,
  Award, Calendar, Quote, ChevronRight,
} from 'lucide-react';
import { expertises, timeline, awards, skillBadges } from '@/data/portfolioData';

const iconMap: Record<string, typeof Box> = {
  Box, Clapperboard, Gamepad2, BrainCircuit, Sparkles,
};

export default function About() {
  return (
    <section id="about" aria-label="Hakkında — 3D sanatçı ve oyun geliştirici profili" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-crimson-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-ember-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-ember-500">Hakkımda</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-4">
            Sanatçı <span className="text-gradient">Profili</span>
          </h2>
        </motion.div>

        {/* Bio section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >
            <div className="relative rounded-2xl overflow-hidden glass p-2 group">
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <img
                  src="https://images.pexels.com/photos/28655002/pexels-photo-28655002.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Cura Studio — 3D sanatçı ve oyun geliştirici profil görseli"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-ember-500 to-crimson-600 rounded-full blur-2xl opacity-30" />
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
              Merhaba, ben <span className="text-gradient">Cura</span>
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              3D sanatçı ve oyun geliştiricisi olarak, dijital dünyada hikayeler anlatıyorum. Altı yıldan fazla
              süredir low poly karakter tasarımı, ortam sanatı ve oyun prototipleme üzerine çalışıyorum.
              Sanatımın merkezinde duygusal bağ ve atmosfer yaratmak var.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Son yıllarda yapay zeka araçlarını 3D üretim süreçlerine entegre ederek iş akışlarımı hızlandırdım
              ve yeni yaratıcı olanaklar keşfettim. LLM tabanlı sistemlerle oyun NPC'leri için dinamik diyalog
              sistemleri geliştiriyorum.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Çalışmalarım Autodesk ve BTK Akademi gibi kurumlar tarafından ödüllendirildi. Bağımsız stüdyom
              Cura Studio'da, oyun geliştiricileri ve markalar için 3D sanat ve etkileşimli deneyimler üretiyorum.
            </p>

            {/* Quote */}
            <div className="relative glass rounded-xl p-5 border-l-2 border-ember-500">
              <Quote className="absolute top-3 right-3 w-8 h-8 text-ember-500/20" />
              <p className="text-sm italic text-[var(--text-secondary)]">
                "Her poligon bir hikaye anlatır. Benim işim, o hikayeyi görünür kılmak."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Expertise areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-8 text-center">
            Uzmanlık <span className="text-gradient">Alanları</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertises.map((exp, i) => {
              const Icon = iconMap[exp.icon] || Box;
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ember-500/20 to-crimson-600/20 flex items-center justify-center group-hover:from-ember-500/30 group-hover:to-crimson-600/30 transition-colors">
                      <Icon className="w-6 h-6 text-ember-500" />
                    </div>
                    <h4 className="font-display font-bold text-lg">{exp.title}</h4>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{exp.description}</p>
                  <div className="space-y-3">
                    {exp.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-[var(--text-secondary)]">{skill.name}</span>
                          <span className="text-[var(--text-tertiary)]">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[var(--bg-tertiary)] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-ember-500 to-crimson-600"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Skill badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-6 text-center">
            Araçlar ve <span className="text-gradient">Teknolojiler</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="px-4 py-2 rounded-lg glass text-sm font-medium text-[var(--text-secondary)] hover:text-ember-500 hover:scale-105 transition-all cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-8 text-center">
            Kariyer <span className="text-gradient">Zaman Çizelgesi</span>
          </h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ember-500/50 via-crimson-500/50 to-transparent md:-translate-x-1/2" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-8 ${
                  i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                } md:w-1/2 ${i % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:pr-8'}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-0 top-2 w-3 h-3 rounded-full bg-gradient-to-br from-ember-500 to-crimson-600 ring-4 ring-[var(--bg-primary)] md:-translate-x-1/2 z-10" />

                <div className="ml-12 md:ml-0 glass rounded-xl p-5 flex-1">
                  <span className="text-sm font-bold text-ember-500">{item.year}</span>
                  <h4 className="font-display font-bold text-lg mt-1 mb-2">{item.title}</h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-8 text-center">
            Ödüller ve <span className="text-gradient">Başarılar</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex items-start gap-4 hover:scale-[1.02] transition-transform group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-ember-500/20 to-crimson-600/20 flex items-center justify-center group-hover:from-ember-500/30 group-hover:to-crimson-600/30 transition-colors">
                  <Award className="w-7 h-7 text-ember-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
                    <span className="text-xs text-[var(--text-tertiary)]">{award.year}</span>
                  </div>
                  <h4 className="font-display font-bold text-lg mb-1">{award.title}</h4>
                  <p className="text-sm text-ember-500 font-medium mb-2">{award.organization}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{award.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-ember-500 group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
