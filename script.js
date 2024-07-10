const divs = document.querySelectorAll('div');
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
