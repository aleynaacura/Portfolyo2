export interface Project {
  id: number;
  title: string;
  category: '3d-modelleme' | 'animasyon' | 'oyun-gelistirme' | 'tasarim';
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  year: string;
  tools: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Ember Warden',
    category: '3d-modelleme',
    description: 'Low poly koruma karakteri — volkanik zırhlı savaşçı',
    longDescription: 'Ember Warden, volkanik bir dünyada yaşayan efsanevi bir koruyucudur. Karakter, low poly estetiğiyle tasarlanmış olup, turuncu ve kırmızı tonlardaaki zırh detaylarıyla atmosferik bir his verir. Toplam 4.200 poligon ile optimize edilmiştir.',
    image: 'https://images.pexels.com/photos/6940274/pexels-photo-6940274.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Low Poly', 'Karakter', 'ZBrush'],
    year: '2024',
    tools: ['Blender', 'ZBrush', 'Substance Painter'],
  },
  {
    id: 2,
    title: 'Neon Drifter',
    category: 'oyun-gelistirme',
    description: 'Siberpunk açık dünya yarış oyunu prototipi',
    longDescription: 'Neon Drifter, neon ışıklı bir siberpunk şehrinde geçen bir yarış oyunu prototipidir. Unity oyun motorunda geliştirilmiş olup, prosedürel şehir oluşturma, dinamik aydınlatma ve gerçek zamanlı yansımalar içermektedir.',
    image: 'https://images.pexels.com/photos/18337612/pexels-photo-18337612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Unity', 'Siberpunk', 'Oyun Prototipi'],
    year: '2024',
    tools: ['Unity', 'C#', 'Blender'],
  },
  {
    id: 3,
    title: 'Crystal Sanctum',
    category: 'tasarim',
    description: 'Soyut 3D ortam tasarımı — kristal tapınak',
    longDescription: 'Crystal Sanctum, ışık ve gölgenin buluştuğu soyut bir ortam tasarımıdır. Geometrik kristal formlar, yumuşak aydınlatma ve volkanik kırmızı tonlarla bir araya gelerek mistik bir atmosfer yaratır.',
    image: 'https://images.pexels.com/photos/28901845/pexels-photo-28901845.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Ortam Tasarımı', 'Aydınlatma', 'Soyut'],
    year: '2023',
    tools: ['Blender', 'Cycles', 'Photoshop'],
  },
  {
    id: 4,
    title: 'Polygon Hound',
    category: '3d-modelleme',
    description: 'Low poly hayvan serisi — neon köpek',
    longDescription: 'Polygon Hound, low poly hayvan serisinin ilk parçasıdır. Cyberpunk temalı neon ışıklı ortamda poz veren köpek modeli, 2.800 poligonla mobil oyunlara uygun şekilde optimize edilmiştir.',
    image: 'https://images.pexels.com/photos/6940274/pexels-photo-6940274.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Low Poly', 'Hayvan', 'Oyun Varlığı'],
    year: '2023',
    tools: ['Blender', 'Substance Painter'],
  },
  {
    id: 5,
    title: 'Aurora Flow',
    category: 'animasyon',
    description: 'Sıvı simülasyonu ile animasyonlu soyut sanat',
    longDescription: 'Aurora Flow, sıvı simülasyonu teknikleri kullanılarak oluşturulmuş animasyonlu bir soyut sanat eseridir. Turuncu ve kırmızı tonlardaki akışkan hareketler, müzik senkronizasyonuyla birleştirilerek görsel bir deneyim sunar.',
    image: 'https://images.pexels.com/photos/30066062/pexels-photo-30066062.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Simülasyon', 'Sıvı', 'Müzik Senkron'],
    year: '2024',
    tools: ['Blender', 'Houdini', 'After Effects'],
  },
  {
    id: 6,
    title: 'Inferno Keep',
    category: 'tasarim',
    description: 'Ateş krallığı kalesi — ortam tasarımı',
    longDescription: 'Inferno Keep, lav nehirleriyle çevrili devasa bir kaledir. Kırmızı ve turuncu volkanik aydınlatma, duman parçacık efektleri ve atmosferik sis ile dramatik bir sahne yaratır.',
    image: 'https://images.pexels.com/photos/12089403/pexels-photo-12089403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Ortam', 'Kale', 'Volkanik'],
    year: '2023',
    tools: ['Unreal Engine', 'Substance Painter', 'Blender'],
  },
  {
    id: 7,
    title: 'Geometric Dreams',
    category: 'animasyon',
    description: 'Geometrik şekillerle abstract animasyon',
    longDescription: 'Geometric Dreams, basit geometrik şekillerin müzik ritmine göre hareket ettiği deneysel bir animasyon projesidir. Renk geçişleri ve morfolojik dönüşümlerle izleyiciyi büyüleyici bir yolculuğa çıkarır.',
    image: 'https://images.pexels.com/photos/29237420/pexels-photo-29237420.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Deneysel', 'Geometrik', 'Ritmik'],
    year: '2024',
    tools: ['Cinema 4D', 'After Effects', 'Octane'],
  },
  {
    id: 8,
    title: 'Lighthouse Realm',
    category: '3d-modelleme',
    description: 'Low poly deniz feneri adası',
    longDescription: 'Lighthouse Realm, gece atmosferinde ışık saçan bir deniz fenerini ve etrafındaki kayalık adayı tasvir eden low poly bir 3D sahnedir. Sıcak ışık detayları ve soğuk gece tonları arasındaki kontrast öne çıkar.',
    image: 'https://images.pexels.com/photos/38478413/pexels-photo-38478413.png?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Low Poly', 'Ortam', 'Gece'],
    year: '2023',
    tools: ['Blender', 'Cycles'],
  },
  {
    id: 9,
    title: 'Echoes of Void',
    category: 'oyun-gelistirme',
    description: 'Uzayda geçen survival horror oyunu',
    longDescription: 'Echoes of Void, terk edilmiş bir uzay istasyonunda geçen bir survival horror oyunudur. Unreal Engine 5 ile geliştirilen proje, dinamik ışıklandırma, AI davranış sistemi ve sürükleyici ses tasarımı içermektedir.',
    image: 'https://images.pexels.com/photos/28551572/pexels-photo-28551572.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Unreal Engine', 'Horror', 'AI'],
    year: '2024',
    tools: ['Unreal Engine 5', 'C++', 'Blender'],
  },
  {
    id: 10,
    title: 'Solar Forge',
    category: 'tasarim',
    description: 'Endüstriyel 3D tasarım — güneş enerjisi santrali',
    longDescription: 'Solar Forge, güneş enerjisi santrallerini konu alan endüstriyel bir 3D görselleştirme projesidir. Mimari doğruluk ve sanatsal aydınlatmanın birleşimiyle, fonksiyonel ve estetik bir sunum yaratır.',
    image: 'https://images.pexels.com/photos/13156182/pexels-photo-13156182.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Endüstriyel', 'Mimari', 'Görselleştirme'],
    year: '2023',
    tools: ['3ds Max', 'V-Ray', 'AutoCAD'],
  },
  {
    id: 11,
    title: 'Pixel Sentinel',
    category: '3d-modelleme',
    description: 'Pixel art tarzında 3D robot karakter',
    longDescription: 'Pixel Sentinel, pixel art estetiğini 3D boyuta taşıyan deneysel bir karakter tasarımıdır. Düşük çözünürlüklü doku ve keskin geometrik formlarla retro-futuristik bir görünüm elde edilmiştir.',
    image: 'https://images.pexels.com/photos/33827091/pexels-photo-33827091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Pixel Art', 'Robot', 'Retro'],
    year: '2024',
    tools: ['Blender', 'Aseprite', 'Substance Painter'],
  },
  {
    id: 12,
    title: 'Crimson Tide',
    category: 'animasyon',
    description: 'Kırmızı tonlarda okyanus simülasyonu',
    longDescription: 'Crimson Tide, okyanus dalgalarının kırmızı ve turuncu tonlarda render edildiği atmosferik bir animasyon projesidir. Gerçekçi dalga simülasyonu ve dramatik aydınlatma ile sinematik bir kısa film deneyimi sunar.',
    image: 'https://images.pexels.com/photos/31622984/pexels-photo-31622984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Simülasyon', 'Okyanus', 'Sinematik'],
    year: '2024',
    tools: ['Houdini', 'Octane', 'Nuke'],
  },
];

