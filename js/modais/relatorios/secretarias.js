$(document).on("click", "#abaRelatorioSecretaria", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Número</label>
                    <input type="text" class="form-control" placeholder="Número">
                </div>

                <div class="form-group col-md-4">
                    <label for="inputEmail4">Nome</label>
                    <input type="text" class="form-control" placeholder="Nome">
                </div>

                <div class="form-group col-md-4">
                    <label for="inputEmail4">Prefeitura</label>
                    <select class="form-control">
                        <option hidden>Prefeitura</option>
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
