$(document).on("click", ".excluir", function() {
    let index = $(this).attr("data-toggle")
    let dados =  JSON.parse(sessionStorage.getItem("dados"))
    dados.splice(index, 1); // Remove o item no índice especificado
    sessionStorage.setItem("dados", JSON.stringify(dados));

    var tabelaCorpo = $("#lista_itens");
    tabelaCorpo.empty();

    dados.forEach(function(dado, index) {
        tabelaCorpo.append(
            `
                <tr>
                    <td style="text-align: center;">${dado.equipamentosalugados}</td>
                    <td style="text-align: center;">${dado.equipamento}</td>
                    <td style="text-align: center;">
                        <button type="button" class="btn btn-danger excluir" data-toggle="${index}">Excluir</button>
                    </td>
                </tr>
            `
        )
    });
})
