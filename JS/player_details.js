var currentSelectPlayer = JSON.parse(localStorage.getItem("currentSelectPlayer"))

var allPlayers = JSON.parse(localStorage.getItem("player"))
var currentPlayerIndex = 0
for (let i = 0; i < allPlayers.length; i++) {
    if (allPlayers[i].fullName === currentSelectPlayer) {
        currentPlayerIndex = i
    }
}

document.getElementById("player_img").src = allPlayers[currentPlayerIndex].photo
document.getElementById("full_name").innerHTML=allPlayers[currentPlayerIndex].fullName
document.getElementById("team_name").innerHTML=allPlayers[currentPlayerIndex].team
document.getElementById("price").innerHTML=allPlayers[currentPlayerIndex].price
document.getElementById("playing_status").innerHTML=allPlayers[currentPlayerIndex].playingStatus
document.getElementById("role").innerHTML=allPlayers[currentPlayerIndex].role