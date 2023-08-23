var clinete = [
    {
        id: '1010',
        nome: 'PREFEITURA DE FORTALEZA',
        equipamento:'2',
        descricao: 'ESTABILIZADOR 300 VA FORCELINE S/N/S'
    },
    {
        id: '1010',
        nome: 'PREFEITURA DE FORTALEZA',
        equipamento:'3',
        descricao: 'ESTABILIZADOR 300 VA FORCELINE S/N/S'
    },
    {
        id: '1010',
        nome: 'PREFEITURA DE FORTALEZA',
        equipamento:'4',
        descricao: 'ESTABILIZADOR 300 VA FORCELINE S/N/S'
    }
]


$(document).on("click", "#selecionarCliente", function() {
    let cliente = $("#usuario").val()

    clinete.forEach(e => {
        if (e.nome == cliente) {
            $("#equipamentosalugados").append(
                `
                    <option>${e.descricao}</option>
                `
            )
        }
    });

    $("#usuario").prop('disabled', true);
    $(this).prop('disabled', true);
})
