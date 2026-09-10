export interface IOptionDataItem {
  name: string;
  externalOptionId?: number;
  options?: IOptionDataItem[];
}

export const OPTIONS_DATA: IOptionDataItem[] = [
  {
    name: 'Реєстраційні дії з транспортними засобами',
    externalOptionId: 17,

  },
  {
    name: 'Практичний іспит',
    options: [
      {
        name: 'Практичний іспит на транспортному засобі Сервісного центру МВС',
        options: [
          {
            name: 'категорія А1',
            externalOptionId: 46,

          },
          {
            name: 'категорія А (механична КПП)',
            externalOptionId: 47,

          },
          {
            name: 'категорія В (механічна КПП)',
            externalOptionId: 49,

          },
          {
            name: 'категорія В (автоматична КПП)',
            externalOptionId: 50,

          },
          {
            name: 'категорія С1',
            externalOptionId: 51,

          },
          {
            name: 'категорія С',
            externalOptionId: 52,

          },
          {
            name: 'категорія D1',
            externalOptionId: 53,

          },
          {
            name: 'категорія CE',
            externalOptionId: 57,

          },
          {
            name: 'категорія А (автоматична КПП)',
            externalOptionId: 65,

          },
        ],
      },
      {
        name: 'Практичний іспит на транспортному засобі навчального закладу',
        options: [
          {
            name: 'категорія А1, А, В1',
            externalOptionId: 42,

          },
          {
            name: 'категорія В',
            externalOptionId: 43,

          },
          {
            name: 'категорії С1, С, D1, D',
            externalOptionId: 44,

          },
          {
            name: 'категорії ВЕ, С1Е, СЕ, D1E, DE',
            externalOptionId: 45,

          },
        ],
      },
    ],
  },
  {
    name: 'Відомча реєстрація великотоннажних/ технологічних транспортних засобів',
    externalOptionId: 63,

  },
  {
    name: 'Обмін посвідчення водія/міжнародне посвідчення водія ',
    externalOptionId: 7,

  },
  {
    name: 'Теоретичний іспит ',
    externalOptionId: 8,

  },
];
