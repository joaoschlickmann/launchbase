const nome ="João";
const peso = 94;
const altura = 1.87;
const sexo = "M";

const imc = peso / (altura*altura);

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`)
} 

else {
    console.log(`${nome} você não está acima do peso`)
}
