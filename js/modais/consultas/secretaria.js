$(document).on("click", "#abaConsultaSecretaria", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Número ou Nome do Cliente</label>
                    <input type="text" class="form-control" placeholder="Número">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Tpo</label>
                    <select class="form-control">
                        <option hidden>Tipo</option>
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Situações</label>
                    <select class="form-control">
                        <option hidden>Situações</option>
                        <option>Alugado</option>
                        <option>Baixado</option>
                        <option>Emprestado</option>
                        <option>Garantia</option>
                        <option>Liberado</option>
                        <option>Manutenção</option>
                        <option>Sem Conserto</option>
                    </select>
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

            <div class="form-row">
                <div class="form-group col-md-2">
                    <button type="button" class="form-control">Localizar</button>
                </div>
            </div>

            <br>

        </form>
        `
    )
})
