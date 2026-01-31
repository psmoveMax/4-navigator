const positionLat  = 3;
const positionLong = 7;
const addressLat  = 5;
const addressLong  = 2;


const raznost1 = addressLat - positionLat;
const raznost2 = positionLong - addressLong;


const quadroRaznost1 = raznost1**2;
const quadroRaznost2 = raznost2**2;

const summaQuadro = quadroRaznost1 + quadroRaznost2;

const answer = Math.floor(Math.sqrt(summaQuadro));

console.log(answer);

