const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5}

//a
const copiaPokemon1 = {
    ...pokemon1
}
copiaPokemon1.nome = 'Squirtle'
copiaPokemon1.tipo = 'Agua'
//b 
pokemon1.ataques = []

//c
const ataque = {
    nome: 'investida',
    dano: 40,
    tipo: 'Normal',
precisao: 100
}

pokemon1.ataques.push(ataque)




   





//d

copiaPokemon1.ataques = {
    ...pokemon1
}


//e
const ataque1 = {
    nome: 'Folha de Navalha',
    dano: 45,
    tipo: 'Grama',
    precisao: 100
}
pokemon1.ataques.push(ataque1)
//d
copiaPokemon1.ataques = []
const ataque2 = {
    nome: 'Jato de Agua',
    dano: 40,
    tipo: 'Agua',
    precisao: 100

}

copiaPokemon1.ataques.push(ataque2)

console.log(pokemon1)
console.log(copiaPokemon1)
