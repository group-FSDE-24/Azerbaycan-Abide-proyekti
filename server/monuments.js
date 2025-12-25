const monuments = [
  {
    "id": 1,
    "name": "Qız Qalası",
    "year": "XII əsr",
    "description": "Bakının ən məşhur tarixi simvolu.",
    "city": "Bakı",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Q%C4%B1z_qalas%C4%B1_%C3%BCmumi_2016.jpg/960px-Q%C4%B1z_qalas%C4%B1_%C3%BCmumi_2016.jpg?20160911191106n"
  },
  {
    "id": 2,
    "name": "Şirvanşahlar Sarayı",
    "year": "XV əsr",
    "description": "UNESCO Ümumdünya irsi.",
    "city": "Bakı",
    "image": "https://portal.azertag.az/sites/default/files/shirvan5.JPG"
  },
  {
    "id": 3,
    "name": "Atəşgah Məbədi",
    "year": "XVII-XVIII əsrlər",
    "description": "Suraxanıda yerləşən atəşpərəst məbədi.",
    "city": "Suraxanı",
    "image": "https://ateshgahtemple.az/wp-content/themes/theme/images/enter2.png"
  },
  {
    "id": 4,
    "name": "Şəki Xan Sarayı",
    "year": "XVIII əsr",
    "description": "UNESCO Ümumdünya irsi, unikal şəbəkə pəncərələri ilə.",
    "city": "Şəki",
    "image": "https://trippost.az/wp-content/uploads/2025/04/c86fa407-8dc2-4558-9f84-d44461909e89-scaled.jpg"
  },
  {
    "id": 5,
    "name": "Yanar Dağ",
    "year": "Təbii abidə",
    "description": "Abşeronda daim yanan qaz yatağı.",
    "city": "Bakı",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Yanar_Dagh.JPG/330px-Yanar_Dagh.JPG"
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
    "image": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy6WEA7YKR6K5jH--kYCtKQhvXsLLGbXiTQ_6rZ0fHhW3Z5UCJdrd2x0yDYPPadwOAfjhbHul8VireHsqxxG_naFBAewFe5QhigXc4_EbkhsiZTaRKDmExEHfwd_MgPD6wOzE7fmw=s680-w680-h510-rw"
  },
  {
    "id": 8,
    "name": "Gəncə Qapıları",
    "year": "XIV-XV əsrlər",
    "description": "Gəncənin tarixi şəhər darvazaları.",
    "city": "Gəncə",
    "image": "https://heydar-aliyev-foundation.org/uploads/images/img_8194_slide2.jpg"
  },
  {
    "id": 9,
    "name": "Heydər Məscidi",
    "year": "2014",
    "description": "Bakının müasir və ən böyük məscidlərindən biri.",
    "city": "Bakı",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/77/Haydar_Mescidi.jpg"
  },
  {
    "id": 10,
    "name": "Şuşa Qalası",
    "year": "1751-1752",
    "description": "Qarabağın tarixi mərkəzi.",
    "city": "Şuşa",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cc/%C5%9Eu%C5%9Fa_qalas%C4%B1_2024-c%C3%BC_ilin_aprelind%C9%99.jpg"
  },
  {
    "id": 11,
    "name": "Nizami Gəncəvinin Məqbərəsi",
    "year": "1947",
    "description": "Böyük Azərbaycan şairinin türbəsi.",
    "city": "Gəncə",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/36/Nizami_m%C9%99qb%C9%99r%C9%99si_-_poster.jpg"
  },
  {
    "id": 12,
    "name": "Lahıc Kəndi",
    "year": "Tarixi kənd",
    "description": "Misgərlik sənəti ilə məşhur tarixi kənd.",
    "city": "Lahıc",
    "image": "https://lh5.googleusercontent.com/proxy/U3c5uR_kdsLIw2fxaIAV_YYDEOEu6S9DWpNKCKlDL4VoLiMl8sGD8wJYiZv6Iy9l90k4hflnuZhPFFMHuAhBTPGWn_LQHyuzL13qVq_X"
  },
  {
    "id": 13,
    "name": "Çiraq Qala",
    "year": "V-VI əsrlər",
    "description": "Qubada dağın yamacında qədim qala.",
    "city": "Quba",
    "image": "data:image/jpeg;base64,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"
  },
  {
    "id": 14,
    "name": "Qəbələ Qala",
    "year": "Antik dövr",
    "description": "Qədim Albaniyanın paytaxtı.",
    "city": "Qəbələ",
    "image": "http://irs.gov.az/upload/Qbl-DTB-Qoruu-2.jpg"
  },
  {
    "id": 15,
    "name": "Xınalıq Kəndi",
    "year": "Tarixi kənd",
    "description": "Unikal mədəniyyəti olan dağ kəndi.",
    "city": "Xınalıq",
    "image": "https://khinalig.heritage.org.az/storage/uploads/2023/06/08/27_Khinalig_(41).jpg"
  },
  {
    "id": 16,
    "name": "Heydər Əliyev Mərkəzi",
    "year": "2012",
    "description": "Zaha Hadidin memarlıq əsəri.",
    "city": "Bakı",
    "image": "https://upload.wikimedia.org/wikipedia/tr/thumb/5/50/Haydar_Aliyev_K%C3%BClt%C3%BCr_Merkezi.jpg/250px-Haydar_Aliyev_K%C3%BClt%C3%BCr_Merkezi.jpg"
  },
  {
    "id": 17,
    "name": "Flame Towers",
    "year": "2012",
    "description": "Bakının müasir simvolu.",
    "city": "Bakı",
    "image": "https://www.schueco.com/resource/responsive-image/81412/m10-page-intro/xl/1/3103a12.webp"
  },
  {
    "id": 18,
    "name": "Şamaxı Cümə Məscidi",
    "year": "743-cü il",
    "description": "Qafqazda ən qədim məscid.",
    "city": "Şamaxı",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/%C5%9Eamax%C4%B1_c%C3%BCm%C9%99_m%C9%99scidi.jpg"
  },
  {
    "id": 19,
    "name": "Ağdam Cümə Məscidi",
    "year": "1868-1870",
    "description": "Kərbalayı Səfixan Qarabağinin əsəri.",
    "city": "Ağdam",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/A%C4%9Fdam_C%C3%BCm%C9%99_m%C9%99scidi_restavrasiyadan_sonra%2C_2024-c%C3%BC_ilin_aprelind%C9%99.jpg/330px-A%C4%9Fdam_C%C3%BCm%C9%99_m%C9%99scidi_restavrasiyadan_sonra%2C_2024-c%C3%BC_ilin_aprelind%C9%99.jpg"
  },
  {
    "id": 20,
    "name": "Ordubad Tarixi Mərkəzi",
    "year": "Orta əsrlər",
    "description": "Naxçıvanda qədim şəhər.",
    "city": "Ordubad",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Ordubad_c%C3%BCm%C9%99_m%C9%99scidi_%C3%BCmumi_g%C3%B6r%C3%BCn%C3%BC%C5%9F.jpg"
  },
  {
    "id": 21,
    "name": "Bərdə Türbəsi",
    "year": "1322",
    "description": "Bərdədə memarlıq abidəsi.",
    "city": "Bərdə",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5LjLTF9GMgej4nzj0yPmACLMHiwCcFhFiXQ&s"
  },
  {
    "id": 22,
    "name": "Ağsoy Türbəsi",
    "year": "XII əsr",
    "description": "Naxçıvanda memarlıq nümunəsi.",
    "city": "Naxçıvan",
    "image": "https://lh3.googleusercontent.com/proxy/gtB1Afhs0j1OXoPtR3l2ZEqNnxjmCR0RFDGGCVpo6761SZQrOzb_cq2CX_mALv__6b_yMFqB20g7YoB5gVGpGPmytTJNzMUzPHM"
  },
  {
    "id": 23,
    "name": "Qobustan Qayaüstü Təsvirləri",
    "year": "Tunc dövrü",
    "description": "UNESCO Ümumdünya irsi.",
    "city": "Qobustan",
    "image": "https://www.unesco.az/storage/157/conversions/gobustan_heritage_icon_01-culture_thumb.jpg"
  },
  {
    "id": 24,
    "name": "Nohur Göy Göl",
    "year": "Təbii abidə",
    "description": "Göygöl rayonunda dağ gölü.",
    "city": "Göygöl",
    "image": "https://cdn.touryup.com/i/img/nohur-lake-tour-travel-azerbaijan-gabala.jpg"
  },
  {
    "id": 25,
    "name": "Şəki Karvan Sarayı",
    "year": "XVIII əsr",
    "description": "Tarixi mehmanxana.",
    "city": "Şəki",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/G%C3%B3rny_ksaverey.jpg/1200px-G%C3%B3rny_ksaverey.jpg"
  },
  {
    "id": 26,
    "name": "Səbail Qalası",
    "year": "XIII əsr",
    "description": "Bakı buxtasında sualtı qala.",
    "city": "Bakı",
    "image": "https://portal.azertag.az/uploads/thumbnails/5c57e4717c949.jpg"
  },
  {
    "id": 27,
    "name": "Sumuq Qala",
    "year": "XVIII əsr",
    "description": "Qusarda tarixi qala.",
    "city": "Qusar",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Sumuqqala.jpg"
  },
  {
    "id": 28,
    "name": "Xudafərin Körpüləri",
    "year": "XI-XIII əsrlər",
    "description": "Araz çayı üzərində tarixi körpülər.",
    "city": "Culfa",
    "image": "https://lh3.googleusercontent.com/proxy/L3oKFx_X1Vx0oElSpHDaU8nQIsYWHh3mDqrkk_v-PAGadW6yqn3wcui5iHLAC-YKTLlSqEL9YAziFeiyyUPwtWRURYV1iX4B5r-diDMU"
  },
  {
    "id": 29,
    "name": "Şah Abbas Məscidi",
    "year": "1606",
    "description": "Gəncədə tarixi məscid.",
    "city": "Gəncə",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9h7pB_AVoZDYkWg8Hv1r9nSX11fRnsqd5Q&s"
  },
  {
    "id": 30,
    "name": "İçərişəhər",
    "year": "Orta əsrlər",
    "description": "UNESCO Ümumdünya irsi, tarixi qala şəhəri.",
    "city": "Bakı",
    "image": "https://portal.azertag.az/sites/default/files/ensgalery/hh9nlavxtgmqiyxyiqre.jpg"
  }
]

module.exports = monuments;
