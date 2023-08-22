$(document).on("click", "#abaCadastroFornecedor", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputPassword4">Nome/Razão Social</label>
                    <input type="text" class="form-control" placeholder="Nome/Razão Social">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputPassword4">CPF/CNPJ</label>
                    <input type="text" class="form-control" placeholder="CPF/CNPJ">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputPassword44">RG/CGF</label>
                    <input type="text" class="form-control" placeholder="RG/CGF">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-2">
                    <label for="inputEmail4">CEP</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="CEP">
                </div>
                <div class="form-group col-md-10">
                    <label for="inputEmail4">Endereço</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Endereço">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Bairro</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Bairro">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Cidade</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Cidade">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Estado</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Estado (fazer select)">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Telefone</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Telefone">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Fax</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Fax">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Celular</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Celular">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Site</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Site">
                </div>
            </div>
            <button type="button" class="btn btn-primary">Salvar</button>
        </form>
        `
    )
})