$(document).on("click", ".excluir", function() {
    let valor = $(this).attr("data-toggle")
    const indexToRemove = caixa.indexOf(valor);
    if (indexToRemove !== -1) {
      caixa.splice(indexToRemove, 1);
    }
    alert("Equipamento Excluido com Sucesso!")
    updateTable()
})

function updateTable() {
    var lista = document.getElementById("lista_itens")
    lista.innerHTML = ""
    if (caixa.length == 1) {
        lista.innerHTML += `
            <tr>
                <td style="text-align: center;">${caixa[0]}</td>
                <td style="text-align: center;"><button type="button" class="btn btn-danger excluir" data-toggle="${caixa[0]}">Excluir</button></td>
            </tr>
        `
    } else {
        caixa.forEach(e => {
            lista.innerHTML += `
            <tr>
                <td style="text-align: center;">${e}</td>
                <td style="text-align: center;"><button type="button" class="btn btn-danger excluir" data-toggle="${e}">Excluir</button></td>
            </tr>
        `
        });
    }
}
