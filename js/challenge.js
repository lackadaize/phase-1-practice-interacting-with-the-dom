// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    counterBox()
    commentBox()
})

// Global Variables
let count = 0
let countIntervalId
let paused = false

// Counter Functions
function counterBox () {
    // Scoped Variables
    const counter = document.getElementById("counter")
    count = counter.textContent
    const minusBtn = document.getElementById("minus")
    const plusBtn = document.getElementById("plus")
    const heartBtn = document.getElementById("heart")
    const pauseBtn = document.getElementById("pause")

    // Initial Counter
    function countInterval () {
        count++
        counter.textContent = count
    }
    countIntervalId = setInterval(countInterval, 1000)

    // Button Functions
    function countMinus () {
        count--
        counter.textContent = count
    }

    function countPlus () {
        count++
        counter.textContent = count
    }

    function countPauseResume () {
        if (paused == false) {
            countPause() 
        } else {
            countResume()
        }
    }

    function countPause () {
        paused = true
        pauseBtn.textContent = `resume`
        minusBtn.disabled = true
        plusBtn.disabled = true
        heartBtn.disabled = true
        clearInterval(countIntervalId)
    }

    function countResume () {
        paused = false
        pauseBtn.textContent = `pause`
        minusBtn.disabled = false
        plusBtn.disabled = false
        heartBtn.disabled = false 
        countIntervalId = setInterval(countInterval, 1000)     
    }

    function heart () {
        const heartList = document.querySelector(".likes")
        const heartLike = document.createElement('li')
        heartLike.textContent = `${count} has been liked 1 time`
        heartList.appendChild(heartLike)
    }

    // Event Listeners
    pauseBtn.addEventListener('click', countPauseResume)
    minusBtn.addEventListener('click', countMinus)
    plusBtn.addEventListener('click', countPlus)
    heartBtn.addEventListener('click', heart)   
}

// Comment Functions
function commentBox() {
    const commentForm = document.getElementById("comment-form")
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault()
        let commentInput = document.getElementById("comment-input").value
        let commentList = document.getElementById("list")
        let comment = document.createElement('p')
        comment.innerText = commentInput
        commentList.appendChild(comment)
        commentForm.reset()
    })
}

/*
I should see the count of the number of "likes" associated with that number displayed.
*/