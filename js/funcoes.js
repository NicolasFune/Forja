sec_02.addEventListener('onscroll',function sec_02OnScroll() {
    alert('scroll')
    logo.style.opacity = 0
})
prevSlide__des.addEventListener('click',function VoltarSlide(){
    
    leftPositionSlide = leftPositionSlide + 33.33
    if(leftPositionSlide > 0){
        leftPositionSlide = -66.66
    }
    Array.from(carrosel_des).forEach(function name(params) {
        carrosel_des.item(index).style.left = leftPositionSlide + 'vw'
        index = index + 1
    })
    index=0
    switch (leftPositionSlide) {
        case -66.66:
            dot_01_des.style.backgroundColor = 'white'
            dot_02_des.style.backgroundColor = 'white'
            dot_03_des.style.backgroundColor = 'black'
            break;
        case -33.33:
            dot_01_des.style.backgroundColor = 'white'
            dot_02_des.style.backgroundColor = 'black'
            dot_03_des.style.backgroundColor = 'white'
            break;
        default:
            dot_01_des.style.backgroundColor = 'black'
            dot_02_des.style.backgroundColor = 'white'
            dot_03_des.style.backgroundColor = 'white'
            break;
    }
})
nextSlide__des.addEventListener('click',function AvançarSlide(){
    leftPositionSlide = leftPositionSlide - 33.33
    if(leftPositionSlide < -66.66){
        leftPositionSlide = 0
    }
    Array.from(carrosel_des).forEach(function name(params) {
        carrosel_des.item(index).style.left = leftPositionSlide + 'vw'
        index = index + 1
    })
    index=0
    switch (leftPositionSlide) {
        case -66.66:
            dot_01_des.style.backgroundColor = 'white'
            dot_02_des.style.backgroundColor = 'white'
            dot_03_des.style.backgroundColor = 'black'
            break;
        case -33.33:
            dot_01_des.style.backgroundColor = 'white'
            dot_02_des.style.backgroundColor = 'black'
            dot_03_des.style.backgroundColor = 'white'
            break;
        default:
            dot_01_des.style.backgroundColor = 'black'
            dot_02_des.style.backgroundColor = 'white'
            dot_03_des.style.backgroundColor = 'white'
            break;
    }
})
prevSlide__aud.addEventListener('click',function VoltarSlide(){
    
    leftPositionSlide = leftPositionSlide + 33.33
    if(leftPositionSlide > 0){
        leftPositionSlide = -66.66
    }
    Array.from(carrosel_aud).forEach(function name(params) {
        carrosel_aud.item(index).style.left = leftPositionSlide + 'vw'
        index = index + 1
    })
    index=0
    switch (leftPositionSlide) {
        case -66.66:
            dot_01_aud.style.backgroundColor = 'white'
            dot_02_aud.style.backgroundColor = 'white'
            dot_03_aud.style.backgroundColor = 'black'
            break;
        case -33.33:
            dot_01_aud.style.backgroundColor = 'white'
            dot_02_aud.style.backgroundColor = 'black'
            dot_03_aud.style.backgroundColor = 'white'
            break;
        default:
            dot_01_aud.style.backgroundColor = 'black'
            dot_02_aud.style.backgroundColor = 'white'
            dot_03_aud.style.backgroundColor = 'white'
            break;
    }
})
nextSlide__aud.addEventListener('click',function AvançarSlide(){
    leftPositionSlide = leftPositionSlide - 33.33
    if(leftPositionSlide < -66.66){
        leftPositionSlide = 0
    }
    Array.from(carrosel_aud).forEach(function name(params) {
        carrosel_aud.item(index).style.left = leftPositionSlide + 'vw'
        index = index + 1
    })
    index=0
    switch (leftPositionSlide) {
        case -66.66:
            dot_01_aud.style.backgroundColor = 'white'
            dot_02_aud.style.backgroundColor = 'white'
            dot_03_aud.style.backgroundColor = 'black'
            break;
        case -33.33:
            dot_01_aud.style.backgroundColor = 'white'
            dot_02_aud.style.backgroundColor = 'black'
            dot_03_aud.style.backgroundColor = 'white'
            break;
        default:
            dot_01_aud.style.backgroundColor = 'black'
            dot_02_aud.style.backgroundColor = 'white'
            dot_03_aud.style.backgroundColor = 'white'
            break;
    }
})
prevSlide__tec.addEventListener('click',function VoltarSlide(){
    
    leftPositionSlide = leftPositionSlide + 33.33
    if(leftPositionSlide > 0){
        leftPositionSlide = -66.66
    }
    Array.from(carrosel_tec).forEach(function name(params) {
        carrosel_tec.item(index).style.left = leftPositionSlide + 'vw'
        index = index + 1
    })
    index=0
    switch (leftPositionSlide) {
        case -66.66:
            dot_01_tec.style.backgroundColor = 'white'
            dot_02_tec.style.backgroundColor = 'white'
            dot_03_tec.style.backgroundColor = 'black'
            break;
        case -33.33:
            dot_01_tec.style.backgroundColor = 'white'
            dot_02_tec.style.backgroundColor = 'black'
            dot_03_tec.style.backgroundColor = 'white'
            break;
        default:
            dot_01_tec.style.backgroundColor = 'black'
            dot_02_tec.style.backgroundColor = 'white'
            dot_03_tec.style.backgroundColor = 'white'
            break;
    }
})
nextSlide__tec.addEventListener('click',function AvançarSlide(){
    leftPositionSlide = leftPositionSlide - 33.33
    if(leftPositionSlide < -66.66){
        leftPositionSlide = 0
    }
    Array.from(carrosel_tec).forEach(function name(params) {
        carrosel_tec.item(index).style.left = leftPositionSlide + 'vw'
        index = index + 1
    })
    index=0
    switch (leftPositionSlide) {
        case -66.66:
            dot_01_tec.style.backgroundColor = 'white'
            dot_02_tec.style.backgroundColor = 'white'
            dot_03_tec.style.backgroundColor = 'black'
            break;
        case -33.33:
            dot_01_tec.style.backgroundColor = 'white'
            dot_02_tec.style.backgroundColor = 'black'
            dot_03_tec.style.backgroundColor = 'white'
            break;
        default:
            dot_01_tec.style.backgroundColor = 'black'
            dot_02_tec.style.backgroundColor = 'white'
            dot_03_tec.style.backgroundColor = 'white'
            break;
    }
})
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
dot_01_des.addEventListener('click',function SelecionarSlide01() {
    dot_01_des.style.backgroundColor = 'black'
    dot_02_des.style.backgroundColor = 'white'
    dot_03_des.style.backgroundColor = 'white'
    Array.from(carrosel_des).forEach(function name(params) {
        carrosel_des.item(index).style.left= '0vw'
        index = index + 1
    })
    index=0
})
dot_02_des.addEventListener('click',function SelecionarSlide02() {
    dot_01_des.style.backgroundColor = 'white'
    dot_02_des.style.backgroundColor = 'black'
    dot_03_des.style.backgroundColor = 'white'
    Array.from(carrosel_des).forEach(function name(params) {
        carrosel_des.item(index).style.left= '-33.33vw'
        index = index + 1
    })
    index=0
})
dot_03_des.addEventListener('click',function SelecionarSlide03() {
    dot_01_des.style.backgroundColor = 'white'
    dot_02_des.style.backgroundColor = 'white'
    dot_03_des.style.backgroundColor = 'black'
    Array.from(carrosel_des).forEach(function name(params) {
        carrosel_des.item(index).style.left= '-66.66vw'
        index = index + 1
    })
    index=0
})
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
dot_01_aud.addEventListener('click',function SelecionarSlide01() {
    dot_01_aud.style.backgroundColor = 'black'
    dot_02_aud.style.backgroundColor = 'white'
    dot_03_aud.style.backgroundColor = 'white'
    Array.from(carrosel_aud).forEach(function name(params) {
        carrosel_aud.item(index).style.left= '0vw'
        index = index + 1
    })
    index=0
})
dot_02_aud.addEventListener('click',function SelecionarSlide02() {
    dot_01_aud.style.backgroundColor = 'white'
    dot_02_aud.style.backgroundColor = 'black'
    dot_03_aud.style.backgroundColor = 'white'
    Array.from(carrosel_aud).forEach(function name(params) {
        carrosel_aud.item(index).style.left= '-33.33vw'
        index = index + 1
    })
    index=0
})
dot_03_aud.addEventListener('click',function SelecionarSlide03() {
    dot_01_aud.style.backgroundColor = 'white'
    dot_02_aud.style.backgroundColor = 'white'
    dot_03_aud.style.backgroundColor = 'black'
    Array.from(carrosel_aud).forEach(function name(params) {
        carrosel_aud.item(index).style.left= '-66.66vw'
        index = index + 1
    })
    index=0
})
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
dot_01_tec.addEventListener('click',function SelecionarSlide01() {
    dot_01_tec.style.backgroundColor = 'black'
    dot_02_tec.style.backgroundColor = 'white'
    dot_03_tec.style.backgroundColor = 'white'
    Array.from(carrosel_tec).forEach(function name(params) {
        carrosel_tec.item(index).style.left= '0vw'
        index = index + 1
    })
    index=0
})
dot_02_tec.addEventListener('click',function SelecionarSlide02() {
    dot_01_tec.style.backgroundColor = 'white'
    dot_02_tec.style.backgroundColor = 'black'
    dot_03_tec.style.backgroundColor = 'white'
    Array.from(carrosel_tec).forEach(function name(params) {
        carrosel_tec.item(index).style.left= '-33.33vw'
        index = index + 1
    })
    index=0
})
dot_03_tec.addEventListener('click',function SelecionarSlide03() {
    dot_01_tec.style.backgroundColor = 'white'
    dot_02_tec.style.backgroundColor = 'white'
    dot_03_tec.style.backgroundColor = 'black'
    Array.from(carrosel_tec).forEach(function name(params) {
        carrosel_tec.item(index).style.left= '-66.66vw'
        index = index + 1
    })
    index=0
})
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
let TornarControlesVisiveis_des = function(){
    for(let i=0;i<carrosel_controls_des.length;i++){
        carrosel_controls_des[i].style.opacity = "1"
        
    }
    Array.from(carrosel_des).forEach(function name(params) {
        carrosel_des.item(index).style.animation = 'none'
        carrosel_des.item(index).left = '0vw'
        index = index + 1
    })
    index=0
}
let TornarControlesInvisiveis_des = function(){
    for(let i=0;i<carrosel_controls_des.length;i++){
        carrosel_controls_des[i].style.opacity = "0"
    }
    Array.from(carrosel_des).forEach(function name(params) {
        carrosel_des.item(index).style.animation = 'slide_img 10s infinite ease-in'
        index = index + 1
    })
    index=0
}
Array.from(mouse__interaction__areas_des).forEach(function name(item) {
    item.addEventListener('mouseover', TornarControlesVisiveis_des)
})
Array.from(mouse__interaction__areas_des).forEach(function name(item) {
    item.addEventListener('mouseout', TornarControlesInvisiveis_des)
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let TornarControlesVisiveis_aud = function(){
    for(let i=0;i<carrosel_controls_aud.length;i++){
        carrosel_controls_aud[i].style.opacity = "1"
    }
    Array.from(carrosel_aud).forEach(function name(params) {
        carrosel_aud.item(index).style.animation = 'none'
        carrosel_aud.item(index).left = '0vw'
        index = index + 1
    })
    index=0
}
let TornarControlesInvisiveis_aud = function(){
    for(let i=0;i<carrosel_controls_aud.length;i++){
        carrosel_controls_aud[i].style.opacity = "0"
    }
    Array.from(carrosel_aud).forEach(function name(params) {
        carrosel_aud.item(index).style.animation = 'slide_img 10s infinite ease-in'
        index = index + 1
    })
    index=0
}
Array.from(mouse__interaction__areas_aud).forEach(function name(item) {
    item.addEventListener('mouseover', TornarControlesVisiveis_aud)
})
Array.from(mouse__interaction__areas_aud).forEach(function name(item) {
    item.addEventListener('mouseout', TornarControlesInvisiveis_aud)
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let TornarControlesVisiveis_tec = function(){
    for(let i=0;i<carrosel_controls_tec.length;i++){
        carrosel_controls_tec[i].style.opacity = "1"
    }
    Array.from(carrosel_tec).forEach(function name(params) {
        carrosel_tec.item(index).style.animation = 'none'
        carrosel_tec.item(index).left = '0vw'
        index = index + 1
    })
    index=0
}
let TornarControlesInvisiveis_tec = function(){
    for(let i=0;i<carrosel_controls_tec.length;i++){
        carrosel_controls_tec[i].style.opacity = "0"
    }
    Array.from(carrosel_tec).forEach(function name(params) {
        carrosel_tec.item(index).style.animation = 'slide_img 10s infinite ease-in'
        index = index + 1
    })
    index=0
}
Array.from(mouse__interaction__areas_tec).forEach(function name(item) {
    item.addEventListener('mouseover', TornarControlesVisiveis_tec)
})
Array.from(mouse__interaction__areas_tec).forEach(function name(item) {
    item.addEventListener('mouseout', TornarControlesInvisiveis_tec)
})
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener('resize', function resize() {
    let videoHeight = video.clientHeight
    sec_01.style.height = videoHeight+"px"
}, true);
window.addEventListener('resize', function resize() {
    let videoHeight = video.clientHeight
    sec_01.style.height = videoHeight+"px"
}, false);
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
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

