async function carregar_usuarios_devolucao(valor) {
    if (valor.length >= 3) {
        document.getElementById('resultado_pesquisa').style.display = "inline";
        const dados = await fetch('usuar_devol.php?nome=' + valor);
        const resposta = await dados.json();
        var htmlU = "<ul class='list-group position-fixed'>";
        if (resposta['erro']) {
            htmlU += "<li class='list-group-item disabled'>" + resposta['msg'] + "</li>";
        } else {
            for (i = 0; i < resposta['dados'].length; i++) {
                htmlU += "<li class='list-group-item list-group-item-action' onclick='get_id_usuario_devolucao(" + resposta['dados'][i].id + "," + JSON.stringify(resposta['dados'][i].nome_razao_social) + ")'>" + resposta['dados'][i].nome_razao_social + "</li>";
            }
        }
        htmlU += "</ul>";
        document.getElementById('resultado_pesquisa').innerHTML = htmlU;
        setTimeout(() => {
            document.getElementById('resultado_pesquisa').style.display = "none";
        }, 5000);

    }
}

function get_id_usuario_devolucao(id_usuario, nome) {
    document.getElementById("usuario").value = nome;
    document.getElementById("id_usuario").value = id_usuario;
}

const fechar = document.getElementById('usuario');

document.addEventListener('click', function (event) {
    const validar_clique = fechar.contains(event.target);
    if (!validar_clique) {
        document.getElementById('resultado_pesquisa').innerHTML = '';
    }
});