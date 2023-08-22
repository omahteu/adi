$(document).on("click", "#abaCadastroEquipamento", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>
            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="inputPassword4">Tipo</label>
                    <select class="form-control">
                        <option hidden>Tipo</option>
                    </select>
                </div>
                <div class="form-group col-md-3">
                    <label for="inputPassword4">Repetir este registro</label>
                    <input type="text" class="form-control" placeholder="Repetir este registro">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputPassword4">Número</label>
                    <input type="text" class="form-control" placeholder="Número">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputPassword44">Numeração Automática</label>
                    <input type="radio" class="form-control" id="inputPassword44">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputEmail4">Observações</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Observações">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputEmail4">Descrição</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Descrição">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Valor em Dólar</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Valor em Dólar">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Valor em Real</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Valor em Real">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Valor para Aluguel</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Valor para Aluguel">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Valor Alugado</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Valor Alugado">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Fornecedor</label>
                    <select class="form-control">
                        <option hidden>Fornecedor</option>
                    </select>
                </div>
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Data da Aquisição</label>
                    <input type="datetime-local" class="form-control" name="" id="">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Data da Locação</label>
                    <input type="datetime-local" class="form-control" name="" id="">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputEmail4">Data da Garantia Até</label>
                    <input type="datetime-local" class="form-control" name="" id="">
                </div>
            </div>
            <button type="button" class="btn btn-primary">Salvar</button>
        </form>
        `
    )
})