console.log("Let's start")
var team = [
    {
        "teamName": "CSK",
        "playerCount": "3",
        "topBatsman": "Ruturaj Gaikwad",
        "topBowler": "Sardul Thakur",
        "championshipWon": "4",
        "teamIcon": "../images/team/csk.png",
        "teamIcon2": "static/images/team/csk.png"
    },
    {
        "teamName": "DC",
        "playerCount": "3",
        "topBatsman": "Sikhar Dhawan",
        "topBowler": "Axar Patel",
        "championshipWon": "0",
        "teamIcon": "../images/team/dc.png",
        "teamIcon2": "static/images/team/dc.png",
    },
    {
        "teamName": "RR",
        "playerCount": "3",
        "topBatsman": "Sanju Samson",
        "topBowler": "Jofra Archer",
        "championshipWon": "1",
        "teamIcon": "../images/team/rr.png",
        "teamIcon2": "static/images/team/rr.png"
    },
    {
        "teamName": "MI",
        "playerCount": "3",
        "topBatsman": "Rohit Sharma",
        "topBowler": "Jasprit Bumhra",
        "championshipWon": "5",
        "teamIcon": "../images/team/mi.png",
        "teamIcon2": "static/images/team/mi.png"
    },
    {
        "teamName": "RCB",
        "playerCount": "3",
        "topBatsman": "Virat Kohli",
        "topBowler": "Harshar Patel",
        "championshipWon": "0",
        "teamIcon": "../images/team/rcb.png",
        "teamIcon2": "static/images/team/rcb.png"
    }


]

var player = [
    {
        "fullName": "Mahendra Singh Dhoni",
        "photo": "../images/player/msd.png",
        "team": "CSK",
        "price": "15CR",
        "playingStatus": "playing",
        "role": "Batsman"
    },
    {
        "fullName": "Ravindra Jadeja",
        "photo": "../images/player/jadeja.png",
        "team": "CSK",
        "price": "12CR",
        "playingStatus": "playing",
        "role": "All-Rounder"
    },
    {
        "fullName": "Rohit Sharma",
        "photo": "../images/player/rohit.png",
        "team": "MI",
        "price": "15CR",
        "playingStatus": "playing",
        "role": "Batsman"
    },
    {
        "fullName": "Rituraj Gaiwakad",
        "photo": "../images/player/ruturaj.png",
        "team": "CSK",
        "price": "8CR",
        "playingStatus": "playing",
        "role": "Batsman"
    },
    {
        "fullName": "Jasprit Bumrah",
        "photo": "../images/player/bumra.png",
        "team": "MI",
        "price": "11CR",
        "playingStatus": "playing",
        "role": "Bowler"
    },
    {
        "fullName": "Kieron Pollard",
        "photo": "../images/player/polard.png",
        "team": "MI",
        "price": "13CR",
        "playingStatus": "playing",
        "role": "All-Rounder"
    },
    {
        "fullName": "Virat Kohli",
        "photo": "../images/player/virat.png",
        "team": "RCB",
        "price": "15CR",
        "playingStatus": "playing",
        "role": "Batsman"
    },
    {
        "fullName": "Glenn Maxwell",
        "photo": "../images/player/maxwell.png",
        "team": "RCB",
        "price": "15CR",
        "playingStatus": "playing",
        "role": "All-Rounder"
    },
    {
        "fullName": "Yuzvendra Chahal",
        "photo": "../images/player/chahal.png",
        "team": "RCB",
        "price": "10CR",
        "playingStatus": "playing",
        "role": "Bowler"
    },
    {
        "fullName": "Rishabh Pant",
        "photo": "../images/player/pant.png",
        "team": "DC",
        "price": "10CR",
        "playingStatus": "playing",
        "role": "Batsman"
    },
    {
        "fullName": "Shikhar Dhawan",
        "photo": "../images/player/dhawan.png",
        "team": "DC",
        "price": "15CR",
        "playingStatus": "playing",
        "role": "Batsman"
    },
    {
        "fullName": "Kagiso Rabada",
        "photo": "../images/player/rabada.png",
        "team": "DC",
        "price": "12CR",
        "playingStatus": "playing",
        "role": "Bowler"
    },
    {
        "fullName": "Sanju Samson",
        "photo": "../images/player/sanju.png",
        "team": "RR",
        "price": "15CR",
        "playingStatus": "playing",
        "role": "Batsman"
    },
    {
        "fullName": "Rahul Tewatia",
        "photo": "../images/player/rahul.png",
        "team": "RR",
        "price": "8CR",
        "playingStatus": "playing",
        "role": "All-Rounder"
    },
    {
        "fullName": "Jaydev Unadkat",
        "photo": "../images/player/jaydev.png",
        "team": "RR",
        "price": "5CR",
        "playingStatus": "playing",
        "role": "Bowler"
    }

]






if (JSON.parse(localStorage.getItem('team')) === null) {
    localStorage.setItem("team", JSON.stringify(team));

}

if (JSON.parse(localStorage.getItem('player')) === null) {
    localStorage.setItem("player", JSON.stringify(player));
}

var team = JSON.parse(localStorage.getItem('team'));
console.log(typeof (team))
var player = JSON.parse(localStorage.getItem('player'));

localStorage.setItem("currentSelectTeam", JSON.stringify(""));
localStorage.setItem("currentSelectPlayer", JSON.stringify(""));

