import {
  Bot,
  Boxes,
  BriefcaseBusiness,
  Clock3,
  Code2,
  DraftingCompass,
  Globe,
  Headphones,
  LifeBuoy,
  MessageSquareMore,
  Mail,
  MapPin,
  Palette,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  Workflow,
} from 'lucide-react'
import {
  FaGithub,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
  FaWhatsapp,
} from 'react-icons/fa'
import {
  SiFirebase,
  SiFlutter,
  SiMysql,
  SiSpringboot,
  SiTailwindcss,
} from 'react-icons/si'

export const companyInfo = {
  name: 'CodeCraft Lanka',
  tagline: 'Premium software company for ambitious modern businesses',
  email: 'codecraftlanka@gmail.com',
  phone: '+94 72 559 2323',
  whatsapp: '94753980857',
  location: 'Galle, Sri Lanka',
  availability: 'Mon - Sat | 9:00 AM - 7:00 PM',
}

export const navLinks = [
  { key: 'home', label: 'Home', to: '/' },
  { key: 'about', label: 'About', to: '/#about' },
  { key: 'services', label: 'Services', to: '/#services' },
  { key: 'projects', label: 'Projects', to: '/projects' },
  { key: 'contact', label: 'Contact', to: '/contact' },
]

export const footerLinks = [
  { key: 'home', label: 'Home', to: '/' },
  { key: 'about', label: 'About', to: '/#about' },
  { key: 'services', label: 'Services', to: '/#services' },
  { key: 'portfolio', label: 'Portfolio', to: '/#portfolio' },
  { key: 'contact', label: 'Contact', to: '/#contact' },
]

