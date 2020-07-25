const users = [
    { nome: "João", tecnologias: ["CSS", "HTML"] },
    { nome: "Gabriel", tecnologias: ["Node.js", "React"] },
    { nome: "Paulo", tecnologias: ["Python", "C++"] },
    { nome: "Pedro", tecnologias: ["C#", "Go", "CSS"] }
]

for (let i = 0; i < users.length; i++) {
    const usuarioUsaCSS = checaSeUsuarioUsaCSS(users[i]);
    if (usuarioUsaCSS) {
        console.log( `O usuário ${users[i].nome} trabalha com CSS` )
    
    }

// imprimir mensagem na tela das tecnologias que o usuário usa
    // console.log( `${users[i].nome} trabalha com ${users[i].tecnologias.join(', ')}` );
    }

function checaSeUsuarioUsaCSS (usuario) {
    //primeira tentativa de buscar CSS nas tecnologias
        // if (usuario.tecnologias == "CSS") {
        //     return true;
        // } else {
        //     return false;
        // }
    //resposta encontrada        
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == "CSS") return true
    }

    return false
}