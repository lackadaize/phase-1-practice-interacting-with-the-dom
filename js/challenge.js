// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    counterBox()
    commentForm()
})

// Global Variables
let count = 0
let countInterval
let paused = false

function counterBox () {
    const counter = document.getElementById("counter")
    count = counter.textContent

    function countInterval () {
        count++
        counter.textContent = count
    }

    function startCount () {
        countInterval = interval(() => {
            if (!paused) {
                countInterval()
            }
        }, 1000)
    }
    const minusBtn = document.getElementById("minus")
    const plusBtn = document.getElementById("plus")
    const heartBtn = document.getElementById("heart")
    const pauseBtn = document.getElementById("pause")
}

function commentForm() {
    document.getElementById('comment-form').addEventListener('submit', (e) => {
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
See the timer increment every second once the page has loaded.
Manually increment and decrement the counter using the plus and minus buttons.
"Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
Pause the counter, which should:
pause the counter
disable all buttons except the pause button
switch the label on the button from "pause" to "resume"
Click the "resume" button to restart the counter and re-enable the buttons.
Leave comments on my gameplay, such as: "Wow, what a fun game this is."
*/