async function carregar_tipos(valor) {
    if (valor.length >= 3) {
        document.getElementById('resultado_pesquisa_tipo').style.display = "inline";
        const dados = await fetch('listar_tipos.php?nome=' + valor);
        const resposta = await dados.json();
        var htmlT = "<ul class='list-group position-fixed'>";
        if (resposta['erro']) {
            htmlT += "<li class='list-group-item disabled'>" + resposta['msg'] + "</li>";
        } else {
            for (i = 0; i < resposta['dados'].length; i++) {
                htmlT += "<li class='list-group-item list-group-item-action' onclick='get_id_tipos(" + resposta['dados'][i].id + "," + JSON.stringify(resposta['dados'][i].nome) + ")'>" + resposta['dados'][i].nome + "</li>";
            }
        }
        htmlT += "</ul>";

        document.getElementById('resultado_pesquisa_tipo').innerHTML = htmlT;
        setTimeout(() => {
            document.getElementById('resultado_pesquisa_tipo').style.display = "none";
        }, 5000);

    }
}

function get_id_tipos(id_tipo, nome) {
    document.getElementById("tipo").value = nome;
    document.getElementById("id_tipo").value = id_tipo;
}

const fecharTP = document.getElementById('tipo');

document.addEventListener('click', function (event) {
    const validar_clique = fecharTP.contains(event.target);
    if (!validar_clique) {
        document.getElementById('resultado_pesquisa_tipo').innerHTML = '';
    }
});
