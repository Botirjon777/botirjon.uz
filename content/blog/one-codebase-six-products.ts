import type { Post } from "./types";

const eslintRule = `// eslint.config.mjs (simplified)
{
  files: ["src/services/core/**"],
  rules: {
    "no-restricted-imports": ["error", {
      patterns: [{
        group: ["@/services/menu", "@/services/menu/**",
                "@/services/tv",   "@/services/tv/**"],
        message: "core must not depend on a module: a business may not have it.",
      }],
    }],
  },
}`;

const contribution = `// Simplified. Core defines the shape and never imports a module.
export interface ModuleContribution {
  key: string;
  dashboardStats?: (companyId: string) => Promise<ModuleStat[]>;
  bookingFood?: (food: BookingFood) => Promise<void>;
}

const registry = new Map<string, ModuleContribution>();
export function registerModule(c: ModuleContribution) {
  registry.set(c.key, c);
}

// instrumentation.ts: the one place that knows both sides.
registerModule(menuContribution);
registerModule(tvContribution);`;

const post: Post = {
  slug: "one-codebase-six-products",
  date: "2026-11-22",
  readingMinutes: 5,
  tags: ["bronit", "architecture", "typescript"],
  content: {
    en: {
      title: "One codebase, six products: how Bronit is put together",
      excerpt:
        "Management, QR menu, POS, in-room TV, an AI chat bot and Telegram alerts. Every hotel buys a different mix, so the code has to work with any combination of modules missing.",
      body: [
        {
          type: "p",
          text: "Bronit sells six things: the management dashboard, the QR menu, POS, in-room TV, an AI chat bot for guests and Telegram alerts for staff. A hotel rarely buys all of them. One wants bookings and nothing else. Another starts with the menu and adds TV a year later.",
        },
        {
          type: "p",
          text: "That one fact shaped the architecture more than anything else. The code has to work with any mix of modules, including when most of them are missing.",
        },
        { type: "h2", text: "What lives where" },
        {
          type: "p",
          text: "The core product at [erp.bronit.uz](https://erp.bronit.uz) is one Next.js app in TypeScript. Bookings, the calendar, contracts, the menu, TV, Telegram, fiscal receipts and the hotel website builder are separate **services** inside it. The data lives in PostgreSQL through Drizzle; it moved there from MongoDB with Mongoose.",
        },
        {
          type: "p",
          text: "Some products run on their own because they run on different hardware or for different people. The TV launcher is a Flutter app installed on the room TVs. The POS is a Windows touchscreen terminal that opens the live POS screens in kiosk mode. The restaurant product and our internal console are separate apps.",
        },
        { type: "h2", text: "Layers the compiler enforces" },
        {
          type: "p",
          text: "With one big codebase the danger is that everything slowly starts importing everything. A code review catches some of that. I wanted the build to catch all of it, so the layers are written as ESLint `no-restricted-imports` rules set to **error**:",
        },
        {
          type: "list",
          items: [
            "`app/` is the composition root and may import anything.",
            "`shared/` may not import any service or anything from `app/`.",
            "A service reaches another service only through its door, for example `@/services/tv`, never through a path inside it. Inside its own folder a service uses relative imports, so any alias path into a service is always a boundary crossing.",
            "`core` may not import `menu`, `tv` or `website` at all.",
          ],
        },
        { type: "code", lang: "js", code: eslintRule },
        { type: "h2", text: "Core must not know about modules" },
        {
          type: "p",
          text: "The last rule is the important one. The owner dashboard belongs to core, but it should show kitchen orders if the hotel has the menu and TV requests if it has TV. If core imported the menu to get those numbers, every hotel without the menu would still carry it, and every change to the menu could break bookings.",
        },
        {
          type: "p",
          text: "The answer is inversion. Core defines an interface, a **contribution**, that describes what a module may add: figures for the dashboard, rows for today's list, revenue, topics for Telegram. Each module exports its own contribution. One startup file, `instrumentation.ts`, sits outside both sides and registers them before the server handles its first request.",
        },
        { type: "code", lang: "ts", code: contribution },
        {
          type: "p",
          text: "Core then simply walks whatever is registered. A module a hotel has not bought is **absent**, not broken. Adding a new module is one line in that startup file and no change to core.",
        },
        {
          type: "p",
          text: "Contributions are best-effort too. When a booking is saved with food on it, core tells the menu module so the kitchen sees it. If the module fails, it costs that kitchen order and not the booking. A lunch that didn't reach the kitchen can be fixed with a phone call; a lost reservation can't.",
        },
        { type: "h2", text: "Fail loudly where silence lies" },
        {
          type: "p",
          text: "There is one place where best-effort would be wrong. If registering the modules fails at startup, every module screen would come back empty with a normal response. That looks exactly like a hotel that bought nothing, which is the one thing it is not. So registration logs a loud error and throws.",
        },
        {
          type: "quote",
          text: "A silent failure that looks like a valid state is the worst kind, because nobody goes looking for it.",
        },
        { type: "h2", text: "Tenants, roles and the API" },
        {
          type: "p",
          text: "Several companies share one database, so nearly every record carries a `companyId`, and `hotelId` as a second axis for companies with several properties. When a request sends a `hotelId`, exactly one helper checks it against the signed-in company. One place to get right is easier to keep right than fifty.",
        },
        {
          type: "p",
          text: "Roles follow the same idea. Whether a role is internal staff or a hotel's own staff is decided by looking it up in an explicit list, never by checking a name prefix. An earlier version used a denylist, which would have given any new internal role the full dashboard of every customer. Now a check fails the build if a role is in neither list.",
        },
        {
          type: "p",
          text: "The public API is an allowlist: a path that is not listed returns a 404 and never reaches the rest of the app. Only the TV part is versioned, as `/tv/v1/`. That is deliberate: the TV's base URL is compiled into apps on TVs screwed to hotel walls, and those cannot be updated as easily as a website.",
        },
        { type: "h2", text: "What I'd keep" },
        {
          type: "p",
          text: "If I started again, I would set up the import rules and the contribution registry on the first day. They cost little at the start and are expensive to add later, once modules have already reached into each other. They are also what lets a small team sell six products without six times the bugs.",
        },
      ],
    },
    ru: {
      title: "Одна кодовая база, шесть продуктов: как устроен Bronit",
      excerpt:
        "Управление, QR-меню, POS, телевизор в номере, AI-бот и уведомления в Telegram. Каждый отель покупает свой набор, поэтому код должен работать при любом сочетании отсутствующих модулей.",
      body: [
        {
          type: "p",
          text: "Bronit продаёт шесть вещей: панель управления, QR-меню, POS, телевизор в номере, AI-бота для гостей и уведомления в Telegram для персонала. Отель редко покупает всё сразу. Одному нужны только бронирования. Другой начинает с меню и через год добавляет телевизоры.",
        },
        {
          type: "p",
          text: "Этот факт повлиял на архитектуру сильнее всего остального. Код должен работать при любом наборе модулей, в том числе когда большинства из них нет.",
        },
        { type: "h2", text: "Что где живёт" },
        {
          type: "p",
          text: "Основной продукт на [erp.bronit.uz](https://erp.bronit.uz) — одно приложение на Next.js и TypeScript. Бронирования, календарь, договоры, меню, ТВ, Telegram, фискальные чеки и конструктор сайта отеля — отдельные **сервисы** внутри него. Данные хранятся в PostgreSQL через Drizzle; раньше они были в MongoDB с Mongoose.",
        },
        {
          type: "p",
          text: "Некоторые продукты работают отдельно, потому что работают на другом железе или для других людей. ТВ-лаунчер — приложение на Flutter, установленное на телевизоры в номерах. POS — сенсорный терминал на Windows, который открывает живые экраны POS в режиме киоска. Ресторанный продукт и наша внутренняя консоль — отдельные приложения.",
        },
        { type: "h2", text: "Слои, которые проверяет компилятор" },
        {
          type: "p",
          text: "В большой кодовой базе главная опасность в том, что всё постепенно начинает импортировать всё. Часть этого ловит код-ревью. Я хотел, чтобы всё ловила сборка, поэтому слои записаны как правила ESLint `no-restricted-imports` с уровнем **error**:",
        },
        {
          type: "list",
          items: [
            "`app/` — корень композиции, ему можно импортировать что угодно.",
            "`shared/` не может импортировать ни один сервис и ничего из `app/`.",
            "Сервис обращается к другому сервису только через его дверь, например `@/services/tv`, и никогда через путь внутри него. Внутри своей папки сервис использует относительные импорты, так что любой путь через алиас в сервис — это всегда пересечение границы.",
            "`core` вообще не может импортировать `menu`, `tv` и `website`.",
          ],
        },
        { type: "code", lang: "js", code: eslintRule },
        { type: "h2", text: "Ядро не должно знать о модулях" },
        {
          type: "p",
          text: "Последнее правило — самое важное. Панель владельца принадлежит ядру, но она должна показывать заказы кухни, если у отеля есть меню, и просьбы с телевизоров, если есть ТВ. Если бы ядро импортировало меню ради этих цифр, каждый отель без меню всё равно тащил бы его за собой, а любое изменение в меню могло бы сломать бронирования.",
        },
        {
          type: "p",
          text: "Решение — инверсия. Ядро определяет интерфейс, **contribution** (вклад), который описывает, что модуль может добавить: цифры для панели, строки для списка на сегодня, выручку, темы для Telegram. Каждый модуль экспортирует свой вклад. Один файл запуска, `instrumentation.ts`, стоит снаружи обеих сторон и регистрирует их до того, как сервер обработает первый запрос.",
        },
        { type: "code", lang: "ts", code: contribution },
        {
          type: "p",
          text: "Дальше ядро просто проходит по тому, что зарегистрировано. Модуль, который отель не купил, **отсутствует**, а не сломан. Новый модуль — это одна строка в файле запуска и ни одного изменения в ядре.",
        },
        {
          type: "p",
          text: "Вклады тоже работают по возможности. Когда сохраняется бронирование с едой, ядро сообщает об этом модулю меню, чтобы кухня увидела заказ. Если модуль падает, теряется этот заказ кухни, но не бронирование. Обед, который не дошёл до кухни, можно исправить звонком; потерянную бронь — нельзя.",
        },
        { type: "h2", text: "Громко падать там, где тишина обманывает" },
        {
          type: "p",
          text: "Есть одно место, где «по возможности» было бы ошибкой. Если регистрация модулей при запуске не удалась, каждый экран модуля вернулся бы пустым с обычным ответом. Это выглядит точно так же, как отель, который ничего не купил, — а это ровно то, чем он не является. Поэтому регистрация пишет громкую ошибку в лог и падает.",
        },
        {
          type: "quote",
          text: "Тихий сбой, который выглядит как нормальное состояние, — худший вид сбоя, потому что его никто не ищет.",
        },
        { type: "h2", text: "Компании, роли и API" },
        {
          type: "p",
          text: "Несколько компаний делят одну базу данных, поэтому почти у каждой записи есть `companyId`, а у компаний с несколькими объектами ещё и `hotelId` как вторая ось. Когда запрос присылает `hotelId`, его сверяет с текущей компанией ровно одна функция. Одно место проще держать правильным, чем пятьдесят.",
        },
        {
          type: "p",
          text: "С ролями та же идея. Внутренний ли это сотрудник или сотрудник отеля, решается поиском в явном списке, а не проверкой префикса в названии. Ранняя версия использовала чёрный список, и любая новая внутренняя роль получила бы полную панель каждого клиента. Теперь сборка падает, если роль не входит ни в один список.",
        },
        {
          type: "p",
          text: "Публичный API — это белый список: путь, которого нет в списке, возвращает 404 и не доходит до остального приложения. Версионирована только часть для ТВ, как `/tv/v1/`. Это сделано намеренно: базовый адрес вшит в приложения на телевизорах, привинченных к стенам отелей, и обновить их не так просто, как сайт.",
        },
        { type: "h2", text: "Что я бы оставил" },
        {
          type: "p",
          text: "Если бы я начинал заново, я бы настроил правила импортов и реестр вкладов в первый же день. В начале они почти ничего не стоят, а добавлять их потом дорого, когда модули уже залезли друг в друга. И именно они позволяют маленькой команде продавать шесть продуктов без шестикратного количества багов.",
        },
      ],
    },
    uz: {
      title: "Bitta kod bazasi, oltita mahsulot: Bronit qanday tuzilgan",
      excerpt:
        "Boshqaruv, QR menyu, POS, xonadagi televizor, AI chat-bot va Telegram bildirishnomalari. Har bir mehmonxona o'z to'plamini sotib oladi, shuning uchun kod modullarning har qanday kombinatsiyasi yo'q bo'lganda ham ishlashi kerak.",
      body: [
        {
          type: "p",
          text: "Bronit oltita narsa sotadi: boshqaruv paneli, QR menyu, POS, xonadagi televizor, mehmonlar uchun AI chat-bot va xodimlar uchun Telegram bildirishnomalari. Mehmonxona kamdan-kam hammasini birdaniga oladi. Biriga faqat bronlar kerak. Boshqasi menyudan boshlaydi va bir yildan keyin televizorlarni qo'shadi.",
        },
        {
          type: "p",
          text: "Arxitekturaga eng ko'p ta'sir qilgan narsa shu bo'ldi. Kod modullarning istalgan to'plami bilan, jumladan ularning ko'pchiligi yo'q bo'lganda ham ishlashi kerak.",
        },
        { type: "h2", text: "Nima qayerda joylashgan" },
        {
          type: "p",
          text: "[erp.bronit.uz](https://erp.bronit.uz) dagi asosiy mahsulot — Next.js va TypeScript'dagi bitta ilova. Bronlar, kalendar, shartnomalar, menyu, TV, Telegram, fiskal cheklar va mehmonxona sayti konstruktori uning ichidagi alohida **servis**lar. Ma'lumotlar Drizzle orqali PostgreSQL'da saqlanadi; ilgari ular Mongoose bilan MongoDB'da edi.",
        },
        {
          type: "p",
          text: "Ba'zi mahsulotlar alohida ishlaydi, chunki ular boshqa qurilmada yoki boshqa odamlar uchun ishlaydi. TV launcher — xonalardagi televizorlarga o'rnatilgan Flutter ilovasi. POS — Windows'dagi sensorli terminal bo'lib, jonli POS ekranlarini kiosk rejimida ochadi. Restoran mahsuloti va ichki konsolimiz — alohida ilovalar.",
        },
        { type: "h2", text: "Kompilyator tekshiradigan qatlamlar" },
        {
          type: "p",
          text: "Katta kod bazasida asosiy xavf — asta-sekin hamma narsa hamma narsani import qila boshlaydi. Buning bir qismini kod-revyu ushlaydi. Men hammasini build ushlashini xohladim, shuning uchun qatlamlar **error** darajasidagi ESLint `no-restricted-imports` qoidalari sifatida yozilgan:",
        },
        {
          type: "list",
          items: [
            "`app/` — kompozitsiya ildizi, u istalgan narsani import qilishi mumkin.",
            "`shared/` hech qanday servisni va `app/` dan hech narsani import qila olmaydi.",
            "Servis boshqa servisga faqat uning eshigi orqali murojaat qiladi, masalan `@/services/tv`, hech qachon uning ichidagi yo'l orqali emas. O'z papkasi ichida servis nisbiy importlardan foydalanadi, shuning uchun servisga alias orqali har qanday yo'l doim chegarani kesib o'tish bo'ladi.",
            "`core` umuman `menu`, `tv` va `website` ni import qila olmaydi.",
          ],
        },
        { type: "code", lang: "js", code: eslintRule },
        { type: "h2", text: "Yadro modullar haqida bilmasligi kerak" },
        {
          type: "p",
          text: "Oxirgi qoida eng muhimi. Egasining paneli yadroga tegishli, lekin mehmonxonada menyu bo'lsa oshxona buyurtmalarini, TV bo'lsa televizordan kelgan so'rovlarni ko'rsatishi kerak. Agar yadro shu raqamlar uchun menyuni import qilganida, menyusiz har bir mehmonxona baribir uni o'zi bilan olib yurardi, menyudagi har qanday o'zgarish esa bronlarni buzishi mumkin edi.",
        },
        {
          type: "p",
          text: "Yechim — inversiya. Yadro interfeys belgilaydi, **contribution** (hissa), u modul nima qo'sha olishini tasvirlaydi: panel uchun raqamlar, bugungi ro'yxat uchun qatorlar, tushum, Telegram uchun mavzular. Har bir modul o'z hissasini eksport qiladi. Bitta ishga tushirish fayli, `instrumentation.ts`, ikkala tomondan tashqarida turadi va server birinchi so'rovni qayta ishlashidan oldin ularni ro'yxatdan o'tkazadi.",
        },
        { type: "code", lang: "ts", code: contribution },
        {
          type: "p",
          text: "Keyin yadro shunchaki ro'yxatdan o'tgan narsalarni aylanib chiqadi. Mehmonxona sotib olmagan modul **yo'q**, buzilgan emas. Yangi modul qo'shish — ishga tushirish faylida bitta qator va yadroda hech qanday o'zgarish yo'q.",
        },
        {
          type: "p",
          text: "Hissalar ham imkon qadar ishlaydi. Ovqatli bron saqlanganda yadro bu haqda menyu moduliga xabar beradi, oshxona buyurtmani ko'rishi uchun. Modul xatoga uchrasa, o'sha oshxona buyurtmasi yo'qoladi, bron emas. Oshxonaga yetib bormagan tushlikni qo'ng'iroq bilan tuzatish mumkin; yo'qolgan bronni esa yo'q.",
        },
        { type: "h2", text: "Jimlik aldaydigan joyda baland ovozda xato berish" },
        {
          type: "p",
          text: "\"Imkon qadar\" noto'g'ri bo'ladigan bitta joy bor. Agar ishga tushishda modullarni ro'yxatdan o'tkazish muvaffaqiyatsiz bo'lsa, har bir modul ekrani oddiy javob bilan bo'sh qaytardi. Bu hech narsa sotib olmagan mehmonxonaga aynan o'xshaydi — u esa aynan unday emas. Shuning uchun ro'yxatdan o'tkazish logga baland ovozda xato yozadi va to'xtaydi.",
        },
        {
          type: "quote",
          text: "Oddiy holatga o'xshab ko'rinadigan jim nosozlik eng yomoni, chunki uni hech kim qidirmaydi.",
        },
        { type: "h2", text: "Kompaniyalar, rollar va API" },
        {
          type: "p",
          text: "Bir nechta kompaniya bitta ma'lumotlar bazasini baham ko'radi, shuning uchun deyarli har bir yozuvda `companyId`, bir nechta obyekti bor kompaniyalarda esa ikkinchi o'q sifatida `hotelId` ham bor. So'rov `hotelId` yuborganda, uni joriy kompaniya bilan aynan bitta funksiya tekshiradi. Bitta joyni to'g'ri saqlash ellik joyni saqlashdan osonroq.",
        },
        {
          type: "p",
          text: "Rollarda ham xuddi shu g'oya. Bu ichki xodimmi yoki mehmonxona xodimimi — nomdagi prefiksni tekshirish bilan emas, aniq ro'yxatdan qidirish bilan hal qilinadi. Oldingi versiya qora ro'yxatdan foydalanardi va har qanday yangi ichki rol har bir mijozning to'liq panelini olgan bo'lardi. Endi rol hech bir ro'yxatda bo'lmasa, build to'xtaydi.",
        },
        {
          type: "p",
          text: "Ochiq API — bu oq ro'yxat: ro'yxatda yo'q yo'l 404 qaytaradi va ilovaning qolgan qismiga yetib bormaydi. Faqat TV qismi `/tv/v1/` sifatida versiyalangan. Bu ataylab qilingan: asosiy manzil mehmonxona devorlariga mahkamlangan televizorlardagi ilovalarga yozib qo'yilgan va ularni sayt kabi oson yangilab bo'lmaydi.",
        },
        { type: "h2", text: "Nimani saqlab qolardim" },
        {
          type: "p",
          text: "Agar qaytadan boshlaganimda, import qoidalari va hissalar reestrini birinchi kunning o'zida sozlardim. Boshida ular deyarli hech narsa turmaydi, keyinroq esa, modullar bir-biriga kirib bo'lgach, ularni qo'shish qimmat. Aynan ular kichik jamoaga oltita mahsulotni olti barobar ko'p xatosiz sotish imkonini beradi.",
        },
      ],
    },
  },
};

export default post;
