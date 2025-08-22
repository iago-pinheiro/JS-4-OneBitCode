import '../styles/style.css'

const number = document.getElementById('number')
const decreaseButton = document.getElementById('decrease')
const increaseButton = document.getElementById('increase')

increaseButton.addEventListener('click', () => {
  let numberValue = parseInt(number.value)
  numberValue++
  number.value = numberValue
})

decreaseButton.addEventListener('click', () => {
  let numberValue = parseInt(number.value)
  numberValue--
  number.value = numberValue
})

