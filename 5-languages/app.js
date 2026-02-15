console.log('Переводчик 1.0');

console.log('Выберите ваш язык');

let userLanguage = 'jp';
let prompt = 'Здравствуйте';
switch (userLanguage) {
    case 'de':
        console.log('Guten Tag');
        break;
    case 'ru':
        console.log('Здравствуйте');
        break;
    case 'en':
        console.log('Hello');
        break;
    case 'jp':
        console.log('Konnichiwa');
        break;
    default:
        console.log('Язык не поддерживается');
        break;

}