export const sectionCopy = {
  en: {
    hero: {
      eyebrow: 'Future-ready software studio',
      titleLead: 'We Build Digital Solutions',
      titleTail: 'For Modern Businesses',
      typingLead: 'Crafting',
      description:
        'We build websites, mobile apps, custom software, and POS systems for businesses in Sri Lanka — with fast delivery, clean design, and reliable ongoing support.',
      primaryCta: 'Get Started',
      secondaryCta: 'View Projects',
      spotlightTitle: 'Why clients choose us',
      spotlightDescription:
        'Modern visuals, dependable engineering, and a process that respects business timelines.',
      spotlightBody:
        'We combine product thinking, premium design, and launch discipline to build systems that are easy to trust and easier to scale.',
      floatingSupport: '24/7 client-ready coverage',
      floatingDelivery: 'Fast onboarding, clean execution',
    },
    about: {
      eyebrow: 'About us',
      title:
        'A Sri Lankan software team building premium digital products with an international standard.',
      description:
        'We bring together clean design, solid engineering, and clear communication to help Sri Lankan businesses launch digital products they are proud of.',
      visionTitle: 'Vision',
      visionBody:
        'To make premium digital product quality accessible to ambitious brands across Sri Lanka and beyond.',
      missionTitle: 'Mission',
      missionBody:
        'Deliver beautiful, scalable, and business-ready software solutions that create measurable trust and growth.',
    },
    services: {
      eyebrow: 'Services',
      title:
        'Everything your business needs to build, launch, and grow online.',
      description:
        'From first discussion to final launch — we handle design, development, and delivery so you can focus on running your business.',
      videoLabel: 'What we offer',
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'A premium project showcase built to communicate quality before the first call.',
      description: 'Selected work across commerce, internal systems, and digital product experiences.',
      detailButton: 'Project Details',
      liveButton: 'Live Preview',
      conceptLabel: 'Concept Showcase',
      fullPortfolio: 'View full portfolio',
      categoriesLabel: 'Filter projects',
      previewReel: 'Preview reel',
      before: 'Before',
      after: 'After',
      problem: 'Problem',
      solution: 'Solution',
      result: 'Result',
      techStack: 'Tech stack',
      outcomes: 'Project outcomes',
      mockupTitle: 'Premium delivery focus',
      mockupBody:
        'Crafted to combine credibility, modern UX, and the operational simplicity clients expect.',
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'Client feedback that reinforces the premium, reliable experience behind the visuals.',
      description:
        'Hear what our clients say about working with CodeCraft Lanka.',
    },
    metrics: {
      eyebrow: 'Results',
    },
    technology: {
      eyebrow: 'Technologies',
      title: 'Modern tools chosen for product speed, performance, and maintainability.',
      description:
        'CodeCraft Lanka combines proven frontend, backend, mobile, and cloud-friendly technologies to deliver reliable business software that is easy to scale.',
    },
    whyChoose: {
      eyebrow: 'Why choose us',
      title: 'Why businesses across Sri Lanka choose CodeCraft Lanka.',
      description:
        'We combine speed, quality, and clear communication to deliver software that helps your business grow.',
    },
    process: {
      eyebrow: 'Process',
      title: 'A clear business process from first discussion to confident launch.',
      description:
        'We keep decisions visible, milestones understandable, and delivery momentum strong from discovery through release.',
    },
    caseStudies: {
      eyebrow: 'Case studies',
      title: 'Problem, solution, and result stories that make the work feel concrete and credible.',
      description:
        'A closer look at the challenges we solved, the solutions we built, and the results we delivered.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Start a project conversation with a team focused on premium delivery.',
      description:
        'Send us your requirements, timeline, or business challenge. We will get back to you within 24 hours on business days.',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        placeholderName: 'Your name',
        placeholderEmail: 'you@company.com',
        placeholderPhone: '+94 77 000 0000',
        placeholderMessage: 'Tell us about your project, goals, and timeline.',
        submit: 'Send Inquiry',
        submitting: 'Sending...',
        hint: 'Prefer direct contact? Use WhatsApp, email, or the map links beside this form.',
      },
    },
    assistant: {
      title: 'CodeCraft Assist',
      subtitle: 'Instant help for quotes, timelines, and fast contact.',
      greeting:
        'Need a quick answer? Start with a website quote, project roadmap, or jump straight to WhatsApp.',
      quote: 'Get a quote',
      roadmap: 'Project roadmap',
      whatsapp: 'WhatsApp now',
      call: 'Call now',
      chat: 'Open assistant',
    },
    pages: {
      projectsTitle:
        'Selected digital experiences designed to feel premium, modern, and conversion-ready.',
      projectsDescription:
        'Browse our portfolio of websites, mobile apps, POS systems, and custom software — built for clients across Sri Lanka.',
      contactTitle: 'Let’s design the next premium software experience for your business.',
      contactDescription:
        'Share your requirements, desired timeline, or the challenge you need solved. We will help shape the right product direction from the first conversation.',
    },
  },
  si: {
    hero: {
      eyebrow: 'අනාගතයට සූදානම් මෘදුකාංග ස්ටුඩියෝව',
      titleLead: 'නවීන ව්‍යාපාර සඳහා',
      titleTail: 'ඩිජිටල් වෙබ් අඩවි, ජංගම යෙදුම්, අභිරුචි මෘදුකාංග, සහ POS පද්ධති නිර්මාණය කරයි. පළමු දර්ශනයේම විශ්වාසය ඇතිකරමින් සැබෑ ව්‍යාපාරික අවශ්‍යතා මත ශක්තිමත්ව ක්‍රියා කරයි.',
      primaryCta: 'ආරම්භ කරන්න',
      secondaryCta: 'ව්‍යාපෘති බලන්න',
      spotlightTitle: 'ගනුදෙනුකරුවන් අපව තෝරාගන්නේ ඇයි',
      spotlightDescription:
        'නවීන දෘශ්‍ය භාෂාව, විශ්වාසදායී ඉංජිනේරු ක්‍රියාවලිය, සහ ව්‍යාපාරික කාලසටහනට ගරු කරන ක්‍රියාමාර්ග.',
      spotlightBody:
        'නිෂ්පාදන චින්තනය, ප්‍රිමියම් නිර්මාණය, සහ දියත් කිරීමේ නියමිතභාවය එකට ගෙන එමින් විශ්වාසවන්ත සහ පරිමාණයට සුදුසු පද්ධති ගොඩනඟමු.',
      floatingSupport: '24/7 සහාය සූදානම්',
      floatingDelivery: 'වේගවත් ආරම්භය, පැහැදිලි ක්‍රියාත්මක කිරීම',
    },
    about: {
      eyebrow: 'අපි ගැන',
      title:
        'ජාත්‍යන්තර තත්ත්වයට ගැළපෙන ප්‍රිමියම් ඩිජිටල් නිෂ්පාදන ගොඩනඟන ශ්‍රී ලාංකීය මෘදුකාංග කණ්ඩායමක්.',
      description:
        'CodeCraft Lanka ශ්‍රී ලාංකීය ව්‍යාපාරවලට ඔවුන් ආඩම්බර වන ඩිජිටල් නිෂ්පාදන දියත් කිරීමට හොඳ design, ශක්තිමත් engineering, සහ පැහැදිලි සන්නිවේදනය ලබාදෙයි.',
      visionTitle: 'දැක්ම',
      visionBody: 'ශ්‍රී ලංකාව සහ ඉන් පිටත අභිලාෂී සන්නාමයන්ට ප්‍රිමියම් ඩිජිටල් ගුණාත්මකභාවය ලඟා කරදීම.',
      missionTitle: 'මෙහෙවර',
      missionBody:
        'විශ්වාසය හා වර්ධනය වර්ධනය කරන අලංකාර, පරිමාණයට සුදුසු, සහ ව්‍යාපාරිකව සූදානම් මෘදුකාංග විසඳුම් සැපයීම.',
    },
    services: {
      eyebrow: 'සේවා',
      title:
        'වෙබ් අඩවි, ජංගම යෙදුම්, ව්‍යාපාරික පද්ධති, සහ වර්ධනයට සූදානම් යටිතල පහසුකම් සඳහා අග සිට මුල දක්වා ඩිජිටල් ක්‍රියාත්මක කිරීම.',
      description:
        'සෑම ව්‍යාපෘතියක්ම නවීන UX, විශ්වාසදායී ක්‍රියාත්මක කිරීම, සහ පළමු වරටම විශ්වාසය ගොඩනඟන නිමාවක් වටා සකස් කරයි.',
      videoLabel: 'අප ලබාදෙන සේවා',
    },
    portfolio: {
      eyebrow: 'පෝට්ෆෝලියෝ',
      title: 'පළමු සංවාදයට පෙරම ගුණාත්මකභාවය පෙන්වන ප්‍රිමියම් ව්‍යාපෘති ප්‍රදර්ශනයක්.',
      description: 'වෙළඳාම, අභ්‍යන්තර පද්ධති, සහ ඩිජිටල් නිෂ්පාදන අත්දැකීම් ඇතුළත් තේරීම්.',
      detailButton: 'ව්‍යාපෘති විස්තර',
      liveButton: 'සජීවී පෙරදසුන',
      conceptLabel: 'සංකල්ප ප්‍රදර්ශනය',
      fullPortfolio: 'සම්පූර්ණ පෝට්ෆෝලියෝ බලන්න',
      categoriesLabel: 'ව්‍යාපෘති වර්ගීකරණය',
      previewReel: 'පෙරදසුන් රීල්',
      before: 'පෙර',
      after: 'පසුව',
      problem: 'ගැටලුව',
      solution: 'විසඳුම',
      result: 'ප්‍රතිඵලය',
      techStack: 'තාක්ෂණික ස්ටැක්',
      outcomes: 'ව්‍යාපෘති ප්‍රතිඵල',
      mockupTitle: 'ප්‍රිමියම් ක්‍රියාත්මක කිරීමේ අවධානය',
      mockupBody:
        'විශ්වාසය, නවීන UX, සහ ගනුදෙනුකරුවන් අපේක්ෂා කරන ක්‍රියාකාරී සරලත්වය එකට ගෙන නිර්මාණය කර ඇත.',
    },
    testimonials: {
      eyebrow: 'ප්‍රතිචාර',
      title: 'දෘශ්‍ය නිර්මාණයට පසුපසින් ඇති විශ්වාසදායී අත්දැකීම තහවුරු කරන ගනුදෙනුකරුවන්ගේ අදහස්.',
      description:
        'CodeCraft Lanka සමඟ වැඩ කිරීමේ අත්දැකීම ගැන ගනුදෙනුකරුවන් කියන දේ.',
    },
    metrics: {
      eyebrow: 'ප්‍රතිඵල',
    },
    technology: {
      eyebrow: 'තාක්ෂණ',
      title: 'වේගය, ක්‍රියාකාරිත්වය, සහ පරිහරණය පහසු බව සඳහා තෝරාගත් නවීන මෙවලම්.',
      description:
        'CodeCraft Lanka ප්‍රතික්ෂේප කළ නොහැකි frontend, backend, mobile, සහ cloud-සමග හිතකාමී තාක්ෂණ එකට ගෙන විශ්වාසදායී සහ පරිමාණයට සුදුසු ව්‍යාපාරික මෘදුකාංග සපයයි.',
    },
    whyChoose: {
      eyebrow: 'අපව තෝරාගන්නා හේතු',
      title: 'ගනුදෙනුකරුවන් වේගයෙන් තීරණය කිරීමට උපකාරී වන විශ්වාස ගොඩනඟන මූලධර්ම.',
      description:
        'ශ්‍රී ලංකාවේ ව්‍යාපාරවල ඔබගේ ව්‍යාපාරය වර්ධනය කිරීමට මෘදුකාංග ලබාදීමට අපි වේගය, ගුණාත්මකභාවය, සහ පැහැදිලි සන්නිවේදනය එකට ගනිමු.',
    },
    process: {
      eyebrow: 'ක්‍රියාවලිය',
      title: 'මුල් සාකච්ඡාවෙන් සිට විශ්වාසදායී launch එකක් දක්වා පැහැදිලි ව්‍යාපාරික ක්‍රියාවලියක්.',
      description:
        'විනිවිදභාවය, තේරුම්ගත හැකි milestones, සහ delivery වේගය discovery සිට release දක්වා අපි රැකගනිමු.',
    },
    caseStudies: {
      eyebrow: 'Case studies',
      title: 'ගැටලුව, විසඳුම, සහ ප්‍රතිඵල මගින් වැඩ විශ්වාසදායී සහ ස්පර්ශනීය කර පෙන්වන කතා.',
      description:
        'අපි විසඳූ ගැටළු, ගොඩනැගූ විසඳුම්, සහ ලබාදුන් ප්‍රතිඵල ගැන සමීපව බලන්න.',
    },
    contact: {
      eyebrow: 'සම්බන්ධ වන්න',
      title: 'ප්‍රිමියම් delivery එකක් ඉලක්ක කරගත් කණ්ඩායමක් සමග ව්‍යාපෘති සංවාදය ආරම්භ කරන්න.',
      description:
        'ඔබගේ අවශ්‍යතා, කාලසටහන, හෝ ව්‍යාපාරික අභියෝගය අපට යවන්න. ව්‍යාපාරික දිනයකදී පැය 24ක් ඇතුළත අපි ප්‍රතිචාර දක්වමු.',
      form: {
        name: 'නම',
        email: 'විද්‍යුත් තැපෑල',
        phone: 'දුරකථන අංකය',
        message: 'පණිවිඩය',
        placeholderName: 'ඔබගේ නම',
        placeholderEmail: 'you@company.com',
        placeholderPhone: '+94 77 000 0000',
        placeholderMessage: 'ඔබගේ ව්‍යාපෘතිය, ඉලක්ක, සහ කාලසටහන ගැන කියන්න.',
        submit: 'ඉල්ලීම යවන්න',
        submitting: 'යවමින්...',
        hint: 'සෘජු සම්බන්ධතා සඳහා WhatsApp, email, හෝ map links භාවිතා කරන්න.',
      },
    },
    assistant: {
      title: 'CodeCraft Assist',
      subtitle: 'Quote, timeline, සහ ඉක්මන් සම්බන්ධතා සඳහා වහාම සහාය.',
      greeting:
        'ඉක්මන් පිළිතුරක් අවශ්‍යද? Website quote එකකින් හෝ project roadmap එකකින් ආරම්භ කරන්න, නැතිනම් WhatsApp වෙත යන්න.',
      quote: 'Quote එකක් ගන්න',
      roadmap: 'Project roadmap',
      whatsapp: 'WhatsApp දැන්',
      call: 'දැන් අමතන්න',
      chat: 'Assistant විවෘත කරන්න',
    },
    pages: {
      projectsTitle: 'ප්‍රිමියම්, නවීන, සහ conversion-ready feel එකක් ඇති තෝරාගත් ඩිජිටල් අත්දැකීම්.',
      projectsDescription:
        'ශ්‍රී ලංකාව පුරා ගනුදෙනුකරුවන් සඳහා ගොඩනැගූ වෙබ් අඩවි, ජංගම යෙදුම්, POS පද්ධති, සහ අභිරුචි මෘදුකාංග ව්‍යාපෘති බලන්න.',
      contactTitle: 'ඔබගේ ව්‍යාපාරයට ඊළඟ ප්‍රිමියම් software experience එක එකතු කරමු.',
      contactDescription:
        'අවශ්‍යතා, අවශ්‍ය කාලසටහන, හෝ විසඳිය යුතු අභියෝගය අප සමග බෙදාගන්න. පළමු සංවාදයේ සිටම නිවැරදි product direction එක සකස් කරමු.',
    },
  },
}

