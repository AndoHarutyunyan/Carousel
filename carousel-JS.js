const left=document.getElementById('left')
const right=document.getElementById('right')
const play=document.getElementById('play')
const imgClass=document.getElementsByClassName('imgClass')
const slayd=document.getElementsByClassName('slayder')
let coll

right.addEventListener('click',nextRight)
function nextRight(){
    for(let i=0; i<imgClass.length-1; i++){
        if(imgClass[i].className==="imgClass orderName"){
            imgClass[i].classList.remove('orderName')
            return imgClass[i+1].classList.toggle('orderName')
        }
    }
    if(imgClass[imgClass.length-1].className==="imgClass orderName"){
        imgClass[imgClass.length-1].classList.toggle('orderName')
    }else{
        imgClass[1].classList.toggle('orderName')
    }

}
left.addEventListener('click',NextLeft)
function NextLeft() {
    for(let i=1;i<imgClass.length;i++){
        if(imgClass[i].className==="imgClass orderName"){
            imgClass[i].classList.remove('orderName')
            return imgClass[i-1].classList.toggle('orderName')
        }
    }
    if(imgClass[0].className!=='imgClass orderName' ||imgClass[0].className==='imgClass orderName'){
        imgClass[0].classList.remove('orderName')
        imgClass[imgClass.length-1].classList.toggle('orderName')
    }

}
play.addEventListener('click',playPause)
function playPause() {
    if(slayd[0].className==='slayder 1'){
        slayd[0].classList.remove('1')
        clearInterval(coll)
    }else{
        slayd[0].classList.toggle('1')
        coll=setInterval(nextRight,1000)
    }
}
