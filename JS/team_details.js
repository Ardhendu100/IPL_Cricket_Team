var currentSelectTeam = JSON.parse(localStorage.getItem("currentSelectTeam"))

var allTeams = JSON.parse(localStorage.getItem("team"))
var currentTeamIndex = 0
for(let i=0;i<allTeams.length; i++){
    if (allTeams[i].teamName === currentSelectTeam){
        currentTeamIndex = i
      
    }
    
    
}
document.getElementById("team_icon").src = allTeams[currentTeamIndex].teamIcon
document.getElementById("team_name").innerText = allTeams[currentTeamIndex].teamName
document.getElementById("team_name").innerText = allTeams[currentTeamIndex].teamName
document.getElementById("player_count").innerText = allTeams[currentTeamIndex].playerCount
document.getElementById("top_bowler").innerText = allTeams[currentTeamIndex].topBowler
document.getElementById("top_batsman").innerText = allTeams[currentTeamIndex].topBatsman
document.getElementById("own_count").innerText = allTeams[currentTeamIndex].championshipWon 




function addPlayerCard(player){
    
    let card = document.createElement('div');
card.className = 'column';

card.style.float='left';
card.style.width='40rem'
card.style.height='370px'
card.style.marginLeft='20px'
card.style.outline="solid 1px black"
card.style.background="blue"
card.style.boxShadow="4px 4px 8px 0"
card.style.marginTop="20px"
//card.className="col-sm-6"

let cardBody = document.createElement('div');
cardBody.className = 'card-body';
cardBody.style.marginTop='10px'

// player photo
let icon=document.createElement('img')
icon.setAttribute("src",player.photo)
icon.setAttribute("width", "130rem");
icon.setAttribute("height", "120rem");
icon.style.marginLeft="380px"
icon.style.display="inline-block"
//Full Name
var name=document.createElement("p")
name.textContent="Name:"+player.fullName
name.style.color="whitesmoke"
name.style.marginTop='5px'
//Team Name
var teamName=document.createElement("p")
teamName.textContent="Team:"+player.team
teamName.style.color="whitesmoke"

//price
var price=document.createElement("p")
price.textContent="Price:"+player.price
price.style.color="whitesmoke"


//playing status
var status=document.createElement("p")
status.textContent="Playing Status:"+player.playingStatus
status.style.color="whitesmoke"


//role
var element=document.createElement("p");
element.textContent="Role:"+player.role
element.style.color="whitesmoke"



const lineBreak = document.createElement('br');



var button = document.createElement("input");
button.type = "button";
button.value ="More Details";
button.id = "id_"+player.fullName
button.style.height="33px"
button.style.marginLeft='390px'
button.style.marginTop="5px"


cardBody.appendChild(icon)
cardBody.appendChild(name)
cardBody.appendChild(teamName)
cardBody.appendChild(price)
cardBody.appendChild(status)
cardBody.appendChild(element)
cardBody.appendChild(button)
    card.appendChild(cardBody);
    var cardContainer = document.getElementById("allTeamPlayer");
    
    cardContainer.appendChild(card);
}

var player = JSON.parse(localStorage.getItem("player"))
console.log(player)
for (i=0; i< player.length; i++){
    if (player[i].team === currentSelectTeam){
        
        addPlayerCard(player[i]);
    }
}

localStorage.setItem("currentSelectPlayer", JSON.stringify(""));


window.onclick = e => {
    clickId = e.target.id
    if(clickId.slice(0,2) === "id"){
        localStorage.setItem("currentSelectPlayer",JSON.stringify(clickId.slice(3,)))
        document.location.href = "player_details.html"
        
        
        
    }
    
}



