class Funcionario{
    constructor(nome,idade,salarioBase){
        //nome do funcionario
        this.nome = nome;
        //idade do funcionario
        this.idade = idade;
        //salario por hora
        this.salarioBase = salarioBase;
        //salario semanal do professor
        this.salarioSemanal;
    }
}

class Professor extends Funcionario{
    constructor(nome,idade,salarioBase,disciplina,horasTrabalhadas){
        super(nome,idade,salarioBase);
        //disciplina qual o professor ministra
        this.disciplina = disciplina;
        //horas de aula do professor naquela semana
        this.horasTrabalhadas = horasTrabalhadas;
    }

    //funcao que calcula o salario semanal do funcionario, utiliza o parametro definido pelo tipo de funcionario
    calcularSalario(){
        //salario base (Salario/hora) multiplicado pelas horas que o professor trabalho
        this.salarioSemanal = this.salarioBase*this.horasTrabalhadas;
        //exibi as informacoes e salario semanal do funcionario
        console.log(`Salário semanal do funcionário ${this.nome}, de ${this.idade} anos, que da aula de ${this.disciplina}, é: ${this.salarioSemanal}`);
    }
}

const claudio = new Professor("Claudio",14,150,"Discursos longos",50);
const jeff = new Professor("Jefferson",35,50,"Programação",80);
claudio.calcularSalario();
jeff.calcularSalario();