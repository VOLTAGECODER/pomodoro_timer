document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start');
    const resetButton = document.getElementById('reset');
    const focusButton = document.getElementById('focusButton');
    const timerElement = document.getElementById('Timer');

    let minutes = 5;
    let seconds = 0;
    let timerID;
    let isRunning = false;

    function formatTime() {
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }

    function resetTimer() {
        clearInterval(timerID);
        isRunning = false;
        // Reset the timer to initial values
        minutes = 5;
        seconds = 0;
        formatTime();
        // Change the icon back to play when resetting
        startButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }

    startButton.addEventListener('click', () => {
        if (!isRunning) {
            // Start the timer
            timerID = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(timerID);
                        isRunning = fal
                    } else {
                        minutes--;
                        seconds = 59;
                    }
                } else {
                    seconds--;
                }

                formatTime();
            }, 1000);

            // Change the icon to pause when starting
            startButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
            isRunning = true;
        } else {
            // Pause the timer
            clearInterval(timerID);

            // Change the icon back to play when stopping
            startButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
            isRunning = false;
        }
    });

    resetButton.addEventListener('click', resetTimer);

    focusButton.addEventListener('click', () => {
        resetTimer();
        window.location.href = 'index.html';
    });
});
