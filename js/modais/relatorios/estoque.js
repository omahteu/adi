$(document).on("click", "#abaRelatorioEstoque", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>

            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Situações</label>
                    <select class="form-control">
                        <option hidden>Situações</option>
                    </select>
                </div>

                <div class="form-group col-md-3">
                    <label for="inputEmail4">Secretarias</label>
                    <input type="date" class="form-control">
                </div>

                <div class="form-group col-md-3">
                    <label for="inputEmail4">Fornecedor</label>
                    <select class="form-control">
                        <option hidden>Fornecedor</option>
                    </select>
                </div>

                <div class="form-group col-md-3">
                    <label for="inputEmail4">Tipo</label>
                    <select class="form-control">
                        <option hidden>Tipo</option>
                    </select>
                </div>
            </div>

            <h5>Ordenar por</h5>

            <div class="form-row">
                <div class="form-group col-md-1">
                    <label for="inputEmail4">Numerico</label>
                    <input type="radio" class="form-control">
                </div>

                <div class="form-group col-md-1">
                    <label for="inputEmail4">Alfabetico</label>
                    <input type="radio" class="form-control">
                </div>
            </div>

            <button type="button" class="btn btn-primary">Imprimir</button>
        </form>
        `
    )
})
