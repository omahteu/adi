$(document).on("click", "#abaConsultaSubstituir", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>

            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Número ou Nome do Cliente</label>
                    <select class="form-control">
                        <option hidden>Tipo</option>
                    </select>
                </div>
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Número do Movimento</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="Número do Movimento">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Número ou Nome do Cliente</label>
                    <input type="date" class="form-control" id="inputEmail4">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputEmail4">.</label>
                    <input type="date" class="form-control" id="inputEmail4">
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
