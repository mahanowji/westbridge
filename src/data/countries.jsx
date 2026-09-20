export const countries = [
  {
    id: 'australia',
    code: 'AU',
    flag: '🇦🇺',
    name: { fa: 'استرالیا', en: 'Australia' },
    authority: { fa: 'اداره امور داخلی استرالیا (Home Affairs)', en: 'Department of Home Affairs' },
    blurb: {
      fa: 'سیستم امتیازی شفاف، بازار کار متنوع و مسیرهای منطقه‌ای متعدد برای اقامت دائم.',
      en: 'A transparent points system, a diverse labour market, and multiple regional routes to permanent residency.',
    },
  },
  {
    id: 'canada',
    code: 'CA',
    flag: '🇨🇦',
    name: { fa: 'کانادا', en: 'Canada' },
    authority: { fa: 'اداره مهاجرت، پناهندگی و شهروندی کانادا (IRCC)', en: 'Immigration, Refugees and Citizenship Canada (IRCC)' },
    blurb: {
      fa: 'اکسپرس اینتری، برنامه‌های استانی (PNP) و سریع‌ترین مسیرها برای رسیدن به شهروندی.',
      en: 'Express Entry, Provincial Nominee Programs, and some of the fastest routes to citizenship.',
    },
  },
  {
    id: 'uk',
    code: 'UK',
    flag: '🇬🇧',
    name: { fa: 'بریتانیا', en: 'United Kingdom' },
    authority: { fa: 'وزارت کشور بریتانیا (Home Office)', en: 'UK Home Office' },
    blurb: {
      fa: 'مسیرهای اسپانسرشیپ کاری، تحصیل در دانشگاه‌های برتر و اقامت دائم (ILR) پس از ۵ سال.',
      en: 'Employer-sponsored work routes, world-ranked universities, and settlement (ILR) after five years.',
    },
  },
  {
    id: 'germany',
    code: 'DE',
    flag: '🇩🇪',
    name: { fa: 'آلمان', en: 'Germany' },
    authority: { fa: 'اداره فدرال مهاجرت و پناهندگان (BAMF) و سفارت آلمان', en: 'Federal Office for Migration and Refugees (BAMF)' },
    blurb: {
      fa: 'بزرگ‌ترین اقتصاد اروپا، کارت شانس کاری (Chancenkarte)، بلوکارت اتحادیه اروپا و آوسبیلدونگ رایگان.',
      en: "Europe's largest economy, Opportunity Card (Chancenkarte), EU Blue Card, and tuition-free vocational training.",
    },
  },
  {
    id: 'netherlands',
    code: 'NL',
    flag: '🇳🇱',
    name: { fa: 'هلند', en: 'Netherlands' },
    authority: { fa: 'سرویس مهاجرت و تابعیت هلند (IND)', en: 'Immigration and Naturalisation Service (IND)' },
    blurb: {
      fa: 'محیط بین‌المللی با تسلط کامل به انگلیسی، ویزای نخبگان و سال جهت‌یابی (Zoekjaar)، و استارتاپ‌های پیشرو.',
      en: 'English-friendly global tech hub, Orientation Year (Zoekjaar) for graduates, highly skilled migrant visas, and vibrant startups.',
    },
  },
  {
    id: 'finland',
    code: 'FI',
    flag: '🇫🇮',
    name: { fa: 'فنلاند', en: 'Finland' },
    authority: { fa: 'اداره مهاجرت فنلاند (Migri)', en: 'Finnish Immigration Service (Migri)' },
    blurb: {
      fa: 'شادترین کشور جهان با پیشرفته‌ترین سیستم آموزشی، اجازه اقامت تخصص‌های خاص، استارتاپ و فرآیند سریع اقامت دائم.',
      en: "The world's happiest country, world-class education, fast-track specialist permits, startup pathways, and exceptional quality of life.",
    },
  },
  {
    id: 'spain',
    code: 'ES',
    flag: '🇪🇸',
    name: { fa: 'اسپانیا', en: 'Spain' },
    authority: { fa: 'وزارت ورود، تامین اجتماعی و مهاجرت اسپانیا', en: 'Ministry of Inclusion, Social Security and Migration' },
    blurb: {
      fa: 'اقامت تمکن مالی (غیرکاری)، ویزای نومد دیجیتال با مالیات ترجیحی، ویزای طلایی، و سبک زندگی مدیترانه‌ای بی‌نظیر.',
      en: 'Non-Lucrative Residence, Digital Nomad Visa with preferential tax status, Golden Visa, and an enviable Mediterranean lifestyle.',
    },
  },
  {
    id: 'italy',
    code: 'IT',
    flag: '🇮🇹',
    name: { fa: 'ایتالیا', en: 'Italy' },
    authority: { fa: 'وزارت کشور ایتالیا و اداره پلیس محلی (Questura)', en: 'Ministry of the Interior & Questura' },
    blurb: {
      fa: 'بورسیه‌های استانی فول‌فاند دانشگاهی (DSU)، ویزای نومد دیجیتال جدید، اقامت انتخابی و مسیرهای خویش‌فرمایی Decreto Flussi.',
      en: 'Generous regional study scholarships (DSU), newly launched Digital Nomad Visa, Elective Residence, and Decreto Flussi work quotas.',
    },
  },
  {
    id: 'new-zealand',
    code: 'NZ',
    flag: '🇳🇿',
    name: { fa: 'نیوزیلند', en: 'New Zealand' },
    authority: { fa: 'اداره مهاجرت نیوزیلند (Immigration New Zealand)', en: 'Immigration New Zealand (INZ)' },
    blurb: {
      fa: 'مسیرهای متنوع کاری، گرین لیست مشاغل مورد نیاز، تحصیل، سرمایه‌گذاری و اقامت دائم در نیوزیلند.',
      en: 'Diverse work pathways, the in-demand Green List, study, investment, and permanent residence routes.',
    },
  },
];

export const countryIds = countries.map((c) => c.id);

export function getCountry(id) {
  return countries.find((c) => c.id === id);
}
