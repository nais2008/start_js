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