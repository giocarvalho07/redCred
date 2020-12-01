
// ===== calculos de valor de crédito ||||


var valorProposta = '';


function btn300(event) {
    valorProposta = document.getElementById('btn300').value
}
document.getElementById('btn300').addEventListener('click', btn300)



function btn500(event) {
    valorProposta = document.getElementById('btn500').value
}
document.getElementById('btn500').addEventListener('click', btn500)



function btn1000(event) {
    valorProposta = document.getElementById('btn1000').value
}
document.getElementById('btn1000').addEventListener('click', btn1000)



function btn2500(event) {
    valorProposta = document.getElementById('btn2500').value
}
document.getElementById('btn2500').addEventListener('click', btn2500)



function btn5000(event) {
    valorProposta = document.getElementById('btn5000').value
}
document.getElementById('btn5000').addEventListener('click', btn5000)



function btn10000(event) {
    valorProposta = document.getElementById('btn10000').value
}
document.getElementById('btn10000').addEventListener('click', btn10000)


function btn15000(event) {
    valorProposta = document.getElementById('btn15000').value
}
document.getElementById('btn15000').addEventListener('click', btn15000)


function btn20000(event) {
    valorProposta = document.getElementById('btn20000').value
}
document.getElementById('btn20000').addEventListener('click', btn20000)




// ===== calculos de parcela||||


var parcela = '';


function btn3x(event) {
    parcela = document.getElementById('btn3x').value
}
document.getElementById('btn3x').addEventListener('click', btn3x)



function btn6x(event) {
    parcela = document.getElementById('btn6x').value
}
document.getElementById('btn6x').addEventListener('click', btn6x)



function btn9x(event) {
    parcela = document.getElementById('btn9x').value
}
document.getElementById('btn9x').addEventListener('click', btn9x)



function btn12x(event) {
    parcela = document.getElementById('btn12x').value
}
document.getElementById('btn12x').addEventListener('click', btn12x)



function btn18x(event) {
    parcela = document.getElementById('btn18x').value
}
document.getElementById('btn18x').addEventListener('click', btn18x)



function btn24x(event) {
    parcela = document.getElementById('btn24x').value
}
document.getElementById('btn24x').addEventListener('click', btn24x)


function btn36x(event) {
    parcela = document.getElementById('btn36x').value
}
document.getElementById('btn36x').addEventListener('click', btn36x)


function btn48x(event) {
    parcela = document.getElementById('btn48x').value
}
document.getElementById('btn48x').addEventListener('click', btn48x)

  





// ==== modal logar ||| 


function formLogar(event) {

    event.preventDefault()

    var nome = document.getElementById('nome').value
    document.getElementById('logar').innerHTML = `${nome}`

    var profissao = document.getElementById('profissao').value

    var salario = document.getElementById('salario').value

    var idade = document.getElementById('idade').value

    fecharModalLogar()

}
document.getElementById('inputEntrar').addEventListener('click', formLogar)




function modal(modalId) {
    const modal = document.getElementById('modal')
    modal.classList.add('mostrar')
    document.getElementById('propostaInicial').innerHTML =  
    `O cliente solicitou uma proposta de R$ ${valorProposta},00 em ${parcela} parcelas`
    
    propostaParcela = parseFloat(parcela/100) * valorProposta
    proposta = parseFloat(valorProposta)
    juros = parseFloat( propostaParcela + proposta)

    document.getElementById('propostaFinal').innerHTML = 
    `A proposta final é de R$ ${juros},00 em ${parcela} parcelas`
}


function fecharModal(event) {
    const modal = document.getElementById('modal')
    modal.classList.remove('mostrar')
}
document.getElementById('fecharModal').addEventListener('click', fecharModal)


function calcular(event){
    modal(modal);
}
document.getElementById('calcular').addEventListener('click', calcular)









function entrar(entrarId) {
    const entrar = document.getElementById('entrar')
    entrar.classList.add('mostrar')

}


function fecharModalLogar(event) {
    const entrar = document.getElementById('entrar')
    entrar.classList.remove('mostrar')
}
document.getElementById('fecharModalLogar').addEventListener('click', fecharModalLogar)


function logar(event){
    entrar(entrar);
    document.getElementById('logar').style.backgroundColor = none;
}
document.getElementById('logar').addEventListener('click', logar)