export function getLocalizedValue(value, language = 'en') {
  if (typeof value === 'string') {
    return value
  }

  return value?.[language] ?? value?.en ?? ''
}

export const heroPhrases = [
  'high-conversion websites',
  'mobile experiences',
  'custom software workflows',
  'POS ecosystems that scale',
]

export const heroHighlights = [
  {
    title: 'Strategy-led delivery',
    titleSi: 'ක්‍රමෝපාය මත ක්‍රියාත්මක කිරීම',
    description: 'Discovery, UX, engineering, deployment, and growth support in one team.',
    descriptionSi: 'Discovery, UX, engineering, deployment, සහ growth support එකම කණ්ඩායමක් තුළ.',
  },
  {
    title: 'Premium UI systems',
    titleSi: 'ප්‍රිමියම් UI පද්ධති',
    description: 'Modern interfaces that look trustworthy, feel fast, and drive engagement.',
    descriptionSi: 'විශ්වාසදායී ලෙස පෙනෙන, වේගවත්, සහ engagement වැඩි කරන නවීන අතුරුමුහුණත්.',
  },
  {
    title: 'Built for growth',
    titleSi: 'වර්ධනය සඳහා ගොඩනැගූ',
    description: 'Production-ready stacks designed for speed, maintainability, and expansion.',
    descriptionSi: 'වේගය, maintainability, සහ expansion සඳහා සැලසුම් කරන production-ready stacks.',
  },
]

