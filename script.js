function operar() {
  let txn1 = document.querySelector("#txn1");
  let txn2 = document.querySelector("#txn2");
  let result = document.querySelector("#result");
  let n1 = Number(txn1.value);
  let n2 = Number(txn2.value);
  let operacao = n1 * n2;
  result.innerHTML = `${n1} x ${n2} é igual a: ${operacao}`;
}
