$(document).on("click", "#abaConsultaCliente", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>

            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputEmail4">Número ou Nome do Cliente</label>
                    <input type="text" class="form-control" placeholder="Número ou Nome do Cliente">
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
