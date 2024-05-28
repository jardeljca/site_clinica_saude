const form = document.getElementById("form");
const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmacaoSenha = document.getElementById("confirmacaoSenha");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    const nomeValue = nome.value;
    const sobrenomeValue = sobrenome.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    const confirmacaoSenhaValue = confirmacaoSenha.value;

    if (nomeValue === "") {
        setErroFor(nome, "O nome é obrigatório.");
    } else{
        setSucessoFor(nome);
    }

    if (sobrenomeValue === "") {
        setErroFor(sobrenome, "O sobrenome é obrigatório.");
    } else{
        setSucessoFor(sobrenome);
    }

    /* if (emailValue === ""){
        setErroFor(email, "O email é obrigatório.");
    } else if(checkEmail(emailValue)){
        setErroFor(email, "Por favor, insira um email válido.");
    } else{
        setSucessoFor(email);
    } */
}

function setErroFor(input, mensagem) {
    const controleForm = input.parentElement;
    const small = controleForm.querySelector("small");

    small.innerText = mensagem;
    controleForm.className = "formControl erro";
}

function setSucessoFor(input){
    const controleForm = input.parentElement;

    controleForm.className = "formControl sucesso";
}

/* function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  } */