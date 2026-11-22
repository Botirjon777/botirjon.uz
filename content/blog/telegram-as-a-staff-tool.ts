import type { Post } from "./types";

const keyboard = `// Simplified. The buttons depend only on the order's current state.
function orderKeyboard(status: OrderStatus, orderId: string) {
  if (status === "pending") {
    return [[
      { text: "Accept", callback_data: \`morder:accept:\${orderId}\` },
      { text: "Reject", callback_data: \`morder:reject:\${orderId}\` },
    ]];
  }
  if (status === "preparing") {
    return [[{ text: "Ready", callback_data: \`morder:ready:\${orderId}\` }]];
  }
  if (status === "ready") {
    return [[{ text: "Delivered", callback_data: \`morder:complete:\${orderId}\` }]];
  }
  return []; // done or rejected: nothing left to press
}`;

const post: Post = {
  slug: "telegram-as-a-staff-tool",
  date: "2026-11-20",
  readingMinutes: 5,
  tags: ["bronit", "telegram", "product"],
  content: {
    en: {
      title: "Telegram as a staff tool: why Bronit has no staff app to install",
      excerpt:
        "Hotel staff in Uzbekistan already live in Telegram. So Bronit sends bookings, room-service orders and guest requests there, with buttons that move each one forward.",
      body: [
        {
          type: "p",
          text: "When a guest books the spa or orders soup to room 204, somebody has to find out. The obvious answer for a software product is its own staff app with push notifications. I decided against it early, and Bronit sends that work to **Telegram** instead.",
        },
        { type: "h2", text: "Staff already live there" },
        {
          type: "p",
          text: "In Uzbekistan, Telegram is where work conversations happen. Receptionists, cooks and managers have it open all day. Asking them to install and log into one more app means one more thing that runs out of battery, gets logged out, or is muted. A message in a group they already read has none of those problems.",
        },
        {
          type: "p",
          text: "So the dashboard at [erp.bronit.uz](https://erp.bronit.uz) is where things are set up and reviewed, and Telegram is where the day-to-day work arrives.",
        },
        { type: "h2", text: "One chat, one product" },
        {
          type: "p",
          text: "The first rule: a Telegram group belongs to exactly one product, **Bronit Service**, **Bronit Menu** or **Bronit Custom**. Bookings go to one group and kitchen orders go to another. If someone tries to connect a chat that another product already holds, Bronit refuses.",
        },
        {
          type: "p",
          text: "The second rule: the owner decides how a group is split. A group can stay one stream, or become a forum with one topic per hotel, or one topic per hotel and service. A small hotel is fine with one stream. A company with several properties usually wants the pool and the conference hall in separate topics. The screen shows how many topics a choice will create before it is applied.",
        },
        {
          type: "p",
          text: "Room requests from the in-room TV, such as express checkout, cleaning or Do Not Disturb, have no group of their own. They go to the Service group, because front desk and housekeeping already watch it.",
        },
        { type: "h2", text: "Connecting a group without typing a password" },
        {
          type: "p",
          text: "Connecting takes one command. The bot has to be an administrator of the group; that is the only check, and the bot says so if it fails. A group admin types `/id`, and the bot replies with the group's id. The owner copies it into **Settings** in Bronit, where they are already signed in, and the group is connected.",
        },
        {
          type: "p",
          text: "An earlier version asked for the owner's email and password inside the group chat. Deleting the message later does not remove it from everyone's phone. Now nothing is typed into a group except a command.",
        },
        { type: "h2", text: "One message per order, edited in place" },
        {
          type: "p",
          text: "A room-service order arrives as one message with buttons. The cook presses **Accept**, then **Ready**, then **Delivered**. Each press edits the same message: the status line changes and the buttons change with it. There is never a second message for the same order, so the chat reads as a list of orders, not a log of events.",
        },
        { type: "code", lang: "ts", code: keyboard },
        {
          type: "p",
          text: "The guest follows the same steps on their phone. The keyboard used to jump from Accept straight to Complete, and the guest's tracker skipped Ready. Now the buttons and the tracker have the same four steps.",
        },
        {
          type: "p",
          text: "Bookings work the same way: **Paid** and **Finish** buttons appear while they apply and disappear when they don't. Every press is checked against the current state, so a late tap on an order that is already done gets a short alert instead of a wrong change.",
        },
        { type: "h2", text: "Best-effort, always" },
        {
          type: "p",
          text: "Telegram is a notification channel, not the system of record. If Telegram is slow or down, the booking is still saved and the order still exists in Bronit. A Telegram failure never blocks a booking or a web request.",
        },
        { type: "h2", text: "What broke, and what I learned" },
        {
          type: "p",
          text: "Most of the work was in details that fail silently. A few of them are now written as comments next to the code:",
        },
        {
          type: "list",
          items: [
            "When the webhook is registered with an explicit list of update types, that list must include `callback_query`. Without it, every inline button stops working and nothing reports an error.",
            "The webhook secret is sent to Telegram when the webhook is registered. Change the secret and forget to register again, and Telegram's requests are rejected. The bot simply goes quiet. There is now a script for registering it and checking its status.",
            "In a group, use `url` buttons, not `web_app`. Telegram rejects `web_app` buttons outside private chats, and the whole message fails to send, so the order notification is lost with it.",
            "An **Open** button once pointed at the owner's address. Hotel admins, the people who actually read room-service orders, were sent to a login page. It now opens the order board of the right hotel.",
          ],
        },
        {
          type: "quote",
          text: "The failures that cost the most time were the quiet ones: no error, just a bot that stopped answering.",
        },
        { type: "h2", text: "Why it works" },
        {
          type: "p",
          text: "This setup works because it asks staff to change nothing about where they look. The structure is in Bronit: which product owns which chat, how topics are split, and what each button is allowed to do. To the people using it, it is just their Telegram.",
        },
      ],
    },
    ru: {
      title: "Telegram как рабочий инструмент: почему у Bronit нет отдельного приложения для персонала",
      excerpt:
        "Персонал отелей в Узбекистане и так весь день в Telegram. Поэтому Bronit отправляет туда бронирования, заказы в номер и просьбы гостей, с кнопками, которые двигают каждый заказ дальше.",
      body: [
        {
          type: "p",
          text: "Когда гость бронирует спа или заказывает суп в номер 204, кто-то должен об этом узнать. Очевидный ответ для программного продукта — собственное приложение для персонала с push-уведомлениями. Я рано отказался от этой идеи, и Bronit отправляет такую работу в **Telegram**.",
        },
        { type: "h2", text: "Персонал и так там" },
        {
          type: "p",
          text: "В Узбекистане рабочие разговоры идут в Telegram. Администраторы, повара и менеджеры держат его открытым весь день. Попросить их установить ещё одно приложение и войти в него — значит добавить ещё одну вещь, которая разрядится, разлогинится или окажется на беззвучном. У сообщения в группе, которую они и так читают, этих проблем нет.",
        },
        {
          type: "p",
          text: "Поэтому в панели на [erp.bronit.uz](https://erp.bronit.uz) всё настраивают и проверяют, а повседневная работа приходит в Telegram.",
        },
        { type: "h2", text: "Один чат — один продукт" },
        {
          type: "p",
          text: "Первое правило: группа в Telegram принадлежит ровно одному продукту — **Bronit Service**, **Bronit Menu** или **Bronit Custom**. Бронирования идут в одну группу, заказы кухни — в другую. Если чат уже занят другим продуктом, Bronit откажется его подключать.",
        },
        {
          type: "p",
          text: "Второе правило: как делить группу, решает владелец. Группа может остаться одним потоком, а может стать форумом с темой на каждый отель или на каждую пару «отель и услуга». Маленькому отелю хватит одного потока. Компании с несколькими объектами обычно удобнее держать бассейн и конференц-зал в разных темах. Экран заранее показывает, сколько тем будет создано.",
        },
        {
          type: "p",
          text: "Просьбы с телевизора в номере — экспресс-выезд, уборка, «Не беспокоить» — своей группы не имеют. Они идут в группу Service, потому что её уже читают ресепшен и хаускипинг.",
        },
        { type: "h2", text: "Подключение группы без пароля в чате" },
        {
          type: "p",
          text: "Подключение — это одна команда. Бот должен быть администратором группы; это единственная проверка, и бот прямо скажет, если она не пройдена. Администратор группы пишет `/id`, бот отвечает идентификатором группы. Владелец вставляет его в **Настройки** Bronit, где он уже вошёл в аккаунт, и группа подключена.",
        },
        {
          type: "p",
          text: "Ранняя версия спрашивала email и пароль владельца прямо в групповом чате. Удалённое сообщение не исчезает с телефонов тех, кто его уже видел. Теперь в группу не пишут ничего, кроме команды.",
        },
        { type: "h2", text: "Одно сообщение на заказ, которое редактируется" },
        {
          type: "p",
          text: "Заказ в номер приходит одним сообщением с кнопками. Повар нажимает **Принять**, потом **Готово**, потом **Доставлен**. Каждое нажатие редактирует то же самое сообщение: меняется строка статуса и вместе с ней кнопки. Второго сообщения по тому же заказу не бывает, поэтому чат выглядит как список заказов, а не как журнал событий.",
        },
        { type: "code", lang: "ts", code: keyboard },
        {
          type: "p",
          text: "Гость видит те же шаги у себя на телефоне. Раньше кнопки переходили от «Принять» сразу к «Завершить», и трекер гостя пропускал «Готово». Теперь у кнопок и трекера одни и те же четыре шага.",
        },
        {
          type: "p",
          text: "С бронированиями так же: кнопки **Оплачено** и **Завершить** видны, пока они имеют смысл, и исчезают, когда нет. Каждое нажатие сверяется с текущим состоянием, так что запоздалое нажатие на уже закрытый заказ получает короткое предупреждение, а не ошибочное изменение.",
        },
        { type: "h2", text: "Всегда по возможности" },
        {
          type: "p",
          text: "Telegram — это канал уведомлений, а не место хранения данных. Если Telegram тормозит или недоступен, бронирование всё равно сохраняется, а заказ всё равно есть в Bronit. Сбой Telegram никогда не блокирует бронирование или веб-запрос.",
        },
        { type: "h2", text: "Что ломалось и чему я научился" },
        {
          type: "p",
          text: "Большая часть работы ушла на детали, которые ломаются молча. Некоторые из них теперь записаны в комментариях рядом с кодом:",
        },
        {
          type: "list",
          items: [
            "Если вебхук регистрируется с явным списком типов обновлений, в нём обязательно должен быть `callback_query`. Без него перестают работать все инлайн-кнопки, и никакой ошибки нигде нет.",
            "Секрет вебхука передаётся Telegram при регистрации. Если сменить секрет и не зарегистрировать вебхук заново, запросы Telegram отклоняются, и бот просто замолкает. Теперь для регистрации и проверки статуса есть скрипт.",
            "В группах нужны кнопки `url`, а не `web_app`. Telegram отклоняет `web_app` вне личных чатов, и не отправляется всё сообщение — вместе с уведомлением о заказе.",
            "Кнопка **Открыть** когда-то вела на адрес владельца. Администраторов отелей — тех, кто на самом деле читает заказы в номер, — перекидывало на страницу входа. Теперь она открывает доску заказов нужного отеля.",
          ],
        },
        {
          type: "quote",
          text: "Дороже всего обходились тихие сбои: никакой ошибки, просто бот, который перестал отвечать.",
        },
        { type: "h2", text: "Почему это работает" },
        {
          type: "p",
          text: "Эта схема работает, потому что персоналу не нужно менять привычное место, куда он смотрит. Вся структура — в Bronit: какой продукт владеет каким чатом, как делятся темы, что разрешено каждой кнопке. Для людей, которые этим пользуются, это просто их Telegram.",
        },
      ],
    },
    uz: {
      title: "Telegram ish quroli sifatida: nega Bronit xodimlari uchun alohida ilova yo'q",
      excerpt:
        "O'zbekistondagi mehmonxona xodimlari kun bo'yi Telegramda. Shuning uchun Bronit bronlar, xonaga buyurtmalar va mehmon so'rovlarini o'sha yerga yuboradi, har birini oldinga suradigan tugmalar bilan.",
      body: [
        {
          type: "p",
          text: "Mehmon spa'ni bron qilsa yoki 204-xonaga sho'rva buyurtma qilsa, kimdir buni bilishi kerak. Dasturiy mahsulot uchun eng oddiy javob — push-bildirishnomali o'z xodimlar ilovasi. Men bu fikrdan erta voz kechdim va Bronit bu ishni **Telegram**ga yuboradi.",
        },
        { type: "h2", text: "Xodimlar baribir o'sha yerda" },
        {
          type: "p",
          text: "O'zbekistonda ish suhbatlari Telegramda bo'ladi. Administratorlar, oshpazlar va menejerlar uni kun bo'yi ochiq ushlab turadi. Ulardan yana bitta ilova o'rnatib, unga kirishni so'rash — zaryadi tugaydigan, akkauntdan chiqib ketadigan yoki ovozi o'chirilgan yana bir narsa qo'shish demak. Ular allaqachon o'qiydigan guruhdagi xabarda bu muammolarning hech biri yo'q.",
        },
        {
          type: "p",
          text: "Shuning uchun [erp.bronit.uz](https://erp.bronit.uz) panelida hamma narsa sozlanadi va ko'rib chiqiladi, kundalik ish esa Telegramga keladi.",
        },
        { type: "h2", text: "Bitta chat — bitta mahsulot" },
        {
          type: "p",
          text: "Birinchi qoida: Telegram guruhi faqat bitta mahsulotga tegishli — **Bronit Service**, **Bronit Menu** yoki **Bronit Custom**. Bronlar bir guruhga, oshxona buyurtmalari boshqasiga boradi. Agar chatni boshqa mahsulot allaqachon egallagan bo'lsa, Bronit uni ulamaydi.",
        },
        {
          type: "p",
          text: "Ikkinchi qoida: guruhni qanday bo'lishni egasi hal qiladi. Guruh bitta oqim bo'lib qolishi yoki har bir mehmonxona, yoki har bir \"mehmonxona va xizmat\" juftligi uchun alohida mavzuli forumga aylanishi mumkin. Kichik mehmonxonaga bitta oqim yetadi. Bir nechta obyekti bor kompaniyaga odatda basseyn va konferens-zalni alohida mavzularda saqlash qulayroq. Ekran tanlov qo'llanishidan oldin nechta mavzu yaratilishini ko'rsatadi.",
        },
        {
          type: "p",
          text: "Xonadagi televizordan keladigan so'rovlar — tezkor chiqish, tozalash, \"Bezovta qilmang\" — o'z guruhiga ega emas. Ular Service guruhiga boradi, chunki uni resepshn va xona xizmati allaqachon kuzatib turadi.",
        },
        { type: "h2", text: "Guruhni chatda parol yozmasdan ulash" },
        {
          type: "p",
          text: "Ulash bitta buyruqdan iborat. Bot guruh administratori bo'lishi kerak; bu yagona tekshiruv va u o'tmasa, bot buni ochiq aytadi. Guruh administratori `/id` deb yozadi, bot guruh identifikatori bilan javob beradi. Ega uni Bronit'dagi **Sozlamalar**ga qo'yadi — u yerda u allaqachon tizimga kirgan — va guruh ulandi.",
        },
        {
          type: "p",
          text: "Oldingi versiya egasining email va parolini to'g'ridan-to'g'ri guruh chatida so'rardi. O'chirilgan xabar uni ko'rib ulgurganlarning telefonidan yo'qolmaydi. Endi guruhga buyruqdan boshqa hech narsa yozilmaydi.",
        },
        { type: "h2", text: "Har bir buyurtmaga bitta xabar, o'sha joyida tahrirlanadi" },
        {
          type: "p",
          text: "Xonaga buyurtma tugmali bitta xabar bo'lib keladi. Oshpaz **Qabul qilish**, keyin **Tayyor**, keyin **Yetkazildi** tugmasini bosadi. Har bir bosish o'sha xabarni tahrirlaydi: holat qatori va u bilan birga tugmalar o'zgaradi. Bitta buyurtma uchun ikkinchi xabar hech qachon bo'lmaydi, shuning uchun chat voqealar jurnali emas, buyurtmalar ro'yxatidek o'qiladi.",
        },
        { type: "code", lang: "ts", code: keyboard },
        {
          type: "p",
          text: "Mehmon o'z telefonida xuddi shu bosqichlarni ko'radi. Avval tugmalar \"Qabul qilish\"dan to'g'ri \"Yakunlash\"ga o'tardi va mehmon trekeri \"Tayyor\"ni o'tkazib yuborardi. Endi tugmalar va treker bir xil to'rt bosqichga ega.",
        },
        {
          type: "p",
          text: "Bronlar ham shunday ishlaydi: **To'landi** va **Yakunlash** tugmalari kerak bo'lganda ko'rinadi, kerak bo'lmaganda yo'qoladi. Har bir bosish joriy holat bilan solishtiriladi, shuning uchun allaqachon yopilgan buyurtmaga kechikib bosilsa, noto'g'ri o'zgarish emas, qisqa ogohlantirish chiqadi.",
        },
        { type: "h2", text: "Har doim imkon qadar" },
        {
          type: "p",
          text: "Telegram — bu bildirishnoma kanali, ma'lumotlar saqlanadigan joy emas. Telegram sekin ishlasa yoki ishlamay qolsa ham, bron baribir saqlanadi, buyurtma esa Bronit'da baribir bor. Telegramdagi nosozlik hech qachon bron yoki veb-so'rovni to'xtatmaydi.",
        },
        { type: "h2", text: "Nima buzildi va men nimani o'rgandim" },
        {
          type: "p",
          text: "Ishning katta qismi jimgina buziladigan mayda narsalarga ketdi. Ularning ba'zilari endi kod yonida izoh sifatida yozib qo'yilgan:",
        },
        {
          type: "list",
          items: [
            "Vebxuk yangilanish turlarining aniq ro'yxati bilan ro'yxatdan o'tkazilsa, unda albatta `callback_query` bo'lishi kerak. Busiz barcha inline tugmalar ishlamay qoladi va hech qayerda xato chiqmaydi.",
            "Vebxuk siri ro'yxatdan o'tkazishda Telegramga yuboriladi. Sirni o'zgartirib, vebxukni qayta ro'yxatdan o'tkazishni unutsangiz, Telegram so'rovlari rad etiladi va bot shunchaki jim bo'lib qoladi. Endi ro'yxatdan o'tkazish va holatini tekshirish uchun skript bor.",
            "Guruhlarda `web_app` emas, `url` tugmalardan foydalaning. Telegram shaxsiy chatdan tashqarida `web_app` tugmasini rad etadi va butun xabar yuborilmaydi — buyurtma haqidagi bildirishnoma ham u bilan yo'qoladi.",
            "**Ochish** tugmasi bir paytlar egasining manziliga olib borardi. Mehmonxona administratorlari — xonaga buyurtmalarni aslida o'qiydigan odamlar — kirish sahifasiga tashlanardi. Endi u kerakli mehmonxonaning buyurtmalar taxtasini ochadi.",
          ],
        },
        {
          type: "quote",
          text: "Eng ko'p vaqtni jim nosozliklar oldi: hech qanday xato yo'q, shunchaki javob berishni to'xtatgan bot.",
        },
        { type: "h2", text: "Nega bu ishlaydi" },
        {
          type: "p",
          text: "Bu yondashuv ishlaydi, chunki xodimlardan qayerga qarashni o'zgartirish talab qilinmaydi. Butun tuzilma Bronit'da: qaysi mahsulot qaysi chatga egalik qiladi, mavzular qanday bo'linadi, har bir tugma nima qila oladi. Undan foydalanadigan odamlar uchun bu shunchaki ularning Telegrami.",
        },
      ],
    },
  },
};

export default post;
