document.addEventListener("DOMContentLoaded", function () {
    const counterDisplay = document.getElementById("counter");
    const plusButton = document.getElementById("plus");
    const minusCounter = document.getElementById("minus");
    const heartButton = document.getElementById("heart");
    const pauseLike = document.getElementById("pause");
    const likesList = document.querySelector(".likes");
    const commentInput = document.querySelector("#comment-input"); 
    const comment = document.querySelector(".comments"); 
    const submitButton = document.getElementById("submit");
  
    let count = 0;
    let isPaused = false;
    const likeCounts = {};
    let incrementInterval;
  
    function updateCount() {
        counterDisplay.textContent = count;
    }
  
    plusButton.addEventListener("click", function () {
        if (!isPaused) {
            count++;
            updateCount();
        }
        if (incrementInterval) {
            clearInterval(incrementInterval);
        }
        incrementInterval = setInterval(continueIncrementNumber, 1000);
    });
  
    function continueIncrementNumber() {
        if (!isPaused) {
            count++;
            updateCount();
        }
    }
  
    minusCounter.addEventListener("click", function () {
        if (!isPaused) {
            count--;
            updateCount();
        }
    });
  
    heartButton.addEventListener("click", function () {
        if (!isPaused) {
            likeCounts[count] = (likeCounts[count] || 0) + 1;
            displayLikes();
        }
    });
  
    function displayLikes() {
        likesList.innerHTML = '';
        for (const key in likeCounts) {
            const likeCount = likeCounts[key];
            const likeItem = document.createElement('li');
            likeItem.textContent = `${key}: ${likeCount} likes`;
            likesList.appendChild(likeItem);
        }
    }
  
    pauseLike.addEventListener("click", function () {
        isPaused = !isPaused;
        if (isPaused) {
            pauseLike.textContent = "Resume";
        } else {
            pauseLike.textContent = "Pause";
        }
    });
  
    commentInput.addEventListener("input", function () {
        comment.textContent = commentInput.value;
    });
  
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
    });
  });