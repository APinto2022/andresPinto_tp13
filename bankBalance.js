let operaciones = [100, -25, 120, -130, 85, -15, 300];

function calculateBalances(arrDeOperaciones) {
  //declaro variables para cada tipo de saldo
  let saldoTotalDeDepositos = 0;
  let saldoActualDeRetiros = 0;
  let saldoActualDelCliente = 0;

  //recorro las operaciones
  for (let i = 0; i < arrDeOperaciones.length; i++) {
    //evalúo el signo de cada elemento,y según corresponda lo acumulo en cada saldo
    arrDeOperaciones[i] < 0
      ? (saldoActualDeRetiros += arrDeOperaciones[i])
      : (saldoTotalDeDepositos += arrDeOperaciones[i]);
    saldoActualDelCliente += arrDeOperaciones[i];
  }
  console.log("El total de depositos es: " + saldoTotalDeDepositos);
  console.log("El total de retiros es: " + saldoActualDeRetiros);
  console.log("El saldo actual es: " + saldoActualDelCliente);
}

function bankBalance(nombre, apellido, operaciones) {
  calculateBalances(operaciones);
  return (`Estimada ${nombre}${apellido} El monto total de los depósitos es de: $${saldoTotalDeDepositos}, el monto total de los retiros es de: ${saldoActualDeRetiros}, Por lo tanto, su saldo actual en la cuenta es de: $${saldoActualDelCliente}`);
}

calculateBalances(operaciones);

//bankBalance("Pepa","Flores",operaciones);

//module.exports = bankBalance
