//efeito do botão voltar ao Topo

function topo() {
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:'smooth'
        }
    )
}

//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementById('usuario')[0].value;
    usuario = usuario.toLowercase();
    var senha = document.getElementById('senha')[1].value;
    senha = senha.toLowercase();

    if(usuario == "admin" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }

    if(logado == 0){
        alert("Acesso Negado. Dados incorretos");
    }

}

//Ativar alert no botão cadastrar

function cadastro(){
    alert("cadastrado com sucesso!");
    window.Location.href = "index.html";
}

[usuario='teste',senha='123456']