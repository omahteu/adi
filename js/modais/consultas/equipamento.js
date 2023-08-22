$(document).on("click", "#abaConsultaEquipamento", function() {
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
                <div class="form-group col-md-2">
                    <button type="button" class="form-control">Localizar</button>
                </div>
            </div>

            <br>

            <div class="form-row">>
                <div class="alert alert-success form-group col-md-1" role="alert">
                    Alugado
                </div>
                &nbsp
                <div class="alert alert-danger form-group col-md-1"" role="alert">
                    Baixado
                </div>
                &nbsp
                <div class="alert alert-warning form-group col-md-1"" role="alert">
                    Emprestado
                </div>
                &nbsp
                <div class="alert alert-info form-group col-md-1"" role="alert">
                    Garantia
                </div>
                &nbsp
                <div class="alert alert-light form-group col-md-1"" role="alert">
                    Liberado
                </div>
                &nbsp
                <div class="alert alert-secondary form-group col-md-1"" role="alert">
                    Manutenção
                </div>
                <div class="alert alert-dark form-group col-md-1"" role="alert">
                    Sem Conserto
                </div>
            </div>



        </form>
        `
    )
})
