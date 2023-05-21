const user = {
  name: "Tatiana",
  surname: "Skip",
  userPhoto: "photo.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "бмв.jpg", alt: "Авто моєї мрії" },
    { src: "luk.jpg", alt: "Переможець із стрільби з лука" },
    { src: "Програміст.jpg", alt: "Класний програміст" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500,
  700,
  800,
  1000,
  1200,
  1500,
  1800,
  2100,
  2400,
  2700,
  3000,
  3300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Січень", skill: "Вчити English" },
  { month: "Лютий", skill: "Вчити математику" },
  { month: "Березень", skill: "JavaScript" },
  { month: "Квітень", skill: "Ходити на тренування" },
  { month: "Травень", skill: "Вивчити таблицю множення" },
  { month: "Червень", skill: "Прочитати позакласне читання" },
  { month: "Липень", skill: "HTML" },
  { month: "Серпень", skill: "CSS" },
  { month: "Вересень", skill: "Отримати класні оцінки у школі" },
  { month: "Жовтень", skill: "Самостійність" },
  { month: "Листопад", skill: "Кретичне мислення" },
  { month: "Грудень", skill: "Тайм-менеджмент" },
];


export { user, arr, necessaryExpenses, todo };
