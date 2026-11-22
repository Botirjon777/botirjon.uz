import type { Post } from "./types";

const post: Post = {
  slug: "why-i-built-bronit",
  date: "2026-11-10",
  readingMinutes: 4,
  tags: ["founder", "bronit", "hospitality"],
  content: {
    en: {
      title: "Why I built Bronit",
      excerpt:
        "Hotels in Uzbekistan still run their spa, halls and room service on paper journals and Excel. Bronit started as a way to replace that with one system.",
      body: [
        {
          type: "p",
          text: "Walk up to the reception desk of many hotels in Uzbekistan and ask to book the spa for tomorrow at six. Someone will open a paper journal, or an Excel file, or scroll through a phone chat to see whether the slot is free. That is how a lot of bookable hotel services still work: spa treatments, conference halls, swimming pools, banquet rooms.",
        },
        {
          type: "p",
          text: "I built **Bronit** because I kept seeing what that costs a hotel, and because the fix is not complicated. It just has to exist in one place.",
        },
        { type: "h2", text: "What paper actually costs" },
        {
          type: "p",
          text: "The problems are always the same, and none of them are dramatic on their own. They add up.",
        },
        {
          type: "list",
          items: [
            "**Double-booked slots.** Two people write into the same hour of the same hall, and one guest finds out on arrival.",
            "**Untracked deposits.** A client paid part in advance. Who took it, how much, and is it still owed? Nobody is sure.",
            "**Revenue nobody can total.** The owner learns what the spa earned at the end of the month, after someone adds up the journal.",
            "**A front desk that does not know what was promised.** The manager agreed something by phone, then left for the day.",
          ],
        },
        {
          type: "p",
          text: "Room service has its own version of this. A guest calls, someone writes the order down or retypes it into a Telegram chat, the kitchen reads it, and the bill reaches the room later, if it reaches it at all.",
        },
        { type: "h2", text: "What Bronit replaces it with" },
        {
          type: "p",
          text: "The first version of Bronit did one job: bookings. You add a service, and bookings go onto a calendar that knows the capacity of each room and the buffer between sessions, so the same hall cannot be sold twice. Payments, deposits and partial payments sit on the booking itself. Staff get a login per hotel and see only their hotel; the owner sees all of them on one dashboard, with income and outstanding balances live instead of at month-end.",
        },
        {
          type: "p",
          text: "And because almost every hotel team in Uzbekistan already lives in Telegram, a new booking or a change is posted to the team's group within seconds. Nobody has to install another app to know what is happening.",
        },
        { type: "h2", text: "From bookings to the whole hotel" },
        {
          type: "p",
          text: "Once bookings worked, hotels asked for the next thing, and the next thing was always next to the first one.",
        },
        {
          type: "list",
          items: [
            "**Menu**: a QR code in the room opens the menu on the guest's phone. The order goes to staff in Telegram, with buttons to accept it and mark it ready and delivered.",
            "**POS**: tables, orders and receipts for the restaurant, on a touchscreen terminal at the till.",
            "**TV**: the screen in every room becomes the hotel's own: live TV, hotel information, room services, a city guide, the weather and the Wi-Fi by QR code.",
            "**AI chat bot**: answers guests around the clock and passes real requests to the staff who can act on them.",
          ],
        },
        {
          type: "p",
          text: "Our main customer, **Safir Hotel**, uses the guest page and the menu every day, and a lot of what Bronit does today was shaped by watching its staff work.",
        },
        { type: "h2", text: "Why one system and not five tools" },
        {
          type: "p",
          text: "A hotel could buy a booking tool, a menu app, a POS, a TV launcher and a chat bot from five different companies. I think that is the wrong shape, for a simple reason: the guest is the same person in all five.",
        },
        {
          type: "quote",
          text: "The guest who booked the spa is the guest who orders dinner to room 204 and the guest who checks out tomorrow. Their bill should know all of it.",
        },
        {
          type: "p",
          text: "When everything lives in one system, an order from the room lands on the room's bill. A booking and its deposit are in the same place the owner reads the numbers. Staff learn one product, with one login and one set of roles. Each module is something a hotel can switch on when it needs it; the ones it has not bought are simply not there.",
        },
        {
          type: "p",
          text: "We also work with the tools hotels already have. Bronit integrates with **Exely**, so a room-service order can be written into the guest's Exely bill instead of being settled separately.",
        },
        { type: "h2", text: "What it changes" },
        {
          type: "p",
          text: "On [bronit.uz](https://bronit.uz) we publish three figures from our hotels: about **15 minutes saved per booking** at the front desk, **30% more guest ordering** through the TV and QR menu, and **70% of guest requests** routed automatically. The number I care about most is harder to measure: how often the owner no longer has to call the hotel to find out what happened today.",
        },
        { type: "h2", text: "What comes next" },
        {
          type: "p",
          text: "The direction stays the same: fewer separate tools in a hotel, fewer things retyped by hand, and an owner who can see the business from a phone. Payments directly inside Bronit, deeper work with the systems hotels already use, and making each module easier to start with on day one.",
        },
        {
          type: "p",
          text: "If you run a hotel or a restaurant in Uzbekistan and still keep the journal at reception, I would like to hear how you work. You can reach me on [Telegram](https://t.me/botirjon_sh), or start a free trial at [bronit.uz](https://bronit.uz).",
        },
      ],
    },
    ru: {
      title: "Почему я создал Bronit",
      excerpt:
        "Многие отели Узбекистана до сих пор ведут спа, залы и рум-сервис в бумажных журналах и Excel. Bronit появился, чтобы заменить всё это одной системой.",
      body: [
        {
          type: "p",
          text: "Подойдите к стойке ресепшена во многих отелях Узбекистана и попросите записать вас в спа на завтра, на шесть вечера. Администратор откроет бумажный журнал, файл Excel или пролистает переписку в телефоне, чтобы понять, свободно ли время. Так до сих пор работает большая часть услуг отеля, которые нужно бронировать: спа, конференц-залы, бассейны, банкетные залы.",
        },
        {
          type: "p",
          text: "Я создал **Bronit**, потому что постоянно видел, чего это стоит отелю, и потому что решение не такое уж сложное. Нужно просто, чтобы всё было в одном месте.",
        },
        { type: "h2", text: "Во что обходится бумага" },
        {
          type: "p",
          text: "Проблемы всегда одни и те же, и по отдельности ни одна не выглядит страшно. Но они складываются.",
        },
        {
          type: "list",
          items: [
            "**Двойные брони.** Два человека записывают гостей на один и тот же час в одном зале, и один из гостей узнаёт об этом, когда приезжает.",
            "**Потерянные депозиты.** Клиент внёс часть суммы заранее. Кто принял, сколько, остался ли долг? Никто точно не знает.",
            "**Выручку никто не может посчитать.** Владелец узнаёт, сколько заработал спа, в конце месяца, когда кто-то сложит цифры из журнала.",
            "**Ресепшен не знает, что обещали гостю.** Менеджер договорился по телефону и ушёл домой.",
          ],
        },
        {
          type: "p",
          text: "У рум-сервиса своя версия той же истории. Гость звонит, кто-то записывает заказ или перепечатывает его в Telegram-чат, кухня читает, а счёт попадает на номер позже, если вообще попадает.",
        },
        { type: "h2", text: "Чем Bronit это заменяет" },
        {
          type: "p",
          text: "Первая версия Bronit делала одно: брони. Вы добавляете услугу, и брони ложатся в календарь, который знает вместимость каждого помещения и перерыв между сеансами, поэтому один и тот же зал нельзя продать дважды. Оплаты, депозиты и частичные оплаты хранятся прямо в брони. У сотрудников свой вход для каждого отеля, и они видят только свой отель; владелец видит все отели на одной панели, с выручкой и остатками долгов в реальном времени, а не в конце месяца.",
        },
        {
          type: "p",
          text: "И поскольку почти любая команда отеля в Узбекистане и так живёт в Telegram, новая бронь или изменение приходят в группу команды за секунды. Чтобы знать, что происходит, не нужно ставить ещё одно приложение.",
        },
        { type: "h2", text: "От броней ко всему отелю" },
        {
          type: "p",
          text: "Когда брони заработали, отели попросили следующее, и это следующее всегда оказывалось рядом с первым.",
        },
        {
          type: "list",
          items: [
            "**Menu**: QR-код в номере открывает меню на телефоне гостя. Заказ приходит сотрудникам в Telegram с кнопками: принять, готово, доставлен.",
            "**POS**: столы, заказы и чеки для ресторана на сенсорном терминале у кассы.",
            "**TV**: экран в каждом номере становится экраном отеля: телеканалы, информация об отеле, услуги в номер, гид по городу, погода и Wi-Fi по QR-коду.",
            "**AI-бот**: отвечает гостям круглосуточно и передаёт настоящие запросы тем сотрудникам, которые могут их выполнить.",
          ],
        },
        {
          type: "p",
          text: "Наш главный клиент, **Safir Hotel**, каждый день пользуется гостевой страницей и меню, и многое из того, что Bronit умеет сегодня, появилось, когда мы смотрели, как работают его сотрудники.",
        },
        { type: "h2", text: "Почему одна система, а не пять сервисов" },
        {
          type: "p",
          text: "Отель может купить систему броней, приложение для меню, POS, ТВ-лаунчер и чат-бота у пяти разных компаний. Я считаю, что это неправильная форма, по простой причине: во всех пяти один и тот же гость.",
        },
        {
          type: "quote",
          text: "Гость, который записался в спа, это тот же гость, который заказывает ужин в номер 204 и выезжает завтра. Его счёт должен знать обо всём этом.",
        },
        {
          type: "p",
          text: "Когда всё в одной системе, заказ из номера попадает на счёт номера. Бронь и её депозит лежат там же, где владелец смотрит цифры. Сотрудники учат один продукт, с одним входом и одним набором ролей. Каждый модуль отель включает, когда он нужен; тех, что не куплены, просто нет.",
        },
        {
          type: "p",
          text: "Мы работаем и с теми системами, которые у отелей уже есть. Bronit интегрирован с **Exely**, поэтому заказ рум-сервиса можно записать в счёт гостя в Exely, а не рассчитывать отдельно.",
        },
        { type: "h2", text: "Что это меняет" },
        {
          type: "p",
          text: "На [bronit.uz](https://bronit.uz) мы публикуем три цифры наших отелей: около **15 минут экономии на одной брони** на ресепшене, **на 30% больше заказов гостей** через ТВ и QR-меню и **70% запросов гостей**, которые обрабатываются автоматически. Цифра, которая важна мне больше всего, измеряется сложнее: как часто владельцу больше не нужно звонить в отель, чтобы узнать, что сегодня произошло.",
        },
        { type: "h2", text: "Что дальше" },
        {
          type: "p",
          text: "Направление не меняется: меньше отдельных инструментов в отеле, меньше ручной перепечатки и владелец, который видит бизнес с телефона. Оплаты прямо внутри Bronit, более глубокая работа с системами, которые отели уже используют, и более простой старт с каждым модулем в первый же день.",
        },
        {
          type: "p",
          text: "Если вы управляете отелем или рестораном в Узбекистане и журнал всё ещё лежит на ресепшене, мне интересно узнать, как вы работаете. Напишите мне в [Telegram](https://t.me/botirjon_sh) или начните бесплатный период на [bronit.uz](https://bronit.uz).",
        },
      ],
    },
    uz: {
      title: "Nega Bronit'ni yaratdim",
      excerpt:
        "O'zbekistondagi ko'plab mehmonxonalar spa, zallar va xonaga xizmatni hali ham qog'oz jurnal va Excel'da yuritadi. Bronit shularning barchasini bitta tizim bilan almashtirish uchun paydo bo'ldi.",
      body: [
        {
          type: "p",
          text: "O'zbekistondagi ko'plab mehmonxonalarning qabulxonasiga borib, ertaga soat oltiga spa'ga yozilmoqchiman, deb ayting. Administrator vaqt bo'shmi-yo'qmi bilish uchun qog'oz jurnalni ochadi, Excel faylini ochadi yoki telefondagi yozishmalarni varaqlaydi. Mehmonxonaning band qilinadigan xizmatlarining katta qismi hali ham shunday ishlaydi: spa, konferens-zallar, basseynlar, banket zallari.",
        },
        {
          type: "p",
          text: "Men **Bronit**'ni yaratdim, chunki bu mehmonxonaga qanchaga tushishini doim ko'rib turardim, yechim esa unchalik murakkab emas. Faqat hammasi bir joyda bo'lishi kerak.",
        },
        { type: "h2", text: "Qog'oz qanchaga tushadi" },
        {
          type: "p",
          text: "Muammolar har doim bir xil va alohida olinganda hech biri qo'rqinchli ko'rinmaydi. Lekin ular yig'ilib boradi.",
        },
        {
          type: "list",
          items: [
            "**Ikki marta band qilingan vaqt.** Ikki xodim bitta zalning bitta soatiga mehmon yozadi va mehmonlardan biri buni kelganda biladi.",
            "**Yo'qolgan depozitlar.** Mijoz summaning bir qismini oldindan to'lagan. Kim qabul qildi, qancha, qarz qoldimi? Hech kim aniq bilmaydi.",
            "**Tushumni hech kim hisoblay olmaydi.** Egasi spa qancha ishlaganini oy oxirida, kimdir jurnaldagi raqamlarni qo'shib chiqqanida biladi.",
            "**Qabulxona mehmonga nima va'da qilinganini bilmaydi.** Menejer telefonda kelishib, uyiga ketib qolgan.",
          ],
        },
        {
          type: "p",
          text: "Xonaga xizmatning ham o'z versiyasi bor. Mehmon qo'ng'iroq qiladi, kimdir buyurtmani yozib oladi yoki Telegram chatga qayta yozadi, oshxona o'qiydi, hisob esa xonaga keyinroq tushadi, agar umuman tushsa.",
        },
        { type: "h2", text: "Bronit buning o'rniga nima beradi" },
        {
          type: "p",
          text: "Bronit'ning birinchi versiyasi bitta ishni qilardi: bronlarni. Siz xizmat qo'shasiz va bronlar har bir xonaning sig'imi va seanslar orasidagi tanaffusni biladigan kalendarga tushadi, shuning uchun bitta zalni ikki marta sotib bo'lmaydi. To'lovlar, depozitlar va qisman to'lovlar bronning o'zida saqlanadi. Xodimlar har bir mehmonxona uchun alohida login bilan kiradi va faqat o'z mehmonxonasini ko'radi; egasi esa barcha mehmonxonalarni bitta panelda ko'radi, tushum va qarz qoldiqlari oy oxirida emas, real vaqtda.",
        },
        {
          type: "p",
          text: "O'zbekistonda deyarli har bir mehmonxona jamoasi baribir Telegram'da yashagani uchun yangi bron yoki o'zgarish jamoa guruhiga bir necha soniyada keladi. Nima bo'layotganini bilish uchun yana bitta ilova o'rnatish shart emas.",
        },
        { type: "h2", text: "Bronlardan butun mehmonxonagacha" },
        {
          type: "p",
          text: "Bronlar ishlay boshlagach, mehmonxonalar keyingi narsani so'rashdi va bu keyingi narsa har doim birinchisining yonida bo'lib chiqdi.",
        },
        {
          type: "list",
          items: [
            "**Menu**: xonadagi QR-kod mehmonning telefonida menyuni ochadi. Buyurtma xodimlarga Telegram'da tugmalar bilan keladi: qabul qilish, tayyor, yetkazildi.",
            "**POS**: restoran uchun stollar, buyurtmalar va cheklar, kassadagi sensorli terminalda.",
            "**TV**: har bir xonadagi ekran mehmonxonaning o'z ekraniga aylanadi: telekanallar, mehmonxona haqida ma'lumot, xonaga xizmatlar, shahar bo'yicha qo'llanma, ob-havo va QR-kod orqali Wi-Fi.",
            "**AI chat-bot**: mehmonlarga kecha-kunduz javob beradi va haqiqiy so'rovlarni ularni bajara oladigan xodimlarga uzatadi.",
          ],
        },
        {
          type: "p",
          text: "Asosiy mijozimiz **Safir Hotel** har kuni mehmon sahifasi va menyudan foydalanadi, Bronit bugun qila oladigan ko'p narsalar esa uning xodimlari qanday ishlashini kuzatib turib paydo bo'lgan.",
        },
        { type: "h2", text: "Nega beshta xizmat emas, bitta tizim" },
        {
          type: "p",
          text: "Mehmonxona bron tizimini, menyu ilovasini, POS'ni, TV launcher'ni va chat-botni beshta turli kompaniyadan sotib olishi mumkin. Menimcha, bu noto'g'ri shakl, sababi oddiy: beshtasida ham mehmon bitta odam.",
        },
        {
          type: "quote",
          text: "Spa'ga yozilgan mehmon 204-xonaga kechki ovqat buyurtma qilayotgan va ertaga chiqib ketadigan o'sha mehmon. Uning hisobi bularning hammasidan xabardor bo'lishi kerak.",
        },
        {
          type: "p",
          text: "Hammasi bitta tizimda bo'lsa, xonadan kelgan buyurtma xonaning hisobiga tushadi. Bron va uning depoziti egasi raqamlarni ko'radigan joyning o'zida turadi. Xodimlar bitta mahsulotni, bitta login va bitta rollar to'plami bilan o'rganadi. Har bir modulni mehmonxona kerak bo'lganda yoqadi; sotib olinmaganlari esa shunchaki yo'q.",
        },
        {
          type: "p",
          text: "Biz mehmonxonalarda allaqachon bor tizimlar bilan ham ishlaymiz. Bronit **Exely** bilan integratsiyalangan, shuning uchun xonaga xizmat buyurtmasini alohida hisob-kitob qilmasdan, mehmonning Exely'dagi hisobiga yozish mumkin.",
        },
        { type: "h2", text: "Bu nimani o'zgartiradi" },
        {
          type: "p",
          text: "[bronit.uz](https://bronit.uz) saytida mehmonxonalarimizdan uchta raqamni e'lon qilamiz: qabulxonada **har bir bronga taxminan 15 daqiqa tejash**, TV va QR-menyu orqali **mehmon buyurtmalari 30% ko'proq** va **mehmon so'rovlarining 70%** avtomatik yo'naltiriladi. Men uchun eng muhim raqamni o'lchash qiyinroq: egasi bugun nima bo'lganini bilish uchun mehmonxonaga qo'ng'iroq qilmasligi qanchalik tez-tez bo'layotgani.",
        },
        { type: "h2", text: "Keyin nima" },
        {
          type: "p",
          text: "Yo'nalish o'zgarmaydi: mehmonxonada kamroq alohida vositalar, qo'lda qayta yozish kamroq va biznesni telefondan ko'ra oladigan ega. To'lovlar to'g'ridan-to'g'ri Bronit ichida, mehmonxonalar allaqachon ishlatadigan tizimlar bilan chuqurroq ishlash va har bir modul bilan birinchi kundanoq osonroq boshlash.",
        },
        {
          type: "p",
          text: "Agar O'zbekistonda mehmonxona yoki restoran boshqarsangiz va jurnal hali ham qabulxonada tursa, qanday ishlashingizni bilish men uchun qiziq. Menga [Telegram](https://t.me/botirjon_sh)'da yozing yoki [bronit.uz](https://bronit.uz)'da bepul sinov davrini boshlang.",
        },
      ],
    },
  },
};

export default post;
