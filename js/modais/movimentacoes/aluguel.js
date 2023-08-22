$(document).on("click", "#abaMovimentacaoAluguel", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>

            <h2>Aluguel de Equipamentos</h2>

            <div class="col-12">
                <label for="usuario" class="form-label">Nome</label>
                <input type="text" name="usuario" class="form-control" id="usuario" placeholder="Pesquisar usuário" onkeyup="carregar_usuarios(this.value)" />
                <span id="resultado_pesquisa"></span>
            </div>

            <input type="hidden" name="id_usuario" class="form-control" id="id_usuario">

            <div class="form-row">
                <div class="form-group col-md-10">
                    <label for="searchClientAluguel">Número ou Nome do Cliente</label>
                    <input type="text" class="form-control" id="searchClientAluguel" name="searchClientAluguel" placeholder="Número ou Nome do Cliente">
                    <div id="ACClientAluguel"></div>
                </div>

                <div class="form-group col-md-2">
                    <label for="inputEmail4">.</label>
                    <button type="button" class="form-control">Selecionar</button>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-10">
                    <label for="inputEmail4">Número ou Nome do Equipamento</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="Número ou Nome do Equipamento">
                </div>
                <div class="form-group col-md-2">
                    <label for="inputEmail4">.</label>
                    <button type="button" class="form-control">Selecionar</button>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Número do Documento</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="Número do Documento">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Tipo de Movimento</label>
                    <input type="texet" class="form-control" id="inputEmail4" placeholder="Tio de Movimento">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Cliente</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="Cliente">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Data</label>
                    <input type="datetime-local" class="form-control" id="inputEmail4">
                </div>
            </div>

            <button type="button" class="btn btn-primary">Salvar</button>
        </form>
        `
    )
})
