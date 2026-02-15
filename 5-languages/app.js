console.log('Переводчик 1.0');

console.log('Выберите ваш язык');

let userLanguage = '';
let prompt = 'Здравствуйте';
switch (userLanguage) {
    case 'DE':
        console.log('Guten Tag');
        break;
    case 'RU':
        console.log('Здравствуйте');
        break;
    case 'EN':
        console.log('Hello');
        break;
    case 'JP':
        console.log('Konnichiwa');
        break;
    default:
        console.log('Язык не поддерживается');
        break;

}