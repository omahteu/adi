$(document).on("click", "#abaRelatorioFornecedor", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>

            <div class="form-row">
                <div class="form-group col-md-8">
                    <label for="inputEmail4">Nome</label>
                    <input type="text" class="form-control" placeholder="Nome">
                </div>

                <div class="form-group col-md-4">
                    <label for="inputEmail4">CPF/CNPJ</label>
                    <input type="text" class="form-control" placeholder="CPF/CNPJ">
                </div>
            </div>

            <h5>Status&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTipo de Arquivo</h5>

            <div class="form-row">
                <div class="form-group col-md-1">
                    <label for="inputEmail4">Ativo</label>
                    <input type="radio" class="form-control">
                </div>

                <div class="form-group col-md-1">
                    <label for="inputEmail4">Inativo</label>
                    <input type="radio" class="form-control">
                </div>

                <div class="form-group col-md-1">
                    <label for="inputEmail4">PDF</label>
                    <input type="radio" class="form-control">
                </div>

                <div class="form-group col-md-1">
                    <label for="inputEmail4">Excel</label>
                    <input type="radio" class="form-control">
                </div>
            </div>

            <button type="button" class="btn btn-primary">Imprimir</button>
        </form>
        `
    )
})