export const heroPanels = [
  {
    value: '72h',
    label: 'Kickoff sprint',
    labelSi: 'ආරම්භක sprint',
  },
  {
    value: '8',
    label: 'Core services',
    labelSi: 'ප්‍රධාන සේවා',
  },
  {
    value: '24/7',
    label: 'Support ready',
    labelSi: 'සහාය සූදානම්',
  },
  {
    value: companyInfo.location,
    label: 'Operating from',
    labelSi: 'ක්‍රියාත්මක ස්ථානය',
  },
]

export const aboutStats = [
  { value: 50, suffix: '+', label: 'Projects completed', labelSi: 'සම්පූර්ණ කළ ව්‍යාපෘති' },
  { value: 20, suffix: '+', label: 'Happy clients', labelSi: 'සතුටු ගනුදෙනුකරුවන්' },
  { value: 5, suffix: '+', label: 'Years experience', labelSi: 'අත්දැකීම් වසර' },
]

export const trustPoints = [
  {
    title: 'Business-first engineering',
    titleSi: 'ව්‍යාපාර පළමු ඉංජිනේරු ක්‍රමය',
    description: 'Every product decision is tied to conversion, clarity, and operational impact.',
    descriptionSi: 'සෑම product decision එකක්ම conversion, clarity, සහ operational impact සමග බැඳී ඇත.',
  },
  {
    title: 'Fast, collaborative execution',
    titleSi: 'වේගවත් සහ සහයෝගී ක්‍රියාත්මක කිරීම',
    description: 'Lean communication loops, milestone visibility, and predictable delivery.',
    descriptionSi: 'සරල සන්නිවේදන වට, milestones පැහැදිලි බව, සහ හඳුනාගත හැකි delivery.',
  },
  {
    title: 'Long-term partnership mindset',
    titleSi: 'දිගුකාලීන හවුල්කාරී චින්තනය',
    description: 'We stay close after launch with support, optimization, and future rollout planning.',
    descriptionSi: 'Launch එකෙන් පසු support, optimization, සහ future rollout planning සමග අපි සමීපව සිටිමු.',
  },
]

export const services = [
  {
    key: 'web',
    category: 'websites',
    title: 'Website Development',
    titleSi: 'වෙබ් අඩවි සංවර්ධනය',
    description: 'Corporate sites, SaaS landing pages, portfolios, and high-conversion service websites.',
    descriptionSi: 'Corporate sites, SaaS landing pages, portfolios, සහ high-conversion service websites.',
    deliverables: ['SEO-ready architecture', 'Responsive premium UI'],
    deliverablesSi: ['SEO-සූදානම් ව්‍යුහය', 'ප්‍රතිචාරශීලී ප්‍රිමියම් UI'],
    icon: Globe,
    tint: 'rgba(56, 189, 248, 0.16)',
  },
  {
    key: 'mobile',
    category: 'mobile',
    title: 'Mobile App Development',
    titleSi: 'ජංගම යෙදුම් සංවර්ධනය',
    description: 'Cross-platform mobile apps focused on usability, performance, and retention.',
    descriptionSi: 'Usability, performance, සහ retention මත අවධානය යොමු කරන cross-platform mobile apps.',
    deliverables: ['Flutter solutions', 'App store launch support'],
    deliverablesSi: ['Flutter විසඳුම්', 'App store launch support'],
    icon: Smartphone,
    tint: 'rgba(96, 165, 250, 0.16)',
  },
  {
    key: 'software',
    category: 'software',
    title: 'Custom Software Solutions',
    titleSi: 'අභිරුචි මෘදුකාංග විසඳුම්',
    description: 'Tailored internal platforms, workflow automation, dashboards, and portals.',
    descriptionSi: 'Tailored internal platforms, workflow automation, dashboards, සහ portals.',
    deliverables: ['Business logic mapping', 'Scalable architecture'],
    deliverablesSi: ['Business logic mapping', 'Scalable architecture'],
    icon: Boxes,
    tint: 'rgba(14, 165, 233, 0.16)',
  },
  {
    key: 'pos',
    category: 'pos',
    title: 'POS Systems',
    titleSi: 'POS පද්ධති',
    description: 'Retail and restaurant-ready POS products designed for speed and reliability.',
    descriptionSi: 'වේගය සහ විශ්වාසදායී බව සඳහා සැලසුම් කරන retail සහ restaurant-ready POS products.',
    deliverables: ['Inventory handling', 'Staff-friendly flows'],
    deliverablesSi: ['Inventory handling', 'Staff-friendly flows'],
    icon: Store,
    tint: 'rgba(59, 130, 246, 0.16)',
  },
  {
    key: 'hosting',
    category: 'software',
    title: 'Hosting & Domains',
    titleSi: 'Hosting සහ domains',
    description: 'Domain setup, deployment pipelines, secure hosting, and maintenance-ready environments.',
    descriptionSi: 'Domain setup, deployment pipelines, secure hosting, සහ maintenance-ready environments.',
    deliverables: ['Managed hosting', 'Deployment automation'],
    deliverablesSi: ['Managed hosting', 'Deployment automation'],
    icon: Server,
    tint: 'rgba(6, 182, 212, 0.16)',
  },
  {
    key: 'uiux',
    category: 'uiux',
    title: 'UI/UX Design',
    titleSi: 'UI/UX නිර්මාණය',
    description: 'Interfaces that balance visual polish, clarity, accessibility, and business goals.',
    descriptionSi: 'Visual polish, clarity, accessibility, සහ business goals අතර සමබරතාවය පවත්වාගෙන යන interfaces.',
    deliverables: ['Wireframes to design systems', 'Conversion-focused journeys'],
    deliverablesSi: ['Wireframes සිට design systems දක්වා', 'Conversion-focused journeys'],
    icon: Palette,
    tint: 'rgba(34, 211, 238, 0.16)',
  },
  {
    key: 'commerce',
    category: 'websites',
    title: 'E-Commerce Solutions',
    titleSi: 'E-Commerce විසඳුම්',
    description: 'Storefronts, product experiences, payments, and growth-oriented online selling tools.',
    descriptionSi: 'Storefronts, product experiences, payments, සහ growth-oriented online selling tools.',
    deliverables: ['Catalog strategy', 'Checkout optimization'],
    deliverablesSi: ['Catalog strategy', 'Checkout optimization'],
    icon: ShoppingCart,
    tint: 'rgba(14, 165, 233, 0.18)',
  },
  {
    key: 'support',
    category: 'software',
    title: 'Support & Maintenance',
    titleSi: 'සහාය සහ නඩත්තු කිරීම',
    description: 'Ongoing optimization, incident response, updates, and proactive system health checks.',
    descriptionSi: 'නිරන්තර optimization, incident response, updates, සහ proactive system health checks.',
    deliverables: ['24/7 support options', 'Continuous improvements'],
    deliverablesSi: ['24/7 support options', 'Continuous improvements'],
    icon: LifeBuoy,
    tint: 'rgba(125, 211, 252, 0.14)',
  },
]

