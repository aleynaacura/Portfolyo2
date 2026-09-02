import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
}

const BASE_URL = 'https://curastudio.com';
const DEFAULT_TITLE = 'Cura Studio — 3D Sanatçı & Oyun Geliştirici Portfolyosu';
const DEFAULT_DESCRIPTION =
  'Cura Studio — 3D sanatçı ve oyun geliştirici portfolyosu. Low poly karakter tasarımı, 3D modelleme, animasyon, oyun geliştirme ve AI destekli 3D üretim. Autodesk ve BTK Akademi ödüllü sanatçı.';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function SEO({ title, description, canonicalPath, ogImage }: SEOProps) {
  useEffect(() => {
    const fullTitle = title ?? DEFAULT_TITLE;
    const desc = description ?? DEFAULT_DESCRIPTION;
    const canonical = `${BASE_URL}${canonicalPath ?? '/'}`;
    const image = ogImage ?? `${BASE_URL}/og-image.svg`;

    document.title = fullTitle;
    setMeta('name', 'description', desc);
    setMeta('name', 'title', fullTitle);
    setCanonical(canonical);

    // Open Graph
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', image);

    // Twitter
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'twitter:image', image);
  }, [title, description, canonicalPath, ogImage]);

  return null;
}
