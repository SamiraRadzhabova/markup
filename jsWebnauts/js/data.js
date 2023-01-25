function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  let author = [1, 2, 3, 4, 5, 6, 7, 8];
  let title = ["Уютное гнездышко для молодоженов", "Маленькая квартирка рядом с парком", 
  "Небольшая лавочка в парке", "Императорский дворец в центре Токио", "Милейший чердачок",
  "Чёткая хата", "Стандартная квартира в центре", "Тихая квартирка недалеко от метро"];
  let address = ["102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3","102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō",
  "Chiyoda-ku, Tōkyō-to 102-0091","1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111", "102-0094 Tōkyō-to, Chiyoda-ku, Kioichō, 3",
  "102-0081 Tōkyō-to, Chiyoda-ku, Yonbanchō, 5−6","Chiyoda-ku, Tōkyō-to 102-0082",
  "102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 17−4",];
  let type = ["palace", "flat", "house", "bungalo"];
  let checkin = ["14:00","9:00","0:00","21:00","11:00","17:00","16:00","23:00"];
  let checkout = ["10:00", "7:00", "0:00", "20:00", "11:00","16:00", "18:00", "5:00" ];
  let description = [ "Великолепный таун-хауз в центре Токио. Подходит как туристам, так и бизнесменам. Дом полностью укомплектован и имеет свежий ремонт.",
  "Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.",
  "Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.",
  "Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.",
  "Маленькая квартирка на чердаке. Для самых не требовательных.",
  "У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!",
  "Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.",
  "Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты."];
  let features = ["wifi", "dishwasher", "parking", "washer", "elevator", 	"conditioner"];
  let data = [];
  let length = author.length;
  for (let i = 0; i < length; i++) {
    const index = getRandomInt(0, author.length - 1);
    const iTitle = getRandomInt(0, title.length - 1);
    const iAddress = getRandomInt(0, address.length - 1);
    const iType = getRandomInt(0, type.length - 1);
    const iCheckin = getRandomInt(0, checkin.length - 1);
    const iCheckout = getRandomInt(0, checkout.length - 1);
    const iDesc = getRandomInt(0, description.length - 1);
    const arrayFeatures = features.map((feature)=>feature);
    data.push({
      author: {
        avatar: `"img/avatars/user0${author[index]}.png"`,
      },
      offer:{
          title: title[iTitle],
          address: address[iAddress],
          price: getRandomInt(5000, 500000),
          type: type[iType],
          rooms: getRandomInt(1, 20),
          guests: getRandomInt(2, 100),
          checkin: checkin[iCheckin],
          checkout: checkout[iCheckout],
          features: arrayFeatures.sort(() => Math.random() - 0.5).splice(getRandomInt(0,6), 7),
          description: description[iDesc],
      },
      location: {
          x: getRandomInt(300, 1500),
          y: getRandomInt(130, 630),
        },
    });
    author.splice(index, 1);
    title.splice(iTitle, 1);
    address.splice(iAddress, 1);
    checkin.splice(iCheckin, 1);
    checkout.splice(iCheckout, 1);
    description.splice(iDesc,1);
  }
  console.log(data);