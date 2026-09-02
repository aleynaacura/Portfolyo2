import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle2, Flame, Github, Linkedin, Instagram, Palette } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  const socialLinks = [
    { icon: Palette, label: 'ArtStation', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ];

  return (
    <section id="contact" aria-label="İletişim — Cura Studio ile iletişime geçin" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-ember-500/10 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-ember-500">İletişim</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-4">
            Birlikte <span className="text-gradient">Çalışalım</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Bir projeniz mi var? 3D sanat, animasyon veya oyun geliştirme konusunda işbirliği yapmak için bana ulaşın.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center gap-6"
          >
            <div className="glass rounded-2xl p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ember-500/20 to-crimson-600/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-ember-500" />
              </div>
              <div>
                <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-wide">E-posta</p>
                <p className="text-sm font-medium">hello@curastudio.com</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ember-500/20 to-crimson-600/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-ember-500" />
              </div>
              <div>
                <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-wide">Konum</p>
                <p className="text-sm font-medium">İstanbul, Türkiye</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-wide mb-4">Sosyal Medya</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-gradient-to-br hover:from-ember-500 hover:to-crimson-600 hover:text-white hover:scale-110 transition-all group"
                  >
                    <link.icon className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} aria-label="İletişim formu" className="glass rounded-2xl p-6 space-y-5">
              <div>
                <label className="text-xs font-medium text-[var(--text-secondary)] mb-2 block">Adınız</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-ember-500 focus:ring-1 focus:ring-ember-500 transition-colors"
                  placeholder="Adınızı girin"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-[var(--text-secondary)] mb-2 block">E-posta</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-ember-500 focus:ring-1 focus:ring-ember-500 transition-colors"
                  placeholder="ornek@email.com"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-[var(--text-secondary)] mb-2 block">Mesaj</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-ember-500 focus:ring-1 focus:ring-ember-500 transition-colors resize-none"
                  placeholder="Projeniz hakkında detay verin..."
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-ember-500 to-crimson-600 text-white font-medium text-sm tracking-wide flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform glow-orange disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Mesaj Gönderildi!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Mesaj Gönder
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer aria-label="Site alt bilgisi" className="max-w-7xl mx-auto mt-24 pt-8 border-t border-[var(--border-color)]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-ember-500" />
            <span className="font-display font-bold tracking-wider text-sm">
              CURA<span className="text-gradient">STUDIO</span>
            </span>
          </div>
          <p className="text-xs text-[var(--text-tertiary)]">
            © 2024 Cura Studio. 3D Sanat &amp; Oyun Geliştirme. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </section>
  );
}
