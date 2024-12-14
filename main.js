const counter = document.querySelector('#counter');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus')
let count = 0;

const increment = () => {
    count++
    counter.innerHTML = count
    counter.style.color = 'green'
}
const decrement = () => {
    if (count > 0) {
        count--
        counter.innerHTML = count
        counter.style.color = "red"
    }

}
plus.onclick = () => increment()
minus.onclick = () => decrement()

const cordinat = document.querySelector('.cordinat')

cordinat.onmousemove = (event) => {
    const offsetX = event.offsetX
    const offsetY = event.offsetY
    cordinat.innerHTML = `x:${offsetX} y:${offsetY}`


}

const red =document.querySelector('.redLight')
const green =document.querySelector('.greenLight')

const traffic = (title = prompt('Введите цвет Красный или Зеленый').trim().toLowerCase()) => {

    if(title === 'красный') {
        red.innerHTML = 'STOP'
        red.classList.add('red')
    }
    else if (title === 'зеленый') {
        green.innerHTML = 'GO'
        green.classList.add('green')
    }
}
traffic()
