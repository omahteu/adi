$(document).on("click", "#abaRelatorioECliente", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>

            <div class="form-row">
                <div class="form-group col-md-8">
                    <label for="inputEmail4">Cliente</label>
                    <select class="form-control">
                        <option hidden>Cliente</option>
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
                <div class="form-group col-md-8">
                    <label for="inputEmail4">Tipo de Relatório</label>
                    <select class="form-control">
                        <option hidden>Tipo de Relatório</option>
                    </select>
                </div>

                <div class="form-group col-md-4">
                    <label for="inputEmail4">Tipo</label>
                    <input type="date" class="form-control">
                </div>

            </div>

            <h5>Ordenar por&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTipo de Arquivo</h5>

            <div class="form-row">
                <div class="form-group col-md-1">
                    <label for="inputEmail4">Numerico</label>
                    <input type="radio" class="form-control">
                </div>

                <div class="form-group col-md-1">
                    <label for="inputEmail4">Alfabetico</label>
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
