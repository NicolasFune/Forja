let bot_clicado = false
let video = document.getElementById("video")
let menu = document.getElementById("menu")
let logo = document.getElementById("logo")
let headerOpacity = document.getElementById('header').style.opacity
let mouse__interaction__areas_des = document.getElementsByClassName('mouse__interaction__area_des')
let leftPositionSlide = 0
let index = 0
let mouse__interaction__areas_aud = document.getElementsByClassName('mouse__interaction__area_aud')


let mouse__interaction__areas_tec = document.getElementsByClassName('mouse__interaction__area_tec')


let carrosel_controls_des = document.getElementsByClassName('carrosel_control_des')
let carrosel_controls_aud = document.getElementsByClassName('carrosel_control_aud')
let carrosel_controls_tec = document.getElementsByClassName('carrosel_control_tec')

let bot_des = document.getElementsByClassName('call__button__des').item(0)
let bot_aud = document.getElementsByClassName('call__button__aud').item(0)
let bot_tec = document.getElementsByClassName('call__button__tec').item(0)

let bot_des_txt = document.getElementsByClassName('call__button__text__des').item(0)
let bot_aud_txt = document.getElementsByClassName('call__button__text__aud').item(0)
let bot_tec_txt = document.getElementsByClassName('call__button__text__tec').item(0)

let carrosel_des = document.getElementsByClassName('carrosel_des__')
let carrosel_aud = document.getElementsByClassName('carrosel_aud__')
let carrosel_tec = document.getElementsByClassName('carrosel_tec__')

let prevSlide__des = document.getElementById('prevSlide--button--des')
let nextSlide__des = document.getElementById('nextSlide--button--des')
let prevSlide__aud = document.getElementById('prevSlide--button--aud')
let nextSlide__aud = document.getElementById('nextSlide--button--aud')
let prevSlide__tec = document.getElementById('prevSlide--button--tec')
let nextSlide__tec = document.getElementById('nextSlide--button--tec')

let dot_01_des = document.getElementById('dot_01_des')
let dot_02_des = document.getElementById('dot_02_des')
let dot_03_des = document.getElementById('dot_03_des')
let dot_01_aud = document.getElementById('dot_01_aud')
let dot_02_aud = document.getElementById('dot_02_aud')
let dot_03_aud = document.getElementById('dot_03_aud')
let dot_01_tec = document.getElementById('dot_01_tec')
let dot_02_tec = document.getElementById('dot_02_tec')
let dot_03_tec = document.getElementById('dot_03_tec')

let sections = [document.getElementById("sec_01"),document.getElementById("sec_02"),document.getElementById("sec_03"),document.getElementById("sec_04"),document.getElementById("sec_05"),document.getElementById("sec_06"),document.getElementById("sec_07")]
