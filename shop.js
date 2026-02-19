"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shop {
    name2; //definiujemy zmienna name2 typu string
    price; //definiujemy zmienna price typu number
    nameShop = 'Nazwa sklepu'; //definiujemy zmienna nameShop typu string i przypisujemy jej wartość 'Nazwa sklepu' zamiast w konstruktorze w "this";
    constructor(name, price) {
        this.name2 = name; //przypisujemy wartość do zmiennej name2
        this.price = price; //przypisujemy wartość do zmiennej price ale mogę tez to zrobic przuy definiowaniu zmiennej name2 i price w klasie  
        //klasa to jest szablon  naszego obiektu na którym budujemy obiekty, obiekt to jest instancja klasy, czyli konkretny przykład klasy;
    }
}
// próbujemy stworzyć obiekt z klasy Shop
const myShop = new Shop('jajka', 10); //tworzymy nowy obiekt myShop z klasy Shop i przekazujemy do niego wartość 'jajka' i 10 jest to instancja klasy Shop
console.log(myShop.nameShop); //wyświetlamy wartość zmiennej nameShop z obiektu myShop
//# sourceMappingURL=shop.js.map