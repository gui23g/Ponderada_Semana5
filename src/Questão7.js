class Animal{
    constructor(nome, idade){
        //atributos
        this.nome = nome;
        this.idade = idade;
    }
    
    //metodo
    descrever(){
        console.log(`Meu ${this.nome} tem ${this.idade} anos`);
    }
}

const cachorro = new Animal("cachorro",7);
const gato = new Animal("Gato",3);

cachorro.descrever();
gato.descrever();