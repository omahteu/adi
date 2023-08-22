$(document).on("click", "#abaCadastroTipo", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>
            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputPassword4">Nome</label>
                    <input type="text" class="form-control" placeholder="Nome">
                </div>
            </div>
            <button type="button" class="btn btn-primary">Salvar</button>
        </form>
        `
    )
})
