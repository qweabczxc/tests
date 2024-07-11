const divs = document.querySelectorAll('div');
const body = document.querySelector('body');
divs.forEach(div => {
    div.addEventListener('click', function(){
        const firstColor = Math.floor(Math.random() * 256);
        const SecondColor = Math.floor(Math.random() * 256);
        const ThirdColor = Math.floor(Math.random() * 256);
        const qwe = div.style = `background-color: rgb(${firstColor}, ${SecondColor}, ${ThirdColor})`
        
        localStorage.setItem(`${div.textContent}`, qwe)
    })
    div.style = `${localStorage.getItem(div.textContent)}`
})
body.addEventListener('keydown',function(event){
    const allowedKeys = ['1', '2', '3', '4', '5'];
    if(allowedKeys.includes(event.key)){
        
        const firstColor = Math.floor(Math.random() * 256);
        const SecondColor = Math.floor(Math.random() * 256);
        const ThirdColor = Math.floor(Math.random() * 256);
        const qwe = divs[event.key - 1].style = `background-color: rgb(${firstColor}, ${SecondColor}, ${ThirdColor})`
        localStorage.setItem(`${divs[event.key - 1].textContent}`, qwe)
    }
})