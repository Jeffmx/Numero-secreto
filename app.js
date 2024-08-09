let numerosSorteados=[];
let qtdMaxima=10;
let numeroSecreto = novoNumero();
let count=1;

function novoNumero(){
    let numeroSecreto= parseInt(Math.random()*qtdMaxima+1);
    
    if (numerosSorteados.length == qtdMaxima){
        numerosSorteados=[];
    }if(numerosSorteados.includes(numeroSecreto)){
        return novoNumero();
    }else{
        numerosSorteados.push(numeroSecreto);
        console.log(numerosSorteados);
        return numeroSecreto;
    };
};

function TrocarConteudo(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

function limparCampo(){
    chute = document.querySelector('input');
    chute.value="";
};

function buttonClick(){
    let chute = document.querySelector('input').value;
    let tentativas = count > 1 ? 'tentativas' : 'tentativa';
    if (chute == numeroSecreto){
        TrocarConteudo('h1', 'Acerto mizeravi');
        TrocarConteudo('p', `Descobrisse o número oculto da vila da folha em ${count} ${tentativas}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            TrocarConteudo('p','O número é menor');
        }else{
            TrocarConteudo('p','O número é maior');
        }
        limparCampo();
    }
    count++;
};

function newGame(){
    limparCampo();
    numeroSecreto= novoNumero();
    tentativas=1;
    count=1;
    TrocarConteudo("h1", "Bem Vindo ao Jogo do Bicho!");
    TrocarConteudo('p', "Escolha um número de 1 a 10");
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
