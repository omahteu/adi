$(window).on("load", function() {
    contagem()
})

async function contagem() {
    const rq = await fetch("countDoc.php")
    const rs = await rq.json()
    if(rs["erro"] == false) {
        $("#documento").val(rs["dados"][0].numero)
    }
}
