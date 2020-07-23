const programador = {
    nome: "João",
    idade: 26,
    tecnologias: [
        { nome: "JavaScript", especialidade: "Web"},
        { nome: "Python", especialidade: "Web"}
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)