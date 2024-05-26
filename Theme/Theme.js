//MADE BY YASH JANGID
function process(){
setTimeout(() =>{
    let a = document.getElementById('action')
    let b = document.getElementById('gret')
    let c = document.getElementById('mod')
    let d = document.getElementById('foot')
    if (document.body.style.backgroundColor=='white'){
        a.style.marginLeft = '140px'
        document.body.style.backgroundColor = 'black'
        b.style.color = 'white'
        c.textContent = 'DARK MODE'
        d.style.color = 'white'
    }
    else{
        document.body.style.backgroundColor = 'white'
        a.style.marginLeft = '5px'
        b.style.color = 'black'
        c.textContent = 'LIGHT MODE'
        d.style.color = 'black'
    }
},10)}