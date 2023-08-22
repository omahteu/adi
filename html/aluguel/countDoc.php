<?php

include_once "conexao.php";


$query_usuarios= "SELECT * FROM aluguel_movimentos ORDER BY numero DESC LIMIT 1";
$result_usuarios = $conn->prepare($query_usuarios);
$result_usuarios->execute();

if(($result_usuarios) and ($result_usuarios->rowCount() != 0)){
    while($row_usuario = $result_usuarios->fetch(PDO::FETCH_ASSOC)){
        $dados[] = [
            'id' => $row_usuario['id'],
            'numero' => $row_usuario['numero']
        ];
    }

    $retorna = ['erro' => false, 'dados' => $dados];
    //$retorna = ['erro' => true, 'msg' => "Erro: Nenhum usuário encontrado!"];
}else{
    $retorna = ['erro' => true, 'msg' => "Erro: Nenhum usuário encontrado!"];
}
    

echo json_encode($retorna);