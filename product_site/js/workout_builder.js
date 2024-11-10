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
                videoUrl = 'https://www.youtube.com/embed/dhCwHlL32Jw';
            } else if (equipment === 'resistance_bands') {
                description = 'Strength workout with resistance bands.';
                videoUrl = 'https://www.youtube.com/embed/55EfZ7RDhf8';
            } else {
                description = 'Bodyweight strength exercises.';
                videoUrl = 'https://www.youtube.com/embed/GViX8riaHX4';
            }
        } else if (goal === 'weight_loss') {
            const intensity = document.getElementById('intensity').value;
            if (intensity === 'low') {
                description = 'Moderate cardio workout for gradual weight loss.';
                videoUrl = 'https://www.youtube.com/embed/GY1JhB9BEkk';
            } else if (intensity === 'medium') {
                description = 'Medium intensity cardio and strength mix.';
                videoUrl = 'https://www.youtube.com/embed/XxuRSjER3Qk';
            } else {
                description = 'High-intensity interval training (HIIT) for rapid calorie burn.';
                videoUrl = 'https://www.youtube.com/embed/QxIjxD42TWw';
            }
        } else if (goal === 'endurance') {
            const exerciseType = document.getElementById('exercise-type').value;
            if (exerciseType === 'running') {
                description = 'Running-based endurance program.';
                videoUrl = 'https://www.youtube.com/embed/GMMsCZ-fynI';
            } else if (exerciseType === 'cycling') {
                description = 'Cycling-based endurance program.';
                videoUrl = 'https://www.youtube.com/embed/tONvKzIiqqw';
            } else {
                description = 'Swimming endurance program.';
                videoUrl = 'https://www.youtube.com/embed/W3t7r5_MGUw';
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
