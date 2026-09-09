import { IOption } from '../interfaces/option.interface.js';

export const OPTIONS_MOCK: IOption[] = [
  {
    name: 'Реєстраційні дії з транспортними засобами',
    optionId: 17,
    options: [],
  },
  {
    name: 'Практичний іспит',
    options: [
      {
        name: 'Практичний іспит на транспортному засобі Сервісного центру МВС',
        options: [
          {
            name: 'категорія А1',
            optionId: 46,
            options: [],
          },
          {
            name: 'категорія А (механична КПП)',
            optionId: 47,
            options: [],
          },
          {
            name: 'категорія В (механічна КПП)',
            optionId: 49,
            options: [],
          },
          {
            name: 'категорія В (автоматична КПП)',
            optionId: 50,
            options: [],
          },
          {
            name: 'категорія С1',
            optionId: 51,
            options: [],
          },
          {
            name: 'категорія С',
            optionId: 52,
            options: [],
          },
          {
            name: 'категорія D1',
            optionId: 53,
            options: [],
          },
          {
            name: 'категорія CE',
            optionId: 57,
            options: [],
          },
          {
            name: 'категорія А (автоматична КПП)',
            optionId: 65,
            options: [],
          },
        ],
      },
      {
        name: 'Практичний іспит на транспортному засобі навчального закладу',
        options: [
          {
            name: 'категорія А1, А, В1',
            optionId: 42,
            options: [],
          },
          {
            name: 'категорія В',
            optionId: 43,
            options: [],
          },
          {
            name: 'категорії С1, С, D1, D',
            optionId: 44,
            options: [],
          },
          {
            name: 'категорії ВЕ, С1Е, СЕ, D1E, DE',
            optionId: 45,
            options: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Відомча реєстрація великотоннажних/ технологічних транспортних засобів',
    optionId: 63,
    options: [],
  },
  {
    name: 'Обмін посвідчення водія/міжнародне посвідчення водія ',
    optionId: 7,
    options: [],
  },
  {
    name: 'Теоретичний іспит ',
    optionId: 8,
    options: [],
  },
];