export const portfolioCategories = [
  { key: 'all', label: 'All', labelSi: 'සියල්ල' },
  { key: 'websites', label: 'Websites', labelSi: 'වෙබ් අඩවි' },
  { key: 'mobile', label: 'Mobile Apps', labelSi: 'ජංගම යෙදුම්' },
  { key: 'pos', label: 'POS Systems', labelSi: 'POS පද්ධති' },
  { key: 'uiux', label: 'UI/UX', labelSi: 'UI/UX' },
  { key: 'software', label: 'Software', labelSi: 'මෘදුකාංග' },
]

export const portfolioProjects = [
  {
    id: 'slfireworks',
    category: 'websites',
    name: 'SL Fireworks',
    client: 'SL Fireworks',
    website: 'https://www.slfireworks.com',
    previewUrl: 'https://www.slfireworks.com',
    iframeAllowed: true,
    industry: 'Event commerce',
    industrySi: 'සිදුවීම් වාණිජකරණය',
    summary: 'A bold online storefront that makes premium fireworks products feel safe, exciting, and easy to buy.',
    summarySi: 'ප්‍රිමියම් fireworks products ආරක්ෂිත, ආකර්ෂණීය, සහ පහසුවෙන් මිලදී ගත හැකි ලෙස පෙන්වන වෙබ් storefront එකක්.',
    description:
      'Built to combine trust signals, promotional storytelling, and mobile-first browsing for peak seasonal demand.',
    descriptionSi:
      'පීක් seasonal demand සඳහා trust signals, promotional storytelling, සහ mobile-first browsing එකට එක්කර නිර්මාණය කර ඇත.',
    stack: ['React', 'Node.js', 'MySQL'],
    results: ['Premium product presentation', 'Mobile-first buying journey', 'Clear trust-building structure'],
    resultsSi: ['ප්‍රිමියම් නිෂ්පාදන ඉදිරිපත් කිරීම', 'Mobile-first buying journey', 'විශ්වාස ගොඩනඟන පැහැදිලි ව්‍යුහය'],
    metrics: ['Live platform', 'Fast checkout', 'SEO structure'],
    comparison: {
      before: 'Crowded category navigation and weak trust signals.',
      after: 'Cleaner hierarchy, premium visuals, and stronger buyer confidence.',
    },
    comparisonSi: {
      before: 'අධික ලෙස පිරුණු category navigation සහ දුර්වල trust signals.',
      after: 'පැහැදිලි hierarchy, ප්‍රිමියම් visuals, සහ වැඩි buyer confidence.',
    },
    caseStudy: {
      problem: 'The storefront needed stronger product storytelling and more trust at first glance.',
      solution: 'A premium commerce interface with cleaner structure, stronger product moments, and mobile-friendly browsing.',
      result: 'A more polished buying journey that feels safer and more credible during seasonal traffic spikes.',
    },
    caseStudySi: {
      problem: 'Storefront එකට product storytelling සහ trust වැඩි කිරීමට අවශ්‍ය විය.',
      solution: 'පැහැදිලි structure, දෘශ්‍ය බලය, සහ mobile-friendly browsing සහිත premium commerce interface එකක්.',
      result: 'Seasonal traffic spikes අතරතුර විශ්වාසදායී සහ polished buying journey එකක්.',
    },
    reel: ['Promo banners', 'Seasonal CTA flow', 'Trust badges'],
    gradient:
      'linear-gradient(135deg, rgba(34,211,238,0.22) 0%, rgba(59,130,246,0.18) 48%, rgba(6,182,212,0.05) 100%)',
    accent: '#38bdf8',
  },
  {
    id: 'retail-pos',
    category: 'pos',
    name: 'Retail POS Suite',
    client: 'Multi-branch retailer',
    website: '',
    previewUrl: '',
    iframeAllowed: false,
    industry: 'Point of sale',
    industrySi: 'Point of sale',
    summary: 'A fast cashier and inventory platform designed to reduce training time and improve checkout flow.',
    summarySi: 'Training time අඩු කර checkout flow වැඩි දියුණු කරන cashier සහ inventory platform එකක්.',
    description:
      'The interface streamlines billing, stock sync, customer history, and branch visibility from one system.',
    descriptionSi:
      'Billing, stock sync, customer history, සහ branch visibility එකම පද්ධතියකින් පාලනය කළ හැකි interface එකක්.',
    stack: ['React', 'Spring Boot', 'MySQL'],
    results: ['Faster operator workflow', 'Inventory visibility', 'Scalable branch management'],
    resultsSi: ['වේගවත් operator workflow', 'Inventory visibility', 'පරිමාණයට සුදුසු branch management'],
    metrics: ['POS ready', 'Inventory sync', 'Staff insights'],
    comparison: {
      before: 'Fragmented checkout flow and harder staff onboarding.',
      after: 'Single-screen clarity, inventory awareness, and faster operator actions.',
    },
    comparisonSi: {
      before: 'Fragmented checkout flow සහ staff onboarding අසීරු වීම.',
      after: 'Single-screen clarity, inventory awareness, සහ වේගවත් operator actions.',
    },
    caseStudy: {
      problem: 'Operators needed a cleaner flow with less friction during billing and stock updates.',
      solution: 'Designed a focused POS interface with faster scanning paths, clearer inventory states, and branch-aware controls.',
      result: 'Reduced cognitive load for staff and a stronger path to multi-branch scalability.',
    },
    caseStudySi: {
      problem: 'Billing සහ stock updates අතර operator friction අඩු කිරීමට අවශ්‍ය විය.',
      solution: 'වේගවත් scanning paths, පැහැදිලි inventory states, සහ branch-aware controls සමග focused POS interface එකක්.',
      result: 'Staff cognitive load අඩුවීම සහ multi-branch scalability සඳහා හොඳ මාවතක්.',
    },
    reel: ['Billing flow', 'Inventory cards', 'Branch sync'],
    gradient:
      'linear-gradient(135deg, rgba(14,165,233,0.18) 0%, rgba(56,189,248,0.12) 50%, rgba(59,130,246,0.08) 100%)',
    accent: '#60a5fa',
  },
  {
    id: 'medflow-mobile',
    category: 'mobile',
    name: 'MedFlow Mobile',
    client: 'Healthcare startup',
    website: '',
    previewUrl: '',
    iframeAllowed: false,
    industry: 'Mobile healthcare',
    industrySi: 'ජංගම සෞඛ්‍ය සේවා',
    summary: 'A scheduling and follow-up app concept built to make patient engagement faster and more human.',
    summarySi: 'Patient engagement වේගවත් සහ මානවීය කරවන scheduling සහ follow-up app concept එකක්.',
    description:
      'The experience focuses on onboarding clarity, notifications, appointment handling, and reassuring UI patterns.',
    descriptionSi:
      'Onboarding clarity, notifications, appointment handling, සහ reassuring UI patterns මත අවධානය යොමු කරන අත්දැකීමක්.',
    stack: ['Flutter', 'Firebase'],
    results: ['Trustworthy onboarding', 'Retention-focused reminders', 'Cross-platform delivery'],
    resultsSi: ['විශ්වාසදායී onboarding', 'Retention-focused reminders', 'Cross-platform delivery'],
    metrics: ['Mobile first', 'Realtime sync', 'Patient friendly'],
    comparison: {
      before: 'Cold appointment flow with little reassurance for new users.',
      after: 'Warmer onboarding, clearer reminders, and stronger trust cues.',
    },
    comparisonSi: {
      before: 'නව පරිශීලකයන්ට විශ්වාසය නොදෙන cold appointment flow එකක්.',
      after: 'උණුසුම් onboarding, පැහැදිලි reminders, සහ වැඩි trust cues.',
    },
    caseStudy: {
      problem: 'A healthcare product needed to feel simpler, calmer, and more reassuring on mobile.',
      solution: 'Structured the app around guided onboarding, reminder flows, and soft-trust visual language.',
      result: 'A more approachable concept with better retention potential and clearer patient journeys.',
    },
    caseStudySi: {
      problem: 'Healthcare product එකක් mobile මත සරල, සන්සුන්, සහ විශ්වාසදායී feel එකක් ලබාදිය යුතු විය.',
      solution: 'Guided onboarding, reminder flows, සහ soft-trust visual language වටා app එක සකස් කරන ලදී.',
      result: 'Retention potential වැඩි සහ patient journey පැහැදිලි වූ approachable concept එකක්.',
    },
    reel: ['Onboarding flow', 'Reminder notifications', 'Appointment states'],
    gradient:
      'linear-gradient(135deg, rgba(14,165,233,0.2) 0%, rgba(22,163,74,0.08) 54%, rgba(34,197,94,0.04) 100%)',
    accent: '#22d3ee',
  },
  {
    id: 'eduflow-portal',
    category: 'uiux',
    name: 'EduFlow Portal',
    client: 'Education brand',
    website: '',
    previewUrl: '',
    iframeAllowed: false,
    industry: 'Learning platform',
    industrySi: 'අධ්‍යාපන platform',
    summary: 'A learner portal concept that organizes courses, progress tracking, and support touchpoints.',
    summarySi: 'Courses, progress tracking, සහ support touchpoints සංවිධානය කරන learner portal concept එකක්.',
    description:
      'Designed to help training businesses present structured learning journeys while keeping dashboards simple.',
    descriptionSi:
      'Training businesses හට structured learning journeys පෙන්වීමට සහ dashboards සරලව තබා ගැනීමට නිර්මාණය කර ඇත.',
    stack: ['React', 'Spring Boot', 'Tailwind CSS'],
    results: ['Structured course navigation', 'Clear learner dashboards', 'Scalable content framework'],
    resultsSi: ['Structured course navigation', 'පැහැදිලි learner dashboards', 'Scalable content framework'],
    metrics: ['Dashboard UX', 'Role-based views', 'Content ready'],
    comparison: {
      before: 'Dense admin screens and unclear learner pathways.',
      after: 'A simpler dashboard hierarchy with clearer action states and progress visibility.',
    },
    comparisonSi: {
      before: 'Dense admin screens සහ පැහැදිලි නොවන learner pathways.',
      after: 'සරල dashboard hierarchy එකක්, පැහැදිලි action states, සහ progress visibility.',
    },
    caseStudy: {
      problem: 'Learners and administrators needed a cleaner structure for courses, roles, and progress tracking.',
      solution: 'Created a layered dashboard concept with role-based areas, better hierarchy, and calmer visual grouping.',
      result: 'A learning portal direction that feels easier to navigate and more scalable for future content.',
    },
    caseStudySi: {
      problem: 'Courses, roles, සහ progress tracking සඳහා learners සහ administrators හට පැහැදිලි structure එකක් අවශ්‍ය විය.',
      solution: 'Role-based areas, hierarchy වැඩි, සහ calmer visual grouping සමග layered dashboard concept එකක්.',
      result: 'පහසුවෙන් navigate කළ හැකි සහ future content සඳහා scalable වූ learning portal direction එකක්.',
    },
    reel: ['Dashboard states', 'Course progress', 'Role views'],
    gradient:
      'linear-gradient(135deg, rgba(96,165,250,0.18) 0%, rgba(14,165,233,0.16) 45%, rgba(37,99,235,0.06) 100%)',
    accent: '#38bdf8',
  },
]

