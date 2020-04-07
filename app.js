class sorteo{
    constructor(p){
        this.p = p ;
    }
     player(){
         let titulo = document.querySelector('.ContainerSeccionTitelInput').value
        const player = document.querySelector('.ContainerSeccionTextArea').value
        if(player){
            console.log(titulo)
            document.querySelector('.ContainerSectionWinDivP').innerHTML = (titulo)
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
        if(TextAre.classList.contains('ContainerSeccionTextArea')){
            TextAre.classList.remove("ContainerSeccionTextArea");
            ConSecTexAre.classList.remove('ContainerSeccionHead');
            titelp.classList.remove('ContainerSeccionTitelP')
            titelp.classList.add('hide')
            ConSecTexAre.classList.add("hide");
            TextAre.classList.add("hide");
            
        }else{
            TextAre.classList.remove("hide");
            TextAre.classList.add("ContainerSeccionTextArea");
            ConSecTexAre.classList.add('ContainerSeccionHead')
            ConSecTexAre.classList.remove("hide");
            titelp.classList.add('ContainerSeccionTitelP')
            titelp.classList.remove('hide')
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
            if(nombres == ""){
                Azar.moveName
            }else{
                document.querySelector('.NameWiner').innerHTML = (nombres) 
            }
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
const ConSecTexAre = document.querySelector('#ContainerSeccionHead')
const TextAre = document.querySelector('.ContainerSeccionTextArea')
const titelp = document.querySelector('.ContainerSeccionTitelP')
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

