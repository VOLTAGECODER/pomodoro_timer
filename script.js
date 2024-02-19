document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start');
    const resetButton = document.getElementById('reset');
    const breakButton = document.getElementById('breakButton');
    const timerTypeElement = document.getElementById('timerType');
    const timerElement = document.getElementById('Timer');

    let minutes = 25;
    let seconds = 0;
    let timerID;
    let isRunning = false;

    function formatTime() {
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }

    function setTimerValues(type, initialMinutes) {
        timerTypeElement.textContent = `${type} TIMER`;
        minutes = initialMinutes;
        seconds = 0;
        formatTime();
    }

    function startTimer() {
        if (!isRunning) {
            // Start the timer
            timerID = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(timerID);
                        isRunning = false;
                        // Timer has reached 0, handle the end of the timer
                    } else {
                        minutes--;
                        seconds = 59;
                    }
                } else {
                    seconds--;
                }

                // Format and display the time
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
    }

    function resetTimer() {
        clearInterval(timerID);
        isRunning = false;

        // Format and display the time after a short delay
        setTimeout(() => {
            // Reset the timer to initial values
            minutes = 25;
            seconds = 0;
            formatTime();

            // Change the icon back to play when resetting
            startButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        }, 100);
    }

    startButton.addEventListener('click', startTimer);

    resetButton.addEventListener('click', resetTimer);

    breakButton.addEventListener('click', () => {
        // Redirect to break.html when clicking on the "Break" button
        window.location.href = 'break.html';
    });
});



