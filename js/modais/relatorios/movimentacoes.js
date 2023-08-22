$(document).on("click", "#abaRelatorioMovimentacoes", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Cliente</label>
                    <select class="form-control">
                        <option hidden>Cliente</option>
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

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Tipo</label>
                    <select class="form-control">
                        <option hidden>Tipo</option>
                    </select>
                </div>

                <div class="form-group col-md-4">
                    <label for="inputEmail4">Departamento</label>
                    <select class="form-control">
                        <option hidden>Departamento</option>
                    </select>
                </div>

                <div class="form-group col-md-4">
                    <label for="inputEmail4">Setor</label>
                    <select class="form-control">
                        <option hidden>Setor</option>
                    </select>
                </div>

            </div>

            <h5>Status</h5>

            <div class="form-row">
                <div class="form-group col-md-1">
                    <label for="inputEmail4">Todos</label>
                    <input type="radio" class="form-control">
                </div>

                <div class="form-group col-md-1">
                    <label for="inputEmail4">Alugado</label>
                    <input type="radio" class="form-control">
                </div>

                <div class="form-group col-md-1">
                    <label for="inputEmail4">Baixado</label>
                    <input type="radio" class="form-control">
                </div>

                <div class="form-group col-md-1">
                    <label for="inputEmail4">Devolução</label>
                    <input type="radio" class="form-control">
                </div>

                <div class="form-group col-md-1">
                    <label for="inputEmail4">Substituição Alugado</label>
                    <input type="radio" class="form-control">
                </div>

                <div class="form-group col-md-1">
                    <label for="inputEmail4">Substituição Devolução</label>
                    <input type="radio" class="form-control">
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
