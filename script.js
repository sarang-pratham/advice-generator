const adviceID = document.querySelector("#id")
const adviceText = document.querySelector('.advice-text q')
const btn = document.querySelector('#btn')

const URL = 'https://api.adviceslip.com/advice'

const fetchAdvice =()=>{
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        adviceID.textContent = data.slip.id
        adviceText.innerHTML = data.slip.advice
    })
    .catch(err=>console.log(err))
}
fetchAdvice()

btn.addEventListener('click',()=>{
    fetchAdvice()
})

