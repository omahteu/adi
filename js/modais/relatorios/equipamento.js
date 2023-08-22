$(document).on("click", "#abaRelatorioEquipamento", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>

            <div class="form-row">
                <div class="form-group col-md-2">
                    <label for="inputEmail4">Período de Aquisição</label>
                    <input type="date" class="form-control">
                </div>
                <div class="form-group col-md-2">
                    <label for="inputEmail4">.</label>
                    <input type="date" class="form-control">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Fornecedor</label>
                    <select class="form-control">
                        <option hidden>Fornecedor</option>
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Tipo</label>
                    <select class="form-control">
                        <option hidden>Tipo</option>
                    </select>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Situação</label>
                    <select class="form-control">
                        <option hidden>Situação</option>
                    </select>
                </div>
                <div class="form-group col-md-8">
                    <label for="inputEmail4">Cliente</label>
                    <select class="form-control">
                        <option hidden>Cliente</option>
                    </select>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Situação</label>
                    <select class="form-control">
                        <option hidden>Situação</option>
                    </select>
                </div>
                <div class="form-group col-md-8">
                    <label for="inputEmail4">Cliente</label>
                    <select class="form-control">
                        <option hidden>Cliente</option>
                    </select>
                </div>
            </div>

            <h5>Ordenação</h5>

            <div class="form-row">
                <div class="form-group col-md-1">
                    <label for="inputEmail4">Numérico</label>
                    <input type="radio" class="form-control">
                </div>
                <div class="form-group col-md-1">
                    <label for="inputEmail4">Alfabetico</label>
                    <input type="radio" class="form-control">
                </div>
                <div class="form-group col-md-1">
                    <label for="inputEmail4">Data de Aquisição</label>
                    <input type="radio" class="form-control">
                </div>
            </div>

            <button type="button" class="btn btn-primary">Imprimir</button>
        </form>
        `
    )
})
