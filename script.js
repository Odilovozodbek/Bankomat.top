/* Bankomat — plain JavaScript; no build step is required. */
'use strict';

const ATM_SNAPSHOT = {"date":"29.10.2026","source":"https://www.openstreetmap.org/copyright","bbox":[69.255,41.3,69.295,41.325],"elements":[{"type":"node","id":565344469,"lat":41.3113562,"lon":69.2826928,"tags":{"amenity":"atm","check_date":"2026-10-17","name":"Visa"},"nearbyStreet":"Mustaqillik shoh ko'chasi"},{"type":"node","id":2672727939,"lat":41.3100217,"lon":69.2777861,"tags":{"addr:city":"Ташкент","addr:housenumber":"4","addr:postcode":"100047","addr:street":"Amir Temur shoh ko'chasi","amenity":"bank","atm":"yes","check_date":"2026-08-31","check_date:opening_hours":"2026-08-31","email":"info@aloqabank.uz","name":"MKBank","name:en":"MKBank","name:ru":"МКБанк","name:uz":"Aloqabank","opening_hours":"Mo-Fr 09:00-13:00, 14:00-18:00","phone":"+998555036363","website":"https://www.mkbank.uz"}},{"type":"node","id":4333788557,"lat":41.3104423,"lon":69.2748658,"tags":{"amenity":"atm","opening_hours":"24/7","operator":"Kapital Bank"},"nearbyStreet":"Нуронийлар улица"},{"type":"node","id":4333802757,"lat":41.3122366,"lon":69.2753507,"tags":{"amenity":"atm","opening_hours":"24/7","operator":"Kapital Bank"},"nearbyStreet":"Brodvey"},{"type":"node","id":5143112422,"lat":41.3188373,"lon":69.2852659,"tags":{"amenity":"atm","name:ru":"Банкомат на Алайском базаре","opening_hours":"Mo-Su 08:00-20:00"},"nearbyStreet":"Алайская улица"},{"type":"node","id":5406652923,"lat":41.3086267,"lon":69.2760191,"tags":{"amenity":"atm","operator":"visa"},"nearbyStreet":"Taras Shevchenko ko'chasi"},{"type":"node","id":5485940366,"lat":41.3113598,"lon":69.2750081,"tags":{"amenity":"atm","name:ru":"Банкомат в «ТЦ Пойтахт»"},"nearbyStreet":"Matbuotchilar ko'chasi"},{"type":"node","id":5895818086,"lat":41.3165088,"lon":69.2773147,"tags":{"amenity":"atm"},"nearbyStreet":"Istiqlol ko‘chasi"},{"type":"node","id":6112534141,"lat":41.3222761,"lon":69.2800735,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","operator":"IPAK YO'LI BANKI","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Abdulla Qodiriy ko'chasi"},{"type":"node","id":6112534142,"lat":41.3200236,"lon":69.2821705,"tags":{"amenity":"atm","check_date":"2026-04-02","opening_hours":"24/7","operator":"Kapitalbank"},"nearbyStreet":"Oloy Bozori berk ko`chasi"},{"type":"node","id":6124481662,"lat":41.3224597,"lon":69.2551704,"tags":{"amenity":"atm"},"nearbyStreet":"Abay ko'chasi"},{"type":"node","id":6194563217,"lat":41.3081347,"lon":69.2696081,"tags":{"amenity":"atm","cash_in":"yes","check_date":"2026-07-01","name":"Asia alliance bank"},"nearbyStreet":"Chimkent ko'chasi"},{"type":"node","id":6246744887,"lat":41.3070368,"lon":69.2934717,"tags":{"amenity":"atm"},"nearbyStreet":"Mahtumquli ko'chasi"},{"type":"node","id":6284271078,"lat":41.3044978,"lon":69.2834847,"tags":{"amenity":"atm","check_date":"2021-10-05","fee":"varies","operator":"Milliy bank"},"nearbyStreet":"Shahrisabz o'tish ko'chasi"},{"type":"node","id":6345519886,"lat":41.3010226,"lon":69.2627655,"tags":{"amenity":"atm","cash_in":"no","check_date":"2024-09-28","operator":"Kapital24"},"nearbyStreet":"Yusuf Xos Hojib ko'chasi"},{"type":"node","id":6345519986,"lat":41.3010445,"lon":69.2634196,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","cash_in":"no","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","indoor":"yes","opening_hours":"24/7","operator":"Bank Ipak Yo'li","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Sarabuston ko'chasi"},{"type":"node","id":6531573986,"lat":41.3032258,"lon":69.2804258,"tags":{"amenity":"atm","check_date":"2021-10-05","operator":"кишлок курилиш банк"},"nearbyStreet":"Shahrisabz ko'chasi"},{"type":"node","id":6603488477,"lat":41.3042197,"lon":69.2715712,"tags":{"amenity":"atm"},"nearbyStreet":"Yakob Kolas ko'chasi"},{"type":"node","id":8284154105,"lat":41.31749,"lon":69.2852699,"tags":{"amenity":"atm"},"nearbyStreet":"Алайская улица"},{"type":"node","id":8284154106,"lat":41.3192789,"lon":69.2828318,"tags":{"amenity":"atm","cash_in":"yes","contact:email":"info@ipotekabank.uz","contact:facebook":"https://facebook.com/ipotekabankofficial","contact:linkedin":"https://www.linkedin.com/company/ipotekabankofficial","contact:phone":"+998 78 150 11 22;1233","contact:website":"https://www.ipotekabank.uz","contact:youtube":"https://www.youtube.com/channel/UCWbVXOJEM1tB6iax7rkGWRg","opening_hours":"24/7","operator":"JSIB \"Ipoteka-Bank\"","telegram":"https://t.me/ipotekabankofficial"},"nearbyStreet":"Amir Temur shoh ko'chasi"},{"type":"node","id":9151185676,"lat":41.3189524,"lon":69.2849265,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Алайская улица"},{"type":"node","id":9151185867,"lat":41.3191333,"lon":69.2844509,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Алайская улица"},{"type":"node","id":9151187948,"lat":41.3189831,"lon":69.2845896,"tags":{"amenity":"atm"},"nearbyStreet":"Алайская улица"},{"type":"node","id":10068853017,"lat":41.304548,"lon":69.2609669,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","operator":"IPAK YO'LI BANKI","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Rakatboshi ko'chasi"},{"type":"node","id":10068853117,"lat":41.3037911,"lon":69.2610124,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","operator":"IPAK YO'LI BANKI","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Rakatboshi ko'chasi"},{"type":"node","id":10068868619,"lat":41.3116154,"lon":69.2741428,"tags":{"amenity":"atm","cash_in":"yes","check_date":"2026-07-01","operator":"Tenge Bank"},"nearbyStreet":"Zarafshan ko'chasi"},{"type":"node","id":10805355028,"lat":41.3116978,"lon":69.2900895,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","operator":"IPAK YO'LI BANKI","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"O'zbekiston Ovozi ko'chasi"},{"type":"node","id":11187981650,"lat":41.3138264,"lon":69.2800373,"tags":{"amenity":"atm","brand":"SQB","contact:phone":"+998 71 200 43 43;1180","contact:website":"https://sqb.uz","opening_hours":"24/7","operator":"Ташкентский областной региональный офис банковских услуг"},"nearbyStreet":"Amir Temur shoh ko'chasi"},{"type":"node","id":11187981656,"lat":41.3125124,"lon":69.2813569,"tags":{"amenity":"atm","brand":"SQB","contact:phone":"+998 71 200 43 43;1180","contact:website":"https://sqb.uz","opening_hours":"24/7","operator":"Мирзо-Улугбекский центр банковских услуг"},"nearbyStreet":"Mustaqillik shoh ko'chasi"},{"type":"node","id":11385588912,"lat":41.3066291,"lon":69.2783153,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","operator":"IPAK YO'LI BANKI","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Amir Temur shoh ko'chasi"},{"type":"node","id":11385588917,"lat":41.3104814,"lon":69.2874268,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","operator":"IPAK YO'LI BANKI","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Shahrisabz ko'chasi"},{"type":"node","id":11385588930,"lat":41.307699,"lon":69.278533,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","operator":"IPAK YO'LI BANKI","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Amir Temur shoh ko'chasi"},{"type":"node","id":11385595675,"lat":41.3067055,"lon":69.2916837,"tags":{"amenity":"atm","brand":"Ipak Yoʻli banki","brand:wikidata":"Q25534044","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","operator":"Ipak Yoʻli banki","operator:wikidata":"Q25534044","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Sodiq Azimov ko'chasi"},{"type":"node","id":11385595710,"lat":41.3165656,"lon":69.278444,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Navoiy ko'chasi"},{"type":"node","id":11385595717,"lat":41.3173714,"lon":69.2801124,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Navoiy ko'chasi"},{"type":"node","id":11385595723,"lat":41.3144437,"lon":69.2934915,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Maxatma Gandi ko'chasi"},{"type":"node","id":11385595739,"lat":41.3110193,"lon":69.2825935,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Mahtumquli ko'chasi"},{"type":"node","id":11385595743,"lat":41.3224236,"lon":69.2807829,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Abdulla Qodiriy ko'chasi"},{"type":"node","id":11505707667,"lat":41.3081009,"lon":69.2862047,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","operator":"IPAK YO'LI BANKI","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Shahrisabz ko'chasi"},{"type":"node","id":11510417515,"lat":41.3075378,"lon":69.2826497,"tags":{"amenity":"atm","contact:email":"feedback@tengebank.uz","contact:facebook":"https://facebook.com/tengebank.uz","contact:instagram":"https://instagram.com/tengebankuz","contact:phone":"+998 71 200 12 45;1245","contact:website":"https://tengebank.uz/","contact:youtube":"https://youtube.com/@tengebankuz","opening_hours":"Mo-Su 12:00-01:00","telegram":"https://t.me/tengebankuz"},"nearbyStreet":"Istiqbol ko'chasi"},{"type":"node","id":11510417516,"lat":41.316251,"lon":69.278344,"tags":{"amenity":"atm","contact:email":"feedback@tengebank.uz","contact:facebook":"https://facebook.com/tengebank.uz","contact:instagram":"https://instagram.com/tengebankuz","contact:phone":"+998 71 200 12 45;1245","contact:website":"https://tengebank.uz/","contact:youtube":"https://youtube.com/@tengebankuz","name":"Tenge bank","opening_hours":"24/7","telegram":"https://t.me/tengebankuz"},"nearbyStreet":"Istiqlol ko‘chasi"},{"type":"node","id":11510417520,"lat":41.317323,"lon":69.2803431,"tags":{"amenity":"atm","check_date":"2026-04-06","contact:facebook":"https://facebook.com/tengebank.uz","contact:instagram":"https://instagram.com/tengebankuz","contact:phone":"+998 71 200 12 45;1245","contact:website":"https://tengebank.uz/","contact:youtube":"https://youtube.com/@tengebankuz","opening_hours":"24/7","telegram":"https://t.me/tengebankuz"},"nearbyStreet":"Navoiy ko'chasi"},{"type":"node","id":11510417530,"lat":41.3149338,"lon":69.2824969,"tags":{"amenity":"atm","contact:email":"feedback@tengebank.uz","contact:facebook":"https://facebook.com/tengebank.uz","contact:instagram":"https://instagram.com/tengebankuz","contact:phone":"+998 71 200 12 45;1245","contact:website":"https://tengebank.uz/","contact:youtube":"https://youtube.com/@tengebankuz","opening_hours":"24/7","telegram":"https://t.me/tengebankuz"},"nearbyStreet":"Istiqlol ko'chasi"},{"type":"node","id":11510417533,"lat":41.3075076,"lon":69.2843154,"tags":{"amenity":"atm","contact:email":"feedback@tengebank.uz","contact:facebook":"https://facebook.com/tengebank.uz","contact:instagram":"https://instagram.com/tengebankuz","contact:phone":"+998 71 200 12 45;1245","contact:website":"https://tengebank.uz/","contact:youtube":"https://youtube.com/@tengebankuz","opening_hours":"24/7","telegram":"https://t.me/tengebankuz"},"nearbyStreet":"Shahrisabz ko'chasi"},{"type":"node","id":11510417566,"lat":41.3115895,"lon":69.2825076,"tags":{"amenity":"atm","contact:email":"feedback@tengebank.uz","contact:facebook":"https://facebook.com/tengebank.uz","contact:instagram":"https://instagram.com/tengebankuz","contact:phone":"+998 71 200 12 45;1245","contact:website":"https://tengebank.uz/","contact:youtube":"https://youtube.com/@tengebankuz","opening_hours":"24/7","telegram":"https://t.me/tengebankuz"},"nearbyStreet":"Mustaqillik shoh ko'chasi"},{"type":"node","id":11672276292,"lat":41.3021291,"lon":69.2867477,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Sodiq Azimov ko'chasi"},{"type":"node","id":11672276346,"lat":41.30974,"lon":69.292472,"tags":{"amenity":"atm","brand":"Ipak Yoʻli banki","brand:wikidata":"Q25534044","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","operator":"Ipak Yoʻli banki","operator:wikidata":"Q25534044","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Sodiq Azimov ko'chasi"},{"type":"node","id":11672276365,"lat":41.3181368,"lon":69.2762137,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Navoiy ko'chasi"},{"type":"node","id":11813558270,"lat":41.3110502,"lon":69.2750348,"tags":{"amenity":"atm","cash_in":"yes","check_date":"2026-07-01","opening_hours":"24/7","operator":"Kapitalbank"},"nearbyStreet":"Нуронийлар улица"},{"type":"node","id":11925690882,"lat":41.3189165,"lon":69.2553985,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Sheriyat Bog'i ko'chasi"},{"type":"node","id":11925690914,"lat":41.3119481,"lon":69.2829877,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Mustaqillik shoh ko'chasi"},{"type":"node","id":11925690926,"lat":41.3157477,"lon":69.2828482,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Shahrisabz ko'chasi"},{"type":"node","id":11925690938,"lat":41.3001208,"lon":69.2834597,"tags":{"amenity":"atm","brand":"Ipak Yoli banki","contact:email":"info@ipakyulibank.uz","contact:facebook":"https://www.facebook.com/ipakyulibankuz","contact:instagram":"https://www.instagram.com/ipakyulibank","contact:linkedin":"https://www.linkedin.com/company/ipak-yuli-bank","contact:phone":"+998 78 140 69 00;1296","contact:website":"https://ipakyulibank.uz","opening_hours":"24/7","telegram":"https://t.me/ipakyulibankuz"},"nearbyStreet":"Sodiq Azimov ko'chasi"},{"type":"node","id":11987707272,"lat":41.3121939,"lon":69.2730502,"tags":{"amenity":"atm","contact:email":"info@garantbank.uz","contact:facebook":"https://www.facebook.com/garantbank.uzb","contact:instagram":"https://www.instagram.com/garantbank.uz","contact:phone":"+998 71 203 02 42","contact:website":"https://www.garantbank.uz","opening_hours":"24/7","operator":"Гарант банк","telegram":"https://t.me/garantbankuz_official"},"nearbyStreet":"Matbuotchilar ko'chasi"},{"type":"node","id":12247084549,"lat":41.3170429,"lon":69.2823026,"tags":{"addr:housenumber":"3","addr:postcode":"100000","addr:street":"Shahrisabz ko'chasi","amenity":"bank","atm":"yes","contact:phone":"+998 71 200 43 43;1180","contact:website":"https://sqb.uz","name":"Oʻzsanoatqurilishbank","name:ru":"Узпромстройбанк Операционное управление","opening_hours":"Mo-Fr 09:00-18:00","operator":"Корпоративный офис банковских услуг"}},{"type":"node","id":12247085028,"lat":41.3143947,"lon":69.2853762,"tags":{"addr:housenumber":"17","addr:street":"Mustaqillik shoh ko'chasi","amenity":"bank","atm":"yes","name":"Ipoteka Bank","name:ru":"\"Ипотека Банк\" Ташкентский Городской филиал","opening_hours":"Mo-Fr 09:00-18:00","phone":"+998712320609"}},{"type":"node","id":12450601047,"lat":41.3115424,"lon":69.2749439,"tags":{"amenity":"atm","name":"AVO","opening_hours":"Mo-Su 10:00-19:00","website":"https://avo.uz/"},"nearbyStreet":"Matbuotchilar ko'chasi"},{"type":"node","id":12498084591,"lat":41.3138882,"lon":69.285276,"tags":{"amenity":"atm","contact:email":"info@ipotekabank.uz","contact:facebook":"https://facebook.com/ipotekabankofficial","contact:linkedin":"https://www.linkedin.com/company/ipotekabankofficial","contact:phone":"+998 78 150 11 22;1233","contact:website":"https://www.ipotekabank.uz","contact:youtube":"https://www.youtube.com/channel/UCWbVXOJEM1tB6iax7rkGWRg","opening_hours":"24/7","operator":"JSIB \"Ipoteka-Bank\"","telegram":"https://t.me/ipotekabankofficial"},"nearbyStreet":"Mustaqillik shoh ko'chasi"},{"type":"node","id":13033287201,"lat":41.3000064,"lon":69.2709605,"tags":{"amenity":"atm","opening_hours":"24/7","operator":"Apexbank"},"nearbyStreet":"Afrosiyob ko'chasi"},{"type":"node","id":13033287202,"lat":41.3005777,"lon":69.270165,"tags":{"amenity":"atm","cash_in":"yes","opening_hours":"24/7","operator":"Kapitalbank"},"nearbyStreet":"Afrosiyob ko'chasi"},{"type":"node","id":14046323459,"lat":41.3190407,"lon":69.2932615,"tags":{"amenity":"atm","operator":"Kapitalbank"},"nearbyStreet":"Qori Niyoziy ko'chasi"},{"type":"node","id":14137279401,"lat":41.3102339,"lon":69.2772869,"tags":{"amenity":"atm","check_date":"2026-08-31","check_date:opening_hours":"2026-08-31","opening_hours":"24/7","operator":"MKBank"},"nearbyStreet":"Matbuotchilar ko'chasi"},{"type":"way","id":32261995,"tags":{"addr:housenumber":"9","addr:street":"Istiqlol ko'chasi","amenity":"bank","atm":"yes","building":"yes","contact:email":"info@ipotekabank.uz","contact:facebook":"https://facebook.com/ipotekabankofficial","contact:linkedin":"https://www.linkedin.com/company/ipotekabankofficial","contact:phone":"+998 78 150 11 22","contact:website":"https://www.ipotekabank.uz","contact:youtube":"https://www.youtube.com/channel/UCWbVXOJEM1tB6iax7rkGWRg","name":"Ipoteka bank","name:ru":"\"Ипотека Банк\" Мехнатский филиал","opening_hours":"Mo-Fr 09:00-17:30","operator":"JSIB \"Ipoteka-Bank\"","telegram":"https://t.me/ipotekabankofficial"},"center":{"lat":41.3143602875,"lon":69.28408466249999}},{"type":"way","id":32262012,"tags":{"addr:city":"Toshkent","addr:country":"UZ","addr:housenumber":"5","addr:postcode":"100000","addr:street":"Mustaqillik shoh ko'chasi","amenity":"bank","atm":"yes","building":"yes","building:levels":"7","contact:phone":"+998 71 200 43 43;1180","contact:website":"https://sqb.uz","name":"SQB","name:ru":"Узпромстройбанк городской филиал","opening_hours":"Mo-Fr 09:00-18:00","operator":"Ташкентский областной региональный офис банковских услуг"},"center":{"lat":41.3126073,"lon":69.28233666000001}},{"type":"way","id":32902758,"tags":{"amenity":"bank","atm":"yes","building":"yes","contact:email":"support@nbu.uz","contact:facebook":"https://www.facebook.com/uznbu","contact:instagram":"https://www.instagram.com/nbu.official","contact:phone":"+998 78 147 15 34;+998 78 148 00 10;1344","contact:twitter":"https://twitter.com/nbu_official","contact:website":"https://nbu.uz","name":"NBU","name:ru":"НБУ","opening_hours":"Mo-Fr 09:00-17:00","operator":"НАЦИОНАЛЬНЫЙ БАНК ВЭД РУ","telegram":"https://t.me/nbu_official"},"center":{"lat":41.3171408625,"lon":69.2949480375},"nearbyStreet":"Movarounnahr ko'chasi"},{"type":"way","id":95513977,"tags":{"addr:city":"Tashkent","addr:country":"UZ","addr:housenumber":"7","addr:postcode":"100038","addr:street":"Navoiy shoh ko'chasi","amenity":"bank","atm":"yes","building":"yes","building:levels":"5","name":"Trastbank","opening_hours":"Mo-Fr 08:30-20:00","operator":"Trastbank"},"center":{"lat":41.319980480000005,"lon":69.26385813333333}},{"type":"way","id":105437569,"tags":{"addr:housenumber":"15","addr:street":"Mustaqillik shoh ko'chasi","amenity":"bank","atm":"yes","building":"yes","contact:email":"info@ipotekabank.uz","contact:facebook":"https://facebook.com/ipotekabankofficial","contact:linkedin":"https://www.linkedin.com/company/ipotekabankofficial","contact:phone":"+998 78 150 11 22","contact:website":"https://www.ipotekabank.uz","contact:youtube":"https://www.youtube.com/channel/UCWbVXOJEM1tB6iax7rkGWRg","height":"10","name":"Ipoteka bank","name:ru":"\"Ипотека Банк\" ОПЕРУ Ташкентского Городского филиала","opening_hours":"Mo-Fr 09:00-16:00","operator":"JSIB \"Ipoteka-Bank\"","telegram":"https://t.me/ipotekabankofficial"},"center":{"lat":41.31404395,"lon":69.2854587875}},{"type":"way","id":105437570,"tags":{"addr:city":"Toshkent","addr:postcode":"100000","amenity":"bank","atm":"yes","building":"yes","name":"Банк","name:en":"Bank","name:ru":"Инвест Финанс Банк"},"center":{"lat":41.313809461111106,"lon":69.28473635555555},"nearbyStreet":"Mustaqillik shoh ko'chasi"},{"type":"way","id":108294642,"tags":{"addr:city":"Toshkent","addr:country":"UZ","addr:housenumber":"95","addr:postcode":"100060","addr:street":"Yax'yo Gulomov ko'chasi","amenity":"bank","atm":"yes","building":"yes","building:levels":"10","contact:email":"support@nbu.uz","contact:facebook":"https://www.facebook.com/uznbu","contact:instagram":"https://www.instagram.com/nbu.official","contact:phone":"+998 78 129 02 76;+998 78 147 15 72;+998 78 148 00 10;1344","contact:twitter":"https://twitter.com/nbu_official","contact:website":"https://nbu.uz","name":"NBU","name:ru":"НБУ","opening_hours":"Mo-Fr 09:00-17:00","operator":"НАЦИОНАЛЬНЫЙ БАНК ВЭД РУ","telegram":"https://t.me/nbu_official"},"center":{"lat":41.3043967625,"lon":69.284014525}},{"type":"way","id":441104838,"tags":{"addr:city":"Ташкент","addr:housenumber":"4A","addr:postcode":"100011","addr:street":"Abay ko'chasi","amenity":"bank","atm":"yes","building":"yes","building:levels":"4","name":"Turon bank","operator":"Turon bank","phone":"+998 95 144600;+998 93 2020101"},"center":{"lat":41.322565455555555,"lon":69.25529154444445}}]};

(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const paths = {
    pin:'<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/>',
    map:'<path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15M15 6v15"/>',
    bookmark:'<path d="M6 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17l-6-4-6 4V4Z"/>',
    bank:'<path d="m3 9 9-6 9 6H3ZM3 21h18M5 18V12M10 18V12M14 18V12M19 18V12"/>',
    settings:'<path d="m9 3-.7 3-2.5 1-2.6-.8-1.5 2.6L4 11v2l-2.3 2.2 1.5 2.6 2.6-.8 2.5 1 .7 3h3l.7-3 2.5-1 2.6.8 1.5-2.6L17 13v-2l2.3-2.2-1.5-2.6-2.6.8-2.5-1-.7-3H9Z" transform="translate(1 0)"/><circle cx="12" cy="12" r="3"/>',
    help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4.1 2c-1 .7-1.6 1-1.6 2.5M12 17h.01"/>',
    shield:'<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    home:'<path d="m3 10 9-7 9 7v10H3V10Z"/><path d="M9 20v-7h6v7"/>',
    'chevron-down':'<path d="m6 9 6 6 6-6"/>',
    moon:'<path d="M21 13a9 9 0 0 1-10-10 9 9 0 1 0 10 10Z"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/>',
    monitor:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
    user:'<circle cx="12" cy="8" r="3.5"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/>',
    search:'<circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5 5"/>',
    locate:'<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
    sliders:'<path d="M4 5h16M4 12h16M4 19h16"/><circle cx="8" cy="5" r="2" fill="var(--surface)"/><circle cx="16" cy="12" r="2" fill="var(--surface)"/><circle cx="10" cy="19" r="2" fill="var(--surface)"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    deposit:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M7 11h10M12 3v8m-3-3 3 3 3-3M7 16h3"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    minus:'<path d="M5 12h14"/>',
    expand:'<path d="M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6"/>',
    refresh:'<path d="M20 7v5h-5M4 17v-5h5"/><path d="M6.1 6a8 8 0 0 1 13 2.5M17.9 18a8 8 0 0 1-13-2.5"/>',
    x:'<path d="m6 6 12 12M18 6 6 18"/>',
    'arrow-right':'<path d="M4 12h16m-6-6 6 6-6 6"/>',
    'arrow-up-right':'<path d="M6 18 18 6M6 6h12v12"/>',
    route:'<path d="m3 11 18-8-8 18-2-8-8-2Z"/>',
    eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>'
  };
  const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.pin}</svg>`;
  const icons = (root = document) => $$('[data-icon]',root).forEach(el => { el.innerHTML = icon(el.dataset.icon); });
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  // SECURITY_HELPERS_START — shared by the application and adversarial tests.
  const isRecord = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const safeText = (value, limit = 160) => typeof value === 'string'
    ? value.replace(/[\u0000-\u001f\u007f\u202a-\u202e\u2066-\u2069]/g,'').trim().slice(0,limit) : '';
  const validCoordinates = value => isRecord(value) && typeof value.lat === 'number' && typeof value.lon === 'number'
    && Number.isFinite(value.lat) && Number.isFinite(value.lon) && Math.abs(value.lat) <= 85 && Math.abs(value.lon) <= 180;
  const validOSMId = value => typeof value === 'string' && /^(node|way|relation)\/[1-9]\d{0,15}$/.test(value);
  function readSettings(value) {
    const item=isRecord(value)?value:{};
    return {theme:['light','dark','system'].includes(item.theme)?item.theme:'light',
      radius:[2000,5000,10000].includes(item.radius)?item.radius:5000,
      remember:typeof item.remember==='boolean'?item.remember:true};
  }
  function readFilters(value) {
    const item=isRecord(value)?value:{};
    return {bank:safeText(item.bank,120),currency:['UZS','USD','EUR','RUB'].includes(item.currency)?item.currency:'',
      hours:item.hours===true,cash:item.cash===true};
  }
  function sanitizeSaved(value, limit = 200) {
    if(!Array.isArray(value))return [];
    return normalize(value.slice(0,limit).filter(a=>isRecord(a)&&validOSMId(a.id)&&validCoordinates(a)).map(a=>{
      const [type,id]=a.id.split('/');
      const bank=safeText(a.rawBank||a.bank,120);
      const tags={amenity:a.branch===true?'bank':'atm',operator:bank==='Bank nomi kiritilmagan'?'':bank,
        'addr:full':safeText(a.address,240),name:safeText(a.name,160),
        currency:Array.isArray(a.currency)?a.currency.filter(c=>['UZS','USD','EUR','RUB'].includes(c)).slice(0,4).join(';'):'',
        cash_in:a.cash===true?(a.cashCustomers===true?'customers':'yes'):'no'};
      tags[a.branch===true?'opening_hours:atm':'opening_hours']=safeText(a.hours,160);
      return {type,id,lat:a.lat,lon:a.lon,tags};
    }));
  }
  async function readLimitedJSON(response, maximumBytes) {
    if(!response.ok || !/\bapplication\/json\b/i.test(response.headers.get('content-type')||''))throw new Error('Invalid JSON response');
    const declared=Number(response.headers.get('content-length')||0);
    if(declared>maximumBytes)throw new Error('Response is too large');
    const reader=response.body?.getReader();
    if(!reader)throw new Error('Streaming response is unavailable');
    const chunks=[];let length=0;
    try{
      while(true){const {value,done}=await reader.read();if(done)break;length+=value.byteLength;
        if(length>maximumBytes){await reader.cancel();throw new Error('Response is too large');}chunks.push(value);}
    }finally{reader.releaseLock();}
    const bytes=new Uint8Array(length);let offset=0;
    for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength;}
    return JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(bytes));
  }
  // SECURITY_HELPERS_END
  const storage = {
    get(key,fallback) { try { const raw=localStorage.getItem('bankomat.'+key); return raw===null||raw.length>2000000?fallback:JSON.parse(raw); } catch { return fallback; } },
    set(key,value) { try { const raw=JSON.stringify(value);if(raw.length>2000000)return false;localStorage.setItem('bankomat.'+key,raw); return true; } catch { return false; } },
    remove(key) { try { localStorage.removeItem('bankomat.'+key); } catch {} }
  };
  const cities = [
    {name:'Toshkent',lat:41.3111,lon:69.2797}, {name:'Samarqand',lat:39.6542,lon:66.9597},
    {name:'Buxoro',lat:39.7747,lon:64.4286}, {name:'Namangan',lat:40.9983,lon:71.6726},
    {name:'Andijon',lat:40.7821,lon:72.3442}, {name:'Farg‘ona',lat:40.3864,lon:71.7864},
    {name:'Nukus',lat:42.4603,lon:59.6178}, {name:'Qarshi',lat:38.8612,lon:65.7847}
  ];
  const defaultSettings = {theme:'light',radius:5000,remember:true};
  const settings = readSettings(storage.get('settings',null));
  const remembered = readFilters(settings.remember ? storage.get('filters',null) : null);
  const saved = storage.get('saved',[]);
  const state = {atms:[],view:'map',query:'',bank:remembered.bank,currency:remembered.currency,hours:remembered.hours,cash:remembered.cash,sort:'distance',selected:null,saved:new Map(),city:cities[0],reference:cities[0],user:null,loading:false,error:'',source:'snapshot',request:0,account:null,authAvailable:false};
  // Retire the previous browser-only password demo. No credentials are retained.
  storage.remove('accounts');storage.remove('session');storage.remove('area-cache');
  let map, markerLayer, userMarker, tileLayer, toastTimer, mapFailures=0;
  let lastAreaCache=null, activeAreaController=null;
  const markers = new Map();
  const noMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),4500);}
  function saveSettings(){storage.set('settings',settings);}
  function applyTheme(){
    const dark=settings.theme==='dark'||(settings.theme==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme=dark?'dark':'light';
    $('#theme-toggle').innerHTML=icon(dark?'sun':'moon');
    $('#theme-toggle').setAttribute('aria-label',dark?'Oq rejimni yoqish':'Qora rejimni yoqish');
    $$('[data-theme-choice]').forEach(b=>{b.classList.toggle('active',b.dataset.themeChoice===settings.theme);b.setAttribute('aria-pressed',String(b.dataset.themeChoice===settings.theme));});
    $('meta[name="theme-color"]').content=dark?'#111a17':'#147d61';
  }
  function distance(a,b){const r=Math.PI/180,dLat=(b.lat-a.lat)*r,dLon=(b.lon-a.lon)*r,h=Math.sin(dLat/2)**2+Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin(dLon/2)**2;return 6371000*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h));}
  function distanceText(a){const m=distance(state.reference,a);return m<1000?`${Math.round(m/10)*10} m`:`${(m/1000).toFixed(1)} km`;}
  const bankStyles = [
    [/kapital|капитал/i,'Kapitalbank','K','#25241e','#f7edc7'],
    [/ipak|ипак/i,'Ipak Yo‘li Bank','IY','#288060','#e6f3ed'],
    [/milliy|national bank|^nbu$|узнац|национальн/i,'Milliy bank','N','#345a98','#eaf0fb'],
    [/hamkor|хамкор/i,'Hamkorbank','H','#248d69','#e5f6ed'],
    [/asaka|асака/i,'Asakabank','A','#b93f49','#fbeaec'],
    [/agro|агро/i,'Agrobank','A','#3f8a43','#eaf6e7'],
    [/x[ao]lq|хал[қк]|народ/i,'Xalq banki','X','#287c73','#e7f4ee'],
    [/ipoteka|ипотека/i,'Ipoteka-bank','I','#589636','#edf5e7'],
    [/an[oо]r|анор/i,'ANORBANK','a','#ac3449','#f9e8ec'],
    [/sanoat|^sqb$|промстрой/i,'SQB','S','#2a5593','#e8eef9'],
    [/tbc/i,'TBC Bank','T','#219fba','#e3f5f8'],
    [/orient|ориент/i,'Orient Finans Bank','OF','#4d5591','#eeeef8'],
    [/aloqa|ало[қк]а/i,'Aloqabank','AL','#3866a8','#eaf0f9'],
    [/trust|траст/i,'Trastbank','T','#bc752a','#fbf0e4']
    ,[/tenge|тенге/i,'Tenge Bank','T','#bf783a','#f8efe4']
    ,[/mkbank|mikrokredit|микрокредит/i,'MKBank','M','#386f8c','#eaf1f6']
    ,[/garant|гарант/i,'Garant bank','G','#6774ae','#eff0fa']
    ,[/asia alliance/i,'Asia Alliance Bank','AA','#97792f','#f8f2e2']
    ,[/turon|турон/i,'Turonbank','T','#266b7a','#e8f2f5']
    ,[/apex/i,'Apexbank','A','#494f92','#eeeff8']
    ,[/^avo$|avo bank/i,'AVO bank','a','#ad4274','#faeaf3']
  ];
  function getBank(raw){const found=bankStyles.find(b=>b[0].test(raw));return found?{name:found[1],initial:found[2],color:found[3],bg:found[4]}:{name:raw||'Bank nomi kiritilmagan',initial:raw?raw[0].toUpperCase():'?',color:'#5d7869',bg:'#edf3ef'};}
  function normalize(elements){
    if(!Array.isArray(elements))return [];
    const seen=new Set();
    return elements.slice(0,600).map(e=>{
      if(!isRecord(e))return null;
      const rawTags=isRecord(e.tags)?e.tags:{};
      const t=Object.fromEntries(['name','name:uz','name:en','operator','brand','currency','addr:street','addr:housenumber','addr:full','opening_hours:atm','opening_hours','amenity','cash_in',...['UZS','USD','EUR','RUB'].map(c=>'currency:'+c)].map(key=>[key,safeText(rawTags[key],key==='addr:full'?240:160)]));
      const point=e.center||e;
      if(!validCoordinates(point))return null;
      const {lat,lon}=point;
      const id=`${e.type}/${e.id}`; if(!validOSMId(id)||seen.has(id))return null;seen.add(id);
      const named=t.name||t['name:uz']||t['name:en']||'';
      const namedBank=bankStyles.some(b=>b[0].test(named))||/(?:\bbank\b|\bmkbank\b|\bapexbank\b|\bбанк\b)/i.test(named);
      const generic=/^(visa|mastercard|humo|uzcard|atm|bankomat|банкомат|cash machine|cashpoint|банк)$|офис банковских услуг|центр банковских услуг/i;
      const raw=[t.operator,t.brand,namedBank?named:''].filter(Boolean).find(value=>!generic.test(value.trim()))||'';
      const bank=getBank(raw);
      const currency=[...new Set([...['UZS','USD','EUR','RUB'].filter(c=>t['currency:'+c]==='yes'),...(t.currency||'').split(/[;,\s]+/).map(s=>s.toUpperCase()).filter(c=>['UZS','USD','EUR','RUB'].includes(c))])];
      const nearby=safeText(e.nearbyStreet,160);
      const address=safeText([t['addr:street'],t['addr:housenumber']].filter(Boolean).join(', ')||t['addr:full']||(nearby?nearby+' yaqinida (taxminiy)':''),240);
      const hours=t['opening_hours:atm']||(t.amenity==='atm'?t.opening_hours:'')||'';
      return {id,lat,lon,bank:bank.name,initial:bank.initial,color:bank.color,bg:bank.bg,rawBank:raw,address,currency,hours,open24:hours==='24/7',cash:t.cash_in==='yes'||t.cash_in==='customers',cashCustomers:t.cash_in==='customers',name:named,branch:t.amenity==='bank'};
    }).filter(Boolean);
  }
  const logo=a=>`<span class="bank-logo" style="--bank-color:${a.color};--bank-bg:${a.bg}">${escape(a.initial)}</span>`;
  const tags=a=>`${a.hours?`<span class="tag ${a.open24?'hours-tag':''}" title="${escape(a.hours)}">${icon('clock')}${a.open24?'24/7':escape(a.hours.length>29?a.hours.slice(0,27)+'…':a.hours)}</span>`:''}${a.currency.map(c=>`<span class="tag">${escape(c)}</span>`).join('')}${a.cash?`<span class="tag">${icon('deposit')}${a.cashCustomers?'Bank mijozlari uchun':'Pul kiritish'}</span>`:''}${!a.hours&&!a.currency.length&&!a.cash?'<span class="tag">Xizmat tafsilotlari kiritilmagan</span>':''}`;
  function routeURL(a){const u=new URL('https://www.google.com/maps/dir/');u.searchParams.set('api','1');u.searchParams.set('destination',`${a.lat},${a.lon}`);u.searchParams.set('travelmode','walking');if(state.user)u.searchParams.set('origin',`${state.user.lat},${state.user.lon}`);return u.href;}
  function listSource(){return state.view==='saved'?[...state.saved.values()]:state.atms;}
  function filtered(){
    const query=state.query.toLocaleLowerCase().trim().replace(/[‘’ʻʼ`]/g,"'");
    return listSource().filter(a=>{
      const text=[a.bank,a.rawBank,a.address,a.name].join(' ').toLocaleLowerCase().replace(/[‘’ʻʼ`]/g,"'");
      return (!query||text.includes(query))&&(!state.bank||a.bank===state.bank)&&(!state.currency||a.currency.includes(state.currency))&&(!state.hours||a.open24)&&(!state.cash||a.cash);
    }).sort((a,b)=>state.sort==='bank'?a.bank.localeCompare(b.bank,'uz'):distance(state.reference,a)-distance(state.reference,b));
  }
  function persistFilters(){if(settings.remember)storage.set('filters',{bank:state.bank,currency:state.currency,hours:state.hours,cash:state.cash});}
  function syncFilters(){
    const banks=[...new Set(listSource().map(a=>a.bank))].sort((a,b)=>a.localeCompare(b,'uz'));
    if(state.bank&&!banks.includes(state.bank))state.bank='';
    $('#bank-filter').innerHTML='<option value="">Barcha banklar</option>'+banks.map(n=>`<option value="${escape(n)}">${escape(n)}</option>`).join('');
    $('#bank-filter').value=state.bank;$('#currency-filter').value=state.currency;
    $('#hours-filter').setAttribute('aria-pressed',String(state.hours));$('#cash-filter').setAttribute('aria-pressed',String(state.cash));
    $('#reset-filters').hidden=!(state.bank||state.currency||state.hours||state.cash||state.query);
  }
  function renderList(){
    const rows=filtered();
    $('#result-count').textContent=state.loading?'Hududdan qidirilmoqda...':`${rows.length} ta bankomat topildi`;
    if(state.loading&&!rows.length){$('#atm-list').innerHTML=`<div class="empty-state"><span>${icon('search')}</span><h3>Bankomatlarni qidiryapmiz</h3><p>Xarita ma’lumotlari yuklanmoqda. Bir oz kuting.</p></div>`;return;}
    if(!rows.length){$('#atm-list').innerHTML=`<div class="empty-state"><span>${icon(state.view==='saved'?'bookmark':'search')}</span><h3>${state.error?'Ma’lumot yuklanmadi':state.view==='saved'&&!state.saved.size?'Hali saqlangan joylar yo‘q':'Bankomat topilmadi'}</h3><p>${state.error?escape(state.error):state.view==='saved'&&!state.saved.size?'Bankomat kartasidagi xatcho‘p belgisini bosing. Sevimli joylaringiz shu yerda turadi.':'Filtrlarni o‘zgartiring yoki boshqa hududdan qidiring. Xaritada barcha bankomatlar qayd etilmagan bo‘lishi mumkin.'}</p><button data-empty-action="${state.error?'retry':'reset'}">${state.error?'Qayta qidirish':'Filtrlarni tozalash'}</button></div>`;return;}
    $('#atm-list').innerHTML=rows.map(a=>`<article class="atm-card ${state.selected===a.id?'selected':''}" data-atm-id="${escape(a.id)}" tabindex="0" role="button" aria-label="${escape(a.bank)} bankomatini xaritada ko‘rish" aria-pressed="${state.selected===a.id}"><div class="card-top">${logo(a)}<div class="card-name"><h3>${escape(a.bank)}</h3><span>${a.branch?'Bank filialidagi bankomat':'Bankomat'} · OpenStreetMap</span></div><button class="save-button ${state.saved.has(a.id)?'saved':''}" data-save="${escape(a.id)}" aria-label="${state.saved.has(a.id)?'Saqlanganlardan olib tashlash':'Bankomatni saqlash'}" aria-pressed="${state.saved.has(a.id)}">${icon('bookmark')}</button></div><p class="card-address"><span>${icon('pin')}</span><span>${escape(a.address||`Manzil kiritilmagan · ${a.lat.toFixed(4)}, ${a.lon.toFixed(4)}`)}</span></p><div class="card-tags">${tags(a)}</div><div class="card-bottom"><span class="distance">${icon('route')}<strong>${distanceText(a)}</strong><span>· to‘g‘ri chiziq</span></span><a class="route-link" href="${routeURL(a)}" target="_blank" rel="noopener noreferrer">Yo‘nalish${icon('arrow-up-right')}</a></div></article>`).join('');
  }
  function markerIcon(a){return L.divIcon({className:'bank-marker',html:`<div class="marker-pin ${state.selected===a.id?'is-selected':''}" style="--bank-color:${a.color};--bank-bg:${a.bg}"><span class="marker-face"><span>${escape(a.initial)}</span></span></div>`,iconSize:[42,47],iconAnchor:[21,44],tooltipAnchor:[0,-40]});}
  function renderMarkers(){
    if(!map)return;
    markerLayer.clearLayers();markers.clear();
    const addSingle=a=>{const marker=L.marker([a.lat,a.lon],{icon:markerIcon(a),title:a.bank,alt:a.bank+' bankomati',keyboard:true,zIndexOffset:state.selected===a.id?1000:0}).addTo(markerLayer);const label=document.createElement('span');label.textContent=a.bank;marker.bindTooltip(label,{className:'bank-tooltip',direction:'top'});marker.on('click',()=>selectATM(a.id));markers.set(a.id,marker);};
    const groups=new Map();
    filtered().forEach(a=>{
      if(a.id===state.selected||map.getZoom()>=18){addSingle(a);return;}
      const p=map.project([a.lat,a.lon],map.getZoom()),key=Math.floor(p.x/52)+','+Math.floor(p.y/52);
      if(!groups.has(key))groups.set(key,[]);groups.get(key).push(a);
    });
    for(const points of groups.values()){
      if(points.length===1){addSingle(points[0]);continue;}
      const center=[points.reduce((sum,a)=>sum+a.lat,0)/points.length,points.reduce((sum,a)=>sum+a.lon,0)/points.length];
      const cluster=L.marker(center,{icon:L.divIcon({className:'atm-cluster',html:`<span>${points.length}</span>`,iconSize:[40,40],iconAnchor:[20,20]}),title:points.length+' ta bankomat. Kattalashtirish uchun bosing.'}).addTo(markerLayer);
      cluster.on('click',()=>map.fitBounds(points.map(a=>[a.lat,a.lon]),{padding:[65,65],maxZoom:18,animate:!noMotion}));
    }
  }
  function renderDetail(){
    const a=filtered().find(x=>x.id===state.selected),panel=$('#map-detail');
    if(!a){panel.hidden=true;return;}
    panel.hidden=false;
    panel.innerHTML=`<div class="detail-top">${logo(a)}<div><h3>${escape(a.bank)}</h3><p>${a.branch?'Bank filialidagi bankomat':'Bankomat'} · ${distanceText(a)}</p></div><button class="icon-button" data-close-detail aria-label="Tafsilotlarni yopish">${icon('x')}</button></div><p class="detail-address">${escape(a.address||'Manzil kiritilmagan. Xaritadagi nuqta orqali yo‘nalish oling.')}</p><div class="card-tags">${tags(a)}</div><div class="detail-actions"><a href="${routeURL(a)}" target="_blank" rel="noopener noreferrer">${icon('route')}Yo‘nalish olish${icon('arrow-up-right')}</a><a class="secondary-route" href="https://www.openstreetmap.org/${escape(a.id)}" target="_blank" rel="noopener noreferrer" aria-label="OpenStreetMap’da ochish">${icon('map')}</a><button class="save-button ${state.saved.has(a.id)?'saved':''}" data-save="${escape(a.id)}" aria-label="${state.saved.has(a.id)?'Saqlanganlardan olib tashlash':'Saqlash'}" aria-pressed="${state.saved.has(a.id)}">${icon('bookmark')}</button></div>`;
  }
  function renderBankGrid(){
    const groups=new Map();state.atms.forEach(a=>{const g=groups.get(a.bank)||{...a,count:0};g.count++;groups.set(a.bank,g);});
    $('#bank-grid').innerHTML=[...groups.values()].sort((a,b)=>b.count-a.count).map(a=>`<button class="bank-grid-item" data-bank="${escape(a.bank)}">${logo(a)}<span><strong>${escape(a.bank)}</strong><small>${a.count} ta bankomat</small></span>${icon('arrow-up-right')}</button>`).join('')||'<p class="form-note">Bu hudud uchun banklar hali yuklanmagan. Xarita bo‘limida yangi qidiruvni boshlang.</p>';
  }
  function render(){syncFilters();renderList();renderMarkers();renderDetail();renderBankGrid();$('#saved-count').textContent=state.saved.size;persistFilters();}
  function selectATM(id){
    state.selected=id;renderList();renderDetail();renderMarkers();
    const a=listSource().find(x=>x.id===id);if(map&&a)map.panTo([a.lat,a.lon],{animate:!noMotion});
  }
  function toggleSaved(id){
    if(state.saved.has(id)){state.saved.delete(id);toast('Bankomat saqlanganlardan olib tashlandi.');}
    else {const a=state.atms.find(x=>x.id===id);if(!a)return;state.saved.set(id,a);toast('Bankomat saqlandi. “Saqlanganlar” bo‘limida ko‘rasiz.');}
    if(state.saved.size>200)state.saved.delete(state.saved.keys().next().value);
    if(!storage.set('saved',[...state.saved.values()]))toast('Brauzer saqlashga ruxsat bermadi. Tanlov faqat shu oynada qoladi.');
    render();
  }
  function resetFilters(){state.query='';state.bank='';state.currency='';state.hours=false;state.cash=false;$('#search-input').value='';render();}
  function setView(view){
    state.view=view;state.selected=null;state.error='';
    $$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
    const titles={map:['Yaqin bankomatni <span>toping.</span>','Naqd pul kerakmi? Sizga eng qulay bankomatni bir zumda topamiz.','Bankomatlar xaritasi'],saved:['Kerakli joylar <span>yoningizda.</span>','Saqlangan bankomatlaringiz — keyingi safar yanada oson toping.','Saqlanganlar'],banks:['Bankingizni <span>tanlang.</span>','Hududingizdagi banklar va ularga tegishli bankomatlar.','Banklar']};
    $('#page-title').innerHTML=titles[view][0];$('#page-description').textContent=titles[view][1];$('#breadcrumb-label').textContent=innerWidth<=760?'bankomat.':titles[view][2];
    $('#explorer').hidden=view==='banks';$('#banks-panel').hidden=view!=='banks';
    $('#results-title').textContent=view==='saved'?'Saqlangan bankomatlar':'Atrofdagi bankomatlar';
    $('.search-area').hidden=view==='banks';$('.filters').hidden=view==='banks';
    render();if(map&&view!=='banks')setTimeout(()=>map.invalidateSize(),30);
  }
  function fitMap(){if(!map)return;const rows=filtered();if(rows.length)map.fitBounds(rows.map(a=>[a.lat,a.lon]),{padding:[55,60],maxZoom:15,animate:!noMotion});else map.setView([state.reference.lat,state.reference.lon],14);}
  function setupMap(){
    if(map)return;
    if(!window.L){$('#map-loading').hidden=false;return;}
    map=L.map('map',{zoomControl:false,attributionControl:true,scrollWheelZoom:true}).setView([state.city.lat,state.city.lon],14);
    tileLayer=L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',{maxZoom:19,subdomains:'abc',attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> · <a href="https://www.hotosm.org/" target="_blank" rel="noopener">HOT</a> · <a href="https://www.openstreetmap.fr/" target="_blank" rel="noopener">OSM France</a>'}).addTo(map);
    tileLayer.on('tileerror',()=>{mapFailures++;if(mapFailures>=5)toast('Xarita tasvirlari yuklanmayapti. Internet aloqasini tekshiring.');});
    tileLayer.on('tileload',()=>{mapFailures=0;});
    markerLayer=L.layerGroup().addTo(map);
    map.on('zoomend',renderMarkers);
    map.on('moveend',()=>{const c=map.getCenter();const away=distance({lat:c.lat,lon:c.lng},state.reference)>800;$('#search-map-button').classList.toggle('moved',away);});
    new ResizeObserver(()=>map.invalidateSize()).observe($('#map-panel'));
    renderMarkers();
  }
  function updateReference(label){
    $('#reference-location').innerHTML=`${icon('pin')}<span>Masofa: ${escape(label)} · to‘g‘ri chiziq</span>`;
  }
  async function findLocation(){
    if(!navigator.geolocation){toast('Bu brauzer joylashuvni aniqlashni qo‘llamaydi. Shahar tanlang.');return;}
    const btn=$('#location-button');btn.disabled=true;
    navigator.geolocation.getCurrentPosition(async p=>{
      btn.disabled=false;const point={lat:p.coords.latitude,lon:p.coords.longitude};
      if(!validCoordinates(point)){toast('Joylashuv noto‘g‘ri qaytdi. Shaharni qo‘lda tanlang.');return;}
      state.user=point;state.reference=state.user;
      $('#city-label').textContent='Mening atrofim';$('#map-city-label').textContent='Joylashuvingiz atrofida';updateReference('joylashuvingizdan');
      if(map){if(userMarker)userMarker.remove();userMarker=L.marker([state.user.lat,state.user.lon],{icon:L.divIcon({className:'user-marker',html:'<div class="user-location-dot"></div>',iconSize:[16,16],iconAnchor:[8,8]}),title:'Sizning joylashuvingiz',zIndexOffset:2000}).addTo(map);map.setView([state.user.lat,state.user.lon],15);}
      await loadArea(state.user,'Joylashuvingiz atrofida');
    },err=>{
      btn.disabled=false;
      const message=err.code===1?'Joylashuvga ruxsat berilmadi. Brauzer sozlamalarida ruxsat bering yoki shahar tanlang.':err.code===3?'Joylashuvni aniqlash vaqti tugadi. Qayta urinib ko‘ring.':'Joylashuv aniqlanmadi. Shaharni qo‘lda tanlashingiz mumkin.';
      toast(message);
    },{enableHighAccuracy:false,timeout:12000,maximumAge:60000});
  }
  function cacheKey(center){return `${center.lat.toFixed(4)},${center.lon.toFixed(4)},${settings.radius}`;}
  // The read-only OSM map API is a bounded fallback when Overpass is busy.
  // It covers the central 1.2 km, which is stated in the interface.
  async function fetchCentralArea(center){
    const halfLat=1200/111320,halfLon=1200/(111320*Math.cos(center.lat*Math.PI/180));
    const bbox=[center.lon-halfLon,center.lat-halfLat,center.lon+halfLon,center.lat+halfLat].join(',');
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
    activeAreaController=controller;
    try{
      const response=await fetch('https://api.openstreetmap.org/api/0.6/map.json?bbox='+bbox,{signal:controller.signal,headers:{Accept:'application/json'}});
      if(!response.ok)throw new Error('Map API unavailable');
      const data=await readLimitedJSON(response,32*1024*1024);if(!isRecord(data)||!Array.isArray(data.elements)||data.elements.length>200000)throw new Error('Invalid map data');
      const nodes=new Map(data.elements.filter(e=>isRecord(e)&&e.type==='node'&&validCoordinates(e)).map(e=>[e.id,e]));
      return data.elements.filter(e=>isRecord(e)&&(e.tags?.amenity==='atm'||(e.tags?.amenity==='bank'&&e.tags.atm==='yes'))).slice(0,600).map(e=>{
        if(e.type!=='way')return e;
        const points=(Array.isArray(e.nodes)?e.nodes.slice(0,10000):[]).map(id=>nodes.get(id)).filter(Boolean);if(!points.length)return e;
        return {...e,center:{lat:points.reduce((s,n)=>s+n.lat,0)/points.length,lon:points.reduce((s,n)=>s+n.lon,0)/points.length}};
      }).filter(e=>{const p=e.center||e;return Number.isFinite(p.lat)&&Number.isFinite(p.lon)&&distance(center,p)<=1200;});
    }finally{clearTimeout(timer);}
  }
  async function loadArea(center,label){
    if(!validCoordinates(center)){toast('Xarita markazi noto‘g‘ri. Hududni qayta tanlang.');return;}
    activeAreaController?.abort();
    const request=++state.request;state.loading=true;state.error='';state.selected=null;state.reference=center;
    const nearExisting=state.atms.filter(a=>distance(center,a)<settings.radius);
    state.atms=nearExisting;render();$('#search-map-button').disabled=true;
    const cached=lastAreaCache;
    if(isRecord(cached)&&cached.key===cacheKey(center)&&Number.isFinite(cached.time)&&Date.now()>=cached.time&&Date.now()-cached.time<15*60*1000&&Array.isArray(cached.atms)){
      state.atms=sanitizeSaved(cached.atms,600).filter(a=>distance(center,a)<=settings.radius);state.loading=false;state.source=cached.coverage===1200?'central':'cache';setDataLabel(cached.coverage===1200?'Markaziy 1.2 km · saqlangan':'Oxirgi qidiruv saqlangan');$('#search-map-button').disabled=false;render();return;
    }
    const query=`[out:json][timeout:16];(nwr["amenity"="atm"](around:${settings.radius},${center.lat},${center.lon});nwr["amenity"="bank"]["atm"="yes"](around:${settings.radius},${center.lat},${center.lon}););out center tags 600;`;
    const endpoints=['https://overpass-api.de/api/interpreter','https://overpass.kumi.systems/api/interpreter'];
    for(const endpoint of endpoints){
      const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),11000);
      activeAreaController=controller;
      try{
        const response=await fetch(endpoint+'?data='+encodeURIComponent(query),{signal:controller.signal,headers:{Accept:'application/json'}});
        if(!response.ok)throw new Error('HTTP '+response.status);
        const data=await readLimitedJSON(response,2*1024*1024);if(!isRecord(data)||!Array.isArray(data.elements)||data.elements.length>600||data.remark)throw new Error('Incomplete OSM response');
        clearTimeout(timer);if(request!==state.request)return;
        state.atms=normalize(data.elements);state.loading=false;state.source='live';
        lastAreaCache={key:cacheKey(center),time:Date.now(),atms:state.atms};
        setDataLabel('Xaritadan hozir olindi');$('#search-map-button').disabled=false;render();toast(`${label}: ${state.atms.length} ta bankomat topildi.`);return;
      }catch(error){clearTimeout(timer);if(request!==state.request)return;}
    }
    if(request!==state.request)return;
    try{
      const elements=await fetchCentralArea(center);if(request!==state.request)return;
      state.atms=normalize(elements);state.loading=false;state.source='central';
      lastAreaCache={key:cacheKey(center),time:Date.now(),atms:state.atms,coverage:1200};
      setDataLabel('Markaziy 1.2 km hudud');$('#search-map-button').disabled=false;render();toast(`Xarita markazidan 1.2 km ichida ${state.atms.length} ta bankomat topildi.`);return;
    }catch(error){if(request!==state.request)return;}
    state.loading=false;
    $('#search-map-button').disabled=false;
    if(nearExisting.length){state.atms=nearExisting;setDataLabel('Saqlangan xarita ma’lumotlari');toast('Yangi ma’lumot yuklanmadi. Avval saqlangan natijalar ko‘rsatilmoqda.');}
    else{state.error='Xarita manbasiga ulanib bo‘lmadi. Internetni tekshiring yoki boshqa hududni tanlang.';setDataLabel('Ulanishni tekshiring');toast('Hudud ma’lumotlarini yuklab bo‘lmadi. Qayta urinib ko‘ring.');}
    render();
  }
  function setDataLabel(label){$('#data-badge').innerHTML=`<span class="green-dot"></span>${escape(label)}`;$('#data-note').textContent=state.source==='central'?'OpenStreetMap · markaziy 1.2 km hudud. Kengroq qamrov uchun xaritani surib qidiring.':state.source==='live'||state.source==='cache'?'OpenStreetMap’dan olindi. Jonli naqd pul holati tekshirilmaydi.':`OpenStreetMap · ${typeof ATM_SNAPSHOT!=='undefined'?ATM_SNAPSHOT.date:'saqlangan ma’lumotlar'}. Holatni bankdan aniqlang.`;}
  function openDialog(id){const d=$(id);if(d&&!d.open)d.showModal();}
  function closeDialogs(){$$('dialog[open]').forEach(d=>d.close());}
  function selectCity(city){
    closeDialogs();state.city=city;state.reference=city;state.bank='';state.query='';$('#search-input').value='';
    $('#city-label').textContent=city.name;$('#map-city-label').textContent=city.name+', O‘zbekiston';updateReference(city.name+' markazidan');
    if(map)map.setView([city.lat,city.lon],14);
    setView('map');loadArea(city,city.name);
  }
  function updateAccount(){
    const account=state.account;
    $('#account-label').textContent=account?.name?account.name.split(' ')[0]:'Ro‘yxatdan o‘tish';
    if(account){$('#profile-name').textContent=account.name;$('#profile-email').textContent=account.email;$('#profile-avatar').textContent=account.name[0]?.toUpperCase()||'B';}
  }
  async function loadAccount(){
    const signin=$('#secure-signin');
    const hostedURL='https://bankomat-top-ozodbek.elatedspice19.chatgpt.site/';
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),5000);
    try{
      if(location.protocol==='file:')throw new Error('Local file');
      const response=await fetch('/api/me',{credentials:'same-origin',cache:'no-store',redirect:'error',signal:controller.signal});
      if(response.status!==200&&response.status!==401)throw new Error('Auth server unavailable');
      const data=await readLimitedJSON(new Response(response.body,{status:200,headers:response.headers}),4096);
      if(!isRecord(data)||data.available!==true)throw new Error('Hosted authentication is unavailable');
      state.authAvailable=true;
      if(data.authenticated===true&&isRecord(data.user)){
        const name=safeText(data.user.name,80),email=safeText(data.user.email,200);
        if(name&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))state.account={name,email};
      }
      signin.href='/signin-with-chatgpt?return_to=%2F';
      $('#auth-status').textContent='Kirish server tomonidan tekshiriladi. Parol va kirish tokenlari brauzer xotirasida saqlanmaydi.';
    }catch{
      state.account=null;state.authAvailable=false;signin.href=hostedURL;
      $('#auth-status').textContent='Bu nusxada hisob serveri mavjud emas. Hisobga kirish uchun joylashtirilgan saytni oching.';
      signin.querySelector('[data-signin-label]').textContent='Joylashtirilgan saytni ochish';
    }finally{clearTimeout(timer);updateAccount();}
  }

  state.saved=new Map(sanitizeSaved(saved).map(a=>[a.id,a]));
  icons();applyTheme();setupMap();
  state.atms=typeof ATM_SNAPSHOT!=='undefined'?normalize(ATM_SNAPSHOT.elements):[];
  if(state.atms.length)state.selected=[...state.atms].sort((a,b)=>distance(state.reference,a)-distance(state.reference,b))[0].id;
  $('#snapshot-date').textContent=typeof ATM_SNAPSHOT!=='undefined'?'Boshlang‘ich xarita nusxasi: '+ATM_SNAPSHOT.date+'.':'';
  setDataLabel('OpenStreetMap ma’lumotlari');updateReference('Toshkent markazidan');render();updateAccount();loadAccount();
  if(innerWidth<=760)$('#breadcrumb-label').textContent='bankomat.';
  $('#radius-setting').value=String(settings.radius);$('#remember-setting').checked=!!settings.remember;
  $('#city-grid').innerHTML=cities.map((city,i)=>`<button data-city="${i}" class="${i===0?'active':''}">${icon('pin')}${escape(city.name)}</button>`).join('');

  $('#search-input').addEventListener('input',event=>{state.query=safeText(event.target.value,160);state.selected=null;render();});
  $('#bank-filter').addEventListener('change',event=>{state.bank=event.target.value;state.selected=null;render();fitMap();});
  $('#currency-filter').addEventListener('change',event=>{state.currency=event.target.value;state.selected=null;render();});
  $('#hours-filter').addEventListener('click',()=>{state.hours=!state.hours;state.selected=null;render();});
  $('#cash-filter').addEventListener('click',()=>{state.cash=!state.cash;state.selected=null;render();});
  $('#sort-select').addEventListener('change',event=>{state.sort=event.target.value;renderList();});
  $('#reset-filters').addEventListener('click',resetFilters);
  $('#location-button').addEventListener('click',findLocation);$('#map-locate').addEventListener('click',findLocation);
  $('#theme-toggle').addEventListener('click',()=>{settings.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';saveSettings();applyTheme();});
  $('#zoom-in').addEventListener('click',()=>map?.zoomIn());$('#zoom-out').addEventListener('click',()=>map?.zoomOut());$('#fit-map').addEventListener('click',fitMap);
  $('#retry-map').addEventListener('click',()=>location.reload());
  $('#search-map-button').addEventListener('click',()=>{
    if(state.loading)return;
    const c=map?.getCenter();const center=c?{lat:c.lat,lon:c.lng}:state.reference;
    const nearCity=cities.find(city=>distance(center,city)<20000);
    $('#city-label').textContent=nearCity?.name||'Tanlangan hudud';$('#map-city-label').textContent=nearCity?nearCity.name+', O‘zbekiston':'Tanlangan hudud';
    state.reference=center;updateReference('xarita markazidan');setView('map');loadArea(center,'Tanlangan hudud');
  });
  $$('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
  $('.brand').addEventListener('click',event=>{event.preventDefault();setView('map');});
  $('#settings-nav').addEventListener('click',()=>openDialog('#settings-dialog'));$('#mobile-settings').addEventListener('click',()=>openDialog('#settings-dialog'));
  $('#help-nav').addEventListener('click',()=>openDialog('#help-dialog'));
  $('#city-button').addEventListener('click',()=>{$$('[data-city]').forEach(b=>b.classList.toggle('active',cities[Number(b.dataset.city)].name===state.city.name));openDialog('#city-dialog');});
  $('#account-button').addEventListener('click',()=>openDialog(state.account?'#profile-dialog':'#account-dialog'));
  $('#radius-setting').addEventListener('change',event=>{settings.radius=Number(event.target.value);saveSettings();toast('Radius saqlandi. Keyingi qidiruvda qo‘llanadi.');});
  $('#remember-setting').addEventListener('change',event=>{settings.remember=event.target.checked;saveSettings();if(!settings.remember)storage.remove('filters');else persistFilters();});
  $('#clear-local').addEventListener('click',()=>{
    state.saved.clear();Object.assign(settings,defaultSettings);state.bank='';state.currency='';state.hours=false;state.cash=false;state.query='';$('#search-input').value='';
    lastAreaCache=null;
    ['saved','settings','filters','area-cache','accounts','session'].forEach(k=>storage.remove(k));applyTheme();render();$('#radius-setting').value='5000';$('#remember-setting').checked=true;toast('Saqlangan joylar va sozlamalar tozalandi.');
  });
  document.addEventListener('click',event=>{
    const saveButton=event.target.closest('[data-save]');if(saveButton){event.stopPropagation();toggleSaved(saveButton.dataset.save);return;}
    const route=event.target.closest('a');if(route)return;
    const card=event.target.closest('[data-atm-id]');if(card){selectATM(card.dataset.atmId);return;}
    const close=event.target.closest('[data-close]');if(close){close.closest('dialog').close();return;}
    if(event.target.closest('[data-close-detail]')){state.selected=null;render();return;}
    const theme=event.target.closest('[data-theme-choice]');if(theme){settings.theme=theme.dataset.themeChoice;saveSettings();applyTheme();return;}
    const city=event.target.closest('[data-city]');if(city){selectCity(cities[Number(city.dataset.city)]);return;}
    const bank=event.target.closest('[data-bank]');if(bank){setView('map');state.bank=bank.dataset.bank;render();fitMap();return;}
    const empty=event.target.closest('[data-empty-action]');if(empty){if(empty.dataset.emptyAction==='retry')loadArea(state.reference,'Tanlangan hudud');else resetFilters();}
  });
  document.addEventListener('keydown',event=>{
    const inField=event.target.closest('input,select,textarea,button,a');
    if(event.key==='/'&&!inField&&!$('dialog[open]')){event.preventDefault();$('#search-input').focus();}
    if((event.key==='Enter'||event.key===' ')&&event.target.matches('[data-atm-id]')){event.preventDefault();selectATM(event.target.dataset.atmId);}
  });
  $$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}}));
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{if(settings.theme==='system')applyTheme();});
  window.addEventListener('resize',()=>{$('#breadcrumb-label').textContent=innerWidth<=760?'bankomat.':({map:'Bankomatlar xaritasi',saved:'Saqlanganlar',banks:'Banklar'}[state.view]);});
})();