export const testimonials = [
  {
    name: 'Ayesha Perera',
    avatar: '/avatars/client-ayesha.svg',
    role: 'Founder, Luxe Events',
    roleSi: 'නිර්මාතෘ, Luxe Events',
    initials: 'AP',
    quote:
      'CodeCraft Lanka translated our ideas into a polished digital experience that immediately improved trust with new customers.',
    quoteSi:
      'CodeCraft Lanka අපගේ අදහස් polish කළ ඩිජිටල් අත්දැකීමක් බවට පරිවර්තනය කර නව ගනුදෙනුකරුවන්ගේ විශ්වාසය ඉක්මනින්ම වැඩි කළා.',
    accent: 'linear-gradient(135deg, rgba(34,211,238,0.5), rgba(59,130,246,0.8))',
  },
  {
    name: 'Ravindu Silva',
    avatar: '/avatars/client-ravindu.svg',
    role: 'Director, Urban Retail Hub',
    roleSi: 'අධ්‍යක්ෂ, Urban Retail Hub',
    initials: 'RS',
    quote:
      'Their workflow was clear, communication was strong, and the final POS system genuinely made staff operations faster.',
    quoteSi:
      'ඔවුන්ගේ workflow පැහැදිලි විය, communication ශක්තිමත් විය, සහ අවසාන POS system එක staff operations සැබවින්ම වේගවත් කළා.',
    accent: 'linear-gradient(135deg, rgba(56,189,248,0.42), rgba(14,165,233,0.78))',
  },
  {
    name: 'Nethmi Fernando',
    avatar: '/avatars/client-nethmi.svg',
    role: 'Co-founder, MedFlow Labs',
    roleSi: 'සහ-නිර්මාතෘ, MedFlow Labs',
    initials: 'NF',
    quote:
      'From interface design to launch planning, the team brought a level of quality that felt on par with international studios.',
    quoteSi:
      'Interface design සිට launch planning දක්වා කණ්ඩායම ජාත්‍යන්තර studios සමග සමානව දැනෙන quality level එකක් ගෙනාවා.',
    accent: 'linear-gradient(135deg, rgba(96,165,250,0.45), rgba(37,99,235,0.8))',
  },
  {
    name: 'Dinuka Jayasinghe',
    avatar: '/avatars/client-dinuka.svg',
    role: 'Managing Partner, SkillForge Academy',
    roleSi: 'කළමනාකරණ හවුල්කරු, SkillForge Academy',
    initials: 'DJ',
    quote:
      'The website looks premium, performs smoothly, and gives prospects immediate confidence in our brand.',
    quoteSi:
      'වෙබ් අඩවිය ප්‍රිමියම් ලෙස පෙනෙයි, මෘදු ලෙස ක්‍රියා කරයි, සහ prospects හට අපගේ brand එක ගැන වහාම විශ්වාසයක් ලබාදෙයි.',
    accent: 'linear-gradient(135deg, rgba(125,211,252,0.45), rgba(14,165,233,0.72))',
  },
]

