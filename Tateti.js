let combinaciones = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let jugador1 = ""
let jugador2 = ""

function validarnombres(){
    let j1 = document.getElementById("jugador1").value
    let j2 = document.getElementById("jugador2").value
    if ((jugador1 === "" && jugador2 === "") || (jugador1 === "" || jugador2 === "")){
        Swal.fire({
            text: "Ingresa los nombres correctamente",
            icon: "ERROR",
            confirmButtonText: "OK"
        })
        return false
    }
    return true
}
