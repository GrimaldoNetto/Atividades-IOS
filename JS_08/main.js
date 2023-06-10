function calcularEquacao() {
    const a = 2;
    const b = 5;
    const c = 2;

    const delta = b * b - 4 * a * c;
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    alert(`Resultado:
  x1 = ${x1}
  x2 = ${x2}`);
}
const calcularEquacaoArrow = () => {
    const a = 2;
    const b = 5;
    const c = 2;

    const delta = b * b - 4 * a * c;
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert(`Resultado:
  x1 = ${x1}
  x2 = ${x2}`);
}

const calcular = document.getElementById('calcular');
calcular.addEventListener('click', calcularEquacao);