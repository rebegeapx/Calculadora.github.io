class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayVal1= displayVal1;
        this.displayVal2 = displayVal2;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.val1 = '';
        this.val2 = '';
        this.operadoresSignos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-',
        }
    }

    borrar() {
        this.val2 = this.val2.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.val2= '';
        this.val1= '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayVal2.textContent = this.val2;
        this.displayVal1.textContent = `${this.val1}  ${this.operadoresSignos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const val1= parseFloat(this.val1);   //STRING A NUMERO
        const val2= parseFloat(this.val2);       //STRING A NUMERO

        if( isNaN(val2)  || isNaN(val1) ) return
        this.val2 = this.calculador[this.tipoOperacion](val1, val2);
    }
    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.val1 = this.val2 || this.val1;
        this.val2= '';   //DEJAR VACÍO EL VALOR ACTUAL AL DAR IGUAL
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.val2.includes('.')) return     //PONER SOLO UN PUNTO
        this.val2= this.val2.toString() + numero.toString(); //CONCATENARLOS, NO IMPRIMIR UNO POR UNO
        this.imprimirValores();
    }

}