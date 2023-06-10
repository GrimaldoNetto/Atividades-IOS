let array = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995];

console.log("Array completo:", array);
console.log("Tamanho do array:", array.length);

console.log("Informação 'JS':", array[array.indexOf("JS")]);
let arrayString = array.toString();
console.log("Tipo da string:", typeof arrayString);

let arrayStringComSeparador = array.join("/");
console.log("String com separador '/':", arrayStringComSeparador);

array.unshift("IOS");
console.log("Novo array:", array);
console.log("Quantidade de posições atualizadas:", array.length);

let arrayBidimensional = [
     ["HTML", 1993, "CSS", 1996],
     ["Bootstrap", 2011, "JS", 1995],
     ["React", 2013, "Java", 1995]
];
console.log("Array bidimensional completo:", arrayBidimensional);

console.log("Tamanho do array:", arrayBidimensional.length);

let ano2013 = arrayBidimensional[1][3];
console.log("Ano 2013:", ano2013);

arrayBidimensional[1][2] = "JavaScript";
arrayBidimensional[2].splice(2, 2);

arrayBidimensional.push(["pipoca"]);
console.log("Novo array bidimensional:", arrayBidimensional);