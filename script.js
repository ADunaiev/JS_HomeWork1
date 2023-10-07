function enterName () {
    res = prompt("Введіть Ваше ім'я");
    alert("Привіт, " + res + "!");
}

function enterBirthYear () {
    res = prompt('Введіть рік народження');
    const currentYear = 2023
    alert("Вам " + (currentYear - res) + " років");
}

function enterSquareSideLength () {
    res = prompt ("Введіть сторону квадрата");
    alert("Періметр квадрату дорівнює " + res * 4);
}

function enterCircleRadius () {
    res = prompt ("Введіть радіус кола:");
    alert ("Площа кола дорівнює " + Math.PI * res * res );
} 

function enterDistanceAndTime() {
    distance = prompt ("Введіть відстань у км:");
    neededTime = prompt ("Введіть бажаний час у годинах:");

    alert("Вам необхідно рухатись зі швидкістю " + distance / neededTime + " км на годину");
}

function enterUSD() {
    amount = prompt ("Введіть суму в долларах:");
    const rate = 0.93;

    alert ("Еквівалент у євро " + Math.round( rate * amount * 100) / 100);
}

function enterSizeGB () {
    size = prompt ("Введіть розмір флешки:");
    const fileSize = .82;

    alert ("На флешку вміститься " + Math.floor (size / fileSize) + " файлів.");
}

function enterChoclates () {
    cash = prompt ("Введіть скільки Ви маєте грошей:");
    price = prompt ("Введіть скільки вартує одна шоколадка:");
    
    alert ("Ви зможете купити " + Math.floor (cash / price) + " шоколадкb.\n"  
    + "Залишиться решта: " + (cash - Math.floor (cash / price) * price));
}

function enter3digitNumber() {
    number = prompt ("Введіть тризначне число:");

    a = Math.floor (number / 100) % 10;
    b = Math.floor (number / 10) % 10;
    c = number % 10;

    alert ("Число-перевертень: " + (c * 100 + b * 10 + a));
}

function enterNumber() {
    var number = prompt ("Введіть ціле число:");

    number = number % 2;

    const result = (number == 0) ? "парне" : "непарне";

    alert ("Це число - " + result)
}