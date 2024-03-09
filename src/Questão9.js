class SomadorDeNotas{
    constructor(){
        this.total = 0;
    };

    adicionarNota(nota){
        this.total +=nota;
    }

    verTotal(){
        console.log("A soma das notas foi: "+this.total);
    }
}

let somador = new SomadorDeNotas();
somador.adicionarNota(10);
somador.adicionarNota(8);
somador.verTotal();