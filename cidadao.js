//funcao em js - first class object

//criando de forma literal
function funcao1(){}

//armazenando funcao em variavel
const funcao2 = function(){}

//armazendando num array
const array = [function(a, b){return a + b}, funcao1, funcao2] 
console.log(array[0](2,3))

//armazendando em um atributo de objeto
const obj = {}
obj.falr = function(){
    return "Opa"
}
console.log(obj.falr())

// passando funcao como parametro
function run(fun){
    fun()
}

run (function(){
    console.log("Execultando...")
})

//funcao contendo outra funcao

function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)