import type { Post } from "./types";

const STATUS_CODE = `// Simplified: which buttons an order message shows
switch (order.status) {
  case "pending":
    return [["✅ Принять", "morder:accept:" + id], ["❌ Отклонить", "morder:reject:" + id]];
  case "preparing":
    return [["🍽 Готово", "morder:ready:" + id]];
  case "ready":
    return [["🛎 Доставлен", "morder:complete:" + id]];
  default:
    return []; // delivered or rejected: nothing left to press
}`;

const ORDER_CODE = `// Simplified: one function for every way an order arrives
export async function placeMenuOrder(input) {
  const order = await saveOrder(input); // prices snapshotted, fee applied
  after(() => announceInTelegram(order)); // runs after the response
  return order;
}`;

const post: Post = {
  slug: "qr-menu-to-kitchen",
  date: "2026-11-17",
  readingMinutes: 5,
  tags: ["engineering", "bronit", "telegram", "nextjs"],
  content: {
    en: {
      title: "From a QR code to the kitchen: how a room-service order travels",
      excerpt:
        "A guest scans the code in their room and orders dinner. Here is every step that order takes inside Bronit, and the decisions behind each one.",
      body: [
        {
          type: "p",
          text: "Room service in Bronit looks simple from the outside. A guest scans a QR code in the room, picks a few dishes, presses order, and a few minutes later someone knocks on the door. Underneath, that order passes through a handful of decisions that each came from something going wrong in a real hotel. This post follows one order from the scan to the door.",
        },
        { type: "h2", text: "1. The QR code that must never change" },
        {
          type: "p",
          text: "The code in the room opens a public page: no login, no app. The address carries the hotel and the room number, so the order already knows where it is going before the guest taps anything.",
        },
        {
          type: "p",
          text: "That address is built in exactly one place in the code, a function called `publicHubUrl`. The in-room TV draws a QR code from it, and the PDF of printable cards is generated from it too, so both are always the same string. This matters more than it sounds. A printed card sits in a hotel room for years. If the address format ever changed, every card in every room would quietly point to nowhere. So we treat that URL as a contract: it can be extended, never broken.",
        },
        { type: "h2", text: "2. A menu in the guest's language" },
        {
          type: "p",
          text: "Hotel guests in Uzbekistan come from everywhere, so menu content supports **ten languages**. Staff type a dish name and description once, in whatever language they work in, and press Translate. Google Translate fills the other nine.",
        },
        {
          type: "p",
          text: "Machine translation gets food wrong in funny and less funny ways, so any language can be **locked to the original**. A locked language just shows the source text and is skipped the next time someone presses Translate, instead of being overwritten again. The buttons and labels around the menu stay in Uzbek, Russian or English; the guest picks the language of the dishes separately.",
        },
        { type: "h2", text: "3. One function for every order" },
        {
          type: "p",
          text: "An order can reach Bronit in three ways: from the QR menu, from the in-room TV, or typed in by staff after a phone call or a conversation at reception. Early on it was tempting to give each its own path. Instead, all three go through the same function, `placeMenuOrder`.",
        },
        { type: "code", lang: "ts", code: ORDER_CODE },
        {
          type: "p",
          text: "Because there is one door, every order gets the same treatment: prices are **snapshotted** at the moment of ordering, so changing the menu tomorrow does not rewrite yesterday's bill; the hotel's service fee is applied the same way; there is exactly one history entry and exactly one Telegram message. A staff-entered order is an ordinary order that also records who took it. It can even be scheduled for later, and it stays out of the kitchen's queue until its time comes.",
        },
        { type: "h2", text: "4. Telegram, after the response" },
        {
          type: "p",
          text: "Staff in Uzbek hotels already live in Telegram, so that is where a new order appears first: a message in the hotel's group, in a dedicated topic for menu orders.",
        },
        {
          type: "p",
          text: "The important detail is **when** that message is sent. It runs inside Next.js `after()`, which means the guest gets their answer as soon as the order is saved, and the Telegram call happens afterwards. It is also best-effort. If Telegram is slow or down, the order still exists, the guest still sees it, and staff still find it on the dashboard. A notification must never be the reason an order is lost.",
        },
        { type: "h2", text: "5. Buttons that edit one message" },
        {
          type: "p",
          text: "The order message carries buttons, and the buttons move the order forward one step at a time: **Принять** (accept) or **Отклонить** (reject), then **Готово** (ready), then **Доставлен** (delivered). Each button sends a small payload back to Bronit in the form `morder:<action>:<orderId>`.",
        },
        { type: "code", lang: "ts", code: STATUS_CODE },
        {
          type: "p",
          text: "Every press **edits the same message in place**. There is never a second message for the same order. A busy group chat with one message per status change becomes unreadable within an hour; one message that changes its own buttons stays a clean list of what still needs doing.",
        },
        {
          type: "p",
          text: "There used to be just Accept and then a single Complete. That skipped Ready, and the guest's tracker jumped straight from Preparing to Delivered. Now the buttons follow the same four steps the guest sees.",
        },
        { type: "h2", text: "6. The guest watches it move" },
        {
          type: "p",
          text: "On the guest's phone, the order page shows a simple tracker: pending, preparing, ready, delivered, or a clear notice if the order was cancelled. When a cook presses Готово in Telegram, the guest's screen follows within seconds.",
        },
        {
          type: "p",
          text: "If the order goes on the room bill, the message gets one more row of buttons for reception: **written into the Exely bill**, for hotels that use Exely, or **payment received** at the desk, which then asks whether it was cash or card. Those buttons disappear once one of them is pressed.",
        },
        { type: "h2", text: "What is not real-time yet" },
        {
          type: "p",
          text: "To be honest about it: the dashboards do not get pushed updates. The order screens and the POS **poll** the server, roughly every 10 to 20 seconds depending on the screen, and the guest's tracker polls too. For a kitchen that is fast enough, and it keeps the system simple to run. But it is why Telegram is where staff see a new order first. Replacing polling with a live stream is on the list; it has not mattered enough yet to jump the queue.",
        },
        { type: "h2", text: "What I took from building it" },
        {
          type: "list",
          items: [
            "Anything printed and put in a room is a public API. Build its address in one place and never break it.",
            "One entry point for orders removes a whole class of bugs where one channel computes the bill differently.",
            "Notifications are a side effect. Send them after the work is saved, and let them fail without taking the work down.",
            "Edit, do not append. One message per order keeps a group chat usable.",
          ],
        },
        {
          type: "p",
          text: "You can see the result on [bronit.uz](https://bronit.uz). If you are building something similar and want to compare notes, write to me on [Telegram](https://t.me/botirjon_sh).",
        },
      ],
    },
    ru: {
      title: "От QR-кода до кухни: как проходит заказ в номер",
      excerpt:
        "Гость сканирует код в номере и заказывает ужин. Вот каждый шаг, который этот заказ проходит внутри Bronit, и решения, стоящие за каждым из них.",
      body: [
        {
          type: "p",
          text: "Снаружи рум-сервис в Bronit выглядит просто. Гость сканирует QR-код в номере, выбирает пару блюд, нажимает «заказать», и через несколько минут в дверь стучат. Внутри этот заказ проходит через несколько решений, и каждое появилось после того, как что-то пошло не так в настоящем отеле. В этом посте я провожу один заказ от сканирования до двери.",
        },
        { type: "h2", text: "1. QR-код, который нельзя менять" },
        {
          type: "p",
          text: "Код в номере открывает публичную страницу: без входа и без приложения. В адресе уже есть отель и номер комнаты, поэтому заказ знает, куда он идёт, ещё до того, как гость что-то нажал.",
        },
        {
          type: "p",
          text: "Этот адрес собирается ровно в одном месте кода, в функции `publicHubUrl`. ТВ в номере рисует QR-код из неё, и PDF с карточками для печати тоже строится из неё, поэтому это всегда одна и та же строка. Это важнее, чем кажется. Напечатанная карточка стоит в номере годами. Если формат адреса когда-нибудь поменяется, каждая карточка в каждом номере молча начнёт вести в никуда. Поэтому мы относимся к этому адресу как к контракту: его можно расширять, но нельзя ломать.",
        },
        { type: "h2", text: "2. Меню на языке гостя" },
        {
          type: "p",
          text: "Гости отелей в Узбекистане приезжают отовсюду, поэтому содержимое меню поддерживает **десять языков**. Сотрудник один раз вводит название и описание блюда на том языке, на котором работает, и нажимает «Перевести». Остальные девять заполняет Google Translate.",
        },
        {
          type: "p",
          text: "Машинный перевод ошибается с едой, иногда смешно, иногда не очень, поэтому любой язык можно **закрепить за оригиналом**. Закреплённый язык просто показывает исходный текст и пропускается при следующем нажатии «Перевести», вместо того чтобы снова перезаписаться. Кнопки и подписи вокруг меню остаются на узбекском, русском или английском; язык блюд гость выбирает отдельно.",
        },
        { type: "h2", text: "3. Одна функция для всех заказов" },
        {
          type: "p",
          text: "Заказ может попасть в Bronit тремя путями: из QR-меню, с ТВ в номере или его вводит сотрудник после звонка или разговора на ресепшене. Поначалу хотелось сделать для каждого свой путь. Вместо этого все три проходят через одну функцию, `placeMenuOrder`.",
        },
        { type: "code", lang: "ts", code: ORDER_CODE },
        {
          type: "p",
          text: "Раз вход один, каждый заказ обрабатывается одинаково: цены **фиксируются** в момент заказа, поэтому изменение меню завтра не переписывает вчерашний счёт; сервисный сбор отеля применяется одинаково; запись в истории ровно одна, и сообщение в Telegram ровно одно. Заказ, введённый сотрудником, это обычный заказ, который дополнительно помнит, кто его принял. Его можно даже запланировать на потом, и он не попадает в очередь кухни, пока не придёт его время.",
        },
        { type: "h2", text: "4. Telegram после ответа" },
        {
          type: "p",
          text: "Сотрудники отелей в Узбекистане и так живут в Telegram, поэтому новый заказ сначала появляется там: сообщение в группе отеля, в отдельной теме для заказов из меню.",
        },
        {
          type: "p",
          text: "Важная деталь в том, **когда** это сообщение отправляется. Оно выполняется внутри `after()` из Next.js: гость получает ответ, как только заказ сохранён, а вызов Telegram происходит уже после. И он работает по принципу best-effort. Если Telegram тормозит или недоступен, заказ всё равно существует, гость его видит, и сотрудники находят его на панели. Уведомление никогда не должно быть причиной потерянного заказа.",
        },
        { type: "h2", text: "5. Кнопки, которые редактируют одно сообщение" },
        {
          type: "p",
          text: "У сообщения о заказе есть кнопки, и они двигают заказ вперёд по одному шагу: **Принять** или **Отклонить**, затем **Готово**, затем **Доставлен**. Каждая кнопка отправляет в Bronit небольшую строку вида `morder:<action>:<orderId>`.",
        },
        { type: "code", lang: "ts", code: STATUS_CODE },
        {
          type: "p",
          text: "Каждое нажатие **редактирует то же самое сообщение**. Второго сообщения про тот же заказ не бывает. Загруженный групповой чат, где на каждую смену статуса приходит новое сообщение, через час становится нечитаемым; одно сообщение, которое меняет свои кнопки, остаётся чистым списком того, что ещё нужно сделать.",
        },
        {
          type: "p",
          text: "Раньше были только «Принять» и затем одна кнопка «Завершить». Она пропускала «Готово», и трекер гостя прыгал сразу с «Готовится» на «Доставлен». Теперь кнопки идут по тем же четырём шагам, которые видит гость.",
        },
        { type: "h2", text: "6. Гость видит, как заказ движется" },
        {
          type: "p",
          text: "На телефоне гостя страница заказа показывает простой трекер: ожидает, готовится, готов, доставлен, или понятное сообщение, если заказ отменён. Когда повар нажимает «Готово» в Telegram, экран гостя обновляется в течение нескольких секунд.",
        },
        {
          type: "p",
          text: "Если заказ идёт на счёт номера, у сообщения появляется ещё один ряд кнопок для ресепшена: **записано в счёт Exely** для отелей, которые работают с Exely, или **оплата получена** на стойке, после чего бот спрашивает, наличными или картой. Эти кнопки исчезают, как только нажата одна из них.",
        },
        { type: "h2", text: "Что пока не в реальном времени" },
        {
          type: "p",
          text: "Честно: панели не получают обновления push-ом. Экраны заказов и POS **опрашивают** сервер, примерно каждые 10–20 секунд в зависимости от экрана, и трекер гостя тоже опрашивает. Для кухни этого достаточно, и так систему проще эксплуатировать. Но именно поэтому новый заказ сотрудники сначала видят в Telegram. Заменить опрос живым потоком есть в планах; пока это не было настолько важно, чтобы обогнать остальное.",
        },
        { type: "h2", text: "Что я вынес из этой работы" },
        {
          type: "list",
          items: [
            "Всё, что напечатано и стоит в номере, это публичный API. Собирайте его адрес в одном месте и никогда не ломайте.",
            "Одна точка входа для заказов убирает целый класс ошибок, когда один канал считает счёт иначе, чем другой.",
            "Уведомления это побочный эффект. Отправляйте их после того, как работа сохранена, и позволяйте им падать, не роняя саму работу.",
            "Редактируйте, а не добавляйте. Одно сообщение на заказ сохраняет групповой чат пригодным для работы.",
          ],
        },
        {
          type: "p",
          text: "Результат можно посмотреть на [bronit.uz](https://bronit.uz). Если вы строите что-то похожее и хотите сравнить подходы, напишите мне в [Telegram](https://t.me/botirjon_sh).",
        },
      ],
    },
    uz: {
      title: "QR-koddan oshxonagacha: xonaga buyurtma qanday yo'l bosadi",
      excerpt:
        "Mehmon xonasidagi kodni skanerlab, kechki ovqat buyurtma qiladi. Bu buyurtma Bronit ichida bosib o'tadigan har bir qadam va ularning har biri ortidagi qarorlar.",
      body: [
        {
          type: "p",
          text: "Tashqaridan qaraganda Bronit'dagi xonaga xizmat oddiy ko'rinadi. Mehmon xonadagi QR-kodni skanerlaydi, bir nechta taom tanlaydi, \"buyurtma berish\"ni bosadi va bir necha daqiqadan keyin eshik taqillaydi. Ichkarida esa bu buyurtma bir nechta qarordan o'tadi va ularning har biri haqiqiy mehmonxonada nimadir noto'g'ri ketganidan keyin paydo bo'lgan. Bu postda bitta buyurtmani skanerlashdan eshikkacha kuzatib boraman.",
        },
        { type: "h2", text: "1. Hech qachon o'zgarmasligi kerak bo'lgan QR-kod" },
        {
          type: "p",
          text: "Xonadagi kod ochiq sahifani ochadi: login ham, ilova ham kerak emas. Manzilda mehmonxona va xona raqami bor, shuning uchun mehmon hali hech narsa bosmasidan oldin buyurtma qayerga ketishini biladi.",
        },
        {
          type: "p",
          text: "Bu manzil kodda faqat bitta joyda, `publicHubUrl` funksiyasida yig'iladi. Xonadagi TV QR-kodni shundan chizadi, chop etiladigan kartochkalar PDF'i ham shundan yasaladi, shuning uchun ikkalasi har doim bir xil satr. Bu tuyulganidan muhimroq. Chop etilgan kartochka xonada yillab turadi. Agar manzil formati qachondir o'zgarsa, har bir xonadagi har bir kartochka jimgina hech qayerga olib bormaydigan bo'lib qoladi. Shuning uchun bu manzilga shartnoma sifatida qaraymiz: uni kengaytirish mumkin, buzish mumkin emas.",
        },
        { type: "h2", text: "2. Mehmonning tilidagi menyu" },
        {
          type: "p",
          text: "O'zbekistondagi mehmonxonalarga mehmonlar har joydan keladi, shuning uchun menyu mazmuni **o'nta tilni** qo'llab-quvvatlaydi. Xodim taom nomi va tavsifini o'zi ishlaydigan tilda bir marta kiritadi va \"Tarjima qilish\"ni bosadi. Qolgan to'qqiztasini Google Translate to'ldiradi.",
        },
        {
          type: "p",
          text: "Mashina tarjimasi taomlarda xato qiladi, ba'zan kulgili, ba'zan unchalik emas, shuning uchun istalgan tilni **asl matnga qulflab qo'yish** mumkin. Qulflangan til shunchaki asl matnni ko'rsatadi va keyingi safar \"Tarjima qilish\" bosilganda qayta yozilmasdan o'tkazib yuboriladi. Menyu atrofidagi tugma va yozuvlar o'zbek, rus yoki ingliz tilida qoladi; taomlar tilini mehmon alohida tanlaydi.",
        },
        { type: "h2", text: "3. Barcha buyurtmalar uchun bitta funksiya" },
        {
          type: "p",
          text: "Buyurtma Bronit'ga uch yo'l bilan kelishi mumkin: QR-menyudan, xonadagi TV'dan yoki xodim qo'ng'iroqdan yoki qabulxonadagi suhbatdan keyin uni o'zi kiritadi. Boshida har biriga alohida yo'l qilish istagi bor edi. Buning o'rniga uchalasi ham bitta funksiya, `placeMenuOrder` orqali o'tadi.",
        },
        { type: "code", lang: "ts", code: ORDER_CODE },
        {
          type: "p",
          text: "Kirish bitta bo'lgani uchun har bir buyurtma bir xil ishlanadi: narxlar buyurtma paytida **qayd etiladi**, shuning uchun ertaga menyu o'zgarsa, kechagi hisob qayta yozilmaydi; mehmonxonaning xizmat haqi bir xil qo'llanadi; tarixda aynan bitta yozuv va Telegram'da aynan bitta xabar bo'ladi. Xodim kiritgan buyurtma oddiy buyurtma, faqat uni kim qabul qilganini ham eslab qoladi. Uni keyinroqqa rejalashtirish ham mumkin va vaqti kelmaguncha u oshxona navbatiga tushmaydi.",
        },
        { type: "h2", text: "4. Javobdan keyin Telegram" },
        {
          type: "p",
          text: "O'zbekistondagi mehmonxona xodimlari baribir Telegram'da yashaydi, shuning uchun yangi buyurtma avval o'sha yerda paydo bo'ladi: mehmonxona guruhida, menyu buyurtmalari uchun alohida mavzuda xabar.",
        },
        {
          type: "p",
          text: "Muhim tafsilot shu xabar **qachon** yuborilishida. U Next.js'ning `after()` ichida ishlaydi: buyurtma saqlanishi bilan mehmon javob oladi, Telegram chaqiruvi esa undan keyin bo'ladi. U best-effort tamoyili bilan ishlaydi. Telegram sekinlashsa yoki ishlamasa ham buyurtma baribir mavjud, mehmon uni ko'radi, xodimlar esa uni panelda topadi. Bildirishnoma hech qachon buyurtma yo'qolishiga sabab bo'lmasligi kerak.",
        },
        { type: "h2", text: "5. Bitta xabarni tahrirlaydigan tugmalar" },
        {
          type: "p",
          text: "Buyurtma xabarida tugmalar bor va ular buyurtmani bir qadamdan oldinga suradi: **Принять** (qabul qilish) yoki **Отклонить** (rad etish), keyin **Готово** (tayyor), keyin **Доставлен** (yetkazildi). Har bir tugma Bronit'ga `morder:<action>:<orderId>` ko'rinishidagi kichik satr yuboradi.",
        },
        { type: "code", lang: "ts", code: STATUS_CODE },
        {
          type: "p",
          text: "Har bir bosish **o'sha xabarning o'zini tahrirlaydi**. Bitta buyurtma haqida ikkinchi xabar bo'lmaydi. Har bir holat o'zgarishiga yangi xabar keladigan band guruh chati bir soatda o'qib bo'lmaydigan holga keladi; o'z tugmalarini o'zgartiradigan bitta xabar esa hali nima qilish kerakligining toza ro'yxati bo'lib qoladi.",
        },
        {
          type: "p",
          text: "Ilgari faqat \"Qabul qilish\" va keyin bitta \"Yakunlash\" tugmasi bor edi. U \"Tayyor\"ni o'tkazib yuborardi va mehmonning trekeri \"Tayyorlanmoqda\"dan to'g'ri \"Yetkazildi\"ga sakrardi. Endi tugmalar mehmon ko'radigan o'sha to'rtta qadam bo'yicha boradi.",
        },
        { type: "h2", text: "6. Mehmon buyurtma qanday harakatlanayotganini ko'radi" },
        {
          type: "p",
          text: "Mehmonning telefonida buyurtma sahifasi oddiy trekerni ko'rsatadi: kutilmoqda, tayyorlanmoqda, tayyor, yetkazildi yoki buyurtma bekor qilingan bo'lsa, tushunarli xabar. Oshpaz Telegram'da \"Готово\"ni bosganda mehmonning ekrani bir necha soniya ichida yangilanadi.",
        },
        {
          type: "p",
          text: "Agar buyurtma xona hisobiga yozilsa, xabarda qabulxona uchun yana bir qator tugma paydo bo'ladi: Exely bilan ishlaydigan mehmonxonalar uchun **Exely hisobiga yozildi** yoki qabulxonada **to'lov qabul qilindi**, shundan keyin bot naqdmi yoki kartami, deb so'raydi. Ulardan biri bosilishi bilan bu tugmalar yo'qoladi.",
        },
        { type: "h2", text: "Hozircha real vaqtda bo'lmagan narsa" },
        {
          type: "p",
          text: "Ochig'ini aytsam: panellar yangilanishlarni push orqali olmaydi. Buyurtma ekranlari va POS serverni **so'rab turadi**, ekranga qarab taxminan har 10–20 soniyada, mehmonning trekeri ham so'rab turadi. Oshxona uchun bu yetarli va tizimni boshqarish ham soddaroq. Lekin aynan shu sababli xodimlar yangi buyurtmani avval Telegram'da ko'radi. So'rovni jonli oqim bilan almashtirish rejada bor; hozircha bu boshqa ishlardan oldinga o'tadigan darajada muhim bo'lmadi.",
        },
        { type: "h2", text: "Bu ishdan nimani o'rgandim" },
        {
          type: "list",
          items: [
            "Chop etilib, xonaga qo'yilgan hamma narsa ochiq API. Uning manzilini bitta joyda yig'ing va hech qachon buzmang.",
            "Buyurtmalar uchun bitta kirish nuqtasi bir kanal hisobni boshqacha hisoblaydigan xatolarning butun bir turini yo'q qiladi.",
            "Bildirishnomalar qo'shimcha effekt. Ularni ish saqlangandan keyin yuboring va ishning o'zini qulatmasdan xato berishiga imkon qoldiring.",
            "Qo'shmang, tahrirlang. Har bir buyurtmaga bitta xabar guruh chatini ishlatsa bo'ladigan holda saqlaydi.",
          ],
        },
        {
          type: "p",
          text: "Natijani [bronit.uz](https://bronit.uz) saytida ko'rishingiz mumkin. Agar shunga o'xshash narsa qurayotgan bo'lsangiz va tajriba almashmoqchi bo'lsangiz, menga [Telegram](https://t.me/botirjon_sh)'da yozing.",
        },
      ],
    },
  },
};

export default post;
