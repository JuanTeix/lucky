class sorteo{
    constructor(p){
        this.p = p ;
    }
     player(){
        const player = document.querySelector('.ContainerSeccionTextArea').value
        if(player){
            Azar.rmClassImg()
            Azar.rmClassTxtArea()
            const playerArray = player.split("\n")
            const numPar = playerArray.length
            Azar.moveName(numPar,playerArray)
        }else{
            alert(`Debe de añadir los participantes antes de empezar el sorteo`)
        }
    }
    
     rmClassWinDiv(){
        if(WinDiv.classList.contains('hide')){
            img.classList.remove("ContainerSectionImg");
            img.classList.add("hide");
            WinDiv.classList.remove("hide");
            WinDiv.classList.add("ContainerSectionWinDiv");

            
        }else{
            WinDiv.classList.remove("ContainerSectionWinDiv");
            WinDiv.classList.add("hide");
            img.classList.add("ContainerSectionImg");
            img.classList.remove("hide");
        }
    }
    
     rmClassTxtArea(){
        if(ConSecTexAre.classList.contains('ContainerSeccionTextArea')){
            ConSecTexAre.classList.remove("ContainerSeccionTextArea");
            ConSecTexAre.classList.add("hide");
            
        }else{
            ConSecTexAre.classList.remove("hide");
            ConSecTexAre.classList.add("ContainerSeccionTextArea");
        }
    }

    rmClassBtn(){
        if(btnStar.classList.contains('start')){
            btnStar.classList.remove("start");
            btnStar.classList.add("hide");
            
        }else{

            btnStar.classList.add("start");
            btnStar.classList.remove("hide");


        }
    }

    rmBtnReplay(){
        if( btnreplay.classList.contains("hide")){
            btnreplay.classList.remove("hide")
            btnNuevo.classList.remove("hide")
        }else{
            btnreplay.classList.add("hide")
            btnNuevo.classList.add("hide")
            // btnreplay.classList.add("replay")

    }
}   


    rmClassImg(){
        if(Divimg.classList.contains('hide')){
            Divimg.classList.remove("hide");
            Divimg.classList.add("ContainerSectionWinDivImg")
        }else{
            Divimg.classList.add("hide");
            btnreplay.classList.remove("start");
            btnreplay.classList.add("hide");

        }
    }

    
     startConfig(){
        let {p} = this;
    }

    start(){
        Azar.player()
    }

    
     moveName(n,p){
        Azar.rmClassBtn()
         inter = setInterval(() => {
             if(i == 50){
                Azar.winer()
             }
             i ++
            let nombres = p[Math.floor(Math.random() * n )]
            console.log(nombres);
            document.querySelector('.NameWiner').innerHTML = (nombres) 
        }, 100)    
    }

    
     winer(){
        Azar.rmClassWinDiv()
        clearInterval(inter)
        Azar.rmBtnReplay()
    }

    replay(){
        i= 0
        Azar.rmBtnReplay()
        Azar.rmClassWinDiv()
        Azar.rmClassBtn()
        Azar.rmClassTxtArea()
        Azar.rmClassImg()
        Azar.player()
    }

    newPlay(){
        location.reload();
    }



}
const Azar = new sorteo()
const WinDiv = document.querySelector('#ContainerSectionWinDiv')
const ConSecTexAre = document.querySelector('.ContainerSeccionTextArea')
const btnStar = document.querySelector('#start')
const btnreplay = document.querySelector('#repetir')
const btnNuevo = document.querySelector('#nuevo')
const Divimg = document.querySelector('#ContainerSectionWinDivImg')
const img = document.querySelector('.ContainerSectionImg')
var inter
let i = 0
btnStar.onclick = () => Azar.start()
btnreplay.onclick = () => Azar.replay()
btnNuevo.onclick = () => Azar.newPlay()
Azar.startConfig()

