$(document).on("click", "#abaCadastroSecretaria", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>
            <div class="form-row">
                <div class="form-group col-md-8">
                    <label for="inputPassword4">Nome</label>
                    <input type="text" class="form-control" placeholder="Nome">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputPassword4">Prefeitura</label>
                    <select class="form-control">
                        <option hidden>Prefeitura</option>
                    </select>
                </div>
            </div>
            <button type="button" class="btn btn-primary">Salvar</button>
        </form>
        `
    )
})
