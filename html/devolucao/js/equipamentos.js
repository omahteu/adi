async function carregar_equipamentos_devolucao(valor) {
    if (valor.length >= 3) {
        document.getElementById('resultado_pesquisa_equipamento').style.display = "inline";
        const dados = await fetch('equip_devol.php?nome=' + valor);
        const resposta = await dados.json();
        var htmlE = "<ul class='list-group position-fixed'>";
        if (resposta['erro']) {
            htmlE += "<li class='list-group-item disabled'>" + resposta['msg'] + "</li>";
        } else {
            for (i = 0; i < resposta['dados'].length; i++) {
                htmlE += "<li class='list-group-item list-group-item-action' onclick='get_id_equipamentos_devolucao(" + resposta['dados'][i].id + "," + JSON.stringify(resposta['dados'][i].nome) + ")'>" + resposta['dados'][i].nome + "</li>";
            }
        }
        htmlE += "</ul>";

        document.getElementById('resultado_pesquisa_equipamento').innerHTML = htmlE;
        setTimeout(() => {
            document.getElementById('resultado_pesquisa_equipamento').style.display = "none";
        }, 5000);

    }
}

function get_id_equipamentos_devolucao(id_equipamento, nome) {
    document.getElementById("equipamento").value = nome;
    document.getElementById("id_equipamento").value = id_equipamento;
}

const fecharEQ = document.getElementById('equipamento');

document.addEventListener('click', function (event) {
    const validar_clique = fecharEQ.contains(event.target);
    if (!validar_clique) {
        document.getElementById('resultado_pesquisa_equipamento').innerHTML = '';
    }
});