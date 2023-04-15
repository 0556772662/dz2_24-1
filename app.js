const minute = document.querySelector('#minute')
const second = document.querySelector('#second')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let timer = 0
let timerInterval, secondVal, minuteVal
timerInterval = setInterval(function () {
    timer+=1/60
    secondVal = Math.floor(timer) - Math.floor(timer/60)*60
    minuteVal = Math.floor(timer/60)
    second.innerHTML = secondVal < 10 ? '0' + secondVal.toString() : secondVal
    minute.innerHTML = secondVal < 10 ? '0' + minuteVal.toString() : minuteVal
    if (minuteVal === 5) {
        two.style.display='block'
        clearInterval(timerInterval)
    } else if (secondVal <= 3 && minuteVal >=1){
        one.style.display = 'block'
    } else {
        one.style.display = 'none'
    }
}, 1000/60)

const box = document.querySelector('.box')
let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 449) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move,1)
    }else if (positionX >= 449 && positionY <= 449){
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move,1)
    }else if (positionX <= -449 && positionY >= -449) {
        positionX--
        box.style.right = `${positionX}px`
        setTimeout(move,1)
    } else if (positionX <= 449 && positionY >= 449) {
        positionX++
        box.style.bottom = `${positionX}px`
        setTimeout(move, 1)
    }
}
move()
