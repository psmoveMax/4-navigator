const x1 = 3;
const y1 = 7;
const x2 = 5;
const y2 = 2;


const raznost1 = x2 - x1;
const raznost2 = y1 - y2;


const quadroRaznost1 = raznost1**2;
const quadroRaznost2 = raznost2**2;

const summaQuadro = quadroRaznost1 + quadroRaznost2;

const answer = Math.floor(Math.sqrt(summaQuadro));

console.log(answer);

