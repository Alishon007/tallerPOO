// Sistema Bancario
// Crea una clase base CuentaBancaria con atributos como numeroCuenta y saldo. Luego, crea clases derivadas como CuentaAhorros y CuentaCorriente que hereden de CuentaBancaria. Cada tipo de cuenta tendrá métodos específicos, como aplicarIntereses() en CuentaAhorros. Usa un arreglo para manejar múltiples cuentas y un método para realizar depósitos y retiros en todas ellas.

class CuentaBancaria{
    constructor(numeroCuenta, saldo){
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }
    info(){
        return `La cuenta ${this.numeroCuenta} tiene un saldo de ${this.saldo}`
    }
}
class CuentaAhorros extends CuentaBancaria{
    constructor(numeroCuenta, saldo, deposito,retiro){
        super(numeroCuenta, saldo);
        this.deposito = deposito;
        this.retiro = retiro;
    }
    aplicarIntereses(){
        saldoInteres = ((this.saldo * 2) / 100) + this.saldo;
    }
    depositar(){
        if(this.deposito > 0){
            return this.saldo += this.deposito
            
        }else{
            console.log(`El deposito debe ser mayor a cero`)
        }
    }
    retirar(){
        if(this.retiro <= this.saldo && this.retiro > 0){
          return  this.saldo -= this.retiro;
            
        }
    }
}
class CuentaCorriente extends CuentaBancaria{
    constructor(numeroCuenta, saldo, deposito, retiro){
    super(numeroCuenta, saldo);
    this.deposito = deposito;
    this.retiro = retiro;
    }
    depositar(){
        if(this.deposito > 0){
            return this.saldo += this.deposito
            
        }else{
            console.log(`El deposito debe ser mayor a cero`)
        }
    }
    retirar(){
        if(this.retiro <= this.saldo && this.retiro > 0){
          return  this.saldo -= this.retiro;
            
        }
    }
}

class Banco{
    constructor(){
        this.cuentas = [];
    }
    agregarCuenta(cuenta){
        if(cuenta instanceof CuentaAhorros || cuenta instanceof CuentaBancaria){
            this.cuentas.push(cuenta);
            console.log('se agrego correctamente la cuenta')
            
        }else{
            console.log('No se logro agregar la cuenta')
        }
    }
    listarCuentas(){
        return this.cuentas;
    }
}

let banco1 = new Banco();



document.querySelector('#guardar').addEventListener('click', function (){
   
    let tipoCuentaInput = document.querySelector('#tipoCuenta').value;
    let numeroCuentaInput = document.querySelector('#numeroCuenta').value;
    let saldoInput = document.querySelector('#saldo').value;

    let banco;

    if(tipoCuentaInput === 'CuentaAhorros'){
            banco = new CuentaAhorros(numeroCuentaInput, saldoInput)
    }else if(tipoCuentaInput === 'CuentaCorriente'){
        banco = new CuentaCorriente(numeroCuentaInput, saldoInput)
    }
    banco1.agregarCuenta(banco);
})

document.querySelector('#mostrar').addEventListener('click', function(){
    let listadoCuentas = document.querySelector('#listadoCuentas');
    listadoCuentas.innerHTML = '';
    let miListado = banco1.listarCuentas();

    miListado.forEach(function (cuenta){
        let lista = document.createElement('li');
        if (cuenta instanceof CuentaAhorros) {
            lista.textContent = cuenta.info();
         } else if(cuenta instanceof CuentaCorriente){
            lista.textContent = cuenta.info();
         }
         listadoCuentas.appendChild(lista);
    })
})

// -----------------------------------------

document.querySelector('#retirar').addEventListener('click', function(){
    let tipoCuentaInput = document.querySelector('#tipoCuenta').value;
    let numeroCuentaInput = document.querySelector('#numeroCuenta').value;
    let saldoInput = document.querySelector('#saldo').value;
    let cantidadRetiroInput = document.querySelector('#cantidadRetiro').value;
    let informacion = document.querySelector('#informacion');
    informacion.innerHTML = '';

    let bancoN;

    if(tipoCuentaInput === 'CuentaAhorros'){
        bancoN = new CuentaAhorros(numeroCuentaInput, parseInt(saldoInput), 0, parseInt(cantidadRetiroInput));
        informacion.innerHTML = `De la cuenta de ahorros ${numeroCuentaInput} se retiro ${cantidadRetiroInput}, su saldo actual es: ${bancoN.retirar()}`;
    }else if(tipoCuentaInput === 'CuentaCorriente'){
        bancoN = new CuentaCorriente(numeroCuentaInput, parseInt(saldoInput), 0, parseInt(cantidadRetiroInput))
        informacion.innerHTML = `De la cuenta de ahorros ${numeroCuentaInput} se retiro ${cantidadRetiroInput}, su saldo actual es: ${bancoN.retirar()}`;
}
})

document.querySelector('#depositar').addEventListener('click', function(){
    let tipoCuentaInput = document.querySelector('#tipoCuenta').value;
    let numeroCuentaInput = document.querySelector('#numeroCuenta').value;
    let saldoInput = document.querySelector('#saldo').value;
    let cantidadRetiroInput = document.querySelector('#cantidadRetiro').value;
    let cantidadDepositoInput = document.querySelector('#cantidadDeposito').value; 
    let informacion = document.querySelector('#informacion');
    informacion.innerHTML = '';

    let bancoN;

    if(tipoCuentaInput === 'CuentaAhorros'){
        bancoN = new CuentaAhorros(numeroCuentaInput, parseInt(saldoInput), parseInt(cantidadDepositoInput), parseInt(cantidadRetiroInput));
        informacion.innerHTML = `De la cuenta de ahorros ${numeroCuentaInput} se deposito ${cantidadDepositoInput}, su saldo actual es: ${bancoN.depositar()}`;
    }else if(tipoCuentaInput === 'CuentaCorriente'){
        bancoN = new CuentaCorriente(numeroCuentaInput, parseInt(saldoInput), parseInt(cantidadDepositoInput), parseInt(cantidadRetiroInput))
        informacion.innerHTML = `De la cuenta de ahorros ${numeroCuentaInput} se deposito ${cantidadDepositoInput}, su saldo actual es: ${bancoN.depositar()}`;
}
})