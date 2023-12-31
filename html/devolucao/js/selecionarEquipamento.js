var box_devolucao = []

$(document).on("click", "#selecionarEquipamento", function() {
    let equip = $("#equipamento").val()
    if (equip != "") {
        let i3 = $("#equipamento").val()
        box_devolucao.push(i3)
        alert("Equipamento Adicionado com Sucesso!")
        updateTable()
        document.getElementById("foooo").reset()
        contagem()
    }
})

function updateTable() {
    var lista = document.getElementById("lista_itens")
    lista.innerHTML = ""
    if (box_devolucao.length == 1) {
        lista.innerHTML += `
            <tr>
                <td style="text-align: center;">${box_devolucao[0]}</td>
                <td style="text-align: center;"><button type="button" class="btn btn-danger excluir" data-toggle="${box_devolucao[0]}">Excluir</button></td>
            </tr>
        `
    } else {
        box_devolucao.forEach(e => {
            lista.innerHTML += `
            <tr>
                <td style="text-align: center;">${e}</td>
                <td style="text-align: center;"><button type="button" class="btn btn-danger excluir" data-toggle="${e}">Excluir</button></td>
            </tr>
        `
        });
    }
}

async function contagem() {
    const rq = await fetch("countDoc.php")
    const rs = await rq.json()
    if(rs["erro"] == false) {
        $("#documento").val(rs["dados"][0].numero)
    }
}