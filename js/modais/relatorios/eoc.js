$(document).on("click", "#abaRelatorioEOC", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>

            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputEmail4">Prefeituras</label>
                    <select class="form-control">
                        <option hidden>Prefeituras</option>
                    </select>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputEmail4">Secretarias</label>
                    <select class="form-control">
                        <option hidden>Secretarias</option>
                    </select>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputEmail4">Clientes</label>
                    <select class="form-control">
                        <option hidden>Clientes</option>
                    </select>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputEmail4">Tipo de Relatório</label>
                    <select class="form-control">
                        <option hidden>Tipo de Relatório</option>
                        <option>Detalhado</option>
                        <option>Simplificado</option>
                    </select>
                </div>
            </div>

            <button type="button" class="btn btn-primary">Imprimir</button>
        </form>
        `
    )
})
