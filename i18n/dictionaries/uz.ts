import type { Dictionary } from "./en";

const uz: Dictionary = {
  common: {
    nav: {
      home: "Bosh sahifa",
      work: "Ishlar",
      about: "Men haqimda",
      experience: "Tajriba",
      education: "Ta'lim",
      services: "Xizmatlar",
      skills: "Ko'nikmalar",
      blog: "Blog",
      contact: "Aloqa",
      privacy: "Maxfiylik",
    },
    letsTalk: "Bog'lanish",
    toggleMenu: "Menyuni ochish",
    language: "Til",
    backHome: "Bosh sahifaga",
    name: "Botirjon Shokirov",
  },

  meta: {
    siteTitle: "Botirjon Shokirov | Bronit asoschisi, full-stack muhandis",
    siteDescription:
      "Botirjon Shokirov — Bronit asoschisi va O'zbekistonlik full-stack dasturiy muhandis. TypeScript, React, Next.js va Python.",
    about: {
      title: "Men haqimda | Botirjon Shokirov",
      description: "Botirjon Shokirov kim: Bronit asoschisi va O'zbekistonlik full-stack muhandis.",
    },
    projects: {
      title: "Bronit | Botirjon Shokirov",
      description:
        "Bronit — O'zbekistondagi mehmonxona va restoranlar uchun tizim: boshqaruv, QR menyu, POS, xonadagi televizor va AI chat-bot bir joyda.",
    },
    experience: {
      title: "Tajriba | Botirjon Shokirov",
      description: "Botirjon Shokirov qayerlarda ishlagan va nimalar yaratgan.",
    },
    education: {
      title: "Ta'lim | Botirjon Shokirov",
      description: "Botirjon Shokirovning kompyuter fanlari bo'yicha ta'limi.",
    },
    services: {
      title: "Xizmatlar | Botirjon Shokirov",
      description: "Botirjon Shokirov yaratadigan landing sahifalar, veb-ilovalar va full-stack tizimlar.",
    },
    skills: {
      title: "Ko'nikmalar | Botirjon Shokirov",
      description: "Botirjon Shokirov ishlaydigan texnologiyalar va vositalar.",
    },
    blog: {
      title: "Blog | Botirjon Shokirov",
      description: "Bronitni yaratish haqida yozuvlar: mahsulot, arxitektura va muhandislik.",
    },
    contact: {
      title: "Aloqa | Botirjon Shokirov",
      description: "Botirjon Shokirov bilan Telegram, Instagram yoki email orqali bog'laning.",
    },
  },

  home: {
    eyebrow: "Bronit asoschisi · Dasturiy muhandis",
    timeIn: "Toshkentda",
    headline: { before: "Men haqiqiy biznes\n", em: "ishlaydigan", after: "\ndasturlar yarataman." },
    intro: {
      before: "Men Botirjon Shokirov, full-stack muhandisman. {years} yildan ortiq veb-ilovalar, API va AI imkoniyatlarini yaratib kelaman. Shuningdek, O'zbekistondagi mehmonxona va restoranlar uchun tizim — ",
      link: "Bronit",
      after: " asoschisiman.",
    },
    seeWork: "Ishlarni ko'rish",
    getInTouch: "Bog'lanish",
    companyEyebrow: "Mening kompaniyam",
    openShowcase: "Loyiha haqida batafsil",
    visit: "Ochish",
    whatIDo: "Nima qilaman",
    whatIDoTitle: { before: "Butun stek, ", em: "boshidan oxirigacha." },
    disciplines: [
      {
        title: "Frontend",
        text: "React va Next.js'da tez yuklanadigan, oson o'qiladigan va mehmonxona resepshenidagi telefonda ham qulay interfeyslar.",
      },
      {
        title: "Backend",
        text: "API, ma'lumotlar modeli va mahsulotni tirik saqlaydigan zerikarli qismlar: avtorizatsiya, to'lovlar, navbatlar, deploy.",
      },
      {
        title: "AI va avtomatlashtirish",
        text: "Demoda qolib ketmaydigan, xodimlarga haqiqatan yordam beradigan chat-botlar, yuzni tanish va LLM imkoniyatlari.",
      },
    ],
    stats: {
      years: "Yillik tajriba",
      projects: "Bajarilgan loyihalar",
      clients: "Mijozlar",
      products: "Bronit ichidagi mahsulotlar",
    },
    technologies: "Texnologiyalar",
    followEyebrow: "Kuzatib boring",
    followTitle: { before: "Men ", em: "ochiq quraman." },
    channels: {
      instagram: "Dastur yaratish va muhandisning kundalik hayoti haqida qisqa videolar.",
      youtube: "Batafsil tahlillar: haqiqiy loyihalar, vositalar va hammasi qanday qurilgani.",
      channel: "Kundalik: nimani chiqaryapman, nimani o'rganyapman va nima haqida o'ylayapman.",
    },
    latestPosts: "Blogdan",
    allPosts: "Barcha maqolalar",
  },

  bronit: {
    tagline: "Butun mehmonxona uchun yagona tizim.",
    summary:
      "Bronit — O'zbekistondagi mehmonxona va restoranlar uchun dastur. Bronlar va kalendar, xonaga buyurtma qabul qiladigan QR menyu, xonalardagi televizorlar, kassa va mehmon hisoblari: Bronit resepshen, oshxona va mehmonni bitta oynada bog'laydi.",
    facts: [
      { label: "Rol", value: "Asoschi va muhandis" },
      { label: "Turi", value: "SaaS platforma" },
      { label: "Kim uchun", value: "Mehmonxona va restoranlar" },
      { label: "Bozor", value: "O'zbekiston · EN / UZ / RU" },
    ],
    products: [
      {
        name: "Boshqaruv",
        kind: "Veb-panel",
        text: "Bronlar, xizmatlar, mijozlar bilan shartnomalar va hisobotlar bitta panelda: sig'imni hisobga oladigan kalendar, to'lov va depozitlar, har bir mehmonxona uchun xodim rollari.",
      },
      {
        name: "QR menyu",
        kind: "Mehmon uchun ilova",
        text: "Mehmon xonadagi kodni skanerlab buyurtma beradi. Xodimlar uni darhol Telegram'da oladi, mehmon esa buyurtmani telefonida kuzatadi.",
      },
      {
        name: "POS",
        kind: "Sensorli terminal",
        text: "Restoran va oshxona uchun stollar, buyurtmalar va cheklar — kiosk rejimidagi Windows kassada.",
      },
      {
        name: "TV",
        kind: "Xonadagi Android TV",
        text: "Har bir xonadagi ekran: efir TV, mehmonxona haqida ma'lumot, xizmatlar, shahar bo'yicha qo'llanma, ob-havo va QR orqali Wi-Fi.",
      },
      {
        name: "AI chat-bot",
        kind: "Mehmon yordamchisi",
        text: "Mehmonlarga kecha-kunduz javob beradi va haqiqiy so'rovlarni ularni bajara oladigan xodimlarga uzatadi.",
      },
      {
        name: "Telegram bildirishnomalari",
        kind: "Xodimlar uchun",
        text: "Yangi bron yoki xonaga buyurtma soniyalar ichida kerakli jamoaga yetib boradi — ishga olish va yopish tugmalari bilan.",
      },
    ],
    results: [
      { value: "15 daq", label: "resepshenda har bir bronda tejaladi" },
      { value: "+30%", label: "TV va QR menyu orqali ko'proq buyurtma" },
      { value: "70%", label: "mehmon so'rovlari avtomatik yo'naltiriladi" },
    ],
  },

  projects: {
    eyebrow: "Men asos solgan loyiha",
    ideaEyebrow: "G'oya",
    idea: {
      before: "Bizdagi ko'plab mehmonxonalar hali ham qog'oz jurnallar va Excel jadvallarida ishlaydi. Bronit ularni resepshen, oshxona va mehmon uchun umumiy bo'lgan ",
      em: "yagona tizim",
      after: " bilan almashtiradi.",
    },
    insideEyebrow: "Platforma ichida",
    insideTitle: { before: "Oltita mahsulot, ", em: "bitta login." },
    ordersTitle: "Jonli buyurtmalar",
    ordersText:
      "Mehmon xonadan telefoni orqali buyurtma beradi. Xodimlar uni darhol Telegram'da ko'radi va bitta bosish bilan olib boradi: qabul qilindi, tayyor, yetkazildi. Mehmon ekrani har bir qadamni ko'rsatadi.",
    resultsEyebrow: "Mehmonxona uchun nima o'zgaradi",
    resultsSource: "Raqamlar quyidagi saytda e'lon qilingan:",
    builtWith: "Texnologiyalar",
    ctaTitle: { before: "Ishlayotganini ", em: "ko'ring." },
    ctaText: "Bronit ishlamoqda va bugun mehmonxonalar undan foydalanmoqda. Ishni baholashning eng yaxshi yo'li — uni ochib ko'rish.",
    altHome: "Bronit sayti: butun mehmonxona yagona tizimda",
    altErp: "Bronit ERP buyurtmalar paneli va telefondagi mehmon QR menyusi",
    altProducts: "Bronit mahsulotlari: ERP joriy etish, boshqaruv tizimi va maxsus yechimlar",
    altPlatform: "Bronit: mehmonxona ishi yagona platformada",
    openSite: "Ochish",
  },

  services: {
    eyebrow: "Nima taklif qilaman",
    title: { before: "Sizning ", em: "mahsulotingiz uchun." },
    intro:
      "Bitta landing sahifadan admin paneli bor to'liq tizimgacha — tez, ishonchli va qulay mahsulotlar yarataman.",
    items: [
      {
        title: "Landing sahifalar",
        description:
          "Nima sotayotganingizni aniq tushuntiradigan va tashrif buyuruvchilarni so'rovga aylantiradigan tez, SEO'ga tayyor sahifalar.",
        features: ["SEO sozlash", "Tez yuklanish", "Har qanday ekranda ishlaydi", "Maxsus animatsiyalar"],
      },
      {
        title: "Veb-ilovalar",
        description:
          "React va Next.js'dagi interaktiv ilovalar: ishlashda tez va foydalanuvchilar uchun sodda.",
        features: ["React / Next.js", "Holatni boshqarish", "Silliq o'tishlar", "API integratsiyasi"],
      },
      {
        title: "Full-stack tizimlar",
        description:
          "To'liq mahsulotlar: backend, ma'lumotlar bazasi, avtorizatsiya va jamoangiz biznesni haqiqatan boshqaradigan admin panel.",
        features: ["Ma'lumotlar bazasini loyihalash", "Xavfsiz avtorizatsiya", "Admin panellar", "Telegram integratsiyalari"],
      },
    ],
    discuss: "Loyihani muhokama qilish",
    pricingTitle: "Narx",
    pricingText:
      "Har bir loyiha har xil, shuning uchun narx hajmga qarab belgilanadi. Nima kerakligini yozing — aniq hisob-kitob yuboraman.",
    discussTelegram: "Telegram'da yozish",
  },

  about: {
    eyebrow: "Men haqimda",
    title: { before: "Muhim bo'lgan dasturlarni ", em: "yarataman." },
    paragraphs: [
      "Men O'zbekistonlik dasturiy muhandis va Bronit asoschisiman. Bronit — mehmonxona va restoranlar bronlar, xonaga buyurtmalar, xonalardagi televizorlar va kassani bir joydan boshqaradigan tizim.",
      "2023-yil yanvarida talabalarga yordam berish va frilans loyihalardan boshladim. O'shandan beri butun stek bo'ylab ishlayman: frontda React va Next.js, backendda Node.js va Python, ularning ostida PostgreSQL va MongoDB.",
      "Kompyuter fanlari bo'yicha o'qiganman, asosan mashinali o'qitish, bulutli veb-ilovalar va sun'iy intellekt yo'nalishida. Bo'sh vaqtimda shaxmat va stol tennisi o'ynayman.",
    ],
    facts: {
      location: "O'zbekiston",
      experience: "{years} yillik tajriba",
      role: "Asoschi va full-stack muhandis",
    },
    available: "Yangi loyihalarga ochiqman",
    techTitle: "Texnologiyalar",
  },

  experience: {
    eyebrow: "Tajriba",
    title: { before: "Qayerda ", em: "ishlaganman." },
    current: "Hozir",
    items: [
      {
        role: "Asoschi",
        company: "Bronit",
        period: "Hozir",
        location: "O'zbekiston",
        current: true,
        highlights: [
          "Mehmonxona va restoranlar uchun Bronit dasturini yaratyapman: boshqaruv, QR menyu, POS, xonadagi TV, AI chat-bot va Telegram bildirishnomalari.",
          "Butun platforma bo'yicha mahsulot va ishlab chiqish uchun javobgarman.",
        ],
      },
      {
        role: "Dasturiy muhandis",
        company: "AVADirect Custom Computers",
        period: "2025-yil iyun — hozir",
        location: "Ofisda",
        current: true,
        highlights: [
          "Buyurtma asosidagi kompyuter konfiguratsiyasi va elektron tijorat tizimlarini yarataman.",
          "Zamonaviy veb-texnologiyalarda full-stack ishlab chiqish.",
        ],
      },
      {
        role: "Dasturiy muhandis",
        company: "Frilans",
        period: "2023-yil yanvar — hozir",
        location: "Masofaviy",
        current: true,
        highlights: [
          "50 dan ortiq talabaga JavaScript, Python, mashinali o'qitish va virtual mashinalar bo'yicha loyihalarda yordam berdim — barchasi muvaffaqiyatli topshirildi.",
          "15 dan ortiq faol mijozga ularning ehtiyojiga mos dasturlar bilan xizmat ko'rsataman.",
          "Mijozlar bilan aniq muloqot va talablarni ishlaydigan mahsulotga aylantirish.",
          "Xatolarni tuzatish, optimallashtirish va boshidan oxirigacha amalga oshirish.",
        ],
      },
      {
        role: "Dasturiy muhandis · Backend dasturchi",
        company: "Premium Soft",
        period: "2025-yil mart — may",
        location: "Masofaviy",
        current: false,
        highlights: [
          "Backend servislar va REST API'larni ishlab chiqdim va qo'llab-quvvatladim.",
          "Turli jamoalar bilan birga ishonchli backend yechimlarini yetkazib berdim.",
        ],
      },
      {
        role: "Dasturiy muhandis",
        company: "RadCode",
        period: "2022-yil sentyabr — 2023-yil dekabr",
        location: "Varshava, Polsha",
        current: false,
        highlights: [
          "Qo'llab-quvvatlash oson bo'lgan toza, qayta ishlatiladigan kod yozdim.",
          "Eski stillarni MUI 5 ga ko'chirdim — ilova tezligi va ko'rinishi 55% ga yaxshilandi.",
          "Prisma ORM bilan ko'p ishladim va kod bazasining bir qismini TypeORM'dan Prisma'ga ko'chirdim.",
          "Katta hamkasblar rahbarligida kod unumdorligini 30% ga oshirdim.",
        ],
      },
    ],
  },

  education: {
    eyebrow: "Ta'lim",
    title: { before: "Qayerda ", em: "o'qiganman." },
    university: "Iqtisodiyot va gumanitar fanlar universiteti",
    degree: "Kompyuter fanlari bakalavri",
    period: "2022-yil mart — 2026-yil fevral",
    location: "Varshava, Polsha",
    coursesTitle: "Asosiy fanlar",
    courses: [
      "Algoritmlar va ma'lumotlar tuzilmalari",
      "Hisoblash tizimlari arxitekturasi",
      "REST API ishlab chiqish",
      "Ma'lumotlar bazalari",
      "Mashinali o'qitish",
      "Chuqur o'qitish",
      "Bulutli veb-ilovalar",
      "Operatsion tizimlar",
      "Tarmoq texnologiyalari",
      "Obyektga yo'naltirilgan dasturlash",
      "Dasturiy injiniring",
      "Sun'iy intellekt",
    ],
  },

  skills: {
    eyebrow: "Ko'nikmalar",
    title: { before: "Men ishlaydigan ", em: "vositalar." },
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Ma'lumotlar bazalari",
      ai: "AI va ML",
      devops: "DevOps va vositalar",
      other: "Boshqalar",
    },
  },

  contact: {
    eyebrow: "Aloqa",
    title: { before: "Keling, birga\n", em: "haqiqiy", after: " narsa quramiz." },
    intro: "Telegram va Instagram'da eng tez javob beraman. Loyiha, ish taklifi yoki shunchaki salom yozing.",
    labels: {
      telegram: "Telegram",
      instagram: "Instagram",
      email: "Email",
      channel: "Telegram kanal",
      youtube: "YouTube",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },

  footer: {
    title: { before: "Yaratiladigan\n", em: "mahsulotingiz", after: " bormi?" },
    cta: "Suhbatni boshlash",
    pages: "Sahifalar",
    elsewhere: "Ijtimoiy tarmoqlar",
  },

  blog: {
    eyebrow: "Blog",
    title: { before: "Bronitni ", em: "yaratish", after: " haqida yozuvlar." },
    intro: "Mahsulot qanday ishlaydi, nega aynan shunday qurilgan va yo'lda nimalarni o'rganyapman.",
    readPost: "O'qish",
    minRead: "daqiqa o'qish",
    backToBlog: "Barcha maqolalar",
    morePosts: "Boshqa maqolalar",
    empty: "Hozircha maqolalar yo'q.",
    simplified: "Soddalashtirilgan",
  },
};

export default uz;
