const array = ['nome: ' , 'Ana ','idade: 17 ' , 'nota:8 ' , 'ano: ', '2B<br> ']
const array0 = ['nome: ' , 'Bruno ','aidade: 16 ' , 'nota:6 ' , 'ano: ', '2C<br> ']
const array1 = ['nome: ' , 'Maria ','aidade: 14 ' , 'nota:8 ' , 'ano: ', '1F<br> ']

var allarray = array + array0 + array1

 var allarray = array.length

 console.log(array + array0 + array1)
//  console.log(`Tamanho do array : ` + allarray + '<br>')
 console.log(array[ 0, 3])
 console.log(array0)
 console.log(array1)


 var allacom = JSON.stringify(allarray);
 console.log(allacom);