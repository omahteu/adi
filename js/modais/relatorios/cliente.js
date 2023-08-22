$(document).on("click", "#abaRelatorioCliente", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>

            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputEmail4">Secretarias</label>
                    <input type="text" class="form-control" placeholder="Secretarias">
                </div>
            </div>
            <h5>Exibir Clientes sem Secretarias?</h5>
            <div class="form-row">
                
                <div class="form-group col-md-1">
                    <label for="inputEmail4">Sim</label>
                    <input type="radio" class="form-control" id="inputEmail4">
                </div>
                <div class="form-group col-md-1">
                    <label for="inputEmail4">Não</label>
                    <input type="radio" class="form-control" id="inputEmail4">
                </div>
            </div>

            <button type="button" class="btn btn-primary">Imprimir</button>
        </form>
        `
    )
})
