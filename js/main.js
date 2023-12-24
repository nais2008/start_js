//  Первый урок по JS

// let name = 'Никита'
// let age = 15
// let history = 'Ну по идее я web-программист, но каким-то боком я начал делать приложение по обработке фото на python используя PyQT5'

// confirm("Да")
// console.log(`Имя: ${name}`)
// console.log(`Возраст: ${age}`)
// console.log(`История: ${history}`)


// Второй урок по JS

let mark = 3;

if ((mark == 2) || (mark == 3)){
    console.log('вы получили плохую оценку');
}else if ((mark == 4) || (mark == 5)){
    console.log('вы получили хоршую оценку');
}else{
    console.log('кажется, кто-то остался без майнкрафта на наделю');
}

// ------------------------------------------------------

let num = 0;

switch (num){
    case 0:
        console.log('это 0');
        break;

        case 1:
            console.log('это 1');
            break;

        case 2:    
        case 3:
            console.log('это 2 или 3');
            break;

        default:
            console.log('неизвестное число')
            break;
}

// homework 

let s = 14;
let s1 = 29;
let s2 = 80;

let s_sum = (s + s1 + s2) / 3;//41

let m = 43;
let m1 = 27;
let m2 = 2;

let m_sum = (m + m1 + m2) / 3;//24

let d = 7;
let d1 = 24;
let d2 = 72;

let d_sum = (d + d1 + d2) / 3;//34

if (s_sum > m_sum){
    if (s_sum > d_sum){
        console.log('s');
    }else if(s_sum === d_sum){
        console.log('sd');
    }else{
        console.log('d');
    }
}else if(d_sum > m_sum){
    if(s_sum === d_sum){
        console.log('md')
    }
    else {
        console.log('d');
    }
}else if (s_sum === d_sum && s_sum === m_sum){
    console.log('nich');
}
else{
    console.log('m');
}

// lesson 3

function imt(ves, rost){
    return ves / (rost * 2);
}
console.log(imt(60, 1.6));

// -----------------------------------------------------------

let a = ['Германия', 'РФ', 'США', 'Англия', 'Мексика'];
console.log(a);
a.push('Велиобритания', 'Китай');
console.log(a);
a.splice(2, 2);
console.log(a);
a.unshift('ЮАР');
console.log(a);
a[1] = 'Япония';
console.log(a);
a.forEach((item, key)=> {
    console.log(item, key)
});

//lesson 4

let komp = {
    videokarta: 'GTX 1080',
    processor: 'i5-10400f',
    operatinai: '8gb',
};
console.log(komp.processor);
let telephone = {
    brend: 'Сяоми',
    marka: 'POCO X3 PRO',
    operativnai: '6gb',
    ssd: '128gb'
};
console.log(telephone.operativnai);
let komp_app = {
    klava: 'True',
    mouse: 'True',
    kolonki: 'False',
    naush: 'True',
    monitore: '2x True'
};
console.log(komp_app.kolonki);

let user = {
    name: 'FIO',
    dr: '20.20.2020',
    brauzer: 'Chrome',
    sey_hello(){
        console.log('Привет', this.name);
    },
    dat_brauser(){
        console.log('Браузер юзера: ', this.brauzer);
    }
};

user.dat_brauser()
user.sey_hello()