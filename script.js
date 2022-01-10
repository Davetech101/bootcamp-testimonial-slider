const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const imgCont = document.querySelector('.slider .img')
const imgs = document.querySelectorAll('.img img')

const textBox = document.querySelector('.texts article')
const nameBox = document.querySelector('.name')
const jobBox = document.querySelector('.job')

let idx = 0 

class TEXTS {
    constructor(text, fullName, job){
        this.text = text,
        this.fullName = fullName,
        this.job = job
    }
}

const text1 = new TEXTS(
    `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`,
    'Tanya Sinclair', 
    'UX Engineer'
)

const text2 = new TEXTS(
    `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`,
    'John Tarkpor',
    'Junior Front-end Developer'
)

const textsArray = [text1, text2]

textBox.innerHTML = textsArray[idx].text
nameBox.innerHTML = textsArray[idx].fullName
jobBox.innerHTML = textsArray[idx].job

next.addEventListener('click', run)
prev.addEventListener('click', () => {
    idx--
    changeImg()
    changeText(idx)
})

function run() {
    idx++
    changeImg()
    changeText(idx)
}

function changeImg(){

    if (idx > imgs.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = imgs.length - 1
    }
    imgCont.style.transform = ` translate(${idx * -25}rem )`
}

function changeText(idx) {
    textBox.innerHTML = textsArray[idx].text
    nameBox.innerHTML = textsArray[idx].fullName
    jobBox.innerHTML = textsArray[idx].job
}

