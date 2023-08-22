$(document).on("click", "#abaCadastroCliente", function() {
    let area = $("#main-content")
    area.html(
        `
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Nome/Razão Social</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Nome/Razão Social">
                </div>
                <div class="form-group col-md-3">
                    <label for="inputPassword4">Secretaria</label>
                    <select class="form-control">
                        <option hidden>Secretaria</option>
                    </select>
                </div>
                <div class="form-group col-md-3">
                    <label for="inputPassword4">Tipo</label>
                    <select class="form-control">
                        <option hidden>Tipo</option>
                        <option>Física</option>
                        <option>Jurídica</option>
                    </select>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputEmail4">CPF/CNPJ</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="CPF/CNPJ">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputEmail4">RG/CGF</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="RG/CGF">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputEmail4">CGC</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="CGC">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="inputEmail4">CEP</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="CEP">
                </div>
                <div class="form-group col-md-8">
                    <label for="inputEmail4">Endereço</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Endereço">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCity">Bairro</label>
                    <input type="text" class="form-control" id="inputCity" placeholder="Bairro">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputState">Cidade</label>
                    <input type="text" class="form-control" id="inputCity" placeholder="Cidade">
                </div>
                <div class="form-group col-md-2">
                    <label for="inputZip">Estado</label>
                    <select class="form-control">
                        <option hidden>Estado</option>
                        <option>AC</option>
                        <option>AL</option>
                        <option>AM</option>
                        <option>AP</option>
                        <option>BA</option>
                        <option>CE</option>
                        <option>DF</option>
                        <option>ES</option>
                        <option>GO</option>
                        <option>MA</option>
                        <option>MG</option>
                        <option>MS</option>
                        <option>MT</option>
                        <option>PA</option>
                        <option>PB</option>
                        <option>PE</option>
                        <option>PI</option>
                        <option>PR</option>
                        <option>RJ</option>
                        <option>RN</option>
                        <option>RO</option>
                        <option>RR</option>
                        <option>RS</option>
                        <option>SC</option>
                        <option>SE</option>
                        <option>SP</option>
                        <option>TO</option>
                    </select>
                </div>
            </div>
            <button type="button" class="btn btn-primary">Salvar</button>
        </form>
        `
    )
})