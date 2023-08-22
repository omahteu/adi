$(document).on("click", "#abaRelatorioEME", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Equipamentos</label>
                    <select class="form-control">
                        <option hidden>Equipamentos</option>
                    </select>
                </div>

                <div class="form-group col-md-3">
                    <label for="inputEmail4">Período de Movimentação</label>
                    <input type="date" class="form-control">
                </div>

                <div class="form-group col-md-3">
                    <label for="inputEmail4">.</label>
                    <input type="date" class="form-control">
                </div>

            </div>

            <h5>Tipo de Arquivo</h5>

            <div class="form-row">
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
