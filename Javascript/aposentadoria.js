const nome = "João";
const sexo = "M";
const idade = 60;
const contribuicao = 26;

if (sexo == "M") {
    if (contribuicao + idade >= 95) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    } 
} else {
    if (contribuicao + idade >= 85) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    } 
}