export const performanceStats = [
  {
    value: 50,
    suffix: '+',
    label: 'Projects delivered',
    labelSi: 'පිටුදැකූ ව්‍යාපෘති',
    description: 'Across websites, software products, and business systems.',
    descriptionSi: 'වෙබ් අඩවි, මෘදුකාංග නිෂ්පාදන, සහ ව්‍යාපාරික පද්ධති හරහා.',
    icon: Rocket,
  },
  {
    value: 20,
    suffix: '+',
    label: 'Active clients',
    labelSi: 'සක්‍රිය ගනුදෙනුකරුවන්',
    description: 'Serving brands that need speed, trust, and long-term support.',
    descriptionSi: 'වේගය, විශ්වාසය, සහ දිගුකාලීන හවුල්කාරී චින්තනය අවශ්‍ය සන්නාමයන් සඳහා.',
    icon: BriefcaseBusiness,
  },
  {
    value: 99,
    suffix: '%',
    label: 'Satisfaction target',
    labelSi: 'සතුටුභාව ඉලක්කය',
    description: 'Built around clarity, responsiveness, and measurable outcomes.',
    descriptionSi: 'Clarity, responsiveness, සහ measurable outcomes මත ගොඩනඟා ඇත.',
    icon: ShieldCheck,
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Support availability',
    labelSi: 'සහාය ලබාගත හැකි වේලාව',
    description: 'Reliable maintenance pathways for active client projects.',
    descriptionSi: 'සක්‍රිය client projects සඳහා විශ්වාසදායී maintenance pathways.',
    icon: Headphones,
  },
]