var selectTeam = document.getElementById("selectTeamOption")
for (let i = 0; i < team.length; i++) {
    var eleOption = document.createElement("option")
    eleOption.value = team[i].teamName
    eleOption.innerText = team[i].teamName
    selectTeam.appendChild(eleOption)
}


var allTeamId = []
function addTeamCard(team) {


    let card = document.createElement('div');
    card.className = 'column';

    card.style.float = 'left';
    card.style.width = '25rem'
    card.style.height = '20rem'
    card.style.marginLeft = '37px'
    card.style.outline = "solid 1px black"
    card.style.boxShadow = "4px 4px 8px 0"
    card.style.marginTop = "20px"
    //card.className="col-sm-6"

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    cardBody.style.marginTop = '10px'


    const lineBreak = document.createElement('br');



    var button = document.createElement("input");
    button.type = "button";
    button.value = team.teamName;
    button.id = "id_" + team.teamName
    allTeamId.push(button.id)

    button.style.marginLeft = '120px'
    button.style.marginTop = "25px"
    button.style.width = "70px"
    button.style.height = "30px"



    let icon = document.createElement('img')
    icon.setAttribute("src", team.teamIcon2)
    icon.setAttribute("width", "160rem");
    icon.style.marginLeft = "70px"


    cardBody.appendChild(icon);
    cardBody.appendChild(lineBreak)
    cardBody.appendChild(button)
    card.appendChild(cardBody);
    var cardContainer = document.getElementById("card");
    cardContainer.appendChild(card);

}

for (i = 0; i < team.length; i++) {
    addTeamCard(team[i]);
}


window.onclick = e => {
    clickId = e.target.id
    if (clickId.slice(0, 2) === "id") {
        localStorage.setItem("currentSelectTeam", JSON.stringify(clickId.slice(3,)))
        document.location.href = "static/html/team_details.html"
    }

}



async function readFileAsDataURL(file) {
    let result_base64 = await new Promise((resolve) => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => resolve(fileReader.result);
        fileReader.readAsDataURL(file);
    });
    return result_base64;
}

async function addTeam() {
    var teamName = document.querySelector('#inputTeamName').value
    var topBatsman = document.querySelector('#inputTopBatsman').value
    var topBowler = document.querySelector('#inputTopBowler').value
    var playerCount = document.querySelector('#inputPlayerCount').value
    var championshipWon = document.querySelector('#inputchampionshipWon').value

    var data = document.getElementById("inputImg").files[0]
    let dataURL = await readFileAsDataURL(data)
    // console.log(dataURL)
    var teamIcon = dataURL

    var team = JSON.parse(localStorage.getItem('team'))

    var temp = {
        "teamName": teamName,
        "playerCount": playerCount,
        "topBatsman": topBatsman,
        "topBowler": topBowler,
        "championshipWon": championshipWon,
        "teamIcon": teamIcon,
        "teamIcon2": teamIcon,

    }

    team.push(temp);
    localStorage.setItem("team", JSON.stringify(team));
    console.log("hiiiiii")
    document.getElementById("addTeamForm").reset();

    var alertPlaceholder = document.getElementById('addTeamLiveAlertPlaceholder')

    function alert(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

        alertPlaceholder.append(wrapper)
    }
    alert('Your Team has been added successfully! ', 'success')

}


async function addPlayer() {
    var fullName = document.querySelector('#inputFullName').value
    var playerTeam = document.querySelector('#selectTeamOption').value
    var playingStatus = document.querySelector('#selectPlayingStatus').value
    var role = document.querySelector('#selectRole').value
    var price = document.querySelector('#inputPrice').value

    var data = document.getElementById("inputProfilePic").files[0]
    let dataURL = await readFileAsDataURL(data)
    var playerPic = dataURL

    var player = JSON.parse(localStorage.getItem('player'))

    var temp = {
        "fullName": fullName,
        "photo": playerPic,
        "team": playerTeam,
        "price": price,
        "playingStatus": playingStatus,
        "role": role,

    }

    player.push(temp);

    localStorage.setItem("player", JSON.stringify(player));
    document.getElementById("addPlayerForm").reset();

    var alertPlaceholder = document.getElementById('addPlayerLiveAlertPlaceholder')

    function alert(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        alertPlaceholder.append(wrapper)
    }
    alert('Player has been added successfully! ', 'success');


}


var player = JSON.parse(localStorage.getItem("player"))

function getPlayerName() {
    var list1 = document.createElement('ul');
    list1.setAttribute('style',"list-style-type: none; padding: 0; margin: 0;")
    var input, filter;
    input = document.getElementById("selector");
    filter = input.value.toUpperCase();
    console.log(filter)

    var card = document.getElementById("mycard")
    card.innerHTML = ""
    for (var i = 0; i < player.length; i++) {
        if (player[i].team === filter) {
            var listViewItem = document.createElement('li');
            listViewItem.style.position = "inside"
            listViewItem.setAttribute("style","display:block;border: 1px solid #ddd;background-color: #f6f6f6;font-size: 18px; margin-top: 1px;")
            a = document.createElement('a');
            a.appendChild(document.createTextNode(player[i].fullName));
            a.style.width = "3rem";

            list1.appendChild(listViewItem)
            listViewItem.appendChild(a)
            card.appendChild(list1)
           
        }


    }

}









