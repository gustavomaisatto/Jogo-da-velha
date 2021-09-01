var player1 = "X"
var player2 = "O"
var playTime = player1
var gameOver = false


marcador()
jogada()

    function marcador() {
        if (gameOver){
            return;
        }
        else if (playTime == player1) {
            var imagem = document.getElementById("img").src = "imagens/letra-x.png"
        } else {
            var imagem = document.getElementById("img").src = "imagens/letra-o.png"
        }
    }
        function jogada() {
            var button = document.getElementsByClassName('botao')
            for (var i = 0;i < button.length;i++){
           button[i].addEventListener ("click", function() {
                if (gameOver) {return;}
                if (this.getElementsByTagName("img").length == 0) {
                if (playTime == player1) {
                    this.innerHTML = "<img src='imagens/letra-x.png'>"
                    this.setAttribute("jogada", player1)
                    playTime = player2
                } else {
                    this.innerHTML = "<img src='imagens/letra-o.png'>"
                    this.setAttribute("jogada", player2)
                    playTime = player1
                } marcador()
                vencedor()
            } 
           }
           )
     }
}

async function vencedor () {
    var a1 = document.getElementById("a1").getAttribute("jogada")
    var a2 = document.getElementById("a2").getAttribute("jogada")
    var a3 = document.getElementById("a3").getAttribute("jogada")
    var b1 = document.getElementById("b1").getAttribute("jogada")
    var b2 = document.getElementById("b2").getAttribute("jogada")
    var b3 = document.getElementById("b3").getAttribute("jogada")
    var c1 = document.getElementById("c1").getAttribute("jogada")
    var c2 = document.getElementById("c2").getAttribute("jogada")
    var c3 = document.getElementById("c3").getAttribute("jogada")
    var vencedor = ""
    if (((a1 == a2 && a1 == a3) || (a1 == b1 && a1 == c1) || (a1 == b2 && a1 == c3)) && a1 != ""){
        vencedor = a1
    } else if (((b2 == a2 && b2 == c2) || (b2 == a3 && b2 == c1) || (b2 == b1 && b2 == b3)) && b2 != "") {
        vencedor = b2
    } else if (((c3 == c2 && c3 == c1) || (c3 == b3 && c3 == a3)) && c3!="") {
        vencedor = c3
    } else if (a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != ""
     && vencedor == "") {
         await sleep(50)
        alert('Infelizmente não houve vencedor. Reinicie a rodada.')
    }
    if (vencedor != "") {
        gameOver = true
        await sleep(50)
        alert('O vencedor da rodada foi o jogador: ' + vencedor)
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

function reiniciarGame() {
    gameOver = false
    playTime = player1
    // Excluindo imagens de X e O
    document.getElementById("a1").innerHTML = ''
    document.getElementById("a2").innerHTML = ''
    document.getElementById("a3").innerHTML = ''
    document.getElementById("b1").innerHTML = ''
    document.getElementById("b2").innerHTML = ''
    document.getElementById("b3").innerHTML = ''
    document.getElementById("c1").innerHTML = ''
    document.getElementById("c2").innerHTML = ''
    document.getElementById("c3").innerHTML = ''
    //resetando jogo

    document.getElementById("a1").setAttribute("jogada", "")
    document.getElementById("a2").setAttribute("jogada", "")
    document.getElementById("a3").setAttribute("jogada", "")
    document.getElementById("b1").setAttribute("jogada", "")
    document.getElementById("b2").setAttribute("jogada", "")
    document.getElementById("b3").setAttribute("jogada", "")
    document.getElementById("c1").setAttribute("jogada", "")
    document.getElementById("c2").setAttribute("jogada", "")
    document.getElementById("c3").setAttribute("jogada", "")

    marcador()
}