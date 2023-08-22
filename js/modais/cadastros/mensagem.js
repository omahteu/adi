$(document).on("click", "#abaCadastroMensagem", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>
            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputPassword4">Mensagem</label>
                    <textarea class="form-control" name="" id="" cols="30" rows="50"></textarea>
                </div>
            </div>
            <button type="button" class="btn btn-primary">Salvar</button>
        </form>
        `
    )
})
