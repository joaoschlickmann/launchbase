const users = [
    { nome: "João", tecnologias: ["Html", "CSS",] },
    { nome: "Gabriel", tecnologias: ["Node.js", "React"] },
    { nome: "Paulo", tecnologias: ["Python", "C++"] },
    { nome: "Pedro", tecnologias: ["C#", "Go"] }
]

function contausuarios(usuario) {
    for (let i = 0; i < usuario.length; i++) {
        console.log( `${users[i].nome} trabalha com ${users[i].tecnologias}` );
    }
}

const usuario = contausuarios(users)