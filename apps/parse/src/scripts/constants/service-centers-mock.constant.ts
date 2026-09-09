export const SERVICE_CENTERS_MOCK: Record<
  number,
  {
    name: string;
    cities: {
      name: string;
      serviceCenters: {
        serviceId: number;
        name: string;
        street: string;
        building: string;
      }[];
    }[];
  }[]
> = {
  63: [
    {
      name: 'Київська область',
      cities: [
        {
          name: 'м. Буча',
          serviceCenters: [
            {
              serviceId: 7,
              name: 'ТСЦ МВС № 3247 ',
              street: 'вул. Депутатська',
              building: '1 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Вінницька область',
      cities: [
        {
          name: 'м. Вінниця',
          serviceCenters: [
            {
              serviceId: 11,
              name: 'ТСЦ МВС № 0541',
              street: 'вул. Ботанічна',
              building: '24 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Волинська область',
      cities: [
        {
          name: 'с. Луцький р-н, с. Струмівка',
          serviceCenters: [
            {
              serviceId: 17,
              name: 'ТСЦ МВС № 0741',
              street: 'вул. Рівненська',
              building: '74 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Дніпропетровська область',
      cities: [
        {
          name: 'м. Дніпро',
          serviceCenters: [
            {
              serviceId: 21,
              name: 'ТСЦ МВС № 1241',
              street: 'вул. Сонячна Набережна',
              building: '130 ',
            },
          ],
        },
        {
          name: 'м. Кривий Ріг',
          serviceCenters: [
            {
              serviceId: 28,
              name: 'ТСЦ МВС № 1248',
              street: 'вул. Стрельнікова',
              building: '15 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Донецька область',
      cities: [
        {
          name: 'с. Олександрівка',
          serviceCenters: [
            {
              serviceId: 30,
              name: 'ТСЦ МВС № 1451',
              street: 'вул. Центральна',
              building: '18',
            },
          ],
        },
      ],
    },
    {
      name: 'Житомирська область',
      cities: [
        {
          name: 'с. Довжик',
          serviceCenters: [
            {
              serviceId: 32,
              name: 'ТСЦ МВС № 1841',
              street: 'вул. Богунська',
              building: '1 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Закарпатська область',
      cities: [
        {
          name: 'м. Ужгород',
          serviceCenters: [
            {
              serviceId: 37,
              name: 'ТСЦ МВС № 2141',
              street: 'вул. О. Кошового',
              building: '4 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Запоріжжя та Запорізька територіальна громада',
      cities: [
        {
          name: 'м. Запоріжжя',
          serviceCenters: [
            {
              serviceId: 42,
              name: 'ТСЦ МВС № 2341',
              street: 'вул. Олександрівська',
              building: '84 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Івано-Франківська область',
      cities: [
        {
          name: 'м. Івано-Франківськ',
          serviceCenters: [
            {
              serviceId: 46,
              name: 'ТСЦ МВС № 2641',
              street: 'вул. Коновальця',
              building: '229 у',
            },
          ],
        },
      ],
    },
    {
      name: 'Кіровоградська область',
      cities: [
        {
          name: 'м. Кропивницький',
          serviceCenters: [
            {
              serviceId: 60,
              name: 'ТСЦ МВС № 3541',
              street: 'пр-т. Інженерів',
              building: '9/92 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Львівська область',
      cities: [
        {
          name: 'м. Львів',
          serviceCenters: [
            {
              serviceId: 65,
              name: 'ТСЦ МВС № 4641',
              street: 'вул. Д. Апостола',
              building: '11 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Миколаївська область',
      cities: [
        {
          name: 'м. Миколаїв',
          serviceCenters: [
            {
              serviceId: 75,
              name: 'ТСЦ МВС № 4841 ',
              street: 'провулок. Транспортний',
              building: '1а/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Одеська область',
      cities: [
        {
          name: 'с. Лиманський р-н., с. Крижанівка',
          serviceCenters: [
            {
              serviceId: 81,
              name: 'ТСЦ МВС № 5142',
              street: 'вул. Ак. Сахарова',
              building: '1 г',
            },
          ],
        },
        {
          name: 'смт. Доброслав',
          serviceCenters: [
            {
              serviceId: 85,
              name: 'ТСЦ МВС № 5147',
              street: 'вул. Промислова',
              building: '29 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Полтавська область',
      cities: [
        {
          name: 'с. Розсошенці',
          serviceCenters: [
            {
              serviceId: 92,
              name: 'ТСЦ МВС № 5341',
              street: 'вул. Кременчуцька',
              building: '2 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Рівненська область',
      cities: [
        {
          name: 'м. Рівне',
          serviceCenters: [
            {
              serviceId: 100,
              name: 'ТСЦ МВС № 5641',
              street: 'вул. Київська',
              building: '108 б',
            },
          ],
        },
      ],
    },
    {
      name: 'Сумська область',
      cities: [
        {
          name: 'м. Суми',
          serviceCenters: [
            {
              serviceId: 109,
              name: 'ТСЦ МВС № 5946',
              street: 'вул. Білопільський шлях',
              building: '18/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Тернопільська область',
      cities: [
        {
          name: 'с. Підгородне',
          serviceCenters: [
            {
              serviceId: 110,
              name: 'ТСЦ МВС № 6141',
              street: 'вул. Стрийська',
              building: '5 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Харків та Харківська територіальна громада',
      cities: [
        {
          name: 'м. Харків',
          serviceCenters: [
            {
              serviceId: 115,
              name: 'ТСЦ МВС № 6341',
              street: 'вул. Шевченка',
              building: '26 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Херсонська область',
      cities: [
        {
          name: 'м. Херсон',
          serviceCenters: [
            {
              serviceId: 125,
              name: 'ТСЦ МВС № 6541',
              street: 'вул. Вишнева',
              building: '22 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Хмельницька область',
      cities: [
        {
          name: 'м. Хмельницький',
          serviceCenters: [
            {
              serviceId: 127,
              name: 'ТСЦ МВС № 6841',
              street: 'вул. Західно-Окружна,',
              building: '11/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Черкаська область',
      cities: [
        {
          name: 'м. Черкаси',
          serviceCenters: [
            {
              serviceId: 132,
              name: 'ТСЦ МВС № 7141',
              street: 'вул. Лесі Українки',
              building: '21 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернівецька область',
      cities: [
        {
          name: 'м. Чернівці',
          serviceCenters: [
            {
              serviceId: 137,
              name: 'ТСЦ МВС № 7341',
              street: 'вул. Руська',
              building: '248 м',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернігівська область',
      cities: [
        {
          name: 'м. Чернігів',
          serviceCenters: [
            {
              serviceId: 142,
              name: 'ТСЦ МВС № 7441',
              street: 'Шевченка',
              building: '162а',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Київ',
      cities: [
        {
          name: 'м. Київ',
          serviceCenters: [
            {
              serviceId: 146,
              name: 'ТСЦ МВС № 8041',
              street: 'вул. Перемоги',
              building: '20 ',
            },
            {
              serviceId: 147,
              name: 'ТСЦ МВС № 8042',
              street: 'вул. Мрії',
              building: '19',
            },
            {
              serviceId: 148,
              name: 'ТСЦ МВС № 8043',
              street: 'пр. Європейського Союзу',
              building: '47 ',
            },
            {
              serviceId: 149,
              name: 'ТСЦ МВС № 8044',
              street: 'вул. Братиславська',
              building: '52 ',
            },
            {
              serviceId: 150,
              name: 'ТСЦ МВС № 8045',
              street: 'вул. Павла Усенка',
              building: '8 ',
            },
            {
              serviceId: 151,
              name: 'ТСЦ МВС № 8046',
              street: 'вул. Столичне шосе',
              building: '104 ',
            },
            {
              serviceId: 153,
              name: 'ТСЦ МВС № 8048',
              street: 'вул. Миколи Грінченка',
              building: '18 ',
            },
          ],
        },
        {
          name: 'с. Софіївська Борщагівка',
          serviceCenters: [
            {
              serviceId: 152,
              name: 'ТСЦ МВС № 8047',
              street: 'вул. Велика Кільцева',
              building: '110 а',
            },
          ],
        },
      ],
    },
  ],
  7: [
    {
      name: 'Київська область',
      cities: [
        {
          name: 'м. Баришівка',
          serviceCenters: [
            {
              serviceId: 1,
              name: 'ТСЦ МВС № 3241',
              street: 'вул. Польова',
              building: '3 ',
            },
          ],
        },
        {
          name: 'м. Біла Церква',
          serviceCenters: [
            {
              serviceId: 2,
              name: 'ТСЦ МВС № 3242',
              street: ' вул. Сухоярська',
              building: '20',
            },
          ],
        },
        {
          name: 'м. Бровари',
          serviceCenters: [
            {
              serviceId: 3,
              name: 'ТСЦ МВС № 3243',
              street: 'вул. Броварської Сотні',
              building: '4А',
            },
          ],
        },
        {
          name: 'м. Обухів',
          serviceCenters: [
            {
              serviceId: 4,
              name: 'ТСЦ МВС № 3244 ',
              street: 'вул. Каштанова',
              building: '23 ',
            },
          ],
        },
        {
          name: 'м. Вишгород',
          serviceCenters: [
            {
              serviceId: 5,
              name: 'ТСЦ МВС № 3245',
              street: 'Кургузова',
              building: '7-А',
            },
          ],
        },
        {
          name: 'с. Софіївська Борщагівка',
          serviceCenters: [
            {
              serviceId: 6,
              name: 'ТСЦ МВС № 3246',
              street: 'вул. Малишко',
              building: '2',
            },
          ],
        },
        {
          name: 'м. Буча',
          serviceCenters: [
            {
              serviceId: 7,
              name: 'ТСЦ МВС № 3247 ',
              street: 'вул. Депутатська',
              building: '1 в',
            },
          ],
        },
        {
          name: 'м. Переяслав',
          serviceCenters: [
            {
              serviceId: 8,
              name: 'ТСЦ МВС № 3248 ',
              street: 'вул. Ново-Київське шосе',
              building: '46 ',
            },
          ],
        },
        {
          name: 'с. Білоцерківський район, с. Винарівка',
          serviceCenters: [
            {
              serviceId: 9,
              name: 'ТСЦ МВС № 3249',
              street: 'вул. Лісова',
              building: '39 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Вінницька область',
      cities: [
        {
          name: 'м. Вінниця',
          serviceCenters: [
            {
              serviceId: 11,
              name: 'ТСЦ МВС № 0541',
              street: 'вул. Ботанічна',
              building: '24 ',
            },
            {
              serviceId: 16,
              name: 'ТСЦ МВС № 0546',
              street: 'вул. Брацлавська',
              building: '85 ',
            },
          ],
        },
        {
          name: 'м. Гайсин',
          serviceCenters: [
            {
              serviceId: 12,
              name: 'ТСЦ МВС № 0542',
              street: 'вул. Південна',
              building: '67 ',
            },
          ],
        },
        {
          name: 'м. Шаргород',
          serviceCenters: [
            {
              serviceId: 13,
              name: 'ТСЦ МВС № 0543',
              street: 'вул. Героїв Майдану',
              building: '224 ',
            },
          ],
        },
        {
          name: 'м. Тульчин',
          serviceCenters: [
            {
              serviceId: 14,
              name: 'ТСЦ МВС № 0544',
              street: 'вул. Леонтовича',
              building: '55 а',
            },
          ],
        },
        {
          name: 'с. Великий Митник',
          serviceCenters: [
            {
              serviceId: 15,
              name: 'ТСЦ МВС № 0545',
              street: 'вул. 57км+1000',
              building: 'урочище буд. 2',
            },
          ],
        },
      ],
    },
    {
      name: 'Волинська область',
      cities: [
        {
          name: 'с. Луцький р-н, с. Струмівка',
          serviceCenters: [
            {
              serviceId: 17,
              name: 'ТСЦ МВС № 0741',
              street: 'вул. Рівненська',
              building: '74 ',
            },
          ],
        },
        {
          name: 'м. Ковель',
          serviceCenters: [
            {
              serviceId: 18,
              name: 'ТСЦ МВС № 0742',
              street: 'вул. Володимирська',
              building: '133 ',
            },
          ],
        },
        {
          name: 'м. Камінь-Каширський',
          serviceCenters: [
            {
              serviceId: 19,
              name: 'ТСЦ МВС № 0743',
              street: 'вул. Магдебурзького права',
              building: '42 ',
            },
          ],
        },
        {
          name: 'м. Нововолинськ',
          serviceCenters: [
            {
              serviceId: 20,
              name: 'ТСЦ МВС № 0744',
              street: 'вул. Сокальська',
              building: '1 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Дніпропетровська область',
      cities: [
        {
          name: 'м. Дніпро',
          serviceCenters: [
            {
              serviceId: 21,
              name: 'ТСЦ МВС № 1241',
              street: 'вул. Сонячна Набережна',
              building: '130 ',
            },
            {
              serviceId: 22,
              name: 'ТСЦ МВС № 1242',
              street: 'пр. Праці',
              building: '16 ',
            },
            {
              serviceId: 29,
              name: 'ТСЦ МВС № 1249',
              street: 'пр-т. Слобожанський',
              building: '31 д',
            },
          ],
        },
        {
          name: 'м. Кривий Ріг',
          serviceCenters: [
            {
              serviceId: 23,
              name: 'ТСЦ МВС № 1243',
              street: 'вулиця Генерала Радієвського',
              building: '34А',
            },
            {
              serviceId: 28,
              name: 'ТСЦ МВС № 1248',
              street: 'вул. Стрельнікова',
              building: '15 ',
            },
          ],
        },
        {
          name: "м. Кам'янське",
          serviceCenters: [
            {
              serviceId: 24,
              name: 'ТСЦ МВС № 1244',
              street: 'вул. Фіалкова',
              building: '79 ',
            },
          ],
        },
        {
          name: 'м. Покров',
          serviceCenters: [
            {
              serviceId: 25,
              name: 'ТСЦ МВС № 1245',
              street: 'вул. Уральська',
              building: '1 ',
            },
          ],
        },
        {
          name: 'м. Самар',
          serviceCenters: [
            {
              serviceId: 26,
              name: 'ТСЦ МВС № 1246',
              street: 'вул. Спаська',
              building: '7',
            },
          ],
        },
        {
          name: 'м. Павлоград',
          serviceCenters: [
            {
              serviceId: 27,
              name: 'ТСЦ МВС № 1247',
              street: 'вул. Дніпровська',
              building: '334 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Донецька область',
      cities: [
        {
          name: 'с. Олександрівка',
          serviceCenters: [
            {
              serviceId: 30,
              name: 'ТСЦ МВС № 1451',
              street: 'вул. Центральна',
              building: '18',
            },
          ],
        },
      ],
    },
    {
      name: 'Житомирська область',
      cities: [
        {
          name: 'с. Довжик',
          serviceCenters: [
            {
              serviceId: 32,
              name: 'ТСЦ МВС № 1841',
              street: 'вул. Богунська',
              building: '1 а',
            },
          ],
        },
        {
          name: 'м. Бердичів',
          serviceCenters: [
            {
              serviceId: 33,
              name: 'ТСЦ МВС № 1842',
              street: 'вул. Шкіряників',
              building: '14 ',
            },
          ],
        },
        {
          name: 'м. Коростень',
          serviceCenters: [
            {
              serviceId: 34,
              name: 'ТСЦ МВС № 1843',
              street: 'вул. Сергія Кемського',
              building: '3 ',
            },
          ],
        },
        {
          name: 'м. Звягель',
          serviceCenters: [
            {
              serviceId: 35,
              name: 'ТСЦ МВС № 1844',
              street: 'вул. Відродження',
              building: '2 ',
            },
          ],
        },
        {
          name: 'м. Радомишль',
          serviceCenters: [
            {
              serviceId: 36,
              name: 'ТСЦ МВС № 1845',
              street: 'вул. Міськради',
              building: '12 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Закарпатська область',
      cities: [
        {
          name: 'м. Ужгород',
          serviceCenters: [
            {
              serviceId: 37,
              name: 'ТСЦ МВС № 2141',
              street: 'вул. О. Кошового',
              building: '4 ',
            },
          ],
        },
        {
          name: 'с. Мукачівський р-н., с. Клячаново',
          serviceCenters: [
            {
              serviceId: 38,
              name: 'ТСЦ МВС № 2142',
              street: 'вул. Автомобілістів',
              building: '28 ',
            },
          ],
        },
        {
          name: 'м. Тячів',
          serviceCenters: [
            {
              serviceId: 39,
              name: 'ТСЦ МВС № 2143',
              street: 'вул. Промислова',
              building: '6 а',
            },
          ],
        },
        {
          name: 'м. Хуст',
          serviceCenters: [
            {
              serviceId: 40,
              name: 'ТСЦ МВС № 2144',
              street: 'вул. Окружна',
              building: '34 ',
            },
          ],
        },
        {
          name: 'с. Берегівський р-н., с. Камянське',
          serviceCenters: [
            {
              serviceId: 41,
              name: 'ТСЦ МВС № 2146',
              street: 'вул. Українська',
              building: '1',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Запоріжжя та Запорізька територіальна громада',
      cities: [
        {
          name: 'м. Запоріжжя',
          serviceCenters: [
            {
              serviceId: 42,
              name: 'ТСЦ МВС № 2341',
              street: 'вул. Олександрівська',
              building: '84 ',
            },
            {
              serviceId: 43,
              name: 'ТСЦ МВС № 2342',
              street: 'вул. Бабури козака',
              building: '9 а',
            },
            {
              serviceId: 44,
              name: 'ТСЦ МВС № 2343',
              street: 'вул. Бабури козака',
              building: '9 а',
            },
          ],
        },
        {
          name: 'с. Сонячне',
          serviceCenters: [
            {
              serviceId: 45,
              name: 'ТСЦ МВС № 2348',
              street: 'вул. Сонячне шосе',
              building: '2 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Івано-Франківська область',
      cities: [
        {
          name: 'м. Івано-Франківськ',
          serviceCenters: [
            {
              serviceId: 46,
              name: 'ТСЦ МВС № 2641',
              street: 'вул. Коновальця',
              building: '229 у',
            },
          ],
        },
        {
          name: 'м. Калуш',
          serviceCenters: [
            {
              serviceId: 47,
              name: 'ТСЦ МВС № 2642',
              street: 'вул. Грушевського',
              building: '104 ',
            },
          ],
        },
        {
          name: 'м. Коломия',
          serviceCenters: [
            {
              serviceId: 48,
              name: 'ТСЦ МВС № 2643',
              street: 'вул. Симоненка',
              building: '2 в',
            },
          ],
        },
        {
          name: 'м. Снятин',
          serviceCenters: [
            {
              serviceId: 49,
              name: 'ТСЦ МВС № 2644',
              street: 'вул. Воєводи Коснятина',
              building: '60 ',
            },
          ],
        },
        {
          name: 'м. Надвірна',
          serviceCenters: [
            {
              serviceId: 50,
              name: 'ТСЦ МВС № 2645',
              street: 'вул. Визволення',
              building: '2 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Кіровоградська область',
      cities: [
        {
          name: 'м. Кропивницький',
          serviceCenters: [
            {
              serviceId: 60,
              name: 'ТСЦ МВС № 3541',
              street: 'пр-т. Інженерів',
              building: '9/92 ',
            },
          ],
        },
        {
          name: 'м. Олександрія',
          serviceCenters: [
            {
              serviceId: 61,
              name: 'ТСЦ МВС № 3542',
              street: 'пр-т. Будівельників',
              building: '38 ',
            },
          ],
        },
        {
          name: 'м. Бобринець',
          serviceCenters: [
            {
              serviceId: 62,
              name: 'ТСЦ МВС № 3543',
              street: 'вул. Миколаївська',
              building: '172 ',
            },
          ],
        },
        {
          name: 'м. Мала Виска',
          serviceCenters: [
            {
              serviceId: 63,
              name: 'ТСЦ МВС № 3544',
              street: 'вул. Мічуріна',
              building: '2 ',
            },
          ],
        },
        {
          name: 'м. Благовіщенське',
          serviceCenters: [
            {
              serviceId: 64,
              name: 'ТСЦ МВС № 3545',
              street: 'вул. Ореста Гуменюка',
              building: '11 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Львівська область',
      cities: [
        {
          name: 'м. Львів',
          serviceCenters: [
            {
              serviceId: 65,
              name: 'ТСЦ МВС № 4641',
              street: 'вул. Д. Апостола',
              building: '11 ',
            },
            {
              serviceId: 74,
              name: 'ТСЦ МВС № 4651',
              street: 'вул. Богданівська',
              building: '44 ',
            },
          ],
        },
        {
          name: 'м. Дрогобич',
          serviceCenters: [
            {
              serviceId: 66,
              name: 'ТСЦ МВС № 4642',
              street: 'вул. Трускавецька',
              building: '64 ',
            },
          ],
        },
        {
          name: 'с. Галицьке',
          serviceCenters: [
            {
              serviceId: 67,
              name: 'ТСЦ МВС № 4643',
              street: 'вул. Л. Українки',
              building: '1 ',
            },
          ],
        },
        {
          name: 'м. Самбір',
          serviceCenters: [
            {
              serviceId: 68,
              name: 'ТСЦ МВС № 4644',
              street: 'вул. Східна',
              building: '216 ',
            },
          ],
        },
        {
          name: 'м. Стрий',
          serviceCenters: [
            {
              serviceId: 69,
              name: 'ТСЦ МВС № 4645 ',
              street: 'вул. Багряного',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Шептицький',
          serviceCenters: [
            {
              serviceId: 70,
              name: 'ТСЦ МВС № 4646',
              street: 'вул. Корольова',
              building: '14 а',
            },
          ],
        },
        {
          name: 'м. Новояворівськ',
          serviceCenters: [
            {
              serviceId: 71,
              name: 'ТСЦ МВС № 4647',
              street: 'вул. Зелена',
              building: '2 ',
            },
          ],
        },
        {
          name: 'с. Солонка',
          serviceCenters: [
            {
              serviceId: 72,
              name: 'ТСЦ МВС № 4649',
              street: 'вул. Стрийська',
              building: '31Б',
            },
          ],
        },
        {
          name: 'м. Жовква',
          serviceCenters: [
            {
              serviceId: 73,
              name: 'ТСЦ МВС № 4650',
              street: 'вул. Вокзальна',
              building: '10 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Миколаївська область',
      cities: [
        {
          name: 'м. Миколаїв',
          serviceCenters: [
            {
              serviceId: 75,
              name: 'ТСЦ МВС № 4841 ',
              street: 'провулок. Транспортний',
              building: '1а/1',
            },
          ],
        },
        {
          name: 'м. Первомайськ',
          serviceCenters: [
            {
              serviceId: 76,
              name: 'ТСЦ МВС № 4842',
              street: 'вул. Вознесенська',
              building: '73 б',
            },
          ],
        },
        {
          name: 'м. Нова Одеса',
          serviceCenters: [
            {
              serviceId: 77,
              name: 'ТСЦ МВС № 4843',
              street: 'вул. Сеславинського',
              building: '12 ',
            },
          ],
        },
        {
          name: 'м. Вознесенськ',
          serviceCenters: [
            {
              serviceId: 78,
              name: 'ТСЦ МВС № 4844',
              street: 'вул. Молодогвардійська',
              building: '45 ',
            },
          ],
        },
        {
          name: 'м. Новий Буг',
          serviceCenters: [
            {
              serviceId: 79,
              name: 'ТСЦ МВС № 4845',
              street: 'вул. Площа Свободи',
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Одеська область',
      cities: [
        {
          name: 'м. Одеса',
          serviceCenters: [
            {
              serviceId: 80,
              name: 'ТСЦ МВС № 5141',
              street: 'вул. Інглезі',
              building: '15 а',
            },
            {
              serviceId: 91,
              name: 'ТСЦ МВС № 5154',
              street: 'вул. Аеропортівська',
              building: '27/1',
            },
          ],
        },
        {
          name: 'с. Лиманський р-н., с. Крижанівка',
          serviceCenters: [
            {
              serviceId: 81,
              name: 'ТСЦ МВС № 5142',
              street: 'вул. Ак. Сахарова',
              building: '1 г',
            },
          ],
        },
        {
          name: 'м. Білгород-Дністровський',
          serviceCenters: [
            {
              serviceId: 82,
              name: 'ТСЦ МВС № 5143',
              street: 'вул. Ігоря Іванова',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Ізмаїл',
          serviceCenters: [
            {
              serviceId: 83,
              name: 'ТСЦ МВС № 5144',
              street: 'пр-т. Незалежності',
              building: '362 ',
            },
          ],
        },
        {
          name: 'м. Роздільна',
          serviceCenters: [
            {
              serviceId: 84,
              name: 'ТСЦ МВС № 5146',
              street: 'вул. Кишинівська',
              building: '2 ',
            },
          ],
        },
        {
          name: 'смт. Доброслав',
          serviceCenters: [
            {
              serviceId: 85,
              name: 'ТСЦ МВС № 5147',
              street: 'вул. Промислова',
              building: '29 ',
            },
          ],
        },
        {
          name: 'м. Березівка',
          serviceCenters: [
            {
              serviceId: 86,
              name: 'ТСЦ МВС № 5148',
              street: 'вул. Героїв України',
              building: '27 ',
            },
          ],
        },
        {
          name: 'м. Подільськ',
          serviceCenters: [
            {
              serviceId: 87,
              name: 'ТСЦ МВС № 5149',
              street: 'вул. Соборна',
              building: '202 б',
            },
          ],
        },
        {
          name: 'м. Чорноморськ',
          serviceCenters: [
            {
              serviceId: 88,
              name: 'ТСЦ МВС № 5150',
              street: 'вул. Промислова',
              building: '14',
            },
          ],
        },
        {
          name: 'м. Болград',
          serviceCenters: [
            {
              serviceId: 89,
              name: 'ТСЦ МВС № 5151',
              street: 'вул. Лісна',
              building: '2 ',
            },
          ],
        },
        {
          name: 'с. Біляївський р-н., с. Усатове',
          serviceCenters: [
            {
              serviceId: 90,
              name: 'ТСЦ МВС № 5152',
              street: 'вул. Київська',
              building: '19',
            },
          ],
        },
      ],
    },
    {
      name: 'Полтавська область',
      cities: [
        {
          name: 'с. Розсошенці',
          serviceCenters: [
            {
              serviceId: 92,
              name: 'ТСЦ МВС № 5341',
              street: 'вул. Кременчуцька',
              building: '2 в',
            },
          ],
        },
        {
          name: 'м. Кременчук',
          serviceCenters: [
            {
              serviceId: 93,
              name: 'ТСЦ МВС № 5342',
              street: 'вул. Покровська',
              building: '14',
            },
          ],
        },
        {
          name: 'м. Лубни',
          serviceCenters: [
            {
              serviceId: 94,
              name: 'ТСЦ МВС № 5343',
              street: 'пр-т. Володимирський',
              building: '178 б',
            },
          ],
        },
        {
          name: 'м. Миргород',
          serviceCenters: [
            {
              serviceId: 95,
              name: 'ТСЦ МВС № 5344',
              street: 'вул. Анатолія Карбана',
              building: '14 а',
            },
          ],
        },
        {
          name: 'м. Гадяч',
          serviceCenters: [
            {
              serviceId: 96,
              name: 'ТСЦ МВС № 5345',
              street: 'вул. Героїв Майдану',
              building: '75-В',
            },
          ],
        },
        {
          name: 'с. Бутенки',
          serviceCenters: [
            {
              serviceId: 97,
              name: 'ТСЦ МВС № 5346',
              street: 'вул. Зоріна',
              building: '7 а',
            },
          ],
        },
        {
          name: 'м. Горішні Плавні',
          serviceCenters: [
            {
              serviceId: 99,
              name: 'ТСЦ МВС № 5348',
              street: 'вул. Строна',
              building: '11-А',
            },
          ],
        },
      ],
    },
    {
      name: 'Рівненська область',
      cities: [
        {
          name: 'м. Рівне',
          serviceCenters: [
            {
              serviceId: 100,
              name: 'ТСЦ МВС № 5641',
              street: 'вул. Київська',
              building: '108 б',
            },
          ],
        },
        {
          name: 'м. Дубно',
          serviceCenters: [
            {
              serviceId: 101,
              name: 'ТСЦ МВС № 5642',
              street: 'вул. Грушевського',
              building: '184 ',
            },
          ],
        },
        {
          name: 'м. Сарни',
          serviceCenters: [
            {
              serviceId: 102,
              name: 'ТСЦ МВС № 5643',
              street: 'вул. Костопільська',
              building: '100 ',
            },
          ],
        },
        {
          name: 'с. Володимирець',
          serviceCenters: [
            {
              serviceId: 103,
              name: 'ТСЦ МВС № 5644',
              street: 'вул. Соборна',
              building: '49 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Сумська область',
      cities: [
        {
          name: 'м. Глухів',
          serviceCenters: [
            {
              serviceId: 104,
              name: 'ТСЦ МВС № 5941',
              street: 'вул. Індустріальна',
              building: '19 а',
            },
          ],
        },
        {
          name: 'м. Конотоп',
          serviceCenters: [
            {
              serviceId: 105,
              name: 'ТСЦ МВС № 5942 вул. Садова, 39 (крім практичного іспиту)',
              street: 'вул. Садова',
              building: '39',
            },
          ],
        },
        {
          name: 'м. Охтирка',
          serviceCenters: [
            {
              serviceId: 106,
              name: 'ТСЦ МВС № 5943',
              street: 'вул. Київська',
              building: '164 в',
            },
          ],
        },
        {
          name: 'м. Ромни',
          serviceCenters: [
            {
              serviceId: 107,
              name: 'ТСЦ МВС № 5944',
              street: 'вул. Полтавська',
              building: '4 а',
            },
          ],
        },
        {
          name: 'м. Шостка',
          serviceCenters: [
            {
              serviceId: 108,
              name: 'ТСЦ МВС № 5945',
              street: 'вул. Героїв Шосткинщини',
              building: '24-А',
            },
          ],
        },
        {
          name: 'м. Суми',
          serviceCenters: [
            {
              serviceId: 109,
              name: 'ТСЦ МВС № 5946',
              street: 'вул. Білопільський шлях',
              building: '18/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Тернопільська область',
      cities: [
        {
          name: 'с. Підгородне',
          serviceCenters: [
            {
              serviceId: 110,
              name: 'ТСЦ МВС № 6141',
              street: 'вул. Стрийська',
              building: '5 ',
            },
          ],
        },
        {
          name: 'м. Підгайці',
          serviceCenters: [
            {
              serviceId: 111,
              name: 'ТСЦ МВС № 6142',
              street: 'вул. Замкова',
              building: '18 ',
            },
          ],
        },
        {
          name: 'м. Кременець',
          serviceCenters: [
            {
              serviceId: 112,
              name: 'ТСЦ МВС № 6143',
              street: 'вул. Шевченка',
              building: '67 ',
            },
          ],
        },
        {
          name: 'с. Угринь',
          serviceCenters: [
            {
              serviceId: 114,
              name: 'ТСЦ МВС № 6145',
              street: "вул. Об'їзна",
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Харків та Харківська територіальна громада',
      cities: [
        {
          name: 'м. Харків',
          serviceCenters: [
            {
              serviceId: 115,
              name: 'ТСЦ МВС № 6341',
              street: 'вул. Шевченка',
              building: '26 ',
            },
            {
              serviceId: 116,
              name: 'ТСЦ МВС № 6342',
              street: 'вул. Станція метро «Київська» вестибюль №1',
              building: ' ',
            },
          ],
        },
      ],
    },
    {
      name: 'Харківська область',
      cities: [
        {
          name: 'м. Богодухів',
          serviceCenters: [
            {
              serviceId: 117,
              name: 'ТСЦ МВС № 6343',
              street: 'вул. Захисників України',
              building: '20/1',
            },
          ],
        },
        {
          name: 'м. Ізюм',
          serviceCenters: [
            {
              serviceId: 118,
              name: 'ТСЦ МВС № 6344',
              street: 'вул. Весняна',
              building: '45 ',
            },
          ],
        },
        {
          name: 'м. Берестин',
          serviceCenters: [
            {
              serviceId: 119,
              name: 'ТСЦ МВС № 6345',
              street: 'вул. Полтавська',
              building: '92 ',
            },
          ],
        },
        {
          name: 'м. Балаклія',
          serviceCenters: [
            {
              serviceId: 120,
              name: 'ТСЦ МВС № 6346',
              street: 'пл. Тараса Шевченка',
              building: '11 ',
            },
          ],
        },
        {
          name: 'м. Чугуїв',
          serviceCenters: [
            {
              serviceId: 121,
              name: 'ТСЦ МВС № 6347',
              street: 'вул. Гвардійська',
              building: '20 ',
            },
          ],
        },
        {
          name: 'м. Лозова',
          serviceCenters: [
            {
              serviceId: 122,
              name: 'ТСЦ МВС № 6348',
              street: 'вул. мр-н 1',
              building: '21',
            },
          ],
        },
        {
          name: 'м. Мерефа',
          serviceCenters: [
            {
              serviceId: 123,
              name: 'ТСЦ МВС № 6349',
              street: 'вул. Дніпровська',
              building: '148',
            },
          ],
        },
        {
          name: 'смт. Пісочин',
          serviceCenters: [
            {
              serviceId: 124,
              name: 'ТСЦ МВС № 6350',
              street: 'вул. Транспортна',
              building: '116',
            },
          ],
        },
      ],
    },
    {
      name: 'Херсонська область',
      cities: [
        {
          name: 'м. Херсон',
          serviceCenters: [
            {
              serviceId: 125,
              name: 'ТСЦ МВС № 6541',
              street: 'вул. Вишнева',
              building: '22 ',
            },
          ],
        },
        {
          name: 'с. Велика Олександрівка',
          serviceCenters: [
            {
              serviceId: 126,
              name: 'ТСЦ МВС № 6542',
              street: 'вул. Закарпатська',
              building: '32 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Хмельницька область',
      cities: [
        {
          name: 'м. Хмельницький',
          serviceCenters: [
            {
              serviceId: 127,
              name: 'ТСЦ МВС № 6841',
              street: 'вул. Західно-Окружна,',
              building: '11/1',
            },
          ],
        },
        {
          name: 'м. Дунаївці',
          serviceCenters: [
            {
              serviceId: 128,
              name: 'ТСЦ МВС № 6842',
              street: 'вул. Франца Лендера',
              building: '41 ',
            },
          ],
        },
        {
          name: "м. Кам'янець-Подільський",
          serviceCenters: [
            {
              serviceId: 129,
              name: 'ТСЦ МВС № 6843',
              street: 'пр-т. Грушевського',
              building: '45323 ',
            },
          ],
        },
        {
          name: 'м. Старокостянтинів',
          serviceCenters: [
            {
              serviceId: 130,
              name: 'ТСЦ МВС № 6844',
              street: 'вул. Чайковського',
              building: '1 а',
            },
          ],
        },
        {
          name: 'м. Шепетівка',
          serviceCenters: [
            {
              serviceId: 131,
              name: 'ТСЦ МВС № 6845',
              street: 'вул. Володимира Українця',
              building: '13 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Черкаська область',
      cities: [
        {
          name: 'м. Черкаси',
          serviceCenters: [
            {
              serviceId: 132,
              name: 'ТСЦ МВС № 7141',
              street: 'вул. Лесі Українки',
              building: '21 ',
            },
          ],
        },
        {
          name: 'с. Уманський р-н., с/рада Родниківська',
          serviceCenters: [
            {
              serviceId: 133,
              name: 'ТСЦ МВС № 7142',
              street: 'вул. автодорога Київ-Одеса  203 км 800 м',
              building: 'б/н ',
            },
          ],
        },
        {
          name: 'м. Звенигородка',
          serviceCenters: [
            {
              serviceId: 134,
              name: 'ТСЦ МВС № 7143',
              street: 'вул. Богдана Хмельницького',
              building: '15/1',
            },
          ],
        },
        {
          name: 'м. Корсунь-Шевченківський',
          serviceCenters: [
            {
              serviceId: 135,
              name: 'ТСЦ МВС № 7144',
              street: 'вул. Василя Сергієнка',
              building: '4 а',
            },
          ],
        },
        {
          name: 'м. Золотоноша',
          serviceCenters: [
            {
              serviceId: 136,
              name: 'ТСЦ МВС № 7145',
              street: 'вул. Відродження',
              building: '16 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернівецька область',
      cities: [
        {
          name: 'м. Чернівці',
          serviceCenters: [
            {
              serviceId: 137,
              name: 'ТСЦ МВС № 7341',
              street: 'вул. Руська',
              building: '248 м',
            },
          ],
        },
        {
          name: 'м. Кіцмань',
          serviceCenters: [
            {
              serviceId: 138,
              name: 'ТСЦ МВС № 7342',
              street: 'вул. Незалежності',
              building: '1 б',
            },
          ],
        },
        {
          name: 'м. Новоселиця',
          serviceCenters: [
            {
              serviceId: 139,
              name: 'ТСЦ МВС № 7343',
              street: 'вул. Кремльова',
              building: '20 ',
            },
          ],
        },
        {
          name: 'с. Глибока',
          serviceCenters: [
            {
              serviceId: 140,
              name: 'ТСЦ МВС № 7344',
              street: 'вул. Героїв Небесної Сотні',
              building: '88 ',
            },
          ],
        },
        {
          name: 'с. Кельменці',
          serviceCenters: [
            {
              serviceId: 141,
              name: 'ТСЦ МВС № 7345',
              street: 'вул. О.Паламаря',
              building: '9 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернігівська область',
      cities: [
        {
          name: 'м. Чернігів',
          serviceCenters: [
            {
              serviceId: 142,
              name: 'ТСЦ МВС № 7441',
              street: 'Шевченка',
              building: '162а',
            },
          ],
        },
        {
          name: 'м. Прилуки',
          serviceCenters: [
            {
              serviceId: 143,
              name: 'ТСЦ МВС № 7442',
              street: 'вул. Індустріальна',
              building: '6',
            },
          ],
        },
        {
          name: 'м. Ніжин',
          serviceCenters: [
            {
              serviceId: 144,
              name: 'ТСЦ МВС № 7443',
              street: 'вул. С. Прощенка',
              building: '78 б',
            },
          ],
        },
        {
          name: 'м. Мена',
          serviceCenters: [
            {
              serviceId: 145,
              name: 'ТСЦ МВС № 7444',
              street: 'вул. Чернігівський шлях',
              building: '85-В',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Київ',
      cities: [
        {
          name: 'м. Київ',
          serviceCenters: [
            {
              serviceId: 146,
              name: 'ТСЦ МВС № 8041',
              street: 'вул. Перемоги',
              building: '20 ',
            },
            {
              serviceId: 147,
              name: 'ТСЦ МВС № 8042',
              street: 'вул. Мрії',
              building: '19',
            },
            {
              serviceId: 148,
              name: 'ТСЦ МВС № 8043',
              street: 'пр. Європейського Союзу',
              building: '47 ',
            },
            {
              serviceId: 149,
              name: 'ТСЦ МВС № 8044',
              street: 'вул. Братиславська',
              building: '52 ',
            },
            {
              serviceId: 150,
              name: 'ТСЦ МВС № 8045',
              street: 'вул. Павла Усенка',
              building: '8 ',
            },
            {
              serviceId: 153,
              name: 'ТСЦ МВС № 8048',
              street: 'вул. Миколи Грінченка',
              building: '18 ',
            },
            {
              serviceId: 154,
              name: 'ТСЦ МВС № 8049',
              street: 'вул. Павла Усенка',
              building: '8 ',
            },
          ],
        },
        {
          name: 'с. Софіївська Борщагівка',
          serviceCenters: [
            {
              serviceId: 152,
              name: 'ТСЦ МВС № 8047',
              street: 'вул. Велика Кільцева',
              building: '110 а',
            },
          ],
        },
      ],
    },
  ],
  8: [
    {
      name: 'Київська область',
      cities: [
        {
          name: 'м. Біла Церква',
          serviceCenters: [
            {
              serviceId: 2,
              name: 'ТСЦ МВС № 3242',
              street: ' вул. Сухоярська',
              building: '20',
            },
          ],
        },
        {
          name: 'м. Бровари',
          serviceCenters: [
            {
              serviceId: 3,
              name: 'ТСЦ МВС № 3243',
              street: 'вул. Броварської Сотні',
              building: '4А',
            },
          ],
        },
        {
          name: 'с. Софіївська Борщагівка',
          serviceCenters: [
            {
              serviceId: 6,
              name: 'ТСЦ МВС № 3246',
              street: 'вул. Малишко',
              building: '2',
            },
          ],
        },
        {
          name: 'м. Буча',
          serviceCenters: [
            {
              serviceId: 7,
              name: 'ТСЦ МВС № 3247 ',
              street: 'вул. Депутатська',
              building: '1 в',
            },
          ],
        },
        {
          name: 'м. Переяслав',
          serviceCenters: [
            {
              serviceId: 8,
              name: 'ТСЦ МВС № 3248 ',
              street: 'вул. Ново-Київське шосе',
              building: '46 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Вінницька область',
      cities: [
        {
          name: 'м. Вінниця',
          serviceCenters: [
            {
              serviceId: 11,
              name: 'ТСЦ МВС № 0541',
              street: 'вул. Ботанічна',
              building: '24 ',
            },
          ],
        },
        {
          name: 'м. Гайсин',
          serviceCenters: [
            {
              serviceId: 12,
              name: 'ТСЦ МВС № 0542',
              street: 'вул. Південна',
              building: '67 ',
            },
          ],
        },
        {
          name: 'м. Шаргород',
          serviceCenters: [
            {
              serviceId: 13,
              name: 'ТСЦ МВС № 0543',
              street: 'вул. Героїв Майдану',
              building: '224 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Волинська область',
      cities: [
        {
          name: 'с. Луцький р-н, с. Струмівка',
          serviceCenters: [
            {
              serviceId: 17,
              name: 'ТСЦ МВС № 0741',
              street: 'вул. Рівненська',
              building: '74 ',
            },
          ],
        },
        {
          name: 'м. Ковель',
          serviceCenters: [
            {
              serviceId: 18,
              name: 'ТСЦ МВС № 0742',
              street: 'вул. Володимирська',
              building: '133 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Дніпропетровська область',
      cities: [
        {
          name: 'м. Дніпро',
          serviceCenters: [
            {
              serviceId: 22,
              name: 'ТСЦ МВС № 1242',
              street: 'пр. Праці',
              building: '16 ',
            },
            {
              serviceId: 29,
              name: 'ТСЦ МВС № 1249',
              street: 'пр-т. Слобожанський',
              building: '31 д',
            },
          ],
        },
        {
          name: 'м. Покров',
          serviceCenters: [
            {
              serviceId: 25,
              name: 'ТСЦ МВС № 1245',
              street: 'вул. Уральська',
              building: '1 ',
            },
          ],
        },
        {
          name: 'м. Павлоград',
          serviceCenters: [
            {
              serviceId: 27,
              name: 'ТСЦ МВС № 1247',
              street: 'вул. Дніпровська',
              building: '334 а',
            },
          ],
        },
        {
          name: 'м. Кривий Ріг',
          serviceCenters: [
            {
              serviceId: 28,
              name: 'ТСЦ МВС № 1248',
              street: 'вул. Стрельнікова',
              building: '15 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Житомирська область',
      cities: [
        {
          name: 'с. Довжик',
          serviceCenters: [
            {
              serviceId: 32,
              name: 'ТСЦ МВС № 1841',
              street: 'вул. Богунська',
              building: '1 а',
            },
          ],
        },
        {
          name: 'м. Коростень',
          serviceCenters: [
            {
              serviceId: 34,
              name: 'ТСЦ МВС № 1843',
              street: 'вул. Сергія Кемського',
              building: '3 ',
            },
          ],
        },
        {
          name: 'м. Звягель',
          serviceCenters: [
            {
              serviceId: 35,
              name: 'ТСЦ МВС № 1844',
              street: 'вул. Відродження',
              building: '2 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Закарпатська область',
      cities: [
        {
          name: 'м. Ужгород',
          serviceCenters: [
            {
              serviceId: 37,
              name: 'ТСЦ МВС № 2141',
              street: 'вул. О. Кошового',
              building: '4 ',
            },
          ],
        },
        {
          name: 'с. Мукачівський р-н., с. Клячаново',
          serviceCenters: [
            {
              serviceId: 38,
              name: 'ТСЦ МВС № 2142',
              street: 'вул. Автомобілістів',
              building: '28 ',
            },
          ],
        },
        {
          name: 'м. Хуст',
          serviceCenters: [
            {
              serviceId: 40,
              name: 'ТСЦ МВС № 2144',
              street: 'вул. Окружна',
              building: '34 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Запоріжжя та Запорізька територіальна громада',
      cities: [
        {
          name: 'м. Запоріжжя',
          serviceCenters: [
            {
              serviceId: 42,
              name: 'ТСЦ МВС № 2341',
              street: 'вул. Олександрівська',
              building: '84 ',
            },
            {
              serviceId: 43,
              name: 'ТСЦ МВС № 2342',
              street: 'вул. Бабури козака',
              building: '9 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Івано-Франківська область',
      cities: [
        {
          name: 'м. Івано-Франківськ',
          serviceCenters: [
            {
              serviceId: 46,
              name: 'ТСЦ МВС № 2641',
              street: 'вул. Коновальця',
              building: '229 у',
            },
          ],
        },
        {
          name: 'м. Коломия',
          serviceCenters: [
            {
              serviceId: 48,
              name: 'ТСЦ МВС № 2643',
              street: 'вул. Симоненка',
              building: '2 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Кіровоградська область',
      cities: [
        {
          name: 'м. Кропивницький',
          serviceCenters: [
            {
              serviceId: 60,
              name: 'ТСЦ МВС № 3541',
              street: 'пр-т. Інженерів',
              building: '9/92 ',
            },
          ],
        },
        {
          name: 'м. Олександрія',
          serviceCenters: [
            {
              serviceId: 61,
              name: 'ТСЦ МВС № 3542',
              street: 'пр-т. Будівельників',
              building: '38 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Львівська область',
      cities: [
        {
          name: 'м. Львів',
          serviceCenters: [
            {
              serviceId: 65,
              name: 'ТСЦ МВС № 4641',
              street: 'вул. Д. Апостола',
              building: '11 ',
            },
            {
              serviceId: 74,
              name: 'ТСЦ МВС № 4651',
              street: 'вул. Богданівська',
              building: '44 ',
            },
          ],
        },
        {
          name: 'м. Самбір',
          serviceCenters: [
            {
              serviceId: 68,
              name: 'ТСЦ МВС № 4644',
              street: 'вул. Східна',
              building: '216 ',
            },
          ],
        },
        {
          name: 'м. Стрий',
          serviceCenters: [
            {
              serviceId: 69,
              name: 'ТСЦ МВС № 4645 ',
              street: 'вул. Багряного',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Шептицький',
          serviceCenters: [
            {
              serviceId: 70,
              name: 'ТСЦ МВС № 4646',
              street: 'вул. Корольова',
              building: '14 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Миколаївська область',
      cities: [
        {
          name: 'м. Миколаїв',
          serviceCenters: [
            {
              serviceId: 75,
              name: 'ТСЦ МВС № 4841 ',
              street: 'провулок. Транспортний',
              building: '1а/1',
            },
          ],
        },
        {
          name: 'м. Первомайськ',
          serviceCenters: [
            {
              serviceId: 76,
              name: 'ТСЦ МВС № 4842',
              street: 'вул. Вознесенська',
              building: '73 б',
            },
          ],
        },
        {
          name: 'м. Вознесенськ',
          serviceCenters: [
            {
              serviceId: 78,
              name: 'ТСЦ МВС № 4844',
              street: 'вул. Молодогвардійська',
              building: '45 ',
            },
          ],
        },
        {
          name: 'м. Новий Буг',
          serviceCenters: [
            {
              serviceId: 79,
              name: 'ТСЦ МВС № 4845',
              street: 'вул. Площа Свободи',
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Одеська область',
      cities: [
        {
          name: 'м. Білгород-Дністровський',
          serviceCenters: [
            {
              serviceId: 82,
              name: 'ТСЦ МВС № 5143',
              street: 'вул. Ігоря Іванова',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Ізмаїл',
          serviceCenters: [
            {
              serviceId: 83,
              name: 'ТСЦ МВС № 5144',
              street: 'пр-т. Незалежності',
              building: '362 ',
            },
          ],
        },
        {
          name: 'м. Подільськ',
          serviceCenters: [
            {
              serviceId: 87,
              name: 'ТСЦ МВС № 5149',
              street: 'вул. Соборна',
              building: '202 б',
            },
          ],
        },
        {
          name: 'м. Чорноморськ',
          serviceCenters: [
            {
              serviceId: 88,
              name: 'ТСЦ МВС № 5150',
              street: 'вул. Промислова',
              building: '14',
            },
          ],
        },
        {
          name: 'м. Одеса',
          serviceCenters: [
            {
              serviceId: 91,
              name: 'ТСЦ МВС № 5154',
              street: 'вул. Аеропортівська',
              building: '27/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Полтавська область',
      cities: [
        {
          name: 'с. Розсошенці',
          serviceCenters: [
            {
              serviceId: 92,
              name: 'ТСЦ МВС № 5341',
              street: 'вул. Кременчуцька',
              building: '2 в',
            },
          ],
        },
        {
          name: 'м. Кременчук',
          serviceCenters: [
            {
              serviceId: 93,
              name: 'ТСЦ МВС № 5342',
              street: 'вул. Покровська',
              building: '14',
            },
          ],
        },
        {
          name: 'м. Лубни',
          serviceCenters: [
            {
              serviceId: 94,
              name: 'ТСЦ МВС № 5343',
              street: 'пр-т. Володимирський',
              building: '178 б',
            },
          ],
        },
      ],
    },
    {
      name: 'Рівненська область',
      cities: [
        {
          name: 'м. Рівне',
          serviceCenters: [
            {
              serviceId: 100,
              name: 'ТСЦ МВС № 5641',
              street: 'вул. Київська',
              building: '108 б',
            },
          ],
        },
        {
          name: 'м. Сарни',
          serviceCenters: [
            {
              serviceId: 102,
              name: 'ТСЦ МВС № 5643',
              street: 'вул. Костопільська',
              building: '100 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Сумська область',
      cities: [
        {
          name: 'м. Конотоп',
          serviceCenters: [
            {
              serviceId: 105,
              name: 'ТСЦ МВС № 5942 вул. Садова, 39 (крім практичного іспиту)',
              street: 'вул. Садова',
              building: '39',
            },
          ],
        },
        {
          name: 'м. Охтирка',
          serviceCenters: [
            {
              serviceId: 106,
              name: 'ТСЦ МВС № 5943',
              street: 'вул. Київська',
              building: '164 в',
            },
          ],
        },
        {
          name: 'м. Шостка',
          serviceCenters: [
            {
              serviceId: 108,
              name: 'ТСЦ МВС № 5945',
              street: 'вул. Героїв Шосткинщини',
              building: '24-А',
            },
          ],
        },
        {
          name: 'м. Суми',
          serviceCenters: [
            {
              serviceId: 109,
              name: 'ТСЦ МВС № 5946',
              street: 'вул. Білопільський шлях',
              building: '18/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Тернопільська область',
      cities: [
        {
          name: 'с. Підгородне',
          serviceCenters: [
            {
              serviceId: 110,
              name: 'ТСЦ МВС № 6141',
              street: 'вул. Стрийська',
              building: '5 ',
            },
          ],
        },
        {
          name: 'м. Кременець',
          serviceCenters: [
            {
              serviceId: 112,
              name: 'ТСЦ МВС № 6143',
              street: 'вул. Шевченка',
              building: '67 ',
            },
          ],
        },
        {
          name: 'с. Угринь',
          serviceCenters: [
            {
              serviceId: 114,
              name: 'ТСЦ МВС № 6145',
              street: "вул. Об'їзна",
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Харків та Харківська територіальна громада',
      cities: [
        {
          name: 'м. Харків',
          serviceCenters: [
            {
              serviceId: 115,
              name: 'ТСЦ МВС № 6341',
              street: 'вул. Шевченка',
              building: '26 ',
            },
            {
              serviceId: 116,
              name: 'ТСЦ МВС № 6342',
              street: 'вул. Станція метро «Київська» вестибюль №1',
              building: ' ',
            },
          ],
        },
      ],
    },
    {
      name: 'Харківська область',
      cities: [
        {
          name: 'м. Лозова',
          serviceCenters: [
            {
              serviceId: 122,
              name: 'ТСЦ МВС № 6348',
              street: 'вул. мр-н 1',
              building: '21',
            },
          ],
        },
        {
          name: 'смт. Пісочин',
          serviceCenters: [
            {
              serviceId: 124,
              name: 'ТСЦ МВС № 6350',
              street: 'вул. Транспортна',
              building: '116',
            },
          ],
        },
      ],
    },
    {
      name: 'Херсонська область',
      cities: [
        {
          name: 'м. Херсон',
          serviceCenters: [
            {
              serviceId: 125,
              name: 'ТСЦ МВС № 6541',
              street: 'вул. Вишнева',
              building: '22 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Хмельницька область',
      cities: [
        {
          name: 'м. Хмельницький',
          serviceCenters: [
            {
              serviceId: 127,
              name: 'ТСЦ МВС № 6841',
              street: 'вул. Західно-Окружна,',
              building: '11/1',
            },
          ],
        },
        {
          name: "м. Кам'янець-Подільський",
          serviceCenters: [
            {
              serviceId: 129,
              name: 'ТСЦ МВС № 6843',
              street: 'пр-т. Грушевського',
              building: '45323 ',
            },
          ],
        },
        {
          name: 'м. Старокостянтинів',
          serviceCenters: [
            {
              serviceId: 130,
              name: 'ТСЦ МВС № 6844',
              street: 'вул. Чайковського',
              building: '1 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Черкаська область',
      cities: [
        {
          name: 'м. Черкаси',
          serviceCenters: [
            {
              serviceId: 132,
              name: 'ТСЦ МВС № 7141',
              street: 'вул. Лесі Українки',
              building: '21 ',
            },
          ],
        },
        {
          name: 'с. Уманський р-н., с/рада Родниківська',
          serviceCenters: [
            {
              serviceId: 133,
              name: 'ТСЦ МВС № 7142',
              street: 'вул. автодорога Київ-Одеса  203 км 800 м',
              building: 'б/н ',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернівецька область',
      cities: [
        {
          name: 'м. Чернівці',
          serviceCenters: [
            {
              serviceId: 137,
              name: 'ТСЦ МВС № 7341',
              street: 'вул. Руська',
              building: '248 м',
            },
          ],
        },
        {
          name: 'с. Кельменці',
          serviceCenters: [
            {
              serviceId: 141,
              name: 'ТСЦ МВС № 7345',
              street: 'вул. О.Паламаря',
              building: '9 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернігівська область',
      cities: [
        {
          name: 'м. Чернігів',
          serviceCenters: [
            {
              serviceId: 142,
              name: 'ТСЦ МВС № 7441',
              street: 'Шевченка',
              building: '162а',
            },
          ],
        },
        {
          name: 'м. Прилуки',
          serviceCenters: [
            {
              serviceId: 143,
              name: 'ТСЦ МВС № 7442',
              street: 'вул. Індустріальна',
              building: '6',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Київ',
      cities: [
        {
          name: 'м. Київ',
          serviceCenters: [
            {
              serviceId: 146,
              name: 'ТСЦ МВС № 8041',
              street: 'вул. Перемоги',
              building: '20 ',
            },
            {
              serviceId: 147,
              name: 'ТСЦ МВС № 8042',
              street: 'вул. Мрії',
              building: '19',
            },
            {
              serviceId: 154,
              name: 'ТСЦ МВС № 8049',
              street: 'вул. Павла Усенка',
              building: '8 ',
            },
          ],
        },
      ],
    },
  ],
  65: [
    {
      name: 'м. Київ',
      cities: [
        {
          name: 'м. Київ',
          serviceCenters: [
            {
              serviceId: 147,
              name: 'ТСЦ МВС № 8042',
              street: 'вул. Мрії',
              building: '19',
            },
          ],
        },
      ],
    },
  ],
  46: [
    {
      name: 'Волинська область',
      cities: [
        {
          name: 'с. Луцький р-н, с. Струмівка',
          serviceCenters: [
            {
              serviceId: 17,
              name: 'ТСЦ МВС № 0741',
              street: 'вул. Рівненська',
              building: '74 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Житомирська область',
      cities: [
        {
          name: 'с. Довжик',
          serviceCenters: [
            {
              serviceId: 32,
              name: 'ТСЦ МВС № 1841',
              street: 'вул. Богунська',
              building: '1 а',
            },
          ],
        },
        {
          name: 'м. Коростень',
          serviceCenters: [
            {
              serviceId: 34,
              name: 'ТСЦ МВС № 1843',
              street: 'вул. Сергія Кемського',
              building: '3 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Закарпатська область',
      cities: [
        {
          name: 'м. Ужгород',
          serviceCenters: [
            {
              serviceId: 37,
              name: 'ТСЦ МВС № 2141',
              street: 'вул. О. Кошового',
              building: '4 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Івано-Франківська область',
      cities: [
        {
          name: 'м. Івано-Франківськ',
          serviceCenters: [
            {
              serviceId: 46,
              name: 'ТСЦ МВС № 2641',
              street: 'вул. Коновальця',
              building: '229 у',
            },
          ],
        },
      ],
    },
    {
      name: 'Кіровоградська область',
      cities: [
        {
          name: 'м. Кропивницький',
          serviceCenters: [
            {
              serviceId: 60,
              name: 'ТСЦ МВС № 3541',
              street: 'пр-т. Інженерів',
              building: '9/92 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Миколаївська область',
      cities: [
        {
          name: 'м. Миколаїв',
          serviceCenters: [
            {
              serviceId: 75,
              name: 'ТСЦ МВС № 4841 ',
              street: 'провулок. Транспортний',
              building: '1а/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Полтавська область',
      cities: [
        {
          name: 'с. Розсошенці',
          serviceCenters: [
            {
              serviceId: 92,
              name: 'ТСЦ МВС № 5341',
              street: 'вул. Кременчуцька',
              building: '2 в',
            },
          ],
        },
        {
          name: 'м. Лубни',
          serviceCenters: [
            {
              serviceId: 94,
              name: 'ТСЦ МВС № 5343',
              street: 'пр-т. Володимирський',
              building: '178 б',
            },
          ],
        },
      ],
    },
    {
      name: 'Рівненська область',
      cities: [
        {
          name: 'м. Рівне',
          serviceCenters: [
            {
              serviceId: 100,
              name: 'ТСЦ МВС № 5641',
              street: 'вул. Київська',
              building: '108 б',
            },
          ],
        },
      ],
    },
    {
      name: 'Тернопільська область',
      cities: [
        {
          name: 'с. Підгородне',
          serviceCenters: [
            {
              serviceId: 110,
              name: 'ТСЦ МВС № 6141',
              street: 'вул. Стрийська',
              building: '5 ',
            },
          ],
        },
        {
          name: 'с. Угринь',
          serviceCenters: [
            {
              serviceId: 114,
              name: 'ТСЦ МВС № 6145',
              street: "вул. Об'їзна",
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Хмельницька область',
      cities: [
        {
          name: 'м. Хмельницький',
          serviceCenters: [
            {
              serviceId: 127,
              name: 'ТСЦ МВС № 6841',
              street: 'вул. Західно-Окружна,',
              building: '11/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Черкаська область',
      cities: [
        {
          name: 'м. Черкаси',
          serviceCenters: [
            {
              serviceId: 132,
              name: 'ТСЦ МВС № 7141',
              street: 'вул. Лесі Українки',
              building: '21 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернівецька область',
      cities: [
        {
          name: 'м. Чернівці',
          serviceCenters: [
            {
              serviceId: 137,
              name: 'ТСЦ МВС № 7341',
              street: 'вул. Руська',
              building: '248 м',
            },
          ],
        },
      ],
    },
  ],
  57: [],
  53: [],
  50: [
    {
      name: 'Київська область',
      cities: [
        {
          name: 'м. Біла Церква',
          serviceCenters: [
            {
              serviceId: 2,
              name: 'ТСЦ МВС № 3242',
              street: ' вул. Сухоярська',
              building: '20',
            },
          ],
        },
        {
          name: 'м. Бровари',
          serviceCenters: [
            {
              serviceId: 3,
              name: 'ТСЦ МВС № 3243',
              street: 'вул. Броварської Сотні',
              building: '4А',
            },
          ],
        },
        {
          name: 'с. Софіївська Борщагівка',
          serviceCenters: [
            {
              serviceId: 6,
              name: 'ТСЦ МВС № 3246',
              street: 'вул. Малишко',
              building: '2',
            },
          ],
        },
        {
          name: 'м. Буча',
          serviceCenters: [
            {
              serviceId: 7,
              name: 'ТСЦ МВС № 3247 ',
              street: 'вул. Депутатська',
              building: '1 в',
            },
          ],
        },
        {
          name: 'м. Переяслав',
          serviceCenters: [
            {
              serviceId: 8,
              name: 'ТСЦ МВС № 3248 ',
              street: 'вул. Ново-Київське шосе',
              building: '46 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Вінницька область',
      cities: [
        {
          name: 'м. Вінниця',
          serviceCenters: [
            {
              serviceId: 11,
              name: 'ТСЦ МВС № 0541',
              street: 'вул. Ботанічна',
              building: '24 ',
            },
          ],
        },
        {
          name: 'м. Гайсин',
          serviceCenters: [
            {
              serviceId: 12,
              name: 'ТСЦ МВС № 0542',
              street: 'вул. Південна',
              building: '67 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Волинська область',
      cities: [
        {
          name: 'с. Луцький р-н, с. Струмівка',
          serviceCenters: [
            {
              serviceId: 17,
              name: 'ТСЦ МВС № 0741',
              street: 'вул. Рівненська',
              building: '74 ',
            },
          ],
        },
        {
          name: 'м. Ковель',
          serviceCenters: [
            {
              serviceId: 18,
              name: 'ТСЦ МВС № 0742',
              street: 'вул. Володимирська',
              building: '133 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Дніпропетровська область',
      cities: [
        {
          name: 'м. Дніпро',
          serviceCenters: [
            {
              serviceId: 22,
              name: 'ТСЦ МВС № 1242',
              street: 'пр. Праці',
              building: '16 ',
            },
            {
              serviceId: 29,
              name: 'ТСЦ МВС № 1249',
              street: 'пр-т. Слобожанський',
              building: '31 д',
            },
          ],
        },
        {
          name: 'м. Павлоград',
          serviceCenters: [
            {
              serviceId: 27,
              name: 'ТСЦ МВС № 1247',
              street: 'вул. Дніпровська',
              building: '334 а',
            },
          ],
        },
        {
          name: 'м. Кривий Ріг',
          serviceCenters: [
            {
              serviceId: 28,
              name: 'ТСЦ МВС № 1248',
              street: 'вул. Стрельнікова',
              building: '15 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Житомирська область',
      cities: [
        {
          name: 'с. Довжик',
          serviceCenters: [
            {
              serviceId: 32,
              name: 'ТСЦ МВС № 1841',
              street: 'вул. Богунська',
              building: '1 а',
            },
          ],
        },
        {
          name: 'м. Коростень',
          serviceCenters: [
            {
              serviceId: 34,
              name: 'ТСЦ МВС № 1843',
              street: 'вул. Сергія Кемського',
              building: '3 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Закарпатська область',
      cities: [
        {
          name: 'с. Мукачівський р-н., с. Клячаново',
          serviceCenters: [
            {
              serviceId: 38,
              name: 'ТСЦ МВС № 2142',
              street: 'вул. Автомобілістів',
              building: '28 ',
            },
          ],
        },
        {
          name: 'м. Хуст',
          serviceCenters: [
            {
              serviceId: 40,
              name: 'ТСЦ МВС № 2144',
              street: 'вул. Окружна',
              building: '34 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Запоріжжя та Запорізька територіальна громада',
      cities: [
        {
          name: 'м. Запоріжжя',
          serviceCenters: [
            {
              serviceId: 42,
              name: 'ТСЦ МВС № 2341',
              street: 'вул. Олександрівська',
              building: '84 ',
            },
            {
              serviceId: 43,
              name: 'ТСЦ МВС № 2342',
              street: 'вул. Бабури козака',
              building: '9 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Івано-Франківська область',
      cities: [
        {
          name: 'м. Івано-Франківськ',
          serviceCenters: [
            {
              serviceId: 46,
              name: 'ТСЦ МВС № 2641',
              street: 'вул. Коновальця',
              building: '229 у',
            },
          ],
        },
      ],
    },
    {
      name: 'Кіровоградська область',
      cities: [
        {
          name: 'м. Кропивницький',
          serviceCenters: [
            {
              serviceId: 60,
              name: 'ТСЦ МВС № 3541',
              street: 'пр-т. Інженерів',
              building: '9/92 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Львівська область',
      cities: [
        {
          name: 'м. Львів',
          serviceCenters: [
            {
              serviceId: 65,
              name: 'ТСЦ МВС № 4641',
              street: 'вул. Д. Апостола',
              building: '11 ',
            },
            {
              serviceId: 74,
              name: 'ТСЦ МВС № 4651',
              street: 'вул. Богданівська',
              building: '44 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Миколаївська область',
      cities: [
        {
          name: 'м. Миколаїв',
          serviceCenters: [
            {
              serviceId: 75,
              name: 'ТСЦ МВС № 4841 ',
              street: 'провулок. Транспортний',
              building: '1а/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Одеська область',
      cities: [
        {
          name: 'м. Білгород-Дністровський',
          serviceCenters: [
            {
              serviceId: 82,
              name: 'ТСЦ МВС № 5143',
              street: 'вул. Ігоря Іванова',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Ізмаїл',
          serviceCenters: [
            {
              serviceId: 83,
              name: 'ТСЦ МВС № 5144',
              street: 'пр-т. Незалежності',
              building: '362 ',
            },
          ],
        },
        {
          name: 'м. Подільськ',
          serviceCenters: [
            {
              serviceId: 87,
              name: 'ТСЦ МВС № 5149',
              street: 'вул. Соборна',
              building: '202 б',
            },
          ],
        },
        {
          name: 'м. Чорноморськ',
          serviceCenters: [
            {
              serviceId: 88,
              name: 'ТСЦ МВС № 5150',
              street: 'вул. Промислова',
              building: '14',
            },
          ],
        },
        {
          name: 'м. Одеса',
          serviceCenters: [
            {
              serviceId: 91,
              name: 'ТСЦ МВС № 5154',
              street: 'вул. Аеропортівська',
              building: '27/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Полтавська область',
      cities: [
        {
          name: 'с. Розсошенці',
          serviceCenters: [
            {
              serviceId: 92,
              name: 'ТСЦ МВС № 5341',
              street: 'вул. Кременчуцька',
              building: '2 в',
            },
          ],
        },
        {
          name: 'м. Кременчук',
          serviceCenters: [
            {
              serviceId: 93,
              name: 'ТСЦ МВС № 5342',
              street: 'вул. Покровська',
              building: '14',
            },
          ],
        },
        {
          name: 'м. Лубни',
          serviceCenters: [
            {
              serviceId: 94,
              name: 'ТСЦ МВС № 5343',
              street: 'пр-т. Володимирський',
              building: '178 б',
            },
          ],
        },
      ],
    },
    {
      name: 'Рівненська область',
      cities: [
        {
          name: 'м. Рівне',
          serviceCenters: [
            {
              serviceId: 100,
              name: 'ТСЦ МВС № 5641',
              street: 'вул. Київська',
              building: '108 б',
            },
          ],
        },
      ],
    },
    {
      name: 'Сумська область',
      cities: [
        {
          name: 'м. Суми',
          serviceCenters: [
            {
              serviceId: 109,
              name: 'ТСЦ МВС № 5946',
              street: 'вул. Білопільський шлях',
              building: '18/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Тернопільська область',
      cities: [
        {
          name: 'с. Підгородне',
          serviceCenters: [
            {
              serviceId: 110,
              name: 'ТСЦ МВС № 6141',
              street: 'вул. Стрийська',
              building: '5 ',
            },
          ],
        },
        {
          name: 'с. Угринь',
          serviceCenters: [
            {
              serviceId: 114,
              name: 'ТСЦ МВС № 6145',
              street: "вул. Об'їзна",
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Харків та Харківська територіальна громада',
      cities: [
        {
          name: 'м. Харків',
          serviceCenters: [
            {
              serviceId: 115,
              name: 'ТСЦ МВС № 6341',
              street: 'вул. Шевченка',
              building: '26 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Харківська область',
      cities: [
        {
          name: 'смт. Пісочин',
          serviceCenters: [
            {
              serviceId: 124,
              name: 'ТСЦ МВС № 6350',
              street: 'вул. Транспортна',
              building: '116',
            },
          ],
        },
      ],
    },
    {
      name: 'Хмельницька область',
      cities: [
        {
          name: 'м. Хмельницький',
          serviceCenters: [
            {
              serviceId: 127,
              name: 'ТСЦ МВС № 6841',
              street: 'вул. Західно-Окружна,',
              building: '11/1',
            },
          ],
        },
        {
          name: 'м. Старокостянтинів',
          serviceCenters: [
            {
              serviceId: 130,
              name: 'ТСЦ МВС № 6844',
              street: 'вул. Чайковського',
              building: '1 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Черкаська область',
      cities: [
        {
          name: 'м. Черкаси',
          serviceCenters: [
            {
              serviceId: 132,
              name: 'ТСЦ МВС № 7141',
              street: 'вул. Лесі Українки',
              building: '21 ',
            },
          ],
        },
        {
          name: 'с. Уманський р-н., с/рада Родниківська',
          serviceCenters: [
            {
              serviceId: 133,
              name: 'ТСЦ МВС № 7142',
              street: 'вул. автодорога Київ-Одеса  203 км 800 м',
              building: 'б/н ',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернівецька область',
      cities: [
        {
          name: 'м. Чернівці',
          serviceCenters: [
            {
              serviceId: 137,
              name: 'ТСЦ МВС № 7341',
              street: 'вул. Руська',
              building: '248 м',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернігівська область',
      cities: [
        {
          name: 'м. Чернігів',
          serviceCenters: [
            {
              serviceId: 142,
              name: 'ТСЦ МВС № 7441',
              street: 'Шевченка',
              building: '162а',
            },
          ],
        },
        {
          name: 'м. Прилуки',
          serviceCenters: [
            {
              serviceId: 143,
              name: 'ТСЦ МВС № 7442',
              street: 'вул. Індустріальна',
              building: '6',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Київ',
      cities: [
        {
          name: 'м. Київ',
          serviceCenters: [
            {
              serviceId: 146,
              name: 'ТСЦ МВС № 8041',
              street: 'вул. Перемоги',
              building: '20 ',
            },
            {
              serviceId: 147,
              name: 'ТСЦ МВС № 8042',
              street: 'вул. Мрії',
              building: '19',
            },
            {
              serviceId: 154,
              name: 'ТСЦ МВС № 8049',
              street: 'вул. Павла Усенка',
              building: '8 ',
            },
          ],
        },
      ],
    },
  ],
  49: [
    {
      name: 'Київська область',
      cities: [
        {
          name: 'м. Біла Церква',
          serviceCenters: [
            {
              serviceId: 2,
              name: 'ТСЦ МВС № 3242',
              street: ' вул. Сухоярська',
              building: '20',
            },
          ],
        },
        {
          name: 'м. Бровари',
          serviceCenters: [
            {
              serviceId: 3,
              name: 'ТСЦ МВС № 3243',
              street: 'вул. Броварської Сотні',
              building: '4А',
            },
          ],
        },
        {
          name: 'с. Софіївська Борщагівка',
          serviceCenters: [
            {
              serviceId: 6,
              name: 'ТСЦ МВС № 3246',
              street: 'вул. Малишко',
              building: '2',
            },
          ],
        },
        {
          name: 'м. Буча',
          serviceCenters: [
            {
              serviceId: 7,
              name: 'ТСЦ МВС № 3247 ',
              street: 'вул. Депутатська',
              building: '1 в',
            },
          ],
        },
        {
          name: 'м. Переяслав',
          serviceCenters: [
            {
              serviceId: 8,
              name: 'ТСЦ МВС № 3248 ',
              street: 'вул. Ново-Київське шосе',
              building: '46 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Вінницька область',
      cities: [
        {
          name: 'м. Вінниця',
          serviceCenters: [
            {
              serviceId: 11,
              name: 'ТСЦ МВС № 0541',
              street: 'вул. Ботанічна',
              building: '24 ',
            },
          ],
        },
        {
          name: 'м. Гайсин',
          serviceCenters: [
            {
              serviceId: 12,
              name: 'ТСЦ МВС № 0542',
              street: 'вул. Південна',
              building: '67 ',
            },
          ],
        },
        {
          name: 'м. Шаргород',
          serviceCenters: [
            {
              serviceId: 13,
              name: 'ТСЦ МВС № 0543',
              street: 'вул. Героїв Майдану',
              building: '224 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Волинська область',
      cities: [
        {
          name: 'с. Луцький р-н, с. Струмівка',
          serviceCenters: [
            {
              serviceId: 17,
              name: 'ТСЦ МВС № 0741',
              street: 'вул. Рівненська',
              building: '74 ',
            },
          ],
        },
        {
          name: 'м. Ковель',
          serviceCenters: [
            {
              serviceId: 18,
              name: 'ТСЦ МВС № 0742',
              street: 'вул. Володимирська',
              building: '133 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Дніпропетровська область',
      cities: [
        {
          name: 'м. Дніпро',
          serviceCenters: [
            {
              serviceId: 22,
              name: 'ТСЦ МВС № 1242',
              street: 'пр. Праці',
              building: '16 ',
            },
            {
              serviceId: 29,
              name: 'ТСЦ МВС № 1249',
              street: 'пр-т. Слобожанський',
              building: '31 д',
            },
          ],
        },
        {
          name: 'м. Покров',
          serviceCenters: [
            {
              serviceId: 25,
              name: 'ТСЦ МВС № 1245',
              street: 'вул. Уральська',
              building: '1 ',
            },
          ],
        },
        {
          name: 'м. Павлоград',
          serviceCenters: [
            {
              serviceId: 27,
              name: 'ТСЦ МВС № 1247',
              street: 'вул. Дніпровська',
              building: '334 а',
            },
          ],
        },
        {
          name: 'м. Кривий Ріг',
          serviceCenters: [
            {
              serviceId: 28,
              name: 'ТСЦ МВС № 1248',
              street: 'вул. Стрельнікова',
              building: '15 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Житомирська область',
      cities: [
        {
          name: 'с. Довжик',
          serviceCenters: [
            {
              serviceId: 32,
              name: 'ТСЦ МВС № 1841',
              street: 'вул. Богунська',
              building: '1 а',
            },
          ],
        },
        {
          name: 'м. Коростень',
          serviceCenters: [
            {
              serviceId: 34,
              name: 'ТСЦ МВС № 1843',
              street: 'вул. Сергія Кемського',
              building: '3 ',
            },
          ],
        },
        {
          name: 'м. Звягель',
          serviceCenters: [
            {
              serviceId: 35,
              name: 'ТСЦ МВС № 1844',
              street: 'вул. Відродження',
              building: '2 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Закарпатська область',
      cities: [
        {
          name: 'м. Ужгород',
          serviceCenters: [
            {
              serviceId: 37,
              name: 'ТСЦ МВС № 2141',
              street: 'вул. О. Кошового',
              building: '4 ',
            },
          ],
        },
        {
          name: 'с. Мукачівський р-н., с. Клячаново',
          serviceCenters: [
            {
              serviceId: 38,
              name: 'ТСЦ МВС № 2142',
              street: 'вул. Автомобілістів',
              building: '28 ',
            },
          ],
        },
        {
          name: 'м. Хуст',
          serviceCenters: [
            {
              serviceId: 40,
              name: 'ТСЦ МВС № 2144',
              street: 'вул. Окружна',
              building: '34 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Запоріжжя та Запорізька територіальна громада',
      cities: [
        {
          name: 'м. Запоріжжя',
          serviceCenters: [
            {
              serviceId: 42,
              name: 'ТСЦ МВС № 2341',
              street: 'вул. Олександрівська',
              building: '84 ',
            },
            {
              serviceId: 43,
              name: 'ТСЦ МВС № 2342',
              street: 'вул. Бабури козака',
              building: '9 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Івано-Франківська область',
      cities: [
        {
          name: 'м. Івано-Франківськ',
          serviceCenters: [
            {
              serviceId: 46,
              name: 'ТСЦ МВС № 2641',
              street: 'вул. Коновальця',
              building: '229 у',
            },
          ],
        },
        {
          name: 'м. Коломия',
          serviceCenters: [
            {
              serviceId: 48,
              name: 'ТСЦ МВС № 2643',
              street: 'вул. Симоненка',
              building: '2 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Кіровоградська область',
      cities: [
        {
          name: 'м. Кропивницький',
          serviceCenters: [
            {
              serviceId: 60,
              name: 'ТСЦ МВС № 3541',
              street: 'пр-т. Інженерів',
              building: '9/92 ',
            },
          ],
        },
        {
          name: 'м. Олександрія',
          serviceCenters: [
            {
              serviceId: 61,
              name: 'ТСЦ МВС № 3542',
              street: 'пр-т. Будівельників',
              building: '38 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Львівська область',
      cities: [
        {
          name: 'м. Львів',
          serviceCenters: [
            {
              serviceId: 65,
              name: 'ТСЦ МВС № 4641',
              street: 'вул. Д. Апостола',
              building: '11 ',
            },
            {
              serviceId: 74,
              name: 'ТСЦ МВС № 4651',
              street: 'вул. Богданівська',
              building: '44 ',
            },
          ],
        },
        {
          name: 'м. Самбір',
          serviceCenters: [
            {
              serviceId: 68,
              name: 'ТСЦ МВС № 4644',
              street: 'вул. Східна',
              building: '216 ',
            },
          ],
        },
        {
          name: 'м. Стрий',
          serviceCenters: [
            {
              serviceId: 69,
              name: 'ТСЦ МВС № 4645 ',
              street: 'вул. Багряного',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Шептицький',
          serviceCenters: [
            {
              serviceId: 70,
              name: 'ТСЦ МВС № 4646',
              street: 'вул. Корольова',
              building: '14 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Миколаївська область',
      cities: [
        {
          name: 'м. Миколаїв',
          serviceCenters: [
            {
              serviceId: 75,
              name: 'ТСЦ МВС № 4841 ',
              street: 'провулок. Транспортний',
              building: '1а/1',
            },
          ],
        },
        {
          name: 'м. Первомайськ',
          serviceCenters: [
            {
              serviceId: 76,
              name: 'ТСЦ МВС № 4842',
              street: 'вул. Вознесенська',
              building: '73 б',
            },
          ],
        },
        {
          name: 'м. Вознесенськ',
          serviceCenters: [
            {
              serviceId: 78,
              name: 'ТСЦ МВС № 4844',
              street: 'вул. Молодогвардійська',
              building: '45 ',
            },
          ],
        },
        {
          name: 'м. Новий Буг',
          serviceCenters: [
            {
              serviceId: 79,
              name: 'ТСЦ МВС № 4845',
              street: 'вул. Площа Свободи',
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Одеська область',
      cities: [
        {
          name: 'м. Білгород-Дністровський',
          serviceCenters: [
            {
              serviceId: 82,
              name: 'ТСЦ МВС № 5143',
              street: 'вул. Ігоря Іванова',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Ізмаїл',
          serviceCenters: [
            {
              serviceId: 83,
              name: 'ТСЦ МВС № 5144',
              street: 'пр-т. Незалежності',
              building: '362 ',
            },
          ],
        },
        {
          name: 'м. Подільськ',
          serviceCenters: [
            {
              serviceId: 87,
              name: 'ТСЦ МВС № 5149',
              street: 'вул. Соборна',
              building: '202 б',
            },
          ],
        },
        {
          name: 'м. Чорноморськ',
          serviceCenters: [
            {
              serviceId: 88,
              name: 'ТСЦ МВС № 5150',
              street: 'вул. Промислова',
              building: '14',
            },
          ],
        },
        {
          name: 'м. Одеса',
          serviceCenters: [
            {
              serviceId: 91,
              name: 'ТСЦ МВС № 5154',
              street: 'вул. Аеропортівська',
              building: '27/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Полтавська область',
      cities: [
        {
          name: 'с. Розсошенці',
          serviceCenters: [
            {
              serviceId: 92,
              name: 'ТСЦ МВС № 5341',
              street: 'вул. Кременчуцька',
              building: '2 в',
            },
          ],
        },
        {
          name: 'м. Кременчук',
          serviceCenters: [
            {
              serviceId: 93,
              name: 'ТСЦ МВС № 5342',
              street: 'вул. Покровська',
              building: '14',
            },
          ],
        },
        {
          name: 'м. Лубни',
          serviceCenters: [
            {
              serviceId: 94,
              name: 'ТСЦ МВС № 5343',
              street: 'пр-т. Володимирський',
              building: '178 б',
            },
          ],
        },
      ],
    },
    {
      name: 'Рівненська область',
      cities: [
        {
          name: 'м. Рівне',
          serviceCenters: [
            {
              serviceId: 100,
              name: 'ТСЦ МВС № 5641',
              street: 'вул. Київська',
              building: '108 б',
            },
          ],
        },
        {
          name: 'м. Сарни',
          serviceCenters: [
            {
              serviceId: 102,
              name: 'ТСЦ МВС № 5643',
              street: 'вул. Костопільська',
              building: '100 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Сумська область',
      cities: [
        {
          name: 'м. Охтирка',
          serviceCenters: [
            {
              serviceId: 106,
              name: 'ТСЦ МВС № 5943',
              street: 'вул. Київська',
              building: '164 в',
            },
          ],
        },
        {
          name: 'м. Шостка',
          serviceCenters: [
            {
              serviceId: 108,
              name: 'ТСЦ МВС № 5945',
              street: 'вул. Героїв Шосткинщини',
              building: '24-А',
            },
          ],
        },
        {
          name: 'м. Суми',
          serviceCenters: [
            {
              serviceId: 109,
              name: 'ТСЦ МВС № 5946',
              street: 'вул. Білопільський шлях',
              building: '18/1',
            },
          ],
        },
        {
          name: 'м. Конотоп',
          serviceCenters: [
            {
              serviceId: 155,
              name: 'ТСЦ МВС № 5942  вул Вирівська, 19 А (лише практичний іспит)',
              street: 'Вирівська',
              building: '19 А',
            },
          ],
        },
      ],
    },
    {
      name: 'Тернопільська область',
      cities: [
        {
          name: 'с. Підгородне',
          serviceCenters: [
            {
              serviceId: 110,
              name: 'ТСЦ МВС № 6141',
              street: 'вул. Стрийська',
              building: '5 ',
            },
          ],
        },
        {
          name: 'м. Кременець',
          serviceCenters: [
            {
              serviceId: 112,
              name: 'ТСЦ МВС № 6143',
              street: 'вул. Шевченка',
              building: '67 ',
            },
          ],
        },
        {
          name: 'с. Угринь',
          serviceCenters: [
            {
              serviceId: 114,
              name: 'ТСЦ МВС № 6145',
              street: "вул. Об'їзна",
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Харків та Харківська територіальна громада',
      cities: [
        {
          name: 'м. Харків',
          serviceCenters: [
            {
              serviceId: 115,
              name: 'ТСЦ МВС № 6341',
              street: 'вул. Шевченка',
              building: '26 ',
            },
            {
              serviceId: 116,
              name: 'ТСЦ МВС № 6342',
              street: 'вул. Станція метро «Київська» вестибюль №1',
              building: ' ',
            },
          ],
        },
      ],
    },
    {
      name: 'Харківська область',
      cities: [
        {
          name: 'м. Лозова',
          serviceCenters: [
            {
              serviceId: 122,
              name: 'ТСЦ МВС № 6348',
              street: 'вул. мр-н 1',
              building: '21',
            },
          ],
        },
        {
          name: 'смт. Пісочин',
          serviceCenters: [
            {
              serviceId: 124,
              name: 'ТСЦ МВС № 6350',
              street: 'вул. Транспортна',
              building: '116',
            },
          ],
        },
      ],
    },
    {
      name: 'Хмельницька область',
      cities: [
        {
          name: 'м. Хмельницький',
          serviceCenters: [
            {
              serviceId: 127,
              name: 'ТСЦ МВС № 6841',
              street: 'вул. Західно-Окружна,',
              building: '11/1',
            },
          ],
        },
        {
          name: "м. Кам'янець-Подільський",
          serviceCenters: [
            {
              serviceId: 129,
              name: 'ТСЦ МВС № 6843',
              street: 'пр-т. Грушевського',
              building: '45323 ',
            },
          ],
        },
        {
          name: 'м. Старокостянтинів',
          serviceCenters: [
            {
              serviceId: 130,
              name: 'ТСЦ МВС № 6844',
              street: 'вул. Чайковського',
              building: '1 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Черкаська область',
      cities: [
        {
          name: 'м. Черкаси',
          serviceCenters: [
            {
              serviceId: 132,
              name: 'ТСЦ МВС № 7141',
              street: 'вул. Лесі Українки',
              building: '21 ',
            },
          ],
        },
        {
          name: 'с. Уманський р-н., с/рада Родниківська',
          serviceCenters: [
            {
              serviceId: 133,
              name: 'ТСЦ МВС № 7142',
              street: 'вул. автодорога Київ-Одеса  203 км 800 м',
              building: 'б/н ',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернівецька область',
      cities: [
        {
          name: 'м. Чернівці',
          serviceCenters: [
            {
              serviceId: 137,
              name: 'ТСЦ МВС № 7341',
              street: 'вул. Руська',
              building: '248 м',
            },
          ],
        },
        {
          name: 'с. Кельменці',
          serviceCenters: [
            {
              serviceId: 141,
              name: 'ТСЦ МВС № 7345',
              street: 'вул. О.Паламаря',
              building: '9 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернігівська область',
      cities: [
        {
          name: 'м. Чернігів',
          serviceCenters: [
            {
              serviceId: 142,
              name: 'ТСЦ МВС № 7441',
              street: 'Шевченка',
              building: '162а',
            },
          ],
        },
        {
          name: 'м. Прилуки',
          serviceCenters: [
            {
              serviceId: 143,
              name: 'ТСЦ МВС № 7442',
              street: 'вул. Індустріальна',
              building: '6',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Київ',
      cities: [
        {
          name: 'м. Київ',
          serviceCenters: [
            {
              serviceId: 146,
              name: 'ТСЦ МВС № 8041',
              street: 'вул. Перемоги',
              building: '20 ',
            },
            {
              serviceId: 147,
              name: 'ТСЦ МВС № 8042',
              street: 'вул. Мрії',
              building: '19',
            },
            {
              serviceId: 154,
              name: 'ТСЦ МВС № 8049',
              street: 'вул. Павла Усенка',
              building: '8 ',
            },
          ],
        },
      ],
    },
  ],
  52: [
    {
      name: 'Київська область',
      cities: [
        {
          name: 'м. Біла Церква',
          serviceCenters: [
            {
              serviceId: 2,
              name: 'ТСЦ МВС № 3242',
              street: ' вул. Сухоярська',
              building: '20',
            },
          ],
        },
        {
          name: 'с. Софіївська Борщагівка',
          serviceCenters: [
            {
              serviceId: 6,
              name: 'ТСЦ МВС № 3246',
              street: 'вул. Малишко',
              building: '2',
            },
          ],
        },
      ],
    },
    {
      name: 'Вінницька область',
      cities: [
        {
          name: 'м. Вінниця',
          serviceCenters: [
            {
              serviceId: 11,
              name: 'ТСЦ МВС № 0541',
              street: 'вул. Ботанічна',
              building: '24 ',
            },
          ],
        },
        {
          name: 'м. Гайсин',
          serviceCenters: [
            {
              serviceId: 12,
              name: 'ТСЦ МВС № 0542',
              street: 'вул. Південна',
              building: '67 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Волинська область',
      cities: [
        {
          name: 'с. Луцький р-н, с. Струмівка',
          serviceCenters: [
            {
              serviceId: 17,
              name: 'ТСЦ МВС № 0741',
              street: 'вул. Рівненська',
              building: '74 ',
            },
          ],
        },
        {
          name: 'м. Ковель',
          serviceCenters: [
            {
              serviceId: 18,
              name: 'ТСЦ МВС № 0742',
              street: 'вул. Володимирська',
              building: '133 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Дніпропетровська область',
      cities: [
        {
          name: 'м. Дніпро',
          serviceCenters: [
            {
              serviceId: 22,
              name: 'ТСЦ МВС № 1242',
              street: 'пр. Праці',
              building: '16 ',
            },
          ],
        },
        {
          name: 'м. Кривий Ріг',
          serviceCenters: [
            {
              serviceId: 28,
              name: 'ТСЦ МВС № 1248',
              street: 'вул. Стрельнікова',
              building: '15 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Житомирська область',
      cities: [
        {
          name: 'с. Довжик',
          serviceCenters: [
            {
              serviceId: 32,
              name: 'ТСЦ МВС № 1841',
              street: 'вул. Богунська',
              building: '1 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Закарпатська область',
      cities: [
        {
          name: 'м. Ужгород',
          serviceCenters: [
            {
              serviceId: 37,
              name: 'ТСЦ МВС № 2141',
              street: 'вул. О. Кошового',
              building: '4 ',
            },
          ],
        },
        {
          name: 'с. Мукачівський р-н., с. Клячаново',
          serviceCenters: [
            {
              serviceId: 38,
              name: 'ТСЦ МВС № 2142',
              street: 'вул. Автомобілістів',
              building: '28 ',
            },
          ],
        },
        {
          name: 'м. Хуст',
          serviceCenters: [
            {
              serviceId: 40,
              name: 'ТСЦ МВС № 2144',
              street: 'вул. Окружна',
              building: '34 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Запоріжжя та Запорізька територіальна громада',
      cities: [
        {
          name: 'м. Запоріжжя',
          serviceCenters: [
            {
              serviceId: 43,
              name: 'ТСЦ МВС № 2342',
              street: 'вул. Бабури козака',
              building: '9 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Івано-Франківська область',
      cities: [
        {
          name: 'м. Івано-Франківськ',
          serviceCenters: [
            {
              serviceId: 46,
              name: 'ТСЦ МВС № 2641',
              street: 'вул. Коновальця',
              building: '229 у',
            },
          ],
        },
        {
          name: 'м. Коломия',
          serviceCenters: [
            {
              serviceId: 48,
              name: 'ТСЦ МВС № 2643',
              street: 'вул. Симоненка',
              building: '2 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Кіровоградська область',
      cities: [
        {
          name: 'м. Кропивницький',
          serviceCenters: [
            {
              serviceId: 60,
              name: 'ТСЦ МВС № 3541',
              street: 'пр-т. Інженерів',
              building: '9/92 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Львівська область',
      cities: [
        {
          name: 'м. Львів',
          serviceCenters: [
            {
              serviceId: 65,
              name: 'ТСЦ МВС № 4641',
              street: 'вул. Д. Апостола',
              building: '11 ',
            },
          ],
        },
        {
          name: 'м. Самбір',
          serviceCenters: [
            {
              serviceId: 68,
              name: 'ТСЦ МВС № 4644',
              street: 'вул. Східна',
              building: '216 ',
            },
          ],
        },
        {
          name: 'м. Стрий',
          serviceCenters: [
            {
              serviceId: 69,
              name: 'ТСЦ МВС № 4645 ',
              street: 'вул. Багряного',
              building: '4 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Миколаївська область',
      cities: [
        {
          name: 'м. Миколаїв',
          serviceCenters: [
            {
              serviceId: 75,
              name: 'ТСЦ МВС № 4841 ',
              street: 'провулок. Транспортний',
              building: '1а/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Одеська область',
      cities: [
        {
          name: 'м. Одеса',
          serviceCenters: [
            {
              serviceId: 91,
              name: 'ТСЦ МВС № 5154',
              street: 'вул. Аеропортівська',
              building: '27/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Полтавська область',
      cities: [
        {
          name: 'м. Кременчук',
          serviceCenters: [
            {
              serviceId: 93,
              name: 'ТСЦ МВС № 5342',
              street: 'вул. Покровська',
              building: '14',
            },
          ],
        },
      ],
    },
    {
      name: 'Рівненська область',
      cities: [
        {
          name: 'м. Рівне',
          serviceCenters: [
            {
              serviceId: 100,
              name: 'ТСЦ МВС № 5641',
              street: 'вул. Київська',
              building: '108 б',
            },
          ],
        },
        {
          name: 'м. Сарни',
          serviceCenters: [
            {
              serviceId: 102,
              name: 'ТСЦ МВС № 5643',
              street: 'вул. Костопільська',
              building: '100 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Сумська область',
      cities: [
        {
          name: 'м. Суми',
          serviceCenters: [
            {
              serviceId: 109,
              name: 'ТСЦ МВС № 5946',
              street: 'вул. Білопільський шлях',
              building: '18/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Тернопільська область',
      cities: [
        {
          name: 'с. Підгородне',
          serviceCenters: [
            {
              serviceId: 110,
              name: 'ТСЦ МВС № 6141',
              street: 'вул. Стрийська',
              building: '5 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Харків та Харківська територіальна громада',
      cities: [
        {
          name: 'м. Харків',
          serviceCenters: [
            {
              serviceId: 115,
              name: 'ТСЦ МВС № 6341',
              street: 'вул. Шевченка',
              building: '26 ',
            },
            {
              serviceId: 116,
              name: 'ТСЦ МВС № 6342',
              street: 'вул. Станція метро «Київська» вестибюль №1',
              building: ' ',
            },
          ],
        },
      ],
    },
    {
      name: 'Хмельницька область',
      cities: [
        {
          name: 'м. Хмельницький',
          serviceCenters: [
            {
              serviceId: 127,
              name: 'ТСЦ МВС № 6841',
              street: 'вул. Західно-Окружна,',
              building: '11/1',
            },
          ],
        },
        {
          name: 'м. Старокостянтинів',
          serviceCenters: [
            {
              serviceId: 130,
              name: 'ТСЦ МВС № 6844',
              street: 'вул. Чайковського',
              building: '1 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Черкаська область',
      cities: [
        {
          name: 'м. Черкаси',
          serviceCenters: [
            {
              serviceId: 132,
              name: 'ТСЦ МВС № 7141',
              street: 'вул. Лесі Українки',
              building: '21 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернівецька область',
      cities: [
        {
          name: 'м. Чернівці',
          serviceCenters: [
            {
              serviceId: 137,
              name: 'ТСЦ МВС № 7341',
              street: 'вул. Руська',
              building: '248 м',
            },
          ],
        },
        {
          name: 'с. Кельменці',
          serviceCenters: [
            {
              serviceId: 141,
              name: 'ТСЦ МВС № 7345',
              street: 'вул. О.Паламаря',
              building: '9 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернігівська область',
      cities: [
        {
          name: 'м. Чернігів',
          serviceCenters: [
            {
              serviceId: 142,
              name: 'ТСЦ МВС № 7441',
              street: 'Шевченка',
              building: '162а',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Київ',
      cities: [
        {
          name: 'м. Київ',
          serviceCenters: [
            {
              serviceId: 147,
              name: 'ТСЦ МВС № 8042',
              street: 'вул. Мрії',
              building: '19',
            },
            {
              serviceId: 154,
              name: 'ТСЦ МВС № 8049',
              street: 'вул. Павла Усенка',
              building: '8 ',
            },
          ],
        },
      ],
    },
  ],
  51: [
    {
      name: 'Тернопільська область',
      cities: [
        {
          name: 'с. Підгородне',
          serviceCenters: [
            {
              serviceId: 110,
              name: 'ТСЦ МВС № 6141',
              street: 'вул. Стрийська',
              building: '5 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Черкаська область',
      cities: [
        {
          name: 'м. Черкаси',
          serviceCenters: [
            {
              serviceId: 132,
              name: 'ТСЦ МВС № 7141',
              street: 'вул. Лесі Українки',
              building: '21 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Київ',
      cities: [
        {
          name: 'м. Київ',
          serviceCenters: [
            {
              serviceId: 154,
              name: 'ТСЦ МВС № 8049',
              street: 'вул. Павла Усенка',
              building: '8 ',
            },
          ],
        },
      ],
    },
  ],
  47: [
    {
      name: 'Київська область',
      cities: [
        {
          name: 'м. Біла Церква',
          serviceCenters: [
            {
              serviceId: 2,
              name: 'ТСЦ МВС № 3242',
              street: ' вул. Сухоярська',
              building: '20',
            },
          ],
        },
        {
          name: 'м. Бровари',
          serviceCenters: [
            {
              serviceId: 3,
              name: 'ТСЦ МВС № 3243',
              street: 'вул. Броварської Сотні',
              building: '4А',
            },
          ],
        },
        {
          name: 'с. Софіївська Борщагівка',
          serviceCenters: [
            {
              serviceId: 6,
              name: 'ТСЦ МВС № 3246',
              street: 'вул. Малишко',
              building: '2',
            },
          ],
        },
        {
          name: 'м. Буча',
          serviceCenters: [
            {
              serviceId: 7,
              name: 'ТСЦ МВС № 3247 ',
              street: 'вул. Депутатська',
              building: '1 в',
            },
          ],
        },
        {
          name: 'м. Переяслав',
          serviceCenters: [
            {
              serviceId: 8,
              name: 'ТСЦ МВС № 3248 ',
              street: 'вул. Ново-Київське шосе',
              building: '46 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Вінницька область',
      cities: [
        {
          name: 'м. Вінниця',
          serviceCenters: [
            {
              serviceId: 11,
              name: 'ТСЦ МВС № 0541',
              street: 'вул. Ботанічна',
              building: '24 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Волинська область',
      cities: [
        {
          name: 'с. Луцький р-н, с. Струмівка',
          serviceCenters: [
            {
              serviceId: 17,
              name: 'ТСЦ МВС № 0741',
              street: 'вул. Рівненська',
              building: '74 ',
            },
          ],
        },
        {
          name: 'м. Ковель',
          serviceCenters: [
            {
              serviceId: 18,
              name: 'ТСЦ МВС № 0742',
              street: 'вул. Володимирська',
              building: '133 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Дніпропетровська область',
      cities: [
        {
          name: 'м. Дніпро',
          serviceCenters: [
            {
              serviceId: 22,
              name: 'ТСЦ МВС № 1242',
              street: 'пр. Праці',
              building: '16 ',
            },
            {
              serviceId: 29,
              name: 'ТСЦ МВС № 1249',
              street: 'пр-т. Слобожанський',
              building: '31 д',
            },
          ],
        },
        {
          name: 'м. Покров',
          serviceCenters: [
            {
              serviceId: 25,
              name: 'ТСЦ МВС № 1245',
              street: 'вул. Уральська',
              building: '1 ',
            },
          ],
        },
        {
          name: 'м. Павлоград',
          serviceCenters: [
            {
              serviceId: 27,
              name: 'ТСЦ МВС № 1247',
              street: 'вул. Дніпровська',
              building: '334 а',
            },
          ],
        },
        {
          name: 'м. Кривий Ріг',
          serviceCenters: [
            {
              serviceId: 28,
              name: 'ТСЦ МВС № 1248',
              street: 'вул. Стрельнікова',
              building: '15 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Житомирська область',
      cities: [
        {
          name: 'с. Довжик',
          serviceCenters: [
            {
              serviceId: 32,
              name: 'ТСЦ МВС № 1841',
              street: 'вул. Богунська',
              building: '1 а',
            },
          ],
        },
        {
          name: 'м. Коростень',
          serviceCenters: [
            {
              serviceId: 34,
              name: 'ТСЦ МВС № 1843',
              street: 'вул. Сергія Кемського',
              building: '3 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Закарпатська область',
      cities: [
        {
          name: 'м. Ужгород',
          serviceCenters: [
            {
              serviceId: 37,
              name: 'ТСЦ МВС № 2141',
              street: 'вул. О. Кошового',
              building: '4 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Івано-Франківська область',
      cities: [
        {
          name: 'м. Івано-Франківськ',
          serviceCenters: [
            {
              serviceId: 46,
              name: 'ТСЦ МВС № 2641',
              street: 'вул. Коновальця',
              building: '229 у',
            },
          ],
        },
        {
          name: 'м. Коломия',
          serviceCenters: [
            {
              serviceId: 48,
              name: 'ТСЦ МВС № 2643',
              street: 'вул. Симоненка',
              building: '2 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Кіровоградська область',
      cities: [
        {
          name: 'м. Кропивницький',
          serviceCenters: [
            {
              serviceId: 60,
              name: 'ТСЦ МВС № 3541',
              street: 'пр-т. Інженерів',
              building: '9/92 ',
            },
          ],
        },
        {
          name: 'м. Олександрія',
          serviceCenters: [
            {
              serviceId: 61,
              name: 'ТСЦ МВС № 3542',
              street: 'пр-т. Будівельників',
              building: '38 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Львівська область',
      cities: [
        {
          name: 'м. Львів',
          serviceCenters: [
            {
              serviceId: 65,
              name: 'ТСЦ МВС № 4641',
              street: 'вул. Д. Апостола',
              building: '11 ',
            },
            {
              serviceId: 74,
              name: 'ТСЦ МВС № 4651',
              street: 'вул. Богданівська',
              building: '44 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Миколаївська область',
      cities: [
        {
          name: 'м. Миколаїв',
          serviceCenters: [
            {
              serviceId: 75,
              name: 'ТСЦ МВС № 4841 ',
              street: 'провулок. Транспортний',
              building: '1а/1',
            },
          ],
        },
        {
          name: 'м. Первомайськ',
          serviceCenters: [
            {
              serviceId: 76,
              name: 'ТСЦ МВС № 4842',
              street: 'вул. Вознесенська',
              building: '73 б',
            },
          ],
        },
      ],
    },
    {
      name: 'Полтавська область',
      cities: [
        {
          name: 'с. Розсошенці',
          serviceCenters: [
            {
              serviceId: 92,
              name: 'ТСЦ МВС № 5341',
              street: 'вул. Кременчуцька',
              building: '2 в',
            },
          ],
        },
        {
          name: 'м. Лубни',
          serviceCenters: [
            {
              serviceId: 94,
              name: 'ТСЦ МВС № 5343',
              street: 'пр-т. Володимирський',
              building: '178 б',
            },
          ],
        },
      ],
    },
    {
      name: 'Рівненська область',
      cities: [
        {
          name: 'м. Рівне',
          serviceCenters: [
            {
              serviceId: 100,
              name: 'ТСЦ МВС № 5641',
              street: 'вул. Київська',
              building: '108 б',
            },
          ],
        },
        {
          name: 'м. Сарни',
          serviceCenters: [
            {
              serviceId: 102,
              name: 'ТСЦ МВС № 5643',
              street: 'вул. Костопільська',
              building: '100 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Сумська область',
      cities: [
        {
          name: 'м. Охтирка',
          serviceCenters: [
            {
              serviceId: 106,
              name: 'ТСЦ МВС № 5943',
              street: 'вул. Київська',
              building: '164 в',
            },
          ],
        },
        {
          name: 'м. Суми',
          serviceCenters: [
            {
              serviceId: 109,
              name: 'ТСЦ МВС № 5946',
              street: 'вул. Білопільський шлях',
              building: '18/1',
            },
          ],
        },
        {
          name: 'м. Конотоп',
          serviceCenters: [
            {
              serviceId: 155,
              name: 'ТСЦ МВС № 5942  вул Вирівська, 19 А (лише практичний іспит)',
              street: 'Вирівська',
              building: '19 А',
            },
          ],
        },
      ],
    },
    {
      name: 'Тернопільська область',
      cities: [
        {
          name: 'с. Підгородне',
          serviceCenters: [
            {
              serviceId: 110,
              name: 'ТСЦ МВС № 6141',
              street: 'вул. Стрийська',
              building: '5 ',
            },
          ],
        },
        {
          name: 'м. Кременець',
          serviceCenters: [
            {
              serviceId: 112,
              name: 'ТСЦ МВС № 6143',
              street: 'вул. Шевченка',
              building: '67 ',
            },
          ],
        },
        {
          name: 'с. Угринь',
          serviceCenters: [
            {
              serviceId: 114,
              name: 'ТСЦ МВС № 6145',
              street: "вул. Об'їзна",
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Харків та Харківська територіальна громада',
      cities: [
        {
          name: 'м. Харків',
          serviceCenters: [
            {
              serviceId: 115,
              name: 'ТСЦ МВС № 6341',
              street: 'вул. Шевченка',
              building: '26 ',
            },
            {
              serviceId: 116,
              name: 'ТСЦ МВС № 6342',
              street: 'вул. Станція метро «Київська» вестибюль №1',
              building: ' ',
            },
          ],
        },
      ],
    },
    {
      name: 'Хмельницька область',
      cities: [
        {
          name: 'м. Хмельницький',
          serviceCenters: [
            {
              serviceId: 127,
              name: 'ТСЦ МВС № 6841',
              street: 'вул. Західно-Окружна,',
              building: '11/1',
            },
          ],
        },
        {
          name: "м. Кам'янець-Подільський",
          serviceCenters: [
            {
              serviceId: 129,
              name: 'ТСЦ МВС № 6843',
              street: 'пр-т. Грушевського',
              building: '45323 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Черкаська область',
      cities: [
        {
          name: 'м. Черкаси',
          serviceCenters: [
            {
              serviceId: 132,
              name: 'ТСЦ МВС № 7141',
              street: 'вул. Лесі Українки',
              building: '21 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернівецька область',
      cities: [
        {
          name: 'м. Чернівці',
          serviceCenters: [
            {
              serviceId: 137,
              name: 'ТСЦ МВС № 7341',
              street: 'вул. Руська',
              building: '248 м',
            },
          ],
        },
        {
          name: 'с. Кельменці',
          serviceCenters: [
            {
              serviceId: 141,
              name: 'ТСЦ МВС № 7345',
              street: 'вул. О.Паламаря',
              building: '9 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернігівська область',
      cities: [
        {
          name: 'м. Чернігів',
          serviceCenters: [
            {
              serviceId: 142,
              name: 'ТСЦ МВС № 7441',
              street: 'Шевченка',
              building: '162а',
            },
          ],
        },
        {
          name: 'м. Прилуки',
          serviceCenters: [
            {
              serviceId: 143,
              name: 'ТСЦ МВС № 7442',
              street: 'вул. Індустріальна',
              building: '6',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Київ',
      cities: [
        {
          name: 'м. Київ',
          serviceCenters: [
            {
              serviceId: 154,
              name: 'ТСЦ МВС № 8049',
              street: 'вул. Павла Усенка',
              building: '8 ',
            },
          ],
        },
      ],
    },
  ],
  42: [
    {
      name: 'Київська область',
      cities: [
        {
          name: 'м. Біла Церква',
          serviceCenters: [
            {
              serviceId: 2,
              name: 'ТСЦ МВС № 3242',
              street: ' вул. Сухоярська',
              building: '20',
            },
          ],
        },
        {
          name: 'м. Бровари',
          serviceCenters: [
            {
              serviceId: 3,
              name: 'ТСЦ МВС № 3243',
              street: 'вул. Броварської Сотні',
              building: '4А',
            },
          ],
        },
        {
          name: 'с. Софіївська Борщагівка',
          serviceCenters: [
            {
              serviceId: 6,
              name: 'ТСЦ МВС № 3246',
              street: 'вул. Малишко',
              building: '2',
            },
          ],
        },
        {
          name: 'м. Переяслав',
          serviceCenters: [
            {
              serviceId: 8,
              name: 'ТСЦ МВС № 3248 ',
              street: 'вул. Ново-Київське шосе',
              building: '46 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Вінницька область',
      cities: [
        {
          name: 'м. Вінниця',
          serviceCenters: [
            {
              serviceId: 11,
              name: 'ТСЦ МВС № 0541',
              street: 'вул. Ботанічна',
              building: '24 ',
            },
          ],
        },
        {
          name: 'м. Гайсин',
          serviceCenters: [
            {
              serviceId: 12,
              name: 'ТСЦ МВС № 0542',
              street: 'вул. Південна',
              building: '67 ',
            },
          ],
        },
        {
          name: 'м. Шаргород',
          serviceCenters: [
            {
              serviceId: 13,
              name: 'ТСЦ МВС № 0543',
              street: 'вул. Героїв Майдану',
              building: '224 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Волинська область',
      cities: [
        {
          name: 'с. Луцький р-н, с. Струмівка',
          serviceCenters: [
            {
              serviceId: 17,
              name: 'ТСЦ МВС № 0741',
              street: 'вул. Рівненська',
              building: '74 ',
            },
          ],
        },
        {
          name: 'м. Ковель',
          serviceCenters: [
            {
              serviceId: 18,
              name: 'ТСЦ МВС № 0742',
              street: 'вул. Володимирська',
              building: '133 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Дніпропетровська область',
      cities: [
        {
          name: 'м. Дніпро',
          serviceCenters: [
            {
              serviceId: 22,
              name: 'ТСЦ МВС № 1242',
              street: 'пр. Праці',
              building: '16 ',
            },
            {
              serviceId: 29,
              name: 'ТСЦ МВС № 1249',
              street: 'пр-т. Слобожанський',
              building: '31 д',
            },
          ],
        },
        {
          name: 'м. Покров',
          serviceCenters: [
            {
              serviceId: 25,
              name: 'ТСЦ МВС № 1245',
              street: 'вул. Уральська',
              building: '1 ',
            },
          ],
        },
        {
          name: 'м. Павлоград',
          serviceCenters: [
            {
              serviceId: 27,
              name: 'ТСЦ МВС № 1247',
              street: 'вул. Дніпровська',
              building: '334 а',
            },
          ],
        },
        {
          name: 'м. Кривий Ріг',
          serviceCenters: [
            {
              serviceId: 28,
              name: 'ТСЦ МВС № 1248',
              street: 'вул. Стрельнікова',
              building: '15 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Житомирська область',
      cities: [
        {
          name: 'с. Довжик',
          serviceCenters: [
            {
              serviceId: 32,
              name: 'ТСЦ МВС № 1841',
              street: 'вул. Богунська',
              building: '1 а',
            },
          ],
        },
        {
          name: 'м. Коростень',
          serviceCenters: [
            {
              serviceId: 34,
              name: 'ТСЦ МВС № 1843',
              street: 'вул. Сергія Кемського',
              building: '3 ',
            },
          ],
        },
        {
          name: 'м. Звягель',
          serviceCenters: [
            {
              serviceId: 35,
              name: 'ТСЦ МВС № 1844',
              street: 'вул. Відродження',
              building: '2 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Закарпатська область',
      cities: [
        {
          name: 'м. Ужгород',
          serviceCenters: [
            {
              serviceId: 37,
              name: 'ТСЦ МВС № 2141',
              street: 'вул. О. Кошового',
              building: '4 ',
            },
          ],
        },
        {
          name: 'с. Мукачівський р-н., с. Клячаново',
          serviceCenters: [
            {
              serviceId: 38,
              name: 'ТСЦ МВС № 2142',
              street: 'вул. Автомобілістів',
              building: '28 ',
            },
          ],
        },
        {
          name: 'м. Хуст',
          serviceCenters: [
            {
              serviceId: 40,
              name: 'ТСЦ МВС № 2144',
              street: 'вул. Окружна',
              building: '34 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Запоріжжя та Запорізька територіальна громада',
      cities: [
        {
          name: 'м. Запоріжжя',
          serviceCenters: [
            {
              serviceId: 42,
              name: 'ТСЦ МВС № 2341',
              street: 'вул. Олександрівська',
              building: '84 ',
            },
            {
              serviceId: 43,
              name: 'ТСЦ МВС № 2342',
              street: 'вул. Бабури козака',
              building: '9 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Івано-Франківська область',
      cities: [
        {
          name: 'м. Івано-Франківськ',
          serviceCenters: [
            {
              serviceId: 46,
              name: 'ТСЦ МВС № 2641',
              street: 'вул. Коновальця',
              building: '229 у',
            },
          ],
        },
        {
          name: 'м. Коломия',
          serviceCenters: [
            {
              serviceId: 48,
              name: 'ТСЦ МВС № 2643',
              street: 'вул. Симоненка',
              building: '2 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Кіровоградська область',
      cities: [
        {
          name: 'м. Кропивницький',
          serviceCenters: [
            {
              serviceId: 60,
              name: 'ТСЦ МВС № 3541',
              street: 'пр-т. Інженерів',
              building: '9/92 ',
            },
          ],
        },
        {
          name: 'м. Олександрія',
          serviceCenters: [
            {
              serviceId: 61,
              name: 'ТСЦ МВС № 3542',
              street: 'пр-т. Будівельників',
              building: '38 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Львівська область',
      cities: [
        {
          name: 'м. Львів',
          serviceCenters: [
            {
              serviceId: 65,
              name: 'ТСЦ МВС № 4641',
              street: 'вул. Д. Апостола',
              building: '11 ',
            },
            {
              serviceId: 74,
              name: 'ТСЦ МВС № 4651',
              street: 'вул. Богданівська',
              building: '44 ',
            },
          ],
        },
        {
          name: 'м. Стрий',
          serviceCenters: [
            {
              serviceId: 69,
              name: 'ТСЦ МВС № 4645 ',
              street: 'вул. Багряного',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Шептицький',
          serviceCenters: [
            {
              serviceId: 70,
              name: 'ТСЦ МВС № 4646',
              street: 'вул. Корольова',
              building: '14 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Миколаївська область',
      cities: [
        {
          name: 'м. Миколаїв',
          serviceCenters: [
            {
              serviceId: 75,
              name: 'ТСЦ МВС № 4841 ',
              street: 'провулок. Транспортний',
              building: '1а/1',
            },
          ],
        },
        {
          name: 'м. Первомайськ',
          serviceCenters: [
            {
              serviceId: 76,
              name: 'ТСЦ МВС № 4842',
              street: 'вул. Вознесенська',
              building: '73 б',
            },
          ],
        },
        {
          name: 'м. Вознесенськ',
          serviceCenters: [
            {
              serviceId: 78,
              name: 'ТСЦ МВС № 4844',
              street: 'вул. Молодогвардійська',
              building: '45 ',
            },
          ],
        },
        {
          name: 'м. Новий Буг',
          serviceCenters: [
            {
              serviceId: 79,
              name: 'ТСЦ МВС № 4845',
              street: 'вул. Площа Свободи',
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Одеська область',
      cities: [
        {
          name: 'м. Білгород-Дністровський',
          serviceCenters: [
            {
              serviceId: 82,
              name: 'ТСЦ МВС № 5143',
              street: 'вул. Ігоря Іванова',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Ізмаїл',
          serviceCenters: [
            {
              serviceId: 83,
              name: 'ТСЦ МВС № 5144',
              street: 'пр-т. Незалежності',
              building: '362 ',
            },
          ],
        },
        {
          name: 'м. Подільськ',
          serviceCenters: [
            {
              serviceId: 87,
              name: 'ТСЦ МВС № 5149',
              street: 'вул. Соборна',
              building: '202 б',
            },
          ],
        },
        {
          name: 'м. Чорноморськ',
          serviceCenters: [
            {
              serviceId: 88,
              name: 'ТСЦ МВС № 5150',
              street: 'вул. Промислова',
              building: '14',
            },
          ],
        },
        {
          name: 'м. Одеса',
          serviceCenters: [
            {
              serviceId: 91,
              name: 'ТСЦ МВС № 5154',
              street: 'вул. Аеропортівська',
              building: '27/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Полтавська область',
      cities: [
        {
          name: 'с. Розсошенці',
          serviceCenters: [
            {
              serviceId: 92,
              name: 'ТСЦ МВС № 5341',
              street: 'вул. Кременчуцька',
              building: '2 в',
            },
          ],
        },
        {
          name: 'м. Кременчук',
          serviceCenters: [
            {
              serviceId: 93,
              name: 'ТСЦ МВС № 5342',
              street: 'вул. Покровська',
              building: '14',
            },
          ],
        },
        {
          name: 'м. Лубни',
          serviceCenters: [
            {
              serviceId: 94,
              name: 'ТСЦ МВС № 5343',
              street: 'пр-т. Володимирський',
              building: '178 б',
            },
          ],
        },
      ],
    },
    {
      name: 'Рівненська область',
      cities: [
        {
          name: 'м. Рівне',
          serviceCenters: [
            {
              serviceId: 100,
              name: 'ТСЦ МВС № 5641',
              street: 'вул. Київська',
              building: '108 б',
            },
          ],
        },
        {
          name: 'м. Сарни',
          serviceCenters: [
            {
              serviceId: 102,
              name: 'ТСЦ МВС № 5643',
              street: 'вул. Костопільська',
              building: '100 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Сумська область',
      cities: [
        {
          name: 'м. Охтирка',
          serviceCenters: [
            {
              serviceId: 106,
              name: 'ТСЦ МВС № 5943',
              street: 'вул. Київська',
              building: '164 в',
            },
          ],
        },
        {
          name: 'м. Суми',
          serviceCenters: [
            {
              serviceId: 109,
              name: 'ТСЦ МВС № 5946',
              street: 'вул. Білопільський шлях',
              building: '18/1',
            },
          ],
        },
        {
          name: 'м. Конотоп',
          serviceCenters: [
            {
              serviceId: 155,
              name: 'ТСЦ МВС № 5942  вул Вирівська, 19 А (лише практичний іспит)',
              street: 'Вирівська',
              building: '19 А',
            },
          ],
        },
      ],
    },
    {
      name: 'Тернопільська область',
      cities: [
        {
          name: 'с. Підгородне',
          serviceCenters: [
            {
              serviceId: 110,
              name: 'ТСЦ МВС № 6141',
              street: 'вул. Стрийська',
              building: '5 ',
            },
          ],
        },
        {
          name: 'м. Кременець',
          serviceCenters: [
            {
              serviceId: 112,
              name: 'ТСЦ МВС № 6143',
              street: 'вул. Шевченка',
              building: '67 ',
            },
          ],
        },
        {
          name: 'с. Угринь',
          serviceCenters: [
            {
              serviceId: 114,
              name: 'ТСЦ МВС № 6145',
              street: "вул. Об'їзна",
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Харків та Харківська територіальна громада',
      cities: [
        {
          name: 'м. Харків',
          serviceCenters: [
            {
              serviceId: 115,
              name: 'ТСЦ МВС № 6341',
              street: 'вул. Шевченка',
              building: '26 ',
            },
            {
              serviceId: 116,
              name: 'ТСЦ МВС № 6342',
              street: 'вул. Станція метро «Київська» вестибюль №1',
              building: ' ',
            },
          ],
        },
      ],
    },
    {
      name: 'Хмельницька область',
      cities: [
        {
          name: 'м. Хмельницький',
          serviceCenters: [
            {
              serviceId: 127,
              name: 'ТСЦ МВС № 6841',
              street: 'вул. Західно-Окружна,',
              building: '11/1',
            },
          ],
        },
        {
          name: "м. Кам'янець-Подільський",
          serviceCenters: [
            {
              serviceId: 129,
              name: 'ТСЦ МВС № 6843',
              street: 'пр-т. Грушевського',
              building: '45323 ',
            },
          ],
        },
        {
          name: 'м. Старокостянтинів',
          serviceCenters: [
            {
              serviceId: 130,
              name: 'ТСЦ МВС № 6844',
              street: 'вул. Чайковського',
              building: '1 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Черкаська область',
      cities: [
        {
          name: 'м. Черкаси',
          serviceCenters: [
            {
              serviceId: 132,
              name: 'ТСЦ МВС № 7141',
              street: 'вул. Лесі Українки',
              building: '21 ',
            },
          ],
        },
        {
          name: 'с. Уманський р-н., с/рада Родниківська',
          serviceCenters: [
            {
              serviceId: 133,
              name: 'ТСЦ МВС № 7142',
              street: 'вул. автодорога Київ-Одеса  203 км 800 м',
              building: 'б/н ',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернівецька область',
      cities: [
        {
          name: 'м. Чернівці',
          serviceCenters: [
            {
              serviceId: 137,
              name: 'ТСЦ МВС № 7341',
              street: 'вул. Руська',
              building: '248 м',
            },
          ],
        },
        {
          name: 'с. Кельменці',
          serviceCenters: [
            {
              serviceId: 141,
              name: 'ТСЦ МВС № 7345',
              street: 'вул. О.Паламаря',
              building: '9 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернігівська область',
      cities: [
        {
          name: 'м. Чернігів',
          serviceCenters: [
            {
              serviceId: 142,
              name: 'ТСЦ МВС № 7441',
              street: 'Шевченка',
              building: '162а',
            },
          ],
        },
        {
          name: 'м. Прилуки',
          serviceCenters: [
            {
              serviceId: 143,
              name: 'ТСЦ МВС № 7442',
              street: 'вул. Індустріальна',
              building: '6',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Київ',
      cities: [
        {
          name: 'м. Київ',
          serviceCenters: [
            {
              serviceId: 146,
              name: 'ТСЦ МВС № 8041',
              street: 'вул. Перемоги',
              building: '20 ',
            },
            {
              serviceId: 147,
              name: 'ТСЦ МВС № 8042',
              street: 'вул. Мрії',
              building: '19',
            },
            {
              serviceId: 154,
              name: 'ТСЦ МВС № 8049',
              street: 'вул. Павла Усенка',
              building: '8 ',
            },
          ],
        },
      ],
    },
  ],
  43: [
    {
      name: 'Київська область',
      cities: [
        {
          name: 'м. Біла Церква',
          serviceCenters: [
            {
              serviceId: 2,
              name: 'ТСЦ МВС № 3242',
              street: ' вул. Сухоярська',
              building: '20',
            },
          ],
        },
        {
          name: 'м. Бровари',
          serviceCenters: [
            {
              serviceId: 3,
              name: 'ТСЦ МВС № 3243',
              street: 'вул. Броварської Сотні',
              building: '4А',
            },
          ],
        },
        {
          name: 'с. Софіївська Борщагівка',
          serviceCenters: [
            {
              serviceId: 6,
              name: 'ТСЦ МВС № 3246',
              street: 'вул. Малишко',
              building: '2',
            },
          ],
        },
        {
          name: 'м. Буча',
          serviceCenters: [
            {
              serviceId: 7,
              name: 'ТСЦ МВС № 3247 ',
              street: 'вул. Депутатська',
              building: '1 в',
            },
          ],
        },
        {
          name: 'м. Переяслав',
          serviceCenters: [
            {
              serviceId: 8,
              name: 'ТСЦ МВС № 3248 ',
              street: 'вул. Ново-Київське шосе',
              building: '46 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Вінницька область',
      cities: [
        {
          name: 'м. Вінниця',
          serviceCenters: [
            {
              serviceId: 11,
              name: 'ТСЦ МВС № 0541',
              street: 'вул. Ботанічна',
              building: '24 ',
            },
          ],
        },
        {
          name: 'м. Гайсин',
          serviceCenters: [
            {
              serviceId: 12,
              name: 'ТСЦ МВС № 0542',
              street: 'вул. Південна',
              building: '67 ',
            },
          ],
        },
        {
          name: 'м. Шаргород',
          serviceCenters: [
            {
              serviceId: 13,
              name: 'ТСЦ МВС № 0543',
              street: 'вул. Героїв Майдану',
              building: '224 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Волинська область',
      cities: [
        {
          name: 'с. Луцький р-н, с. Струмівка',
          serviceCenters: [
            {
              serviceId: 17,
              name: 'ТСЦ МВС № 0741',
              street: 'вул. Рівненська',
              building: '74 ',
            },
          ],
        },
        {
          name: 'м. Ковель',
          serviceCenters: [
            {
              serviceId: 18,
              name: 'ТСЦ МВС № 0742',
              street: 'вул. Володимирська',
              building: '133 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Дніпропетровська область',
      cities: [
        {
          name: 'м. Дніпро',
          serviceCenters: [
            {
              serviceId: 22,
              name: 'ТСЦ МВС № 1242',
              street: 'пр. Праці',
              building: '16 ',
            },
            {
              serviceId: 29,
              name: 'ТСЦ МВС № 1249',
              street: 'пр-т. Слобожанський',
              building: '31 д',
            },
          ],
        },
        {
          name: 'м. Покров',
          serviceCenters: [
            {
              serviceId: 25,
              name: 'ТСЦ МВС № 1245',
              street: 'вул. Уральська',
              building: '1 ',
            },
          ],
        },
        {
          name: 'м. Павлоград',
          serviceCenters: [
            {
              serviceId: 27,
              name: 'ТСЦ МВС № 1247',
              street: 'вул. Дніпровська',
              building: '334 а',
            },
          ],
        },
        {
          name: 'м. Кривий Ріг',
          serviceCenters: [
            {
              serviceId: 28,
              name: 'ТСЦ МВС № 1248',
              street: 'вул. Стрельнікова',
              building: '15 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Житомирська область',
      cities: [
        {
          name: 'с. Довжик',
          serviceCenters: [
            {
              serviceId: 32,
              name: 'ТСЦ МВС № 1841',
              street: 'вул. Богунська',
              building: '1 а',
            },
          ],
        },
        {
          name: 'м. Коростень',
          serviceCenters: [
            {
              serviceId: 34,
              name: 'ТСЦ МВС № 1843',
              street: 'вул. Сергія Кемського',
              building: '3 ',
            },
          ],
        },
        {
          name: 'м. Звягель',
          serviceCenters: [
            {
              serviceId: 35,
              name: 'ТСЦ МВС № 1844',
              street: 'вул. Відродження',
              building: '2 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Закарпатська область',
      cities: [
        {
          name: 'м. Ужгород',
          serviceCenters: [
            {
              serviceId: 37,
              name: 'ТСЦ МВС № 2141',
              street: 'вул. О. Кошового',
              building: '4 ',
            },
          ],
        },
        {
          name: 'с. Мукачівський р-н., с. Клячаново',
          serviceCenters: [
            {
              serviceId: 38,
              name: 'ТСЦ МВС № 2142',
              street: 'вул. Автомобілістів',
              building: '28 ',
            },
          ],
        },
        {
          name: 'м. Хуст',
          serviceCenters: [
            {
              serviceId: 40,
              name: 'ТСЦ МВС № 2144',
              street: 'вул. Окружна',
              building: '34 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Запоріжжя та Запорізька територіальна громада',
      cities: [
        {
          name: 'м. Запоріжжя',
          serviceCenters: [
            {
              serviceId: 42,
              name: 'ТСЦ МВС № 2341',
              street: 'вул. Олександрівська',
              building: '84 ',
            },
            {
              serviceId: 43,
              name: 'ТСЦ МВС № 2342',
              street: 'вул. Бабури козака',
              building: '9 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Івано-Франківська область',
      cities: [
        {
          name: 'м. Івано-Франківськ',
          serviceCenters: [
            {
              serviceId: 46,
              name: 'ТСЦ МВС № 2641',
              street: 'вул. Коновальця',
              building: '229 у',
            },
          ],
        },
        {
          name: 'м. Коломия',
          serviceCenters: [
            {
              serviceId: 48,
              name: 'ТСЦ МВС № 2643',
              street: 'вул. Симоненка',
              building: '2 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Кіровоградська область',
      cities: [
        {
          name: 'м. Кропивницький',
          serviceCenters: [
            {
              serviceId: 60,
              name: 'ТСЦ МВС № 3541',
              street: 'пр-т. Інженерів',
              building: '9/92 ',
            },
          ],
        },
        {
          name: 'м. Олександрія',
          serviceCenters: [
            {
              serviceId: 61,
              name: 'ТСЦ МВС № 3542',
              street: 'пр-т. Будівельників',
              building: '38 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Львівська область',
      cities: [
        {
          name: 'м. Львів',
          serviceCenters: [
            {
              serviceId: 65,
              name: 'ТСЦ МВС № 4641',
              street: 'вул. Д. Апостола',
              building: '11 ',
            },
            {
              serviceId: 74,
              name: 'ТСЦ МВС № 4651',
              street: 'вул. Богданівська',
              building: '44 ',
            },
          ],
        },
        {
          name: 'м. Самбір',
          serviceCenters: [
            {
              serviceId: 68,
              name: 'ТСЦ МВС № 4644',
              street: 'вул. Східна',
              building: '216 ',
            },
          ],
        },
        {
          name: 'м. Стрий',
          serviceCenters: [
            {
              serviceId: 69,
              name: 'ТСЦ МВС № 4645 ',
              street: 'вул. Багряного',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Шептицький',
          serviceCenters: [
            {
              serviceId: 70,
              name: 'ТСЦ МВС № 4646',
              street: 'вул. Корольова',
              building: '14 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Миколаївська область',
      cities: [
        {
          name: 'м. Миколаїв',
          serviceCenters: [
            {
              serviceId: 75,
              name: 'ТСЦ МВС № 4841 ',
              street: 'провулок. Транспортний',
              building: '1а/1',
            },
          ],
        },
        {
          name: 'м. Первомайськ',
          serviceCenters: [
            {
              serviceId: 76,
              name: 'ТСЦ МВС № 4842',
              street: 'вул. Вознесенська',
              building: '73 б',
            },
          ],
        },
        {
          name: 'м. Вознесенськ',
          serviceCenters: [
            {
              serviceId: 78,
              name: 'ТСЦ МВС № 4844',
              street: 'вул. Молодогвардійська',
              building: '45 ',
            },
          ],
        },
        {
          name: 'м. Новий Буг',
          serviceCenters: [
            {
              serviceId: 79,
              name: 'ТСЦ МВС № 4845',
              street: 'вул. Площа Свободи',
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Одеська область',
      cities: [
        {
          name: 'м. Білгород-Дністровський',
          serviceCenters: [
            {
              serviceId: 82,
              name: 'ТСЦ МВС № 5143',
              street: 'вул. Ігоря Іванова',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Ізмаїл',
          serviceCenters: [
            {
              serviceId: 83,
              name: 'ТСЦ МВС № 5144',
              street: 'пр-т. Незалежності',
              building: '362 ',
            },
          ],
        },
        {
          name: 'м. Подільськ',
          serviceCenters: [
            {
              serviceId: 87,
              name: 'ТСЦ МВС № 5149',
              street: 'вул. Соборна',
              building: '202 б',
            },
          ],
        },
        {
          name: 'м. Чорноморськ',
          serviceCenters: [
            {
              serviceId: 88,
              name: 'ТСЦ МВС № 5150',
              street: 'вул. Промислова',
              building: '14',
            },
          ],
        },
        {
          name: 'м. Одеса',
          serviceCenters: [
            {
              serviceId: 91,
              name: 'ТСЦ МВС № 5154',
              street: 'вул. Аеропортівська',
              building: '27/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Полтавська область',
      cities: [
        {
          name: 'с. Розсошенці',
          serviceCenters: [
            {
              serviceId: 92,
              name: 'ТСЦ МВС № 5341',
              street: 'вул. Кременчуцька',
              building: '2 в',
            },
          ],
        },
        {
          name: 'м. Кременчук',
          serviceCenters: [
            {
              serviceId: 93,
              name: 'ТСЦ МВС № 5342',
              street: 'вул. Покровська',
              building: '14',
            },
          ],
        },
        {
          name: 'м. Лубни',
          serviceCenters: [
            {
              serviceId: 94,
              name: 'ТСЦ МВС № 5343',
              street: 'пр-т. Володимирський',
              building: '178 б',
            },
          ],
        },
      ],
    },
    {
      name: 'Рівненська область',
      cities: [
        {
          name: 'м. Рівне',
          serviceCenters: [
            {
              serviceId: 100,
              name: 'ТСЦ МВС № 5641',
              street: 'вул. Київська',
              building: '108 б',
            },
          ],
        },
        {
          name: 'м. Сарни',
          serviceCenters: [
            {
              serviceId: 102,
              name: 'ТСЦ МВС № 5643',
              street: 'вул. Костопільська',
              building: '100 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Сумська область',
      cities: [
        {
          name: 'м. Охтирка',
          serviceCenters: [
            {
              serviceId: 106,
              name: 'ТСЦ МВС № 5943',
              street: 'вул. Київська',
              building: '164 в',
            },
          ],
        },
        {
          name: 'м. Шостка',
          serviceCenters: [
            {
              serviceId: 108,
              name: 'ТСЦ МВС № 5945',
              street: 'вул. Героїв Шосткинщини',
              building: '24-А',
            },
          ],
        },
        {
          name: 'м. Суми',
          serviceCenters: [
            {
              serviceId: 109,
              name: 'ТСЦ МВС № 5946',
              street: 'вул. Білопільський шлях',
              building: '18/1',
            },
          ],
        },
        {
          name: 'м. Конотоп',
          serviceCenters: [
            {
              serviceId: 155,
              name: 'ТСЦ МВС № 5942  вул Вирівська, 19 А (лише практичний іспит)',
              street: 'Вирівська',
              building: '19 А',
            },
          ],
        },
      ],
    },
    {
      name: 'Тернопільська область',
      cities: [
        {
          name: 'с. Підгородне',
          serviceCenters: [
            {
              serviceId: 110,
              name: 'ТСЦ МВС № 6141',
              street: 'вул. Стрийська',
              building: '5 ',
            },
          ],
        },
        {
          name: 'м. Кременець',
          serviceCenters: [
            {
              serviceId: 112,
              name: 'ТСЦ МВС № 6143',
              street: 'вул. Шевченка',
              building: '67 ',
            },
          ],
        },
        {
          name: 'с. Угринь',
          serviceCenters: [
            {
              serviceId: 114,
              name: 'ТСЦ МВС № 6145',
              street: "вул. Об'їзна",
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Харків та Харківська територіальна громада',
      cities: [
        {
          name: 'м. Харків',
          serviceCenters: [
            {
              serviceId: 115,
              name: 'ТСЦ МВС № 6341',
              street: 'вул. Шевченка',
              building: '26 ',
            },
            {
              serviceId: 116,
              name: 'ТСЦ МВС № 6342',
              street: 'вул. Станція метро «Київська» вестибюль №1',
              building: ' ',
            },
          ],
        },
      ],
    },
    {
      name: 'Харківська область',
      cities: [
        {
          name: 'м. Лозова',
          serviceCenters: [
            {
              serviceId: 122,
              name: 'ТСЦ МВС № 6348',
              street: 'вул. мр-н 1',
              building: '21',
            },
          ],
        },
        {
          name: 'смт. Пісочин',
          serviceCenters: [
            {
              serviceId: 124,
              name: 'ТСЦ МВС № 6350',
              street: 'вул. Транспортна',
              building: '116',
            },
          ],
        },
      ],
    },
    {
      name: 'Хмельницька область',
      cities: [
        {
          name: 'м. Хмельницький',
          serviceCenters: [
            {
              serviceId: 127,
              name: 'ТСЦ МВС № 6841',
              street: 'вул. Західно-Окружна,',
              building: '11/1',
            },
          ],
        },
        {
          name: "м. Кам'янець-Подільський",
          serviceCenters: [
            {
              serviceId: 129,
              name: 'ТСЦ МВС № 6843',
              street: 'пр-т. Грушевського',
              building: '45323 ',
            },
          ],
        },
        {
          name: 'м. Старокостянтинів',
          serviceCenters: [
            {
              serviceId: 130,
              name: 'ТСЦ МВС № 6844',
              street: 'вул. Чайковського',
              building: '1 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Черкаська область',
      cities: [
        {
          name: 'м. Черкаси',
          serviceCenters: [
            {
              serviceId: 132,
              name: 'ТСЦ МВС № 7141',
              street: 'вул. Лесі Українки',
              building: '21 ',
            },
          ],
        },
        {
          name: 'с. Уманський р-н., с/рада Родниківська',
          serviceCenters: [
            {
              serviceId: 133,
              name: 'ТСЦ МВС № 7142',
              street: 'вул. автодорога Київ-Одеса  203 км 800 м',
              building: 'б/н ',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернівецька область',
      cities: [
        {
          name: 'м. Чернівці',
          serviceCenters: [
            {
              serviceId: 137,
              name: 'ТСЦ МВС № 7341',
              street: 'вул. Руська',
              building: '248 м',
            },
          ],
        },
        {
          name: 'с. Кельменці',
          serviceCenters: [
            {
              serviceId: 141,
              name: 'ТСЦ МВС № 7345',
              street: 'вул. О.Паламаря',
              building: '9 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернігівська область',
      cities: [
        {
          name: 'м. Чернігів',
          serviceCenters: [
            {
              serviceId: 142,
              name: 'ТСЦ МВС № 7441',
              street: 'Шевченка',
              building: '162а',
            },
          ],
        },
        {
          name: 'м. Прилуки',
          serviceCenters: [
            {
              serviceId: 143,
              name: 'ТСЦ МВС № 7442',
              street: 'вул. Індустріальна',
              building: '6',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Київ',
      cities: [
        {
          name: 'м. Київ',
          serviceCenters: [
            {
              serviceId: 146,
              name: 'ТСЦ МВС № 8041',
              street: 'вул. Перемоги',
              building: '20 ',
            },
            {
              serviceId: 147,
              name: 'ТСЦ МВС № 8042',
              street: 'вул. Мрії',
              building: '19',
            },
            {
              serviceId: 154,
              name: 'ТСЦ МВС № 8049',
              street: 'вул. Павла Усенка',
              building: '8 ',
            },
          ],
        },
      ],
    },
  ],
  45: [
    {
      name: 'Київська область',
      cities: [
        {
          name: 'м. Біла Церква',
          serviceCenters: [
            {
              serviceId: 2,
              name: 'ТСЦ МВС № 3242',
              street: ' вул. Сухоярська',
              building: '20',
            },
          ],
        },
        {
          name: 'с. Софіївська Борщагівка',
          serviceCenters: [
            {
              serviceId: 6,
              name: 'ТСЦ МВС № 3246',
              street: 'вул. Малишко',
              building: '2',
            },
          ],
        },
        {
          name: 'м. Переяслав',
          serviceCenters: [
            {
              serviceId: 8,
              name: 'ТСЦ МВС № 3248 ',
              street: 'вул. Ново-Київське шосе',
              building: '46 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Вінницька область',
      cities: [
        {
          name: 'м. Вінниця',
          serviceCenters: [
            {
              serviceId: 11,
              name: 'ТСЦ МВС № 0541',
              street: 'вул. Ботанічна',
              building: '24 ',
            },
          ],
        },
        {
          name: 'м. Гайсин',
          serviceCenters: [
            {
              serviceId: 12,
              name: 'ТСЦ МВС № 0542',
              street: 'вул. Південна',
              building: '67 ',
            },
          ],
        },
        {
          name: 'м. Шаргород',
          serviceCenters: [
            {
              serviceId: 13,
              name: 'ТСЦ МВС № 0543',
              street: 'вул. Героїв Майдану',
              building: '224 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Волинська область',
      cities: [
        {
          name: 'с. Луцький р-н, с. Струмівка',
          serviceCenters: [
            {
              serviceId: 17,
              name: 'ТСЦ МВС № 0741',
              street: 'вул. Рівненська',
              building: '74 ',
            },
          ],
        },
        {
          name: 'м. Ковель',
          serviceCenters: [
            {
              serviceId: 18,
              name: 'ТСЦ МВС № 0742',
              street: 'вул. Володимирська',
              building: '133 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Дніпропетровська область',
      cities: [
        {
          name: 'м. Дніпро',
          serviceCenters: [
            {
              serviceId: 22,
              name: 'ТСЦ МВС № 1242',
              street: 'пр. Праці',
              building: '16 ',
            },
            {
              serviceId: 29,
              name: 'ТСЦ МВС № 1249',
              street: 'пр-т. Слобожанський',
              building: '31 д',
            },
          ],
        },
        {
          name: 'м. Покров',
          serviceCenters: [
            {
              serviceId: 25,
              name: 'ТСЦ МВС № 1245',
              street: 'вул. Уральська',
              building: '1 ',
            },
          ],
        },
        {
          name: 'м. Кривий Ріг',
          serviceCenters: [
            {
              serviceId: 28,
              name: 'ТСЦ МВС № 1248',
              street: 'вул. Стрельнікова',
              building: '15 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Житомирська область',
      cities: [
        {
          name: 'с. Довжик',
          serviceCenters: [
            {
              serviceId: 32,
              name: 'ТСЦ МВС № 1841',
              street: 'вул. Богунська',
              building: '1 а',
            },
          ],
        },
        {
          name: 'м. Коростень',
          serviceCenters: [
            {
              serviceId: 34,
              name: 'ТСЦ МВС № 1843',
              street: 'вул. Сергія Кемського',
              building: '3 ',
            },
          ],
        },
        {
          name: 'м. Звягель',
          serviceCenters: [
            {
              serviceId: 35,
              name: 'ТСЦ МВС № 1844',
              street: 'вул. Відродження',
              building: '2 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Закарпатська область',
      cities: [
        {
          name: 'м. Ужгород',
          serviceCenters: [
            {
              serviceId: 37,
              name: 'ТСЦ МВС № 2141',
              street: 'вул. О. Кошового',
              building: '4 ',
            },
          ],
        },
        {
          name: 'с. Мукачівський р-н., с. Клячаново',
          serviceCenters: [
            {
              serviceId: 38,
              name: 'ТСЦ МВС № 2142',
              street: 'вул. Автомобілістів',
              building: '28 ',
            },
          ],
        },
        {
          name: 'м. Хуст',
          serviceCenters: [
            {
              serviceId: 40,
              name: 'ТСЦ МВС № 2144',
              street: 'вул. Окружна',
              building: '34 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Запоріжжя та Запорізька територіальна громада',
      cities: [
        {
          name: 'м. Запоріжжя',
          serviceCenters: [
            {
              serviceId: 42,
              name: 'ТСЦ МВС № 2341',
              street: 'вул. Олександрівська',
              building: '84 ',
            },
            {
              serviceId: 43,
              name: 'ТСЦ МВС № 2342',
              street: 'вул. Бабури козака',
              building: '9 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Івано-Франківська область',
      cities: [
        {
          name: 'м. Івано-Франківськ',
          serviceCenters: [
            {
              serviceId: 46,
              name: 'ТСЦ МВС № 2641',
              street: 'вул. Коновальця',
              building: '229 у',
            },
          ],
        },
        {
          name: 'м. Коломия',
          serviceCenters: [
            {
              serviceId: 48,
              name: 'ТСЦ МВС № 2643',
              street: 'вул. Симоненка',
              building: '2 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Кіровоградська область',
      cities: [
        {
          name: 'м. Кропивницький',
          serviceCenters: [
            {
              serviceId: 60,
              name: 'ТСЦ МВС № 3541',
              street: 'пр-т. Інженерів',
              building: '9/92 ',
            },
          ],
        },
        {
          name: 'м. Олександрія',
          serviceCenters: [
            {
              serviceId: 61,
              name: 'ТСЦ МВС № 3542',
              street: 'пр-т. Будівельників',
              building: '38 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Львівська область',
      cities: [
        {
          name: 'м. Львів',
          serviceCenters: [
            {
              serviceId: 65,
              name: 'ТСЦ МВС № 4641',
              street: 'вул. Д. Апостола',
              building: '11 ',
            },
            {
              serviceId: 74,
              name: 'ТСЦ МВС № 4651',
              street: 'вул. Богданівська',
              building: '44 ',
            },
          ],
        },
        {
          name: 'м. Самбір',
          serviceCenters: [
            {
              serviceId: 68,
              name: 'ТСЦ МВС № 4644',
              street: 'вул. Східна',
              building: '216 ',
            },
          ],
        },
        {
          name: 'м. Стрий',
          serviceCenters: [
            {
              serviceId: 69,
              name: 'ТСЦ МВС № 4645 ',
              street: 'вул. Багряного',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Шептицький',
          serviceCenters: [
            {
              serviceId: 70,
              name: 'ТСЦ МВС № 4646',
              street: 'вул. Корольова',
              building: '14 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Миколаївська область',
      cities: [
        {
          name: 'м. Миколаїв',
          serviceCenters: [
            {
              serviceId: 75,
              name: 'ТСЦ МВС № 4841 ',
              street: 'провулок. Транспортний',
              building: '1а/1',
            },
          ],
        },
        {
          name: 'м. Первомайськ',
          serviceCenters: [
            {
              serviceId: 76,
              name: 'ТСЦ МВС № 4842',
              street: 'вул. Вознесенська',
              building: '73 б',
            },
          ],
        },
        {
          name: 'м. Вознесенськ',
          serviceCenters: [
            {
              serviceId: 78,
              name: 'ТСЦ МВС № 4844',
              street: 'вул. Молодогвардійська',
              building: '45 ',
            },
          ],
        },
        {
          name: 'м. Новий Буг',
          serviceCenters: [
            {
              serviceId: 79,
              name: 'ТСЦ МВС № 4845',
              street: 'вул. Площа Свободи',
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Одеська область',
      cities: [
        {
          name: 'м. Білгород-Дністровський',
          serviceCenters: [
            {
              serviceId: 82,
              name: 'ТСЦ МВС № 5143',
              street: 'вул. Ігоря Іванова',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Ізмаїл',
          serviceCenters: [
            {
              serviceId: 83,
              name: 'ТСЦ МВС № 5144',
              street: 'пр-т. Незалежності',
              building: '362 ',
            },
          ],
        },
        {
          name: 'м. Подільськ',
          serviceCenters: [
            {
              serviceId: 87,
              name: 'ТСЦ МВС № 5149',
              street: 'вул. Соборна',
              building: '202 б',
            },
          ],
        },
        {
          name: 'м. Одеса',
          serviceCenters: [
            {
              serviceId: 91,
              name: 'ТСЦ МВС № 5154',
              street: 'вул. Аеропортівська',
              building: '27/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Полтавська область',
      cities: [
        {
          name: 'с. Розсошенці',
          serviceCenters: [
            {
              serviceId: 92,
              name: 'ТСЦ МВС № 5341',
              street: 'вул. Кременчуцька',
              building: '2 в',
            },
          ],
        },
        {
          name: 'м. Кременчук',
          serviceCenters: [
            {
              serviceId: 93,
              name: 'ТСЦ МВС № 5342',
              street: 'вул. Покровська',
              building: '14',
            },
          ],
        },
      ],
    },
    {
      name: 'Рівненська область',
      cities: [
        {
          name: 'м. Рівне',
          serviceCenters: [
            {
              serviceId: 100,
              name: 'ТСЦ МВС № 5641',
              street: 'вул. Київська',
              building: '108 б',
            },
          ],
        },
        {
          name: 'м. Сарни',
          serviceCenters: [
            {
              serviceId: 102,
              name: 'ТСЦ МВС № 5643',
              street: 'вул. Костопільська',
              building: '100 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Сумська область',
      cities: [
        {
          name: 'м. Охтирка',
          serviceCenters: [
            {
              serviceId: 106,
              name: 'ТСЦ МВС № 5943',
              street: 'вул. Київська',
              building: '164 в',
            },
          ],
        },
        {
          name: 'м. Суми',
          serviceCenters: [
            {
              serviceId: 109,
              name: 'ТСЦ МВС № 5946',
              street: 'вул. Білопільський шлях',
              building: '18/1',
            },
          ],
        },
        {
          name: 'м. Конотоп',
          serviceCenters: [
            {
              serviceId: 155,
              name: 'ТСЦ МВС № 5942  вул Вирівська, 19 А (лише практичний іспит)',
              street: 'Вирівська',
              building: '19 А',
            },
          ],
        },
      ],
    },
    {
      name: 'Тернопільська область',
      cities: [
        {
          name: 'с. Підгородне',
          serviceCenters: [
            {
              serviceId: 110,
              name: 'ТСЦ МВС № 6141',
              street: 'вул. Стрийська',
              building: '5 ',
            },
          ],
        },
        {
          name: 'м. Кременець',
          serviceCenters: [
            {
              serviceId: 112,
              name: 'ТСЦ МВС № 6143',
              street: 'вул. Шевченка',
              building: '67 ',
            },
          ],
        },
        {
          name: 'с. Угринь',
          serviceCenters: [
            {
              serviceId: 114,
              name: 'ТСЦ МВС № 6145',
              street: "вул. Об'їзна",
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Харків та Харківська територіальна громада',
      cities: [
        {
          name: 'м. Харків',
          serviceCenters: [
            {
              serviceId: 115,
              name: 'ТСЦ МВС № 6341',
              street: 'вул. Шевченка',
              building: '26 ',
            },
            {
              serviceId: 116,
              name: 'ТСЦ МВС № 6342',
              street: 'вул. Станція метро «Київська» вестибюль №1',
              building: ' ',
            },
          ],
        },
      ],
    },
    {
      name: 'Харківська область',
      cities: [
        {
          name: 'смт. Пісочин',
          serviceCenters: [
            {
              serviceId: 124,
              name: 'ТСЦ МВС № 6350',
              street: 'вул. Транспортна',
              building: '116',
            },
          ],
        },
      ],
    },
    {
      name: 'Хмельницька область',
      cities: [
        {
          name: 'м. Хмельницький',
          serviceCenters: [
            {
              serviceId: 127,
              name: 'ТСЦ МВС № 6841',
              street: 'вул. Західно-Окружна,',
              building: '11/1',
            },
          ],
        },
        {
          name: "м. Кам'янець-Подільський",
          serviceCenters: [
            {
              serviceId: 129,
              name: 'ТСЦ МВС № 6843',
              street: 'пр-т. Грушевського',
              building: '45323 ',
            },
          ],
        },
        {
          name: 'м. Старокостянтинів',
          serviceCenters: [
            {
              serviceId: 130,
              name: 'ТСЦ МВС № 6844',
              street: 'вул. Чайковського',
              building: '1 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Черкаська область',
      cities: [
        {
          name: 'м. Черкаси',
          serviceCenters: [
            {
              serviceId: 132,
              name: 'ТСЦ МВС № 7141',
              street: 'вул. Лесі Українки',
              building: '21 ',
            },
          ],
        },
        {
          name: 'с. Уманський р-н., с/рада Родниківська',
          serviceCenters: [
            {
              serviceId: 133,
              name: 'ТСЦ МВС № 7142',
              street: 'вул. автодорога Київ-Одеса  203 км 800 м',
              building: 'б/н ',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернівецька область',
      cities: [
        {
          name: 'м. Чернівці',
          serviceCenters: [
            {
              serviceId: 137,
              name: 'ТСЦ МВС № 7341',
              street: 'вул. Руська',
              building: '248 м',
            },
          ],
        },
        {
          name: 'с. Кельменці',
          serviceCenters: [
            {
              serviceId: 141,
              name: 'ТСЦ МВС № 7345',
              street: 'вул. О.Паламаря',
              building: '9 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернігівська область',
      cities: [
        {
          name: 'м. Чернігів',
          serviceCenters: [
            {
              serviceId: 142,
              name: 'ТСЦ МВС № 7441',
              street: 'Шевченка',
              building: '162а',
            },
          ],
        },
        {
          name: 'м. Прилуки',
          serviceCenters: [
            {
              serviceId: 143,
              name: 'ТСЦ МВС № 7442',
              street: 'вул. Індустріальна',
              building: '6',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Київ',
      cities: [
        {
          name: 'м. Київ',
          serviceCenters: [
            {
              serviceId: 146,
              name: 'ТСЦ МВС № 8041',
              street: 'вул. Перемоги',
              building: '20 ',
            },
            {
              serviceId: 147,
              name: 'ТСЦ МВС № 8042',
              street: 'вул. Мрії',
              building: '19',
            },
            {
              serviceId: 154,
              name: 'ТСЦ МВС № 8049',
              street: 'вул. Павла Усенка',
              building: '8 ',
            },
          ],
        },
      ],
    },
  ],
  44: [
    {
      name: 'Київська область',
      cities: [
        {
          name: 'м. Біла Церква',
          serviceCenters: [
            {
              serviceId: 2,
              name: 'ТСЦ МВС № 3242',
              street: ' вул. Сухоярська',
              building: '20',
            },
          ],
        },
        {
          name: 'м. Бровари',
          serviceCenters: [
            {
              serviceId: 3,
              name: 'ТСЦ МВС № 3243',
              street: 'вул. Броварської Сотні',
              building: '4А',
            },
          ],
        },
        {
          name: 'с. Софіївська Борщагівка',
          serviceCenters: [
            {
              serviceId: 6,
              name: 'ТСЦ МВС № 3246',
              street: 'вул. Малишко',
              building: '2',
            },
          ],
        },
        {
          name: 'м. Переяслав',
          serviceCenters: [
            {
              serviceId: 8,
              name: 'ТСЦ МВС № 3248 ',
              street: 'вул. Ново-Київське шосе',
              building: '46 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Вінницька область',
      cities: [
        {
          name: 'м. Вінниця',
          serviceCenters: [
            {
              serviceId: 11,
              name: 'ТСЦ МВС № 0541',
              street: 'вул. Ботанічна',
              building: '24 ',
            },
          ],
        },
        {
          name: 'м. Гайсин',
          serviceCenters: [
            {
              serviceId: 12,
              name: 'ТСЦ МВС № 0542',
              street: 'вул. Південна',
              building: '67 ',
            },
          ],
        },
        {
          name: 'м. Шаргород',
          serviceCenters: [
            {
              serviceId: 13,
              name: 'ТСЦ МВС № 0543',
              street: 'вул. Героїв Майдану',
              building: '224 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Волинська область',
      cities: [
        {
          name: 'с. Луцький р-н, с. Струмівка',
          serviceCenters: [
            {
              serviceId: 17,
              name: 'ТСЦ МВС № 0741',
              street: 'вул. Рівненська',
              building: '74 ',
            },
          ],
        },
        {
          name: 'м. Ковель',
          serviceCenters: [
            {
              serviceId: 18,
              name: 'ТСЦ МВС № 0742',
              street: 'вул. Володимирська',
              building: '133 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Дніпропетровська область',
      cities: [
        {
          name: 'м. Дніпро',
          serviceCenters: [
            {
              serviceId: 22,
              name: 'ТСЦ МВС № 1242',
              street: 'пр. Праці',
              building: '16 ',
            },
            {
              serviceId: 29,
              name: 'ТСЦ МВС № 1249',
              street: 'пр-т. Слобожанський',
              building: '31 д',
            },
          ],
        },
        {
          name: 'м. Покров',
          serviceCenters: [
            {
              serviceId: 25,
              name: 'ТСЦ МВС № 1245',
              street: 'вул. Уральська',
              building: '1 ',
            },
          ],
        },
        {
          name: 'м. Павлоград',
          serviceCenters: [
            {
              serviceId: 27,
              name: 'ТСЦ МВС № 1247',
              street: 'вул. Дніпровська',
              building: '334 а',
            },
          ],
        },
        {
          name: 'м. Кривий Ріг',
          serviceCenters: [
            {
              serviceId: 28,
              name: 'ТСЦ МВС № 1248',
              street: 'вул. Стрельнікова',
              building: '15 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Житомирська область',
      cities: [
        {
          name: 'с. Довжик',
          serviceCenters: [
            {
              serviceId: 32,
              name: 'ТСЦ МВС № 1841',
              street: 'вул. Богунська',
              building: '1 а',
            },
          ],
        },
        {
          name: 'м. Коростень',
          serviceCenters: [
            {
              serviceId: 34,
              name: 'ТСЦ МВС № 1843',
              street: 'вул. Сергія Кемського',
              building: '3 ',
            },
          ],
        },
        {
          name: 'м. Звягель',
          serviceCenters: [
            {
              serviceId: 35,
              name: 'ТСЦ МВС № 1844',
              street: 'вул. Відродження',
              building: '2 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Закарпатська область',
      cities: [
        {
          name: 'м. Ужгород',
          serviceCenters: [
            {
              serviceId: 37,
              name: 'ТСЦ МВС № 2141',
              street: 'вул. О. Кошового',
              building: '4 ',
            },
          ],
        },
        {
          name: 'с. Мукачівський р-н., с. Клячаново',
          serviceCenters: [
            {
              serviceId: 38,
              name: 'ТСЦ МВС № 2142',
              street: 'вул. Автомобілістів',
              building: '28 ',
            },
          ],
        },
        {
          name: 'м. Хуст',
          serviceCenters: [
            {
              serviceId: 40,
              name: 'ТСЦ МВС № 2144',
              street: 'вул. Окружна',
              building: '34 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Запоріжжя та Запорізька територіальна громада',
      cities: [
        {
          name: 'м. Запоріжжя',
          serviceCenters: [
            {
              serviceId: 42,
              name: 'ТСЦ МВС № 2341',
              street: 'вул. Олександрівська',
              building: '84 ',
            },
            {
              serviceId: 43,
              name: 'ТСЦ МВС № 2342',
              street: 'вул. Бабури козака',
              building: '9 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Івано-Франківська область',
      cities: [
        {
          name: 'м. Івано-Франківськ',
          serviceCenters: [
            {
              serviceId: 46,
              name: 'ТСЦ МВС № 2641',
              street: 'вул. Коновальця',
              building: '229 у',
            },
          ],
        },
        {
          name: 'м. Коломия',
          serviceCenters: [
            {
              serviceId: 48,
              name: 'ТСЦ МВС № 2643',
              street: 'вул. Симоненка',
              building: '2 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Кіровоградська область',
      cities: [
        {
          name: 'м. Кропивницький',
          serviceCenters: [
            {
              serviceId: 60,
              name: 'ТСЦ МВС № 3541',
              street: 'пр-т. Інженерів',
              building: '9/92 ',
            },
          ],
        },
        {
          name: 'м. Олександрія',
          serviceCenters: [
            {
              serviceId: 61,
              name: 'ТСЦ МВС № 3542',
              street: 'пр-т. Будівельників',
              building: '38 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Львівська область',
      cities: [
        {
          name: 'м. Львів',
          serviceCenters: [
            {
              serviceId: 65,
              name: 'ТСЦ МВС № 4641',
              street: 'вул. Д. Апостола',
              building: '11 ',
            },
            {
              serviceId: 74,
              name: 'ТСЦ МВС № 4651',
              street: 'вул. Богданівська',
              building: '44 ',
            },
          ],
        },
        {
          name: 'м. Самбір',
          serviceCenters: [
            {
              serviceId: 68,
              name: 'ТСЦ МВС № 4644',
              street: 'вул. Східна',
              building: '216 ',
            },
          ],
        },
        {
          name: 'м. Стрий',
          serviceCenters: [
            {
              serviceId: 69,
              name: 'ТСЦ МВС № 4645 ',
              street: 'вул. Багряного',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Шептицький',
          serviceCenters: [
            {
              serviceId: 70,
              name: 'ТСЦ МВС № 4646',
              street: 'вул. Корольова',
              building: '14 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Миколаївська область',
      cities: [
        {
          name: 'м. Миколаїв',
          serviceCenters: [
            {
              serviceId: 75,
              name: 'ТСЦ МВС № 4841 ',
              street: 'провулок. Транспортний',
              building: '1а/1',
            },
          ],
        },
        {
          name: 'м. Первомайськ',
          serviceCenters: [
            {
              serviceId: 76,
              name: 'ТСЦ МВС № 4842',
              street: 'вул. Вознесенська',
              building: '73 б',
            },
          ],
        },
        {
          name: 'м. Вознесенськ',
          serviceCenters: [
            {
              serviceId: 78,
              name: 'ТСЦ МВС № 4844',
              street: 'вул. Молодогвардійська',
              building: '45 ',
            },
          ],
        },
        {
          name: 'м. Новий Буг',
          serviceCenters: [
            {
              serviceId: 79,
              name: 'ТСЦ МВС № 4845',
              street: 'вул. Площа Свободи',
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Одеська область',
      cities: [
        {
          name: 'м. Білгород-Дністровський',
          serviceCenters: [
            {
              serviceId: 82,
              name: 'ТСЦ МВС № 5143',
              street: 'вул. Ігоря Іванова',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Ізмаїл',
          serviceCenters: [
            {
              serviceId: 83,
              name: 'ТСЦ МВС № 5144',
              street: 'пр-т. Незалежності',
              building: '362 ',
            },
          ],
        },
        {
          name: 'м. Подільськ',
          serviceCenters: [
            {
              serviceId: 87,
              name: 'ТСЦ МВС № 5149',
              street: 'вул. Соборна',
              building: '202 б',
            },
          ],
        },
        {
          name: 'м. Одеса',
          serviceCenters: [
            {
              serviceId: 91,
              name: 'ТСЦ МВС № 5154',
              street: 'вул. Аеропортівська',
              building: '27/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Полтавська область',
      cities: [
        {
          name: 'с. Розсошенці',
          serviceCenters: [
            {
              serviceId: 92,
              name: 'ТСЦ МВС № 5341',
              street: 'вул. Кременчуцька',
              building: '2 в',
            },
          ],
        },
        {
          name: 'м. Кременчук',
          serviceCenters: [
            {
              serviceId: 93,
              name: 'ТСЦ МВС № 5342',
              street: 'вул. Покровська',
              building: '14',
            },
          ],
        },
        {
          name: 'м. Лубни',
          serviceCenters: [
            {
              serviceId: 94,
              name: 'ТСЦ МВС № 5343',
              street: 'пр-т. Володимирський',
              building: '178 б',
            },
          ],
        },
      ],
    },
    {
      name: 'Рівненська область',
      cities: [
        {
          name: 'м. Рівне',
          serviceCenters: [
            {
              serviceId: 100,
              name: 'ТСЦ МВС № 5641',
              street: 'вул. Київська',
              building: '108 б',
            },
          ],
        },
        {
          name: 'м. Сарни',
          serviceCenters: [
            {
              serviceId: 102,
              name: 'ТСЦ МВС № 5643',
              street: 'вул. Костопільська',
              building: '100 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Сумська область',
      cities: [
        {
          name: 'м. Охтирка',
          serviceCenters: [
            {
              serviceId: 106,
              name: 'ТСЦ МВС № 5943',
              street: 'вул. Київська',
              building: '164 в',
            },
          ],
        },
        {
          name: 'м. Суми',
          serviceCenters: [
            {
              serviceId: 109,
              name: 'ТСЦ МВС № 5946',
              street: 'вул. Білопільський шлях',
              building: '18/1',
            },
          ],
        },
        {
          name: 'м. Конотоп',
          serviceCenters: [
            {
              serviceId: 155,
              name: 'ТСЦ МВС № 5942  вул Вирівська, 19 А (лише практичний іспит)',
              street: 'Вирівська',
              building: '19 А',
            },
          ],
        },
      ],
    },
    {
      name: 'Тернопільська область',
      cities: [
        {
          name: 'с. Підгородне',
          serviceCenters: [
            {
              serviceId: 110,
              name: 'ТСЦ МВС № 6141',
              street: 'вул. Стрийська',
              building: '5 ',
            },
          ],
        },
        {
          name: 'м. Кременець',
          serviceCenters: [
            {
              serviceId: 112,
              name: 'ТСЦ МВС № 6143',
              street: 'вул. Шевченка',
              building: '67 ',
            },
          ],
        },
        {
          name: 'с. Угринь',
          serviceCenters: [
            {
              serviceId: 114,
              name: 'ТСЦ МВС № 6145',
              street: "вул. Об'їзна",
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Харків та Харківська територіальна громада',
      cities: [
        {
          name: 'м. Харків',
          serviceCenters: [
            {
              serviceId: 115,
              name: 'ТСЦ МВС № 6341',
              street: 'вул. Шевченка',
              building: '26 ',
            },
            {
              serviceId: 116,
              name: 'ТСЦ МВС № 6342',
              street: 'вул. Станція метро «Київська» вестибюль №1',
              building: ' ',
            },
          ],
        },
      ],
    },
    {
      name: 'Харківська область',
      cities: [
        {
          name: 'смт. Пісочин',
          serviceCenters: [
            {
              serviceId: 124,
              name: 'ТСЦ МВС № 6350',
              street: 'вул. Транспортна',
              building: '116',
            },
          ],
        },
      ],
    },
    {
      name: 'Хмельницька область',
      cities: [
        {
          name: 'м. Хмельницький',
          serviceCenters: [
            {
              serviceId: 127,
              name: 'ТСЦ МВС № 6841',
              street: 'вул. Західно-Окружна,',
              building: '11/1',
            },
          ],
        },
        {
          name: "м. Кам'янець-Подільський",
          serviceCenters: [
            {
              serviceId: 129,
              name: 'ТСЦ МВС № 6843',
              street: 'пр-т. Грушевського',
              building: '45323 ',
            },
          ],
        },
        {
          name: 'м. Старокостянтинів',
          serviceCenters: [
            {
              serviceId: 130,
              name: 'ТСЦ МВС № 6844',
              street: 'вул. Чайковського',
              building: '1 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Черкаська область',
      cities: [
        {
          name: 'м. Черкаси',
          serviceCenters: [
            {
              serviceId: 132,
              name: 'ТСЦ МВС № 7141',
              street: 'вул. Лесі Українки',
              building: '21 ',
            },
          ],
        },
        {
          name: 'с. Уманський р-н., с/рада Родниківська',
          serviceCenters: [
            {
              serviceId: 133,
              name: 'ТСЦ МВС № 7142',
              street: 'вул. автодорога Київ-Одеса  203 км 800 м',
              building: 'б/н ',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернівецька область',
      cities: [
        {
          name: 'м. Чернівці',
          serviceCenters: [
            {
              serviceId: 137,
              name: 'ТСЦ МВС № 7341',
              street: 'вул. Руська',
              building: '248 м',
            },
          ],
        },
        {
          name: 'с. Кельменці',
          serviceCenters: [
            {
              serviceId: 141,
              name: 'ТСЦ МВС № 7345',
              street: 'вул. О.Паламаря',
              building: '9 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернігівська область',
      cities: [
        {
          name: 'м. Чернігів',
          serviceCenters: [
            {
              serviceId: 142,
              name: 'ТСЦ МВС № 7441',
              street: 'Шевченка',
              building: '162а',
            },
          ],
        },
        {
          name: 'м. Прилуки',
          serviceCenters: [
            {
              serviceId: 143,
              name: 'ТСЦ МВС № 7442',
              street: 'вул. Індустріальна',
              building: '6',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Київ',
      cities: [
        {
          name: 'м. Київ',
          serviceCenters: [
            {
              serviceId: 146,
              name: 'ТСЦ МВС № 8041',
              street: 'вул. Перемоги',
              building: '20 ',
            },
            {
              serviceId: 147,
              name: 'ТСЦ МВС № 8042',
              street: 'вул. Мрії',
              building: '19',
            },
            {
              serviceId: 154,
              name: 'ТСЦ МВС № 8049',
              street: 'вул. Павла Усенка',
              building: '8 ',
            },
          ],
        },
      ],
    },
  ],
  17: [
    {
      name: 'Київська область',
      cities: [
        {
          name: 'м. Баришівка',
          serviceCenters: [
            {
              serviceId: 1,
              name: 'ТСЦ МВС № 3241',
              street: 'вул. Польова',
              building: '3 ',
            },
          ],
        },
        {
          name: 'м. Біла Церква',
          serviceCenters: [
            {
              serviceId: 2,
              name: 'ТСЦ МВС № 3242',
              street: ' вул. Сухоярська',
              building: '20',
            },
          ],
        },
        {
          name: 'м. Бровари',
          serviceCenters: [
            {
              serviceId: 3,
              name: 'ТСЦ МВС № 3243',
              street: 'вул. Броварської Сотні',
              building: '4А',
            },
          ],
        },
        {
          name: 'м. Обухів',
          serviceCenters: [
            {
              serviceId: 4,
              name: 'ТСЦ МВС № 3244 ',
              street: 'вул. Каштанова',
              building: '23 ',
            },
          ],
        },
        {
          name: 'м. Вишгород',
          serviceCenters: [
            {
              serviceId: 5,
              name: 'ТСЦ МВС № 3245',
              street: 'Кургузова',
              building: '7-А',
            },
          ],
        },
        {
          name: 'с. Софіївська Борщагівка',
          serviceCenters: [
            {
              serviceId: 6,
              name: 'ТСЦ МВС № 3246',
              street: 'вул. Малишко',
              building: '2',
            },
          ],
        },
        {
          name: 'м. Буча',
          serviceCenters: [
            {
              serviceId: 7,
              name: 'ТСЦ МВС № 3247 ',
              street: 'вул. Депутатська',
              building: '1 в',
            },
          ],
        },
        {
          name: 'м. Переяслав',
          serviceCenters: [
            {
              serviceId: 8,
              name: 'ТСЦ МВС № 3248 ',
              street: 'вул. Ново-Київське шосе',
              building: '46 ',
            },
          ],
        },
        {
          name: 'с. Білоцерківський район, с. Винарівка',
          serviceCenters: [
            {
              serviceId: 9,
              name: 'ТСЦ МВС № 3249',
              street: 'вул. Лісова',
              building: '39 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Вінницька область',
      cities: [
        {
          name: 'м. Вінниця',
          serviceCenters: [
            {
              serviceId: 11,
              name: 'ТСЦ МВС № 0541',
              street: 'вул. Ботанічна',
              building: '24 ',
            },
            {
              serviceId: 16,
              name: 'ТСЦ МВС № 0546',
              street: 'вул. Брацлавська',
              building: '85 ',
            },
          ],
        },
        {
          name: 'м. Гайсин',
          serviceCenters: [
            {
              serviceId: 12,
              name: 'ТСЦ МВС № 0542',
              street: 'вул. Південна',
              building: '67 ',
            },
          ],
        },
        {
          name: 'м. Шаргород',
          serviceCenters: [
            {
              serviceId: 13,
              name: 'ТСЦ МВС № 0543',
              street: 'вул. Героїв Майдану',
              building: '224 ',
            },
          ],
        },
        {
          name: 'м. Тульчин',
          serviceCenters: [
            {
              serviceId: 14,
              name: 'ТСЦ МВС № 0544',
              street: 'вул. Леонтовича',
              building: '55 а',
            },
          ],
        },
        {
          name: 'с. Великий Митник',
          serviceCenters: [
            {
              serviceId: 15,
              name: 'ТСЦ МВС № 0545',
              street: 'вул. 57км+1000',
              building: 'урочище буд. 2',
            },
          ],
        },
      ],
    },
    {
      name: 'Волинська область',
      cities: [
        {
          name: 'с. Луцький р-н, с. Струмівка',
          serviceCenters: [
            {
              serviceId: 17,
              name: 'ТСЦ МВС № 0741',
              street: 'вул. Рівненська',
              building: '74 ',
            },
          ],
        },
        {
          name: 'м. Ковель',
          serviceCenters: [
            {
              serviceId: 18,
              name: 'ТСЦ МВС № 0742',
              street: 'вул. Володимирська',
              building: '133 ',
            },
          ],
        },
        {
          name: 'м. Камінь-Каширський',
          serviceCenters: [
            {
              serviceId: 19,
              name: 'ТСЦ МВС № 0743',
              street: 'вул. Магдебурзького права',
              building: '42 ',
            },
          ],
        },
        {
          name: 'м. Нововолинськ',
          serviceCenters: [
            {
              serviceId: 20,
              name: 'ТСЦ МВС № 0744',
              street: 'вул. Сокальська',
              building: '1 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Дніпропетровська область',
      cities: [
        {
          name: 'м. Дніпро',
          serviceCenters: [
            {
              serviceId: 21,
              name: 'ТСЦ МВС № 1241',
              street: 'вул. Сонячна Набережна',
              building: '130 ',
            },
            {
              serviceId: 22,
              name: 'ТСЦ МВС № 1242',
              street: 'пр. Праці',
              building: '16 ',
            },
            {
              serviceId: 29,
              name: 'ТСЦ МВС № 1249',
              street: 'пр-т. Слобожанський',
              building: '31 д',
            },
          ],
        },
        {
          name: 'м. Кривий Ріг',
          serviceCenters: [
            {
              serviceId: 23,
              name: 'ТСЦ МВС № 1243',
              street: 'вулиця Генерала Радієвського',
              building: '34А',
            },
            {
              serviceId: 28,
              name: 'ТСЦ МВС № 1248',
              street: 'вул. Стрельнікова',
              building: '15 ',
            },
          ],
        },
        {
          name: "м. Кам'янське",
          serviceCenters: [
            {
              serviceId: 24,
              name: 'ТСЦ МВС № 1244',
              street: 'вул. Фіалкова',
              building: '79 ',
            },
          ],
        },
        {
          name: 'м. Покров',
          serviceCenters: [
            {
              serviceId: 25,
              name: 'ТСЦ МВС № 1245',
              street: 'вул. Уральська',
              building: '1 ',
            },
          ],
        },
        {
          name: 'м. Самар',
          serviceCenters: [
            {
              serviceId: 26,
              name: 'ТСЦ МВС № 1246',
              street: 'вул. Спаська',
              building: '7',
            },
          ],
        },
        {
          name: 'м. Павлоград',
          serviceCenters: [
            {
              serviceId: 27,
              name: 'ТСЦ МВС № 1247',
              street: 'вул. Дніпровська',
              building: '334 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Донецька область',
      cities: [
        {
          name: 'с. Олександрівка',
          serviceCenters: [
            {
              serviceId: 30,
              name: 'ТСЦ МВС № 1451',
              street: 'вул. Центральна',
              building: '18',
            },
          ],
        },
      ],
    },
    {
      name: 'Житомирська область',
      cities: [
        {
          name: 'с. Довжик',
          serviceCenters: [
            {
              serviceId: 32,
              name: 'ТСЦ МВС № 1841',
              street: 'вул. Богунська',
              building: '1 а',
            },
          ],
        },
        {
          name: 'м. Бердичів',
          serviceCenters: [
            {
              serviceId: 33,
              name: 'ТСЦ МВС № 1842',
              street: 'вул. Шкіряників',
              building: '14 ',
            },
          ],
        },
        {
          name: 'м. Коростень',
          serviceCenters: [
            {
              serviceId: 34,
              name: 'ТСЦ МВС № 1843',
              street: 'вул. Сергія Кемського',
              building: '3 ',
            },
          ],
        },
        {
          name: 'м. Звягель',
          serviceCenters: [
            {
              serviceId: 35,
              name: 'ТСЦ МВС № 1844',
              street: 'вул. Відродження',
              building: '2 ',
            },
          ],
        },
        {
          name: 'м. Радомишль',
          serviceCenters: [
            {
              serviceId: 36,
              name: 'ТСЦ МВС № 1845',
              street: 'вул. Міськради',
              building: '12 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Закарпатська область',
      cities: [
        {
          name: 'м. Ужгород',
          serviceCenters: [
            {
              serviceId: 37,
              name: 'ТСЦ МВС № 2141',
              street: 'вул. О. Кошового',
              building: '4 ',
            },
          ],
        },
        {
          name: 'с. Мукачівський р-н., с. Клячаново',
          serviceCenters: [
            {
              serviceId: 38,
              name: 'ТСЦ МВС № 2142',
              street: 'вул. Автомобілістів',
              building: '28 ',
            },
          ],
        },
        {
          name: 'м. Тячів',
          serviceCenters: [
            {
              serviceId: 39,
              name: 'ТСЦ МВС № 2143',
              street: 'вул. Промислова',
              building: '6 а',
            },
          ],
        },
        {
          name: 'м. Хуст',
          serviceCenters: [
            {
              serviceId: 40,
              name: 'ТСЦ МВС № 2144',
              street: 'вул. Окружна',
              building: '34 ',
            },
          ],
        },
        {
          name: 'с. Берегівський р-н., с. Камянське',
          serviceCenters: [
            {
              serviceId: 41,
              name: 'ТСЦ МВС № 2146',
              street: 'вул. Українська',
              building: '1',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Запоріжжя та Запорізька територіальна громада',
      cities: [
        {
          name: 'м. Запоріжжя',
          serviceCenters: [
            {
              serviceId: 42,
              name: 'ТСЦ МВС № 2341',
              street: 'вул. Олександрівська',
              building: '84 ',
            },
            {
              serviceId: 43,
              name: 'ТСЦ МВС № 2342',
              street: 'вул. Бабури козака',
              building: '9 а',
            },
            {
              serviceId: 44,
              name: 'ТСЦ МВС № 2343',
              street: 'вул. Бабури козака',
              building: '9 а',
            },
          ],
        },
        {
          name: 'с. Сонячне',
          serviceCenters: [
            {
              serviceId: 45,
              name: 'ТСЦ МВС № 2348',
              street: 'вул. Сонячне шосе',
              building: '2 а',
            },
          ],
        },
      ],
    },
    {
      name: 'Івано-Франківська область',
      cities: [
        {
          name: 'м. Івано-Франківськ',
          serviceCenters: [
            {
              serviceId: 46,
              name: 'ТСЦ МВС № 2641',
              street: 'вул. Коновальця',
              building: '229 у',
            },
          ],
        },
        {
          name: 'м. Калуш',
          serviceCenters: [
            {
              serviceId: 47,
              name: 'ТСЦ МВС № 2642',
              street: 'вул. Грушевського',
              building: '104 ',
            },
          ],
        },
        {
          name: 'м. Коломия',
          serviceCenters: [
            {
              serviceId: 48,
              name: 'ТСЦ МВС № 2643',
              street: 'вул. Симоненка',
              building: '2 в',
            },
          ],
        },
        {
          name: 'м. Снятин',
          serviceCenters: [
            {
              serviceId: 49,
              name: 'ТСЦ МВС № 2644',
              street: 'вул. Воєводи Коснятина',
              building: '60 ',
            },
          ],
        },
        {
          name: 'м. Надвірна',
          serviceCenters: [
            {
              serviceId: 50,
              name: 'ТСЦ МВС № 2645',
              street: 'вул. Визволення',
              building: '2 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Кіровоградська область',
      cities: [
        {
          name: 'м. Кропивницький',
          serviceCenters: [
            {
              serviceId: 60,
              name: 'ТСЦ МВС № 3541',
              street: 'пр-т. Інженерів',
              building: '9/92 ',
            },
          ],
        },
        {
          name: 'м. Олександрія',
          serviceCenters: [
            {
              serviceId: 61,
              name: 'ТСЦ МВС № 3542',
              street: 'пр-т. Будівельників',
              building: '38 ',
            },
          ],
        },
        {
          name: 'м. Бобринець',
          serviceCenters: [
            {
              serviceId: 62,
              name: 'ТСЦ МВС № 3543',
              street: 'вул. Миколаївська',
              building: '172 ',
            },
          ],
        },
        {
          name: 'м. Мала Виска',
          serviceCenters: [
            {
              serviceId: 63,
              name: 'ТСЦ МВС № 3544',
              street: 'вул. Мічуріна',
              building: '2 ',
            },
          ],
        },
        {
          name: 'м. Благовіщенське',
          serviceCenters: [
            {
              serviceId: 64,
              name: 'ТСЦ МВС № 3545',
              street: 'вул. Ореста Гуменюка',
              building: '11 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Львівська область',
      cities: [
        {
          name: 'м. Львів',
          serviceCenters: [
            {
              serviceId: 65,
              name: 'ТСЦ МВС № 4641',
              street: 'вул. Д. Апостола',
              building: '11 ',
            },
            {
              serviceId: 74,
              name: 'ТСЦ МВС № 4651',
              street: 'вул. Богданівська',
              building: '44 ',
            },
          ],
        },
        {
          name: 'м. Дрогобич',
          serviceCenters: [
            {
              serviceId: 66,
              name: 'ТСЦ МВС № 4642',
              street: 'вул. Трускавецька',
              building: '64 ',
            },
          ],
        },
        {
          name: 'с. Галицьке',
          serviceCenters: [
            {
              serviceId: 67,
              name: 'ТСЦ МВС № 4643',
              street: 'вул. Л. Українки',
              building: '1 ',
            },
          ],
        },
        {
          name: 'м. Самбір',
          serviceCenters: [
            {
              serviceId: 68,
              name: 'ТСЦ МВС № 4644',
              street: 'вул. Східна',
              building: '216 ',
            },
          ],
        },
        {
          name: 'м. Стрий',
          serviceCenters: [
            {
              serviceId: 69,
              name: 'ТСЦ МВС № 4645 ',
              street: 'вул. Багряного',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Шептицький',
          serviceCenters: [
            {
              serviceId: 70,
              name: 'ТСЦ МВС № 4646',
              street: 'вул. Корольова',
              building: '14 а',
            },
          ],
        },
        {
          name: 'м. Новояворівськ',
          serviceCenters: [
            {
              serviceId: 71,
              name: 'ТСЦ МВС № 4647',
              street: 'вул. Зелена',
              building: '2 ',
            },
          ],
        },
        {
          name: 'с. Солонка',
          serviceCenters: [
            {
              serviceId: 72,
              name: 'ТСЦ МВС № 4649',
              street: 'вул. Стрийська',
              building: '31Б',
            },
          ],
        },
        {
          name: 'м. Жовква',
          serviceCenters: [
            {
              serviceId: 73,
              name: 'ТСЦ МВС № 4650',
              street: 'вул. Вокзальна',
              building: '10 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Миколаївська область',
      cities: [
        {
          name: 'м. Миколаїв',
          serviceCenters: [
            {
              serviceId: 75,
              name: 'ТСЦ МВС № 4841 ',
              street: 'провулок. Транспортний',
              building: '1а/1',
            },
          ],
        },
        {
          name: 'м. Первомайськ',
          serviceCenters: [
            {
              serviceId: 76,
              name: 'ТСЦ МВС № 4842',
              street: 'вул. Вознесенська',
              building: '73 б',
            },
          ],
        },
        {
          name: 'м. Нова Одеса',
          serviceCenters: [
            {
              serviceId: 77,
              name: 'ТСЦ МВС № 4843',
              street: 'вул. Сеславинського',
              building: '12 ',
            },
          ],
        },
        {
          name: 'м. Вознесенськ',
          serviceCenters: [
            {
              serviceId: 78,
              name: 'ТСЦ МВС № 4844',
              street: 'вул. Молодогвардійська',
              building: '45 ',
            },
          ],
        },
        {
          name: 'м. Новий Буг',
          serviceCenters: [
            {
              serviceId: 79,
              name: 'ТСЦ МВС № 4845',
              street: 'вул. Площа Свободи',
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Одеська область',
      cities: [
        {
          name: 'м. Одеса',
          serviceCenters: [
            {
              serviceId: 80,
              name: 'ТСЦ МВС № 5141',
              street: 'вул. Інглезі',
              building: '15 а',
            },
          ],
        },
        {
          name: 'с. Лиманський р-н., с. Крижанівка',
          serviceCenters: [
            {
              serviceId: 81,
              name: 'ТСЦ МВС № 5142',
              street: 'вул. Ак. Сахарова',
              building: '1 г',
            },
          ],
        },
        {
          name: 'м. Білгород-Дністровський',
          serviceCenters: [
            {
              serviceId: 82,
              name: 'ТСЦ МВС № 5143',
              street: 'вул. Ігоря Іванова',
              building: '4 ',
            },
          ],
        },
        {
          name: 'м. Ізмаїл',
          serviceCenters: [
            {
              serviceId: 83,
              name: 'ТСЦ МВС № 5144',
              street: 'пр-т. Незалежності',
              building: '362 ',
            },
          ],
        },
        {
          name: 'м. Роздільна',
          serviceCenters: [
            {
              serviceId: 84,
              name: 'ТСЦ МВС № 5146',
              street: 'вул. Кишинівська',
              building: '2 ',
            },
          ],
        },
        {
          name: 'смт. Доброслав',
          serviceCenters: [
            {
              serviceId: 85,
              name: 'ТСЦ МВС № 5147',
              street: 'вул. Промислова',
              building: '29 ',
            },
          ],
        },
        {
          name: 'м. Березівка',
          serviceCenters: [
            {
              serviceId: 86,
              name: 'ТСЦ МВС № 5148',
              street: 'вул. Героїв України',
              building: '27 ',
            },
          ],
        },
        {
          name: 'м. Подільськ',
          serviceCenters: [
            {
              serviceId: 87,
              name: 'ТСЦ МВС № 5149',
              street: 'вул. Соборна',
              building: '202 б',
            },
          ],
        },
        {
          name: 'м. Чорноморськ',
          serviceCenters: [
            {
              serviceId: 88,
              name: 'ТСЦ МВС № 5150',
              street: 'вул. Промислова',
              building: '14',
            },
          ],
        },
        {
          name: 'м. Болград',
          serviceCenters: [
            {
              serviceId: 89,
              name: 'ТСЦ МВС № 5151',
              street: 'вул. Лісна',
              building: '2 ',
            },
          ],
        },
        {
          name: 'с. Біляївський р-н., с. Усатове',
          serviceCenters: [
            {
              serviceId: 90,
              name: 'ТСЦ МВС № 5152',
              street: 'вул. Київська',
              building: '19',
            },
          ],
        },
      ],
    },
    {
      name: 'Полтавська область',
      cities: [
        {
          name: 'с. Розсошенці',
          serviceCenters: [
            {
              serviceId: 92,
              name: 'ТСЦ МВС № 5341',
              street: 'вул. Кременчуцька',
              building: '2 в',
            },
          ],
        },
        {
          name: 'м. Кременчук',
          serviceCenters: [
            {
              serviceId: 93,
              name: 'ТСЦ МВС № 5342',
              street: 'вул. Покровська',
              building: '14',
            },
          ],
        },
        {
          name: 'м. Лубни',
          serviceCenters: [
            {
              serviceId: 94,
              name: 'ТСЦ МВС № 5343',
              street: 'пр-т. Володимирський',
              building: '178 б',
            },
          ],
        },
        {
          name: 'м. Миргород',
          serviceCenters: [
            {
              serviceId: 95,
              name: 'ТСЦ МВС № 5344',
              street: 'вул. Анатолія Карбана',
              building: '14 а',
            },
          ],
        },
        {
          name: 'м. Гадяч',
          serviceCenters: [
            {
              serviceId: 96,
              name: 'ТСЦ МВС № 5345',
              street: 'вул. Героїв Майдану',
              building: '75-В',
            },
          ],
        },
        {
          name: 'с. Бутенки',
          serviceCenters: [
            {
              serviceId: 97,
              name: 'ТСЦ МВС № 5346',
              street: 'вул. Зоріна',
              building: '7 а',
            },
          ],
        },
        {
          name: 'м. Горішні Плавні',
          serviceCenters: [
            {
              serviceId: 99,
              name: 'ТСЦ МВС № 5348',
              street: 'вул. Строна',
              building: '11-А',
            },
          ],
        },
      ],
    },
    {
      name: 'Рівненська область',
      cities: [
        {
          name: 'м. Рівне',
          serviceCenters: [
            {
              serviceId: 100,
              name: 'ТСЦ МВС № 5641',
              street: 'вул. Київська',
              building: '108 б',
            },
          ],
        },
        {
          name: 'м. Дубно',
          serviceCenters: [
            {
              serviceId: 101,
              name: 'ТСЦ МВС № 5642',
              street: 'вул. Грушевського',
              building: '184 ',
            },
          ],
        },
        {
          name: 'м. Сарни',
          serviceCenters: [
            {
              serviceId: 102,
              name: 'ТСЦ МВС № 5643',
              street: 'вул. Костопільська',
              building: '100 ',
            },
          ],
        },
        {
          name: 'с. Володимирець',
          serviceCenters: [
            {
              serviceId: 103,
              name: 'ТСЦ МВС № 5644',
              street: 'вул. Соборна',
              building: '49 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Сумська область',
      cities: [
        {
          name: 'м. Глухів',
          serviceCenters: [
            {
              serviceId: 104,
              name: 'ТСЦ МВС № 5941',
              street: 'вул. Індустріальна',
              building: '19 а',
            },
          ],
        },
        {
          name: 'м. Конотоп',
          serviceCenters: [
            {
              serviceId: 105,
              name: 'ТСЦ МВС № 5942 вул. Садова, 39 (крім практичного іспиту)',
              street: 'вул. Садова',
              building: '39',
            },
          ],
        },
        {
          name: 'м. Охтирка',
          serviceCenters: [
            {
              serviceId: 106,
              name: 'ТСЦ МВС № 5943',
              street: 'вул. Київська',
              building: '164 в',
            },
          ],
        },
        {
          name: 'м. Ромни',
          serviceCenters: [
            {
              serviceId: 107,
              name: 'ТСЦ МВС № 5944',
              street: 'вул. Полтавська',
              building: '4 а',
            },
          ],
        },
        {
          name: 'м. Шостка',
          serviceCenters: [
            {
              serviceId: 108,
              name: 'ТСЦ МВС № 5945',
              street: 'вул. Героїв Шосткинщини',
              building: '24-А',
            },
          ],
        },
        {
          name: 'м. Суми',
          serviceCenters: [
            {
              serviceId: 109,
              name: 'ТСЦ МВС № 5946',
              street: 'вул. Білопільський шлях',
              building: '18/1',
            },
          ],
        },
      ],
    },
    {
      name: 'Тернопільська область',
      cities: [
        {
          name: 'с. Підгородне',
          serviceCenters: [
            {
              serviceId: 110,
              name: 'ТСЦ МВС № 6141',
              street: 'вул. Стрийська',
              building: '5 ',
            },
          ],
        },
        {
          name: 'м. Підгайці',
          serviceCenters: [
            {
              serviceId: 111,
              name: 'ТСЦ МВС № 6142',
              street: 'вул. Замкова',
              building: '18 ',
            },
          ],
        },
        {
          name: 'м. Кременець',
          serviceCenters: [
            {
              serviceId: 112,
              name: 'ТСЦ МВС № 6143',
              street: 'вул. Шевченка',
              building: '67 ',
            },
          ],
        },
        {
          name: 'с. Угринь',
          serviceCenters: [
            {
              serviceId: 114,
              name: 'ТСЦ МВС № 6145',
              street: "вул. Об'їзна",
              building: '1 ',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Харків та Харківська територіальна громада',
      cities: [
        {
          name: 'м. Харків',
          serviceCenters: [
            {
              serviceId: 115,
              name: 'ТСЦ МВС № 6341',
              street: 'вул. Шевченка',
              building: '26 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Харківська область',
      cities: [
        {
          name: 'м. Богодухів',
          serviceCenters: [
            {
              serviceId: 117,
              name: 'ТСЦ МВС № 6343',
              street: 'вул. Захисників України',
              building: '20/1',
            },
          ],
        },
        {
          name: 'м. Ізюм',
          serviceCenters: [
            {
              serviceId: 118,
              name: 'ТСЦ МВС № 6344',
              street: 'вул. Весняна',
              building: '45 ',
            },
          ],
        },
        {
          name: 'м. Берестин',
          serviceCenters: [
            {
              serviceId: 119,
              name: 'ТСЦ МВС № 6345',
              street: 'вул. Полтавська',
              building: '92 ',
            },
          ],
        },
        {
          name: 'м. Балаклія',
          serviceCenters: [
            {
              serviceId: 120,
              name: 'ТСЦ МВС № 6346',
              street: 'пл. Тараса Шевченка',
              building: '11 ',
            },
          ],
        },
        {
          name: 'м. Чугуїв',
          serviceCenters: [
            {
              serviceId: 121,
              name: 'ТСЦ МВС № 6347',
              street: 'вул. Гвардійська',
              building: '20 ',
            },
          ],
        },
        {
          name: 'м. Лозова',
          serviceCenters: [
            {
              serviceId: 122,
              name: 'ТСЦ МВС № 6348',
              street: 'вул. мр-н 1',
              building: '21',
            },
          ],
        },
        {
          name: 'м. Мерефа',
          serviceCenters: [
            {
              serviceId: 123,
              name: 'ТСЦ МВС № 6349',
              street: 'вул. Дніпровська',
              building: '148',
            },
          ],
        },
        {
          name: 'смт. Пісочин',
          serviceCenters: [
            {
              serviceId: 124,
              name: 'ТСЦ МВС № 6350',
              street: 'вул. Транспортна',
              building: '116',
            },
          ],
        },
      ],
    },
    {
      name: 'Херсонська область',
      cities: [
        {
          name: 'м. Херсон',
          serviceCenters: [
            {
              serviceId: 125,
              name: 'ТСЦ МВС № 6541',
              street: 'вул. Вишнева',
              building: '22 ',
            },
          ],
        },
        {
          name: 'с. Велика Олександрівка',
          serviceCenters: [
            {
              serviceId: 126,
              name: 'ТСЦ МВС № 6542',
              street: 'вул. Закарпатська',
              building: '32 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Хмельницька область',
      cities: [
        {
          name: 'м. Хмельницький',
          serviceCenters: [
            {
              serviceId: 127,
              name: 'ТСЦ МВС № 6841',
              street: 'вул. Західно-Окружна,',
              building: '11/1',
            },
          ],
        },
        {
          name: 'м. Дунаївці',
          serviceCenters: [
            {
              serviceId: 128,
              name: 'ТСЦ МВС № 6842',
              street: 'вул. Франца Лендера',
              building: '41 ',
            },
          ],
        },
        {
          name: "м. Кам'янець-Подільський",
          serviceCenters: [
            {
              serviceId: 129,
              name: 'ТСЦ МВС № 6843',
              street: 'пр-т. Грушевського',
              building: '45323 ',
            },
          ],
        },
        {
          name: 'м. Старокостянтинів',
          serviceCenters: [
            {
              serviceId: 130,
              name: 'ТСЦ МВС № 6844',
              street: 'вул. Чайковського',
              building: '1 а',
            },
          ],
        },
        {
          name: 'м. Шепетівка',
          serviceCenters: [
            {
              serviceId: 131,
              name: 'ТСЦ МВС № 6845',
              street: 'вул. Володимира Українця',
              building: '13 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Черкаська область',
      cities: [
        {
          name: 'м. Черкаси',
          serviceCenters: [
            {
              serviceId: 132,
              name: 'ТСЦ МВС № 7141',
              street: 'вул. Лесі Українки',
              building: '21 ',
            },
          ],
        },
        {
          name: 'с. Уманський р-н., с/рада Родниківська',
          serviceCenters: [
            {
              serviceId: 133,
              name: 'ТСЦ МВС № 7142',
              street: 'вул. автодорога Київ-Одеса  203 км 800 м',
              building: 'б/н ',
            },
          ],
        },
        {
          name: 'м. Звенигородка',
          serviceCenters: [
            {
              serviceId: 134,
              name: 'ТСЦ МВС № 7143',
              street: 'вул. Богдана Хмельницького',
              building: '15/1',
            },
          ],
        },
        {
          name: 'м. Корсунь-Шевченківський',
          serviceCenters: [
            {
              serviceId: 135,
              name: 'ТСЦ МВС № 7144',
              street: 'вул. Василя Сергієнка',
              building: '4 а',
            },
          ],
        },
        {
          name: 'м. Золотоноша',
          serviceCenters: [
            {
              serviceId: 136,
              name: 'ТСЦ МВС № 7145',
              street: 'вул. Відродження',
              building: '16 ',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернівецька область',
      cities: [
        {
          name: 'м. Чернівці',
          serviceCenters: [
            {
              serviceId: 137,
              name: 'ТСЦ МВС № 7341',
              street: 'вул. Руська',
              building: '248 м',
            },
          ],
        },
        {
          name: 'м. Кіцмань',
          serviceCenters: [
            {
              serviceId: 138,
              name: 'ТСЦ МВС № 7342',
              street: 'вул. Незалежності',
              building: '1 б',
            },
          ],
        },
        {
          name: 'м. Новоселиця',
          serviceCenters: [
            {
              serviceId: 139,
              name: 'ТСЦ МВС № 7343',
              street: 'вул. Кремльова',
              building: '20 ',
            },
          ],
        },
        {
          name: 'с. Глибока',
          serviceCenters: [
            {
              serviceId: 140,
              name: 'ТСЦ МВС № 7344',
              street: 'вул. Героїв Небесної Сотні',
              building: '88 ',
            },
          ],
        },
        {
          name: 'с. Кельменці',
          serviceCenters: [
            {
              serviceId: 141,
              name: 'ТСЦ МВС № 7345',
              street: 'вул. О.Паламаря',
              building: '9 в',
            },
          ],
        },
      ],
    },
    {
      name: 'Чернігівська область',
      cities: [
        {
          name: 'м. Чернігів',
          serviceCenters: [
            {
              serviceId: 142,
              name: 'ТСЦ МВС № 7441',
              street: 'Шевченка',
              building: '162а',
            },
          ],
        },
        {
          name: 'м. Прилуки',
          serviceCenters: [
            {
              serviceId: 143,
              name: 'ТСЦ МВС № 7442',
              street: 'вул. Індустріальна',
              building: '6',
            },
          ],
        },
        {
          name: 'м. Ніжин',
          serviceCenters: [
            {
              serviceId: 144,
              name: 'ТСЦ МВС № 7443',
              street: 'вул. С. Прощенка',
              building: '78 б',
            },
          ],
        },
        {
          name: 'м. Мена',
          serviceCenters: [
            {
              serviceId: 145,
              name: 'ТСЦ МВС № 7444',
              street: 'вул. Чернігівський шлях',
              building: '85-В',
            },
          ],
        },
      ],
    },
    {
      name: 'м. Київ',
      cities: [
        {
          name: 'м. Київ',
          serviceCenters: [
            {
              serviceId: 146,
              name: 'ТСЦ МВС № 8041',
              street: 'вул. Перемоги',
              building: '20 ',
            },
            {
              serviceId: 147,
              name: 'ТСЦ МВС № 8042',
              street: 'вул. Мрії',
              building: '19',
            },
            {
              serviceId: 148,
              name: 'ТСЦ МВС № 8043',
              street: 'пр. Європейського Союзу',
              building: '47 ',
            },
            {
              serviceId: 149,
              name: 'ТСЦ МВС № 8044',
              street: 'вул. Братиславська',
              building: '52 ',
            },
            {
              serviceId: 150,
              name: 'ТСЦ МВС № 8045',
              street: 'вул. Павла Усенка',
              building: '8 ',
            },
            {
              serviceId: 151,
              name: 'ТСЦ МВС № 8046',
              street: 'вул. Столичне шосе',
              building: '104 ',
            },
            {
              serviceId: 153,
              name: 'ТСЦ МВС № 8048',
              street: 'вул. Миколи Грінченка',
              building: '18 ',
            },
          ],
        },
        {
          name: 'с. Софіївська Борщагівка',
          serviceCenters: [
            {
              serviceId: 152,
              name: 'ТСЦ МВС № 8047',
              street: 'вул. Велика Кільцева',
              building: '110 а',
            },
          ],
        },
      ],
    },
  ],
};
