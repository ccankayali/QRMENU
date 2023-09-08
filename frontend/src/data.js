export const categories = [
    {
      name: 'Kahvaltı',
      sub_message: null,
      sub_category: ['Çorbalar', 'Aperatifler', 'Yumurtalar'],
      image: 'https://iili.io/J90YHNI.webp',
      bg: 'light',
      items: [
        {
          name: 'Tek kişilik Kahvaltı',
          price: 100,
          sub_category: null,
          description:
            'Yöresel peynir, zeytin, bal, kaymak, tereyağı, isot ezmesi, reçel, domates, salatalık, yeşillik, patates kızartması, sahanda yumurta, çay',
        },
        {
          name: 'Patetes Tava',
          price: 65,
          sub_category: 'Aperatifler',
          description: 'Bolca patates, 3 yumurta, çay',
        },
        {
          name: 'Sucuklu Yumurta',
          price: 60,
          sub_category: 'Yumurtalar',
          description: '100 gr sucuk, 3 yumurta, çay',
        },
        {
          name: 'Menemen',
          price: 65,
          sub_category: 'Yumurtalar',
          description: 'Bolca domates, biber(istek), soğan(istek), 3 yumurta, çay ',
        },
        {
          name: 'Kavurmali Yumurta',
          price: 65,
          sub_category: 'Yumurtalar',
          description: '100gr kavurma, 3 yumurta, çay',
        },
        {
          name: 'Peynirli Omlet',
          price: 60,
          sub_category: 'Yumurtalar',
          description: 'Yöresel peynir, 3 yumurta, çay',
        },
        {
          name: 'Kaşarlı Omlet',
          price: 60,
          sub_category: 'Yumurtalar',
          description: '100gr kaşar, 3 yumurta, çay',
        },
      ],
    },
    {
      name: 'Burger',
      sub_message: 'Çaylar İkramımızdır',
      sub_category: null,
      image: 'https://iili.io/J90YQbS.webp',
      bg: 'dark',
      items: [
        {
          name: 'Chicken Burger',
          price: 120,
          sub_category: null,
          description:
            '120gr ızgara tavuk, karamelize soğan, domates, burger turşusu, el yapımı burger ekmeği, patates kızartması, 2 adet soğan halkası ',
        },
        {
          name: 'Klasik Burger',
          price: 120,
          sub_category: null,
          description:
            '120gr kasap kıyma eti, karamelize soğan, domates, burger turşusu, karamelize soğan,el yapımı burger ekmeği, patates kızartması, 2 adet soğan halkası ',
        },
        {
          name: 'Cheese Burger',
          price: 110,
          sub_category: null,
          description:
            '120gr kasap kıyma eti, cheddar peyniri,karamelize soğan, domates, burger turşusu, el yapımı burger ekmeği, patates kızartması, 2 adet soğan halkası ',
        },
        {
          name: 'BBQ Burger',
          price: 130,
          sub_category: null,
          description:
            '120gr kasap kıyma eti, cheddar peyniri,karamelize soğan, domates, burger turşusu, bbq sos, el yapımı burger ekmeği, patates kızartması, 2 adet soğan halkası ',
        },
        {
          name: 'Anadolu Burger',
          price: 150,
          sub_category: null,
          description:
            '120gr kasap kıyma eti, pastırma, cheddar peyniri,karamelize soğan, domates, burger turşusu, el yapımı burger ekmeği, patates kızartması, 2 adet soğan halkası ',
        },
      ],
    },
    {
      name: 'Pizza',
      sub_message: 'Çaylar İkramımızdır',
      sub_category: null,
      image: 'https://iili.io/J90aorJ.webp',
      bg: 'light',
      items: [
        {
          name: 'İtalyan Pizza',
          price: 90,
          sub_category: null,
          description:
            'Domates sos, mozzarella, sucuk, zeytin, kekik, mantar, biber, yanında patates kızartması ',
        },
        {
          name: 'Karışık Pizza',
          price: 90,
          sub_category: null,
          description:
            'Domates sos, mozzarella, sucuk, salam, kırmızı biber, yeşil biber, mantar, zeytin, mısır, domates, yanında patates kızartması ',
        },
        {
          name: 'Sucuklu Pizza',
          price: 95,
          sub_category: null,
          description:
            'Domates sos, mozzarella, kasap sucuk, sivri biber,yanında patates kızartması ',
        },
        {
          name: 'Ton Balıklı Pizza',
          price: 95,
          sub_category: null,
          description:
            'Domates sos, mozzarella, ton balığı,biber mantar, mısır  yanında patates kızartması ',
        },
        {
          name: 'Margarita Pizza',
          price: 85,
          sub_category: null,
          description:
            'Domates sos, mozzarella, fesleğen sos, yanında patates kızartması ',
        },
        {
          name: 'Dört Peynirli Pizza',
          price: 85,
          sub_category: null,
          description:
            'Domates sos, mozzarella, beyaz peynir, parmesan, kaşar peyniri, yanında patates kızartması ',
        },
        {
          name: 'Kavurmalı Pizza',
          price: 90,
          sub_category: null,
          description:
            'Domates sos, mozzarella, kavurma yanında patates kızartması ',
        },
      ],
    },
    {
      name: 'Mangal Ateşi',
      sub_message: 'Çaylar ve Salatalar İkramımızdır',
      sub_category: null,
      image: 'https://iili.io/J90a5Xt.webp',
      bg: 'dark',
      items: [
        {
          name: 'Kasap Köfte',
          price: 140,
          sub_category: null,
          description: '180gr kasap kıyma eti',
        },
        {
          name: 'Terbiyesiz Tavuk(Acısız)',
          price: 130,
          sub_category: null,
          description: '200gr dinlendirilmiş tavuk budu',
        },
        {
          name: 'Terbiyeli Tavuk(Acılı)',
          price: 135,
          sub_category: null,
          description: '200gr terbiyelenmiş acı soslu tavuk budu',
        },
        {
          name: 'Tavuk Kanat',
          price: 140,
          sub_category: null,
          description: '200gr Tavuk kanat',
        },
        {
          name: 'Adana Kebap(Acılı)',
          price: 130,
          sub_category: null,
          description: '180gr zırhlı kuzu kaburga kıyması ',
        },
        {
          name: 'Beyoglu Kebap(Acısız)',
          price: 140,
          sub_category: null,
          description: '180gram zırhlı kuzu kaburga kıyması ',
        },
        {
          name: 'Urfa Kebap (Acısız)',
          price: 140,
          sub_category: null,
          description: '180gr kuzu kaburga kıyması',
        },
        {
          name: 'Siverek Kebabı',
          price: 135,
          sub_category: null,
          description:
            'Yarım porsiyon kebap, yarım porsiyon patlıcanlı kebap',
        },
        {
          name: 'Ciğer',
          price: 120,
          sub_category: null,
          description: '160gr kuzu ciğer',
        },
        {
          name: 'Patlıcanlı Kebap',
          price: 110,
          sub_category: null,
          description: '200gr- patlıcan',
        },
        {
          name: 'Terbiyesiz Kuşbaşı (Acısız)',
          price: 135,
          sub_category: null,
          description: '200gr dinlendirilmiş dana bonfile',
        },
        {
          name: 'Terbiyeli Kuşbaşı(Acılı)',
          price: 140,
          sub_category: null,
          description: '200gr terbiyelenmiş soslu dana bonfile',
        },
        {
          name: 'Ali Nazik',
          price: 140,
          sub_category: null,
          description:
            'Közlenmiş patlıcan üzerine, terbiyelenmiş 200gr dana bonfile ile tereyağlı sos ',
        },
      ],
    },
    {
      name: 'Kırmızı Et',
      sub_message: 'Çaylar ve Salatalar İkramımızdır',
      sub_category: null,
      image: 'https://iili.io/J90a8kQ.webp',
      bg: 'light',
      items: [
        {
          name: 'Bodrum Çökertme',
          price: 130,
          sub_category: null,
          description:
            'Kibrit patates üstüne yoğurt, 200gr dana dana bonfile üzerine tereyağlı sos, ',
        },
        {
          name: 'Mantarlı Bonfile',
          price: 120,
          sub_category: null,
          description: '200gr mantar soslu dana bonfile ',
        },
        {
          name: 'Fajita',
          price: 150,
          sub_category: null,
          description: 'Jülyan 200gr dana bonfile ',
        },
        {
          name: 'Beyoğlu Gurme Special',
          price: 155,
          sub_category: null,
          description: '200gr doğranmış dana bonfile,',
        },
      ],
    },
    {
      name: 'Salatalar',
      sub_message: 'Çaylar İkramımızdır',
      sub_category: null,
      image: 'https://iili.io/J90aZYv.webp',
      bg: 'dark',
      items: [
        {
          name: 'Tavuk Salata',
          price: 75,
          sub_category: null,
          description:
            '130gr ızgara tavuk bonfile, akdeniz yeşilliği,iceberg marul, roka, salatalık, kiraz domates, zeytinyağı ve balzemik sirke',
        },
        {
          name: 'Şefin Salatası',
          price: 65,
          sub_category: null,
          description:
            'Peynir, akdeniz yeşilliği,iceberg marul, roka, salatalık, kiraz domates, zeytinyağı, limon ve balzemik sirke',
        },
        {
          name: 'Tavuklu Sezar Salata',
          price: 75,
          sub_category: null,
          description:
            '130gr ızgara tavuk bonfile, marul, çeri domates, kruoton ekmeği, kaşar peyniri, kornişon turşu, sezar sos ile',
        },
        {
          name: 'Ton Balıklı Salata',
          price: 70,
          sub_category: null,
          description:
            '100gr ton balığı, akdeniz yeşilliği, iceberg marul, roka, kiraz domates, zeytinyağı, limon',
        },
        {
          name: 'Izgara Salata',
          price: 70,
          sub_category: null,
          description:
            '100gr ızgara fileto dana bonfile, akdeniz yeşilliği, iceberg marul, roka, salatalık, kiraz domates, zeytinyağı, balzamik sirke ve kekik',
        },
      ],
    },
    {
      name: 'Beyaz Et',
      sub_message: 'Çaylar ve Salatalar İkramımızdır',
      sub_category: null,
      image: 'https://iili.io/J90aDpp.webp',
      bg: 'light',
      items: [
        {
          name: 'Fesleğen Soslu Tavuk',
          price: 105,
          sub_category: null,
          description: '200gr fesleğen soslu tavuk ',
        },
        {
          name: 'Köri Soslu Tavuk',
          price: 110,
          sub_category: null,
          description: '200gr köri soslu tavuk ',
        },
        {
          name: 'Taze Baharatlı Tavuk',
          price: 115,
          sub_category: null,
          description:
            '200gr tavuk içine kırmızı biber, kekik, toz biber, karabiber',
        },
        {
          name: 'Kremalı Mantarlı Tavuk',
          price: 110,
          sub_category: null,
          description: '200gr tavuk içine mantar ve krema ',
        },
      ],
    },
    // {
    //   name: 'Waffle',
    //   sub_message: null,
    //   sub_category: null,
    //   image: 'https://s10.gifyu.com/images/waffle.jpg',
    //   bg: 'dark',
    //   items: [
    //     {
    //       name: 'Classic Waffle',
    //       price: 43,
    //       sub_category: null,
    //       description:
    //         'Sütlü alt çikolata, muz, çilek, kivi, parça antep fıstığı,yer fıstığı, sütlü üst sos',
    //     },
    //     {
    //       name: 'Çikolata Aşkı',
    //       price: 43,
    //       sub_category: null,
    //       description:
    //         'Bitter dip çikolata, muz, çilek, kivi, toz fındık, ceviz, kestane, bitter damla drop, bitter üst sos',
    //     },
    //     {
    //       name: 'Tropik Waffle',
    //       price: 43,
    //       sub_category: null,
    //       description:
    //         'Sütlü alt çikolata, muz, kivi, ananas, parça fındık, çakıl taşı, frambuaz ve muzlu üst sos, bitter üst sos',
    //     },
    //   ],
    // },
    {
      name: 'Tatlı ve Kampanyalar',
      sub_message: null,
      sub_category: ['Tatlı', 'Kampanyalar'],
      image:
        'https://iili.io/J90cUcG.webp',
      bg: 'dark',
      items: [
        {
          name: 'Kesme Dondurma',
          price: 35,
          sub_category: 'Tatlı',
          description: null,
        },
        {
          name: 'Dondurmalı Islak Kek',
          price: 35,
          sub_category: 'Tatlı',
          description: null,
        },
        {
          name: 'Sütlaç',
          price: 55,
          sub_category: 'Tatlı',
          description: null,
        },
        {
          name: 'Tahinli Fındıklı Sütlaç',
          price: 50,
          sub_category: 'Tatlı',
          description: null,
        },
        {
          name: 'Kıbrıs Tatlısı',
          price: 50,
          sub_category: 'Tatlı',
          description: null,
        },
        {
          name: 'Sütlaç + Kahve',
          price: 65,
          sub_category: 'Kampanyalar',
          description: null,
        },
        {
          name: 'Tahinli Sütlaç + Kahve',
          price: 60,
          sub_category: 'Kampanyalar',
          description: null,
        },
  
        {
          name: 'Kıbrıs Tatlısı + Kahve',
          price: 80,
          sub_category: 'Kampanyalar',
          description: null,
        },
        {
          name: 'Dondurmalı Islak Kek + Kahve',
          price: 85,
          sub_category: 'Kampanyalar',
          description: null,
        },
      ],
    },
    {
      name: 'Sıcak Kahveler',
      sub_message: null,
      sub_category: ['Demleme Filtre Kahve', 'Türk Kahveleri'],
      image: 'https://iili.io/J90cJGn.webp',
      bg: 'light',
      items: [
        {
          name: 'Filtre Kahve',
          price: 17.5,
          sub_category: 'Demleme Filtre Kahve',
          description: null,
        },
        {
          name: 'Sütlü Filtre Kahve',
          price: 20,
          sub_category: 'Demleme Filtre Kahve',
          description: null,
        },
        {
          name: 'Türk Kahvesi',
          price: 15,
          sub_category: 'Türk Kahveleri',
          description: null,
        },
        {
          name: 'Double Türk Kahvesi',
          price: 25,
          sub_category: 'Türk Kahveleri',
          description: null,
        },
        {
          name: 'Double Menengiç Kahvesi',
          price: 25,
          sub_category: 'Türk Kahveleri',
          description: null,
        },
        {
          name: 'Double Dibek Kahvesi',
          price: 25,
          sub_category: 'Türk Kahveleri',
          description: null,
        },
      ],
    },
    {
      name: 'Sıcak İçecekler',
      sub_message: null,
      sub_category: ['Sıcak İçecekler', 'Bitki Çayları'],
      image: 'https://iili.io/J90cKv4.webp',
      bg: 'dark',
      items: [
        {
          name: 'Çay',
          price: 10,
          sub_category: 'Sıcak İçecekler',
          description: null,
        },
        {
          name: 'Fincan Çay',
          price: 15,
          sub_category: 'Sıcak İçecekler',
          description: null,
        },
        {
          name: 'Salep',
          price: 20,
          sub_category: 'Sıcak İçecekler',
          description: null,
        },
        {
          name: 'Sıcak Çikolata',
          price: 20,
          sub_category: 'Sıcak İçecekler',
          description: null,
        },
        {
          name: 'Sıcak Süt',
          price: 20,
          sub_category: 'Sıcak İçecekler',
          description: null,
        },
        {
          name: 'Nane Limon',
          price: 22.5,
          sub_category: 'Bitki Çayları',
          description: null,
        },
        {
          name: 'Ihlamur',
          price: 17.5,
          sub_category: 'Bitki Çayları',
          description: null,
        },
        {
          name: 'Ada Çayı',
          price: 17.5,
          sub_category: 'Bitki Çayları',
          description: null,
        },
        {
          name: 'Kış Çayı',
          price: 17.5,
          sub_category: 'Bitki Çayları',
          description: null,
        },
      ],
    },
    {
      name: 'Soğuk İçecekler',
      sub_message: null,
      sub_category: null,
      image: 'https://iili.io/J90cR8x.webp',
      bg: 'light',
      items: [
        {
          name: 'Su',
          price: 5,
          sub_category: null,
          description: null,
        },
        {
          name: 'Soda',
          price: 10,
          sub_category: null,
          description: null,
        },
        {
          name: 'Ayran',
          price: 15,
          sub_category: null,
          description: null,
        },
        {
          name: 'Kola ',
          price: 15,
          sub_category: null,
          description: null,
        },
        {
          name: 'Fanta ',
          price: 15,
          sub_category: null,
          description: null,
        },
        {
          name: 'FuseTea ',
          price: 15,
          sub_category: null,
          description: null,
        },
        {
          name: 'Gazoz ',
          price: 10,
          sub_category: null,
          description: null,
        },
  
        {
          name: 'Şalgam',
          price: 10,
          sub_category: null,
          description: null,
        },
        {
          name: 'Şıra',
          price: 20,
          sub_category: null,
          description: null,
        },
        {
          name: 'Churchil',
          price: 30,
          sub_category: null,
          description: null,
        },
        {
          name: 'Soda-Limon',
          price: 20,
          sub_category: null,
          description: null,
        },
        {
          name: 'Taze Sıkma Portakal Suyu ',
          price: 22.5,
          sub_category: null,
          description: null,
        },
      ],
    },
  ];
  