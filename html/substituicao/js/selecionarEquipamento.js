$(document).ready(function() {
    $("#selecionarEquipamento").click(function() {
        var usuario = $("#usuario").val();
        var equipamentosalugados = $("#equipamentosalugados").val();
        var equipamento = $("#equipamento").val();

        if (usuario !== "" && equipamentosalugados !== "" && equipamento !== "") {
            var novoDado = {
                usuario: usuario,
                equipamentosalugados: equipamentosalugados,
                equipamento: equipamento
            };

            console.log(novoDado)

            var dadosAntigos = JSON.parse(sessionStorage.getItem("dados")) || [];
            dadosAntigos.push(novoDado);

            sessionStorage.setItem("dados", JSON.stringify(dadosAntigos));

            $("#usuario").val("");
            $("#equipamentosalugados").val("");
            $("#equipamento").val("");

            carregarTabela();
        }
    });

    function carregarTabela() {
        var dados = JSON.parse(sessionStorage.getItem("dados")) || [];

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
    }

    carregarTabela();
});
