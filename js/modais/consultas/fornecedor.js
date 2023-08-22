$(document).on("click", "#abaConsultaFornecedor", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>

            <div class="form-row">
                <div class="form-group col-md-2">
                    <label for="inputEmail4">CPF/Cnpj</label>
                    <input type="text" class="form-control" placeholder="CPF/CNPJ">
                </div>
                <div class="form-group col-md-10">
                    <label for="inputEmail4">Nome do Fornecedor</label>
                    <input type="text" class="form-control" placeholder="Nome do Fornecedor">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-1">
                    <label for="inputEmail4">Ativos</label>
                    <input type="radio" class="form-control" id="inputEmail4">
                </div>
                <div class="form-group col-md-1">
                    <label for="inputEmail4">Inativos</label>
                    <input type="radio" class="form-control" id="inputEmail4">
                </div>
            </div>



            <button type="button" class="btn btn-primary">Salvar</button>
        </form>
        `
    )
})
