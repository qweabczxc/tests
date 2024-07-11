const divs = document.querySelectorAll('div');
const body = document.querySelector('body');
const foo = (zx) => {
    const firstColor = Math.floor(Math.random() * 256);
    const SecondColor = Math.floor(Math.random() * 256);
    const ThirdColor = Math.floor(Math.random() * 256);
    const qwe = zx.style = `background-color: rgb(${firstColor}, ${SecondColor}, ${ThirdColor})`
    localStorage.setItem(`${zx.textContent}`, qwe)
}
divs.forEach(div => {
    div.addEventListener('click', function(){
        foo(div)
    })
    div.style = `${localStorage.getItem(div.textContent)}`
})
body.addEventListener('keydown',function(event){
    const allowedKeys = ['1', '2', '3', '4', '5'];
    if(allowedKeys.includes(event.key)){
        foo(divs[event.key - 1])
    }
})