export const techStack = [
  { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#7ddc7a' },
  { name: 'Flutter', icon: SiFlutter, color: '#58c3ff' },
  { name: 'Node.js', icon: FaNodeJs, color: '#7cc26e' },
  { name: 'MySQL', icon: SiMysql, color: '#4db7ff' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Firebase', icon: SiFirebase, color: '#ffca45' },
]

export const socialLinks = [
  { label: 'WhatsApp', href: `https://wa.me/${companyInfo.whatsapp}`, icon: FaWhatsapp },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/malith-shehan-95b506279/', icon: FaLinkedinIn },
  { label: 'GitHub', href: 'https://github.com/MalithShehan', icon: FaGithub },
]

export const contactCards = [
  {
    title: 'Email us',
    titleSi: 'Email කරන්න',
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    icon: Mail,
  },
  {
    title: 'Call us',
    titleSi: 'අමතන්න',
    value: companyInfo.phone,
    href: 'tel:+94725592323',
    icon: Phone,
  },
  {
    title: 'Visit us',
    titleSi: 'අප වෙත එන්න',
    value: companyInfo.location,
    href: 'https://maps.google.com/?q=Galle,Sri Lanka',
    icon: MapPin,
  },
]

export const whyChooseItems = [
  {
    icon: Clock3,
    title: 'Fast delivery',
    titleSi: 'වේගවත් delivery',
    description: 'Rapid onboarding and milestone clarity to keep projects moving.',
    descriptionSi: 'ව්‍යාපෘති ඉදිරියට ගෙන යන rapid onboarding සහ milestone clarity.',
  },
  {
    icon: Code2,
    title: 'Clean code',
    titleSi: 'පැහැදිලි code',
    description: 'Maintainable architecture and production-ready engineering standards.',
    descriptionSi: 'Maintainable architecture සහ production-ready engineering standards.',
  },
  {
    icon: Headphones,
    title: '24/7 support',
    titleSi: '24/7 support',
    description: 'Reliable support routes for launch, maintenance, and urgent requests.',
    descriptionSi: 'Launch, maintenance, සහ urgent requests සඳහා විශ්වාසදායී support routes.',
  },
  {
    icon: Palette,
    title: 'Modern design',
    titleSi: 'නවීන design',
    description: 'Premium interface language inspired by global SaaS and startup brands.',
    descriptionSi: 'Global SaaS සහ startup brands වලින් ආනුභාව ලත් premium interface language.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure systems',
    titleSi: 'ආරක්ෂිත systems',
    description: 'Security-minded decisions across infrastructure, workflows, and user access.',
    descriptionSi: 'Infrastructure, workflows, සහ user access හරහා security-minded decisions.',
  },
]

export const processTimeline = [
  {
    icon: MessageSquareMore,
    step: 'Discussion',
    stepSi: 'සාකච්ඡාව',
    description: 'Understand goals, constraints, users, and what success needs to look like.',
    descriptionSi: 'Goals, constraints, users, සහ success එක කෙසේ පෙනිය යුතුද යන්න තේරුම්ගැනීම.',
  },
  {
    icon: DraftingCompass,
    step: 'Planning',
    stepSi: 'සැලසුම් කිරීම',
    description: 'Define scope, architecture, UX priorities, and a realistic delivery path.',
    descriptionSi: 'Scope, architecture, UX priorities, සහ realistic delivery path එක නිර්වචනය කිරීම.',
  },
  {
    icon: Palette,
    step: 'Design',
    stepSi: 'නිර්මාණය',
    description: 'Shape premium interfaces, prototypes, and trust-building interaction patterns.',
    descriptionSi: 'Premium interfaces, prototypes, සහ trust-building interaction patterns සකස් කිරීම.',
  },
  {
    icon: Workflow,
    step: 'Development',
    stepSi: 'සංවර්ධනය',
    description: 'Build, test, refine, and optimize for responsiveness, accessibility, and speed.',
    descriptionSi: 'Build, test, refine, සහ responsiveness, accessibility, speed සඳහා optimize කිරීම.',
  },
  {
    icon: Rocket,
    step: 'Launch',
    stepSi: 'දියත් කිරීම',
    description: 'Deploy confidently, monitor the rollout, and support post-launch evolution.',
    descriptionSi: 'විශ්වාසයෙන් deploy කර rollout එක පරීක්ෂා කර post-launch evolution සහාය දීම.',
  },
]

export const assistantQuickActions = [
  {
    key: 'quote',
    icon: Bot,
    label: 'Get a quote',
    labelSi: 'Quote එකක් ගන්න',
    response:
      'Tell us the type of product, your timeline, and your priority features. We can map a practical quote path from there.',
    responseSi:
      'නිෂ්පාදන වර්ගය, කාලසටහන, සහ ප්‍රමුඛ features අපට කියන්න. එතැනින් practical quote path එකක් සැලසුම් කළ හැක.',
  },
  {
    key: 'roadmap',
    icon: Sparkles,
    label: 'Project roadmap',
    labelSi: 'Project roadmap',
    response:
      'A typical flow starts with discovery, then planning, interface design, development, QA, and launch support.',
    responseSi:
      'සාමාන්‍ය ක්‍රියාවලිය discovery, planning, interface design, development, QA, සහ launch support යන අදියර වලින් සමන්විත වේ.',
  },
  {
    key: 'support',
    icon: Headphones,
    label: 'Support options',
    labelSi: 'Support options',
    response:
      'We support active projects with maintenance, iterations, launch follow-up, and fast escalation routes.',
    responseSi:
      'Maintenance, iterations, launch follow-up, සහ වේගවත් escalation routes සමග active projects අපි සහාය දක්වයි.',
  },
]