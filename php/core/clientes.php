<?php
include "../conexao.php";
$query = "SELECT id, nome_razao_social FROM aluguel_clientes";
$resultado = $conn->query($query);
if ($resultado->num_rows > 0) {
    while($row = $resultado->fetch_assoc()) {
        $dados[] = [
            'id' => $row["id"],
            'nome_razao_social' => $row["nome_razao_social"]
        ];
    }
    $retorna = ['status' => true, 'dados' => $dados];
}
echo json_encode($retorna);

?>