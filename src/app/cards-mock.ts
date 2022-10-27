import { Card } from './card/card';
import getCurrentTime from './utils/parse-time';
export const CARD: Card[] = [
  {
    id: 1,
    name: 'Получение и разбор полученного Технического Задания',
    startDate: new Date().toISOString().substring(0, 10),
    startTime: getCurrentTime(),
    finishDate: new Date().toISOString().substring(0, 10),
    finishTime: getCurrentTime(),
    description:
      'В ходе данного этапа будет проведен разбор Технического задания на разработку сайта, полученного от клиента. ',
  },
  {
    id: 2,
    name: 'Подготовка коммерческого предложения',
    startDate: new Date().toISOString().substring(0, 10),
    startTime: getCurrentTime(),
    finishDate: new Date().toISOString().substring(0, 10),
    finishTime: getCurrentTime(),
    description:
      'На основе рассмотренного ТЗ составляется коммерческое предложение с разбивкой на этапы, стоимость и сроки работ. И также цели разработки, технические характеристики ресурса, преимущества предложения и стоимость услуг.',
  },
  {
    id: 3,
    name: 'Подписание договора',
    startDate: new Date().toISOString().substring(0, 10),
    startTime: getCurrentTime(),
    finishDate: new Date().toISOString().substring(0, 10),
    finishTime: getCurrentTime(),
    description:
      'Составление драфта договора, внесение в него всех правок от менеджеров, юридического отдела и руководства. Подписание и оплата аванса. ',
  },
  {
    id: 4,
    name: 'Создание дизайн-концепции сайта',
    startDate: new Date().toISOString().substring(0, 10),
    startTime: getCurrentTime(),
    finishDate: new Date().toISOString().substring(0, 10),
    finishTime: getCurrentTime(),
    description:
      'Дизайн-концепция — это общая схематическая визуализация, показывающая, как будет выглядеть сайт в целом.',
  },
  {
    id: 5,
    name: 'Программирование функционала',
    startDate: new Date().toISOString().substring(0, 10),
    startTime: getCurrentTime(),
    finishDate: new Date().toISOString().substring(0, 10),
    finishTime: getCurrentTime(),
    description:
      'Прототипирование — создание шаблонов страниц. Прототип демонстрирует общий внешний вид и структуру.',
  },
  {
    id: 6,
    name: 'Тестирование сайта',
    startDate: new Date().toISOString().substring(0, 10),
    startTime: getCurrentTime(),
    finishDate: new Date().toISOString().substring(0, 10),
    finishTime: getCurrentTime(),
    description:
      'Адаптация дизайна под широкоформатный монитор, планшет, смартфон.',
  },
  {
    id: 7,
    name: 'Сдача проекта заказчику',
    startDate: new Date().toISOString().substring(0, 10),
    startTime: getCurrentTime(),
    finishDate: new Date().toISOString().substring(0, 10),
    finishTime: getCurrentTime(),
    description: 'Создание страниц с помощью HTML и CSS-стилей.',
  },
];
