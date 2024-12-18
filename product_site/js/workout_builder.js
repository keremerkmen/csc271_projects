document.addEventListener('DOMContentLoaded', () => {
    // Basic function: Display a welcome message
    showWelcomeMessage();

    const goalSelect = document.getElementById('goal');
    const equipmentSelection = document.getElementById('equipment-selection');
    const intensitySelection = document.getElementById('intensity-selection');
    const exerciseTypeSelection = document.getElementById('exercise-type-selection');
    const generateButton = document.getElementById('generate-workout');
    const workoutResult = document.getElementById('workout-result');
    const workoutDescription = document.getElementById('workout-description');
    const videoFrame = document.getElementById('video-frame');

    // Helper functions
    function showWelcomeMessage() {
        console.log('Welcome to the Workout Builder App!');
    }

    function updateTextContent(element, text) {
        if (element) element.textContent = text;
    }

    function setElementVisibility(element, isVisible) {
        if (element) element.style.display = isVisible ? 'block' : 'none';
    }

    // Add event listeners to navigation buttons
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', () => {
            location.href = button.getAttribute('data-href');
        });
    });

    // Show relevant form sections based on selected goal
    goalSelect.addEventListener('change', () => {
        resetSelections();
        const goal = goalSelect.value;

        if (goal === 'strength') {
            setElementVisibility(equipmentSelection, true);
        } else if (goal === 'weight_loss') {
            setElementVisibility(intensitySelection, true);
        } else if (goal === 'endurance') {
            setElementVisibility(exerciseTypeSelection, true);
        }
    });

    // Reset form selections
    function resetSelections() {
        setElementVisibility(equipmentSelection, false);
        setElementVisibility(intensitySelection, false);
        setElementVisibility(exerciseTypeSelection, false);
    }

    // Generate workout plan based on user selections
    generateButton.addEventListener('click', () => {
        const goal = goalSelect.value;
        let description = '';
        let videoUrl = '';

        if (goal === 'strength') {
            const equipment = document.getElementById('equipment').value;
            if (equipment === 'dumbbells') {
                description = 'Strength workout using dumbbells.';
                videoUrl = 'https://www.youtube.com/embed/sinkIlViPG8';
            } else if (equipment === 'resistance_bands') {
                description = 'Strength workout with resistance bands.';
                videoUrl = 'https://www.youtube.com/embed/M0nREQKiAdo';
            } else {
                description = 'Bodyweight strength exercises.';
                videoUrl = 'https://www.youtube.com/embed/9FBIaqr7TjQ';
            }
        } else if (goal === 'weight_loss') {
            const intensity = document.getElementById('intensity').value;
            if (intensity === 'low') {
                description = 'Moderate cardio workout for gradual weight loss.';
                videoUrl = 'https://www.youtube.com/embed/1Et8a3-Rs6E';
            } else if (intensity === 'medium') {
                description = 'Medium intensity cardio and strength mix.';
                videoUrl = 'https://www.youtube.com/embed/8qQ6i58J3Kk';
            } else {
                description = 'High-intensity interval training (HIIT) for rapid calorie burn.';
                videoUrl = 'https://www.youtube.com/embed/dLjRRBlMNgc';
            }
        } else if (goal === 'endurance') {
            const exerciseType = document.getElementById('exercise-type').value;
            if (exerciseType === 'running') {
                description = 'Running-based endurance program.';
                videoUrl = 'https://www.youtube.com/embed/QwmLznSm_dc';
            } else if (exerciseType === 'cycling') {
                description = 'Cycling-based endurance program.';
                videoUrl = 'https://www.youtube.com/embed/ZiGE3-L4vyg';
            } else {
                description = 'Swimming endurance program.';
                videoUrl = 'https://www.youtube.com/embed/oM4sHl1hTEE';
            }
        }

        updateTextContent(workoutDescription, description);
        setElementVisibility(workoutResult, true);

        // Show the embedded video if available
        if (videoUrl) {
            videoFrame.src = videoUrl;
            setElementVisibility(videoFrame, true);
        }
    });
});