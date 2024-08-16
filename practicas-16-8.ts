function addNumber(a:number, b:number) :string{
    return (a+b).toString();
}

console.log(addNumber(1,1))

var resultado = addNumber(2, 2)
console.log(resultado)

function llamar (contacto: string, 
                mensaje: string = "Este es un mensaje default"){
    console.log(`Hola ${contacto}, ${mensaje}`)
}

llamar('Alicia', 'nos vemos a las 5')

function onCar(modo? : string){
    if(modo){
        console.log(`Se encendió en auto en el modo: ${ modo }`)
    } else {
        console.log("Se encendió el auto")
    }
}

onCar()

const miFun = function(a: string){
    return a.toUpperCase()
}

const miFunFlecha = (a: string) => a.toUpperCase()

console.log(miFun("hello"))
console.log(miFunFlecha("hello flecha"))