document.body.addEventListener('click',scoreChange)

let homeScore = 0
let guestScore = 0
let time = 15.00
let gameOn = false

const homeScoreBoard = document.querySelector('#homescore')
const guestScoreBoard = document.querySelector('#guestscore')
const gameClock = document.querySelector('#clock')

function scoreChange(e){
    clickedId = e.target.id
    if(clickedId=='homeplusOne'){
        homeScore +=1
    } else if (clickedId=='homeplusTwo'){
        homeScore += 2
    } else if (clickedId=='homeplusThree'){
        homeScore += 3
    } else if (clickedId=='homeminusOne'){
        if(homeScore>0){
            homeScore -= 1
        }
    }

    if(clickedId=='guestplusOne'){
        guestScore +=1
    } else if (clickedId=='guestplusTwo'){
        guestScore += 2
    } else if (clickedId=='guestplusThree'){
        guestScore += 3
    } else if (clickedId=='guestminusOne'){
        if(guestScore>0){
            guestScore -= 1
        }
    }

    setScores()
    
}

function setScores(){
    homeScoreBoard.textContent = homeScore
    guestScoreBoard.textContent = guestScore

    if (homeScore>guestScore){
        homeScoreBoard.classList.add('leader')
    } else homeScoreBoard.classList.remove('leader')

    if (guestScore>homeScore){
        guestScoreBoard.classList.add('leader')
    } else guestScoreBoard.classList.remove('leader')
}

// decreasing time every one second
setInterval(()=>{
    setClock()
}, 500);

function setClock(){
    if(gameOn){
        if(time>0){
            time -= 0.01
        }
        time=time.toFixed(2)
        gameClock.textContent = time
    }
}

// Use to reset the game
function reset() {
    
    homeScore = 0
    guestScore = 0
    time = 15
    time = time.toFixed(2)
    gameOn = false
    gameClock.textContent = time
}

// using this approach so as to use event object
document.querySelector('#start').addEventListener('click',startAndPause)
document.querySelector('#pause').addEventListener('click',startAndPause)
function startAndPause(e){
    if(e.target.id=='start' && !gameOn){
        gameOn = !gameOn
    }
    if(e.target.id=='pause' && gameOn){
        gameOn = !gameOn
    }
    setClock()
}