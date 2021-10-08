var frame = document.getElementById('iframe')
var btn = document.getElementsByClassName('active')



//dynamic show of iframe content based on click
function frameshow(a){
    var w = window.outerWidth;
    frame.src = btn[a].getAttribute('value')
    if(w <= 850)
    {
        closemenu()
    }
}
frame.src = btn[0].getAttribute('value')

//iframe dynamic height
function iframeLoaded() {
    if(frame) {
          frame.height = "";
          frame.height = frame.contentWindow.document.body.scrollHeight + "px";
    }   
}

//responsive menu function
function showmenu(){
    let menu = document.getElementById('menu')
    let close = document.getElementById('close')
    let ol = document.getElementById('ol')
    let mainfade = document.querySelector(':root')
    ol.style.height = "220px"
    ol.style.top = "65px"
    menu.style.display = 'none'
    close.style.display = 'block'
    mainfade.style.setProperty("--main-bg","rgba(0,0,0,0.7)")
}

//responsive menu for close
function closemenu(){
    let menu = document.getElementById('menu')
    let close = document.getElementById('close')
    let ol = document.getElementById('ol')
    let mainfade = document.querySelector(':root')
    ol.style.height = "0"
    ol.style.top = "-20px"
    menu.style.display = 'block'
    close.style.display = 'none'
    mainfade.style.setProperty("--main-bg","transparent")
}
