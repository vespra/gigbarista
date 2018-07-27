const coffeeTypes = [
  {
    id: 0,
    name: 'Espresso',
    class: 'Hot',
    imageUrl: 'http://www.delonghi.com/Global/recipes/Coffee/espresso.png',
    coffee_used: 1,
    ordered: 0
  },
  {
    id: 1,
    name: 'Americano',
    class: 'Hot',
    imageUrl: 'https://www.pngarts.com/files/1/Coffee-PNG-Image.png',
    coffee_used: 1/3,
    water_used: 2/3,
    ordered: 0
    //beans: 'Brazillian'
    //milk_type: 'Full Fat',
    //milk_used: 50,
    //coffee_used: 100,
    //coffee_station: 'AFK Cafè',
    //coffee_station_location: 'GiG Beach'
  },
  {
    id: 2,
    name: 'Cappuccino',
    class: 'Hot',
    imageUrl: 'https://pngimg.com/uploads/cappuccino/cappuccino_PNG41.png',
    coffee_used: 1,
    milk_used: 1,
    milk_type: '',
    ordered: 0
  },
  {
    id: 3,
    name: 'Mocaccino',
    class: 'Hot',
    imageUrl: 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Coffee-PNG/Coffee_Latte_Art_PNG_Clip_Art_Image.png?m=1507172107',
    coffee_used: 1,
    chocolate_used: 1,
    milk_used: 1,
    milk_type: '',
    ordered: 0
  }
];

export default coffeeTypes;
