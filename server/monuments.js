const monuments = [
    {
      "id": 1,
      "name": "Qız Qalası",
      "year": "XII əsr",
      "description": "Bakının ən məşhur tarixi simvolu.",
      "city": "Bakı",
      "image": "https://cdn.azertag.az/storage/files/2024/05/17/qizqalasi-174417_1920x1080.jpg"
    },
    {
      "id": 2,
      "name": "Şirvanşahlar Sarayı",
      "year": "XV əsr",
      "description": "UNESCO Ümumdünya irsi.",
      "city": "Bakı",
      "image": "https://medeniyyet.az/uploads/posts/2021-03/sirvansahlar-sarayi-kompleksi.jpg"
    },
    {
      "id": 3,
      "name": "Atəşgah Məbədi",
      "year": "XVII-XVIII əsrlər",
      "description": "Suraxanıda yerləşən atəşpərəst məbədi.",
      "city": "Suraxanı",
      "image": "https://cdn.azertag.az/storage/files/2022/08/10/ateshgah-174801_1920x1080.jpg"
    },
    {
      "id": 4,
      "name": "Şəki Xan Sarayı",
      "year": "XVIII əsr",
      "description": "UNESCO Ümumdünya irsi, unikal şəbəkə pəncərələri ilə.",
      "city": "Şəki",
      "image": "https://azertag.az/storage/files/2024/07/18/shekixansarayi-180144_1920x1080.jpg"
    },
    {
      "id": 5,
      "name": "Yanar Dağ",
      "year": "Təbii abidə",
      "description": "Abşeronda daim yanan qaz yatağı.",
      "city": "Bakı",
      "image": "https://cdn.azertag.az/storage/files/2023/01/10/yanardag-171948_1920x1080.jpg"
    },
    {
      "id": 6,
      "name": "Mömünə Xatun Türbəsi",
      "year": "1186-1187",
      "description": "Naxçıvanda memarlıq şedevri.",
      "city": "Naxçıvan",
      "image": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxvOERQGoji8p4v-g3gzI9a3X9Ihd3rK2dg6aH3Mp7odm8u8_zGsXkyblR2XjLVPJARw9pM_1MpgbSV55V5CHE8IRctAhGYh8KlCSnoWZHYSS6Z2IDFXxqSadooM_qmgZxlD4Nc=s680-w680-h510-rw"
    },
    {
      "id": 7,
      "name": "Bibiheybət Məscidi",
      "year": "1990-cı illər",
      "description": "Bakının ən müqəddəs məscidi.",
      "city": "Bakı",
      "image": "https://cdn.azertag.az/storage/files/2023/03/15/bibiheybet-171613_1920x1080.jpg"
    },
    {
      "id": 8,
      "name": "Gəncə Qapıları",
      "year": "XIV-XV əsrlər",
      "description": "Gəncənin tarixi şəhər darvazaları.",
      "city": "Gəncə",
      "image": "https://kataloq.gomap.az/images/ganja-gapilari.jpg"
    },
    {
      "id": 9,
      "name": "Heydər Məscidi",
      "year": "2014",
      "description": "Bakının müasir və ən böyük məscidlərindən biri.",
      "city": "Bakı",
      "image": "https://cdn.azertag.az/storage/files/2023/12/08/heyder-173830_1920x1080.jpg"
    },
    {
      "id": 10,
      "name": "Şuşa Qalası",
      "year": "1751-1752",
      "description": "Qarabağın tarixi mərkəzi.",
      "city": "Şuşa",
      "image": "https://azertag.az/storage/files/2024/01/10/shusha-qalasi-180259_1920x1080.jpg"
    },
    {
      "id": 11,
      "name": "Nizami Gəncəvinin Məqbərəsi",
      "year": "1947",
      "description": "Böyük Azərbaycan şairinin türbəsi.",
      "city": "Gəncə",
      "image": "https://medeniyyet.az/uploads/posts/2021-05/nizami-ganjevi-moqberesi.jpg"
    },
    {
      "id": 12,
      "name": "Lahıc Kəndi",
      "year": "Tarixi kənd",
      "description": "Misgərlik sənəti ilə məşhur tarixi kənd.",
      "city": "Lahıc",
      "image": "https://cdn.azertag.az/storage/files/2023/07/12/lahic-172838_1920x1080.jpg"
    },
    {
      "id": 13,
      "name": "Çiraq Qala",
      "year": "V-VI əsrlər",
      "description": "Qubada dağın yamacında qədim qala.",
      "city": "Quba",
      "image": "https://kataloq.gomap.az/images/chirag-qala.jpg"
    },
    {
      "id": 14,
      "name": "Qəbələ Qala",
      "year": "Antik dövr",
      "description": "Qədim Albaniyanın paytaxtı.",
      "city": "Qəbələ",
      "image": "https://medeniyyet.az/uploads/posts/2021-05/qebele-qala.jpg"
    },
    {
      "id": 15,
      "name": "Xınalıq Kəndi",
      "year": "Tarixi kənd",
      "description": "Unikal mədəniyyəti olan dağ kəndi.",
      "city": "Xınalıq",
      "image": "https://cdn.azertag.az/storage/files/2023/09/20/xinaliq-173044_1920x1080.jpg"
    },
    {
      "id": 16,
      "name": "Heydər Əliyev Mərkəzi",
      "year": "2012",
      "description": "Zaha Hadidin memarlıq əsəri.",
      "city": "Bakı",
      "image": "https://cdn.azertag.az/storage/files/2023/05/10/heydar-aliyev-merkezi-172559_1920x1080.jpg"
    },
    {
      "id": 17,
      "name": "Flame Towers",
      "year": "2012",
      "description": "Bakının müasir simvolu.",
      "city": "Bakı",
      "image": "https://cdn.azertag.az/storage/files/2023/11/15/alov-qulleleri-173734_1920x1080.jpg"
    },
    {
      "id": 18,
      "name": "Şamaxı Cümə Məscidi",
      "year": "743-cü il",
      "description": "Qafqazda ən qədim məscid.",
      "city": "Şamaxı",
      "image": "https://medeniyyet.az/uploads/posts/2021-05/shamaxi-cume-mescidi.jpg"
    },
    {
      "id": 19,
      "name": "Ağdam Cümə Məscidi",
      "year": "1868-1870",
      "description": "Kərbalayı Səfixan Qarabağinin əsəri.",
      "city": "Ağdam",
      "image": "https://azertag.az/storage/files/2023/11/24/agdam-mescidi-180020_1920x1080.jpg"
    },
    {
      "id": 20,
      "name": "Ordubad Tarixi Mərkəzi",
      "year": "Orta əsrlər",
      "description": "Naxçıvanda qədim şəhər.",
      "city": "Ordubad",
      "image": "https://medeniyyet.az/uploads/posts/2021-05/ordubad-tarixi-merkezi.jpg"
    },
    {
      "id": 21,
      "name": "Bərdə Türbəsi",
      "year": "1322",
      "description": "Bərdədə memarlıq abidəsi.",
      "city": "Bərdə",
      "image": "https://kataloq.gomap.az/images/berde-turbesi.jpg"
    },
    {
      "id": 22,
      "name": "Ağsoy Türbəsi",
      "year": "XII əsr",
      "description": "Naxçıvanda memarlıq nümunəsi.",
      "city": "Naxçıvan",
      "image": "https://medeniyyet.az/uploads/posts/2021-05/agsoy-turbesi.jpg"
    },
    {
      "id": 23,
      "name": "Qobustan Qayaüstü Təsvirləri",
      "year": "Tunc dövrü",
      "description": "UNESCO Ümumdünya irsi.",
      "city": "Qobustan",
      "image": "https://cdn.azertag.az/storage/files/2023/06/14/qobustan-172655_1920x1080.jpg"
    },
    {
      "id": 24,
      "name": "Nohur Göy Göl",
      "year": "Təbii abidə",
      "description": "Göygöl rayonunda dağ gölü.",
      "city": "Göygöl",
      "image": "https://cdn.azertag.az/storage/files/2023/08/16/goygol-172924_1920x1080.jpg"
    },
    {
      "id": 25,
      "name": "Şəki Karvan Sarayı",
      "year": "XVIII əsr",
      "description": "Tarixi mehmanxana.",
      "city": "Şəki",
      "image": "https://medeniyyet.az/uploads/posts/2021-05/sheki-karvan-sarayi.jpg"
    },
    {
      "id": 26,
      "name": "Səbail Qalası",
      "year": "XIII əsr",
      "description": "Bakı buxtasında sualtı qala.",
      "city": "Bakı",
      "image": "https://kataloq.gomap.az/images/sabail-qalasi.jpg"
    },
    {
      "id": 27,
      "name": "Sumuq Qala",
      "year": "XVIII əsr",
      "description": "Qusarda tarixi qala.",
      "city": "Qusar",
      "image": "https://medeniyyet.az/uploads/posts/2021-05/sumuq-qala.jpg"
    },
    {
      "id": 28,
      "name": "Xudafərin Körpüləri",
      "year": "XI-XIII əsrlər",
      "description": "Araz çayı üzərində tarixi körpülər.",
      "city": "Culfa",
      "image": "https://cdn.azertag.az/storage/files/2023/10/18/xudaferin-173432_1920x1080.jpg"
    },
    {
      "id": 29,
      "name": "Şah Abbas Məscidi",
      "year": "1606",
      "description": "Gəncədə tarixi məscid.",
      "city": "Gəncə",
      "image": "https://medeniyyet.az/uploads/posts/2021-05/shah-abbas-mescidi.jpg"
    },
    {
      "id": 30,
      "name": "İçərişəhər",
      "year": "Orta əsrlər",
      "description": "UNESCO Ümumdünya irsi, tarixi qala şəhəri.",
      "city": "Bakı",
      "image": "https://cdn.azertag.az/storage/files/2023/04/12/icherisheher-172321_1920x1080.jpg"
    }
  ]

module.exports = monuments;
