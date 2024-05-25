let conta = 0;
let pessoas = 0;
let porcentagem = 0;
const contaInput = document.querySelector("#conta");
contaInput.addEventListener("input",receberConta);

function receberConta(event){
    conta = Number(event.target.value);
    
    
}

const pessoasInput = document.querySelector("#pessoas");
pessoasInput.addEventListener("input",receberPessoa)

function receberPessoa(event){
    if(event.target.value > 0){
        pessoas=Number(event.target.value);
        
    }else{
        alert("Quantidade de pessoas não pode ser zero!!!");   
    }
    calcular();
}

const botoesGorjetas = document.querySelectorAll(".porcento input[type='button']");

botoesGorjetas.forEach(botao => {
    botao.addEventListener("click",receberPorcentagem);
})
function receberPorcentagem(event){
    botoesGorjetas.forEach(botao =>{
        botao.classList.remove("botao-ativo")
        if(botao.value === event.target.value){
            botao.classList.add("botao-ativo");
        }
    })
    if(event.target.value !== ""){
        porcentagem = parseFloat(event.target.value) / 100;
    }else{
        porcentagem = 0;
    }
    calcular();
}

const gorjetaInput = document.querySelector("#outra")
gorjetaInput.addEventListener("input",receberPorcentagem)

function calcular(){
    if(conta !== 0 && porcentagem !== 0 && pessoas !== 0){
       const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong");
       strongGorjetaTotal.innerHTML = `$ ${(conta * porcentagem / pessoas).toFixed(2)}`;

       const strongTotal = document.querySelector(".total > strong")
       strongTotal.innerHTML = `$ ${((conta + (conta*porcentagem)) / pessoas).toFixed(2)}`;
    }
}

const botaolimpar = document.querySelector(".resultados button");
botaolimpar.addEventListener("click", limpar);
function limpar(){
    contaInput.value ="";

    botoesGorjetas.forEach(botao=>{
        botao.classList.remove("botao-ativo");
    })
    gorjetaInput.value = "";
    pessoasInput.value = "";

    document.querySelector(".gorjeta-total > strong").innerHTML = "$ 0.00";
    document.querySelector(".total > strong").innerHTML = "$ 0.00"
}