export interface Expertise {
  icon: string;
  title: string;
  description: string;
  skills: { name: string; level: number }[];
}

export const expertises: Expertise[] = [
  {
    icon: 'Box',
    title: '3D Modelleme',
    description: 'Karakter, ortam ve donatı modelleme konusunda uzmanlık. Low poly ve high poly iş akışlarında profesyonel deneyim.',
    skills: [
      { name: 'Blender', level: 95 },
      { name: 'ZBrush', level: 88 },
      { name: 'Maya', level: 82 },
      { name: 'Substance Painter', level: 90 },
    ],
  },
  {
    icon: 'Clapperboard',
    title: 'Animasyon',
    description: 'Karakter animasyonu, mekanik animasyon, simülasyon ve motion graphics alanlarında yaratıcı çözümler.',
    skills: [
      { name: 'Keyframe Animasyon', level: 92 },
      { name: 'Sıvı/Sıvı Simülasyon', level: 85 },
      { name: 'Rigging', level: 80 },
      { name: 'Motion Graphics', level: 88 },
    ],
  },
  {
    icon: 'Gamepad2',
    title: 'Oyun Geliştirme ve Tasarım',
    description: 'Unity ve Unreal Engine ile oyun prototipleme, seviye tasarımı, oynanış mekanikleri ve optimizasyon.',
    skills: [
      { name: 'Unity / C#', level: 90 },
      { name: 'Unreal Engine 5', level: 85 },
      { name: 'Seviye Tasarımı', level: 88 },
      { name: 'Oynanış Mekanikleri', level: 86 },
    ],
  },
  {
    icon: 'BrainCircuit',
    title: 'Yapay Zeka Araçları',
    description: 'AI destekli 3D üretim, doku oluşturma, konsept tasarım ve iş akışı otomasyonu için modern AI araçlarının kullanımı.',
    skills: [
      { name: 'Stable Diffusion', level: 87 },
      { name: 'Midjourney', level: 90 },
      { name: 'ControlNet', level: 83 },
      { name: 'ComfyUI', level: 85 },
    ],
  },
  {
    icon: 'Sparkles',
    title: 'LLM',
    description: 'Büyük Dil Modelleriyle oyun NPC diyalog sistemleri, prosedürel hikaye üretimi ve kreatif yazım otomasyonu.',
    skills: [
      { name: 'Prompt Engineering', level: 92 },
      { name: 'RAG Sistemleri', level: 80 },
      { name: 'Fine-tuning', level: 75 },
      { name: 'API Entegrasyon', level: 88 },
    ],
  },
];

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    year: '2018',
    title: '3D Sanat Yolculuğu Başlangıcı',
    description: 'Blender ile 3D modelleme dünyasına adım attım. İlk low poly karakterlerimi ve ortam sahnelerimi oluşturdum.',
  },
  {
    year: '2020',
    title: 'BTK Akademi Ödülü',
    description: 'BTK Akademi tarafından düzenlenen oyun geliştirme yarışmasında "En İyi 3D Sanat" ödülünü kazandım.',
  },
  {
    year: '2021',
    title: 'Oyun Geliştirme Geçişi',
    description: 'Unity ve Unreal Engine ile oyun geliştirmeye başladım. İlk indie oyun prototipimi tamamladım.',
  },
  {
    year: '2022',
    title: 'Autodesk Ödülü',
    description: 'Autodesk tarafından düzenlenen ulusal 3D tasarım yarışmasında "En İyi Karakter Tasarımı" ödülünü aldım.',
  },
  {
    year: '2023',
    title: 'Yapay Zeka Entegrasyonu',
    description: 'AI destekli 3D üretim iş akışlarını oluşturmaya başladım. Stable Diffusion ve ComfyUI ile konsept tasarım süreçlerini hızlandırdım.',
  },
  {
    year: '2024',
    title: 'Cura Studio Kuruluşu',
    description: 'Bağımsız 3D sanat ve oyun geliştirme stüdyomu kurdum. LLM tabanlı NPC diyalog sistemleri üzerinde çalışıyorum.',
  },
];

export interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
}

export const awards: Award[] = [
  {
    title: 'En İyi Karakter Tasarımı',
    organization: 'Autodesk',
    year: '2022',
    description: 'Autodesk Ulusal 3D Tasarım Yarışması\'nda low poly karakter tasarımıyla birincilik ödülü.',
  },
  {
    title: 'En İyi 3D Sanat',
    organization: 'BTK Akademi',
    year: '2020',
    description: 'BTK Akademi Oyun Geliştirme Yarışması\'nda 3D ortam ve karakter sanatıyla kazanılmış ödül.',
  },
  {
    title: 'En İyi Oyun Prototipi',
    organization: 'BTK Akademi',
    year: '2023',
    description: 'BTK Akademi İnnovasyon Ödülleri\'nde Unreal Engine 5 ile geliştirilen horror oyun prototipiyle mansiyon.',
  },
  {
    title: 'Yenilikçi AI Entegrasyon',
    organization: 'Autodesk',
    year: '2024',
    description: 'Autodesk AI Sanat Yarışması\'nda AI destekli 3D üretim iş akışıyla özel jüri ödülü.',
  },
];

export const skillBadges = [
  'Blender', 'ZBrush', 'Maya', 'Substance Painter', 'Unity', 'Unreal Engine 5',
  'C#', 'C++', 'Houdini', 'Cinema 4D', 'After Effects', 'Nuke',
  'Stable Diffusion', 'Midjourney', 'ComfyUI', 'ControlNet', 'Octane Render',
  'V-Ray', 'Photoshop', 'Aseprite', 'AutoCAD', '3ds Max',
];
