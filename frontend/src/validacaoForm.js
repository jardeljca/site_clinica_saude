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
    } else {
        setSucessoFor(nome);
    }

    if (sobrenomeValue === "") {
        setErroFor(sobrenome, "O sobrenome é obrigatório.");
    } else {
        setSucessoFor(sobrenome);
    }

    if (emailValue === "") {
        setErroFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
        setErroFor(email, "Por favor, insira um email válido.");
    } else {
        setSucessoFor(email);
    }

    if (senhaValue === "") {
        setErroFor(senha, "A senha é obrigatória.");
    } else if (senhaValue.length < 4) {
        setErroFor(senha, "A senha precisa ter no mínimo 4 caracteres.");
    } else {
        setSucessoFor(senha);
    }

    if (confirmacaoSenhaValue === "") {
        setErroFor(confirmacaoSenha, "A confirmação da senha é obrigatória.");
    } else if (confirmacaoSenhaValue != senhaValue) {
        setErroFor(confirmacaoSenha, "Esse campo deve ser igual ao campo senha");
    }
    else {
        setSucessoFor(confirmacaoSenha);
    }

    const formcontrols = document.querySelectorAll(".formControl");

    const formValido = [...formcontrols].every((controleForm) => {
        return controleForm.className === "formControl sucesso";
    })

    if (formValido) {
        window.alert("Bem vindo" + " " + nomeValue + " " + sobrenomeValue + " " + "seu cadastro foi realizado com sucesso");

        //aqui deve ser adicionado o trexo do código que enviará os dados do formulário ao banco de dados

        resetForm();
    }
}

function setErroFor(input, mensagem) {
    const controleForm = input.parentElement;
    const small = controleForm.querySelector("small");

    small.innerText = mensagem;
    controleForm.className = "formControl erro";
}

function setSucessoFor(input) {
    const controleForm = input.parentElement;

    controleForm.className = "formControl sucesso";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function resetForm() {
    const form = document.getElementById("form");

    form.reset();

    const formcontrols = document.querySelectorAll(".formControl");

    formcontrols.forEach(control => {
        control.classList.remove("erro");
        control.classList.remove("sucesso");
    });
}