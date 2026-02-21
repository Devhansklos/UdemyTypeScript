class Shop {
    static numberShop: number = 0; //definiujemy zmienna numberShop typu number i przypisujemy jej wartość 0
    numberShop: number = 0;
    name2: string; //definiujemy zmienna name2 typu string
    price: number; //definiujemy zmienna price typu number
    public nameShop = 'Nazwa sklepu'; //definiujemy zmienna nameShop typu string i przypisujemy jej wartość 'Nazwa sklepu' zamiast w konstruktorze w "this";
    readonly nameReadOnly: string; //definiujemy zmienna nameReadOnly typu string i przypisujemy jej wartość w konstruktorze
    private _isHidden: boolean; //pole zapasowe dla gettera isHidden
    userName:string[] =['Piotr','Kasia','Jan'];
    numberTab: number[] =[1,2,3,4,5,6,7,8,9,10];

     
    
    constructor(name: string, price: number) { //w konstruktorze definiujemy wartość swojej zmiennej
        this.numberShop++; //inkrementujemy wartość zmiennej numberShop o 1
        console.log(this.numberShop); //wyświetlamy wartość zmiennej numberShop
        this.name2 = name; //przypisujemy wartość do zmiennej name2
        this.price = price; //przypisujemy wartość do zmiennej price ale mogę tez to zrobic przy definiowaniu zmiennej name2 i price w klasie
        this.nameReadOnly = 'Nazwa sklepu 2'; //readonly - wartość można ustawić tylko w konstruktorze
        this._isHidden = false; //isHidden - wartość można ustawić w konstruktorze

        //klasa to jest szablon naszego obiektu na którym budujemy obiekty, obiekt to jest instancja klasy, czyli konkretny przykład klasy;
    }

    get isHidden(): boolean {
        return this._isHidden;
    }

    set isHidden(value: boolean) {
        this._isHidden = value;
    }
}

class Shop2 extends Shop {

    showName():string {
//tutaj piszemy kod metody showName
    return this.nameShop;
}
}

        // próbujemy stworzyć obiekt z klasy Shop
const myShop = new Shop('jajka', 10); //tworzymy nowy obiekt myShop z klasy Shop i przekazujemy do niego wartość 'jajka' i 10 jest to instancja klasy Shop
console.log(myShop.nameShop) //wyświetlamy wartość zmiennej nameShop z obiektu myShop (public - dostępna poza klasą)

// private to jest zmienna która jest dostępna tylko w klasie w której została zdefiniowana, nie jest dostępna poza klasą;
// protected to jest zmienna która jest dostępna w klasie w której została zdefiniowana i w klasach dziedziczących po tej klasie;
// public to jest zmienna która jest dostępna w klasie w której została zdefiniowana i w klasach dziedziczących po tej klasie i poza klasą;

// próbujemy stworzyć obiekt z klasy Shop
const myShop3 = new Shop('jajka', 10); //tworzymy nowy obiekt myShop3 z klasy Shop i przekazujemy do niego wartość 'jajka' i 10 jest to instancja klasy Shop
console.log(myShop3.nameShop) //wyświetlamy wartość zmiennej nameShop z obiektu myShop3


// definiujemy obiekt z klasy Shop2
const myShop2 = new Shop2('Woda', 10);
myShop2.showName(); // wywołujemy metodę /tworzymy nowy obiekt myShop2 z klasy Shop2 i przekazujemy do niego wartość 'jajka' i 10 jest to instancja klasy Shop2

console.log(myShop.isHidden) //wyświetlamy wartość zmiennej isHidden z obiektu myShop   

myShop.isHidden = true; //ustawiamy wartość zmiennej isHidden z obiektu myShop
