prevSlide__des.addEventListener('click',prevSlide__Click)
let prevSlide__Click = function (){
    leftPositionSlide = leftPositionSlide + 33.33
    carrosel_des.style.left = leftPositionSlide + 'vw'
    alert('prev')
}

nextSlide__des.addEventListener('click',nextSlide__Click)

let nextSlide__Click =  function (){
    leftPositionSlide = leftPositionSlide - 33.33
    carrosel_des.style.left = leftPositionSlide + 'vw'
}


let TornarControlesVisiveis_des = function(){
    for(let i=0;i<carrosel_controls_des.length;i++){
        carrosel_controls_des[i].style.opacity = "1"
        
    }
}
let TornarControlesInvisiveis_des = function(){
    for(let i=0;i<carrosel_controls_des.length;i++){
        carrosel_controls_des[i].style.opacity = "0"
    }
}
Array.from(mouse__interaction__areas_des).forEach(function name(item) {
    item.addEventListener('mouseover', TornarControlesVisiveis_des)
})
Array.from(mouse__interaction__areas_des).forEach(function name(item) {
    item.addEventListener('mouseout', TornarControlesInvisiveis_des)
})
//////////////////////////////////////////////////
let TornarControlesVisiveis_aud = function(){
    for(let i=0;i<carrosel_controls_aud.length;i++){
        carrosel_controls_aud[i].style.opacity = "1"
    }
}
let TornarControlesInvisiveis_aud = function(){
    for(let i=0;i<carrosel_controls_aud.length;i++){
        carrosel_controls_aud[i].style.opacity = "0"
    }
}
Array.from(mouse__interaction__areas_aud).forEach(function name(item) {
    item.addEventListener('mouseover', TornarControlesVisiveis_aud)
})
Array.from(mouse__interaction__areas_aud).forEach(function name(item) {
    item.addEventListener('mouseout', TornarControlesInvisiveis_aud)
})
///////////////////////////////////////////////////
let TornarControlesVisiveis_tec = function(){
    for(let i=0;i<carrosel_controls_tec.length;i++){
        carrosel_controls_tec[i].style.opacity = "1"
    }
}
let TornarControlesInvisiveis_tec = function(){
    for(let i=0;i<carrosel_controls_tec.length;i++){
        carrosel_controls_tec[i].style.opacity = "0"
    }
}
Array.from(mouse__interaction__areas_tec).forEach(function name(item) {
    item.addEventListener('mouseover', TornarControlesVisiveis_tec)
})
Array.from(mouse__interaction__areas_tec).forEach(function name(item) {
    item.addEventListener('mouseout', TornarControlesInvisiveis_tec)
})
window.addEventListener('resize', function resize() {
    let videoHeight = video.clientHeight
    sec_01.style.height = videoHeight+"px"
}, true);
window.addEventListener('resize', function resize() {
    let videoHeight = video.clientHeight
    sec_01.style.height = videoHeight+"px"
}, false);


function bot_menu_click(){
    if(bot_clicado==false){
        menu.style.visibility = "visible"
        menu.style.opacity="1"
        bot_clicado=true
    }else{
        menu.style.visibility = "hidden"
        menu.style.opacity="0"
        bot_clicado=false
    }
}

