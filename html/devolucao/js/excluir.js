$(document).on("click", ".excluir", function() {
    let valor = $(this).attr("data-toggle")
    const indexToRemove = box_devolucao.indexOf(valor);
    if (indexToRemove !== -1) {
      box_devolucao.splice(indexToRemove, 1);
    }
    alert("Equipamento Excluido com Sucesso!")
    updateTable()
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
