class Animal{
    constructor(nome, idade){
        //atributos da classe Animal
        this.nome = nome;
        this.idade = idade;
    }

        //metodo da classe Animal
        descrever(){
            console.log(`Meu ${this.nome} tem ${this.idade} anos`);
        }
}

class Gato extends Animal{
    constructor(nome,idade,cor){
        //atributo extra da classe Gato
        super(nome,idade);
        this.cor = cor;
    }

    //metodo da classe Gato
    miar(){
        console.log("MIAAAAAAAAAAAAAAAAAAU");
    }
}

const cachorro = new Animal("Cachorro",2);
const gato = new Gato("Gato",10,"Preto");

cachorro.descrever();
gato.descrever();
gato.miar();