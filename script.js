const slide = ["./images/tome1.jpg", "./images/tome2.jpg", "./images/tome3.jpg", "./images/tome4.jpg"]

let position = 0

const tome1 = "Dans le monde de Troy où chacun possède un pouvoir, Lanfeust, un apprenti forgeron peut fondre le métal. Il connaît une vie paisible jusqu'au jour où il découvre qu'au contact d'une épée, il peut posséder le pouvoir absolu ! Accompagné du vieux sage Nicolède et de ses deux filles, Cyan et Cixi, il est emporté dans un tourbillon d'aventures au cours desquelles il va se lier d'amitié avec la plus dangereuse des créatures, le troll Hébus !"
const tome2 = "Nos aventuriers sont maintenant arrivés à Ekmul. Lanfeust rencontre les sages du palais d'Ekmul, qui sont partagés entre incrédulité, méfiance et confiance. Ils décident finalement de garder Lanfeust en tant qu'étudiant au palais. Mais les choses tourne mal. Thanos, ancien sage ayant mal tourné, enlève les compagnons de Lanfeust et leur fait avouer l'existence de l'épée magique. Il veut la récupérer à tout prix pour régner sur Troy."
const tome3 = "Lanfeust et Thanos se disputent maintenant l'épée du chevalier Or-Azur. Mais celui-ci, ne réalisant pas le pouvoir de celle-ci, n'entend pas céder aussi facilement une épée qui est dans sa famille depuis des générations. Lanfeust et Thanos se lance donc dans une course poursuite sans pitié, jusqu'au château du chevalier Or-Azur."
const tome4 = "Lanfeust et Thanos courent toujours après le chevalier Or-Azur, celui-ci étant toujours introuvable. Ils le trouvent finalement au grand tournoi des baronneries, grand rendez vous annuel ou les différents barons du pays s'affrontent pour l'honneur. Lanfeust doit à tout prix récupérer l'épée avant Thanos, sous peine de voir le monde de Troy tomber aux mains du tyran."
const synopsis = [tome1, tome2, tome3, tome4]

let tomeDescription = document.getElementById("description")
tomeDescription.textContent = synopsis[0]

function changeSlide(sens) {
    position = position + sens
    
    if (position<0)
        position = slide.length - 1
    if (position>slide.length - 1)
        position = 0;
    document.getElementById("slide").src = slide[position]
    document.getElementById("description").innerText = synopsis[position]
}

const previous = document.getElementById("previous")
const next = document.getElementById("next")

previous.addEventListener('click', function() {
    changeSlide(-1)
})
next.addEventListener('click',function() {
    changeSlide(1)
})

let isPaused = false
const pauseButton = document.getElementById("pause")

function togglePause() {
    isPaused = !isPaused
        if (isPaused === true){
            pauseButton.innerText = "Play"
        }
        else {
            pauseButton.innerText = "Pause"
        }
}

pauseButton.addEventListener('click', togglePause)

function autoDefil() {
    if(isPaused === false) {
        changeSlide(1)
    }
}

setInterval(autoDefil, 5000);

