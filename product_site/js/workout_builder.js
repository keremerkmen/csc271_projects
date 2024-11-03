document.addEventListener('DOMContentLoaded', () => {
    const goalSelect = document.getElementById('goal');
    const equipmentSelection = document.getElementById('equipment-selection');
    const intensitySelection = document.getElementById('intensity-selection');
    const exerciseTypeSelection = document.getElementById('exercise-type-selection');
    const generateButton = document.getElementById('generate-workout');
    const workoutResult = document.getElementById('workout-result');
    const workoutDescription = document.getElementById('workout-description');
    const videoFrame = document.getElementById('video-frame');

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
            equipmentSelection.style.display = 'block';
        } else if (goal === 'weight_loss') {
            intensitySelection.style.display = 'block';
        } else if (goal === 'endurance') {
            exerciseTypeSelection.style.display = 'block';
        }
    });

    // Reset form selections
    function resetSelections() {
        equipmentSelection.style.display = 'none';
        intensitySelection.style.display = 'none';
        exerciseTypeSelection.style.display = 'none';
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

        workoutDescription.innerText = description;
        workoutResult.style.display = 'block';

        // Show the embedded video if available
        if (videoUrl) {
            videoFrame.src = videoUrl;
            videoFrame.style.display = 'block';
        }
    });

    // Loop to apply the same code to each element in a NodeList
    const buttons = document.querySelectorAll('.nav-button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            location.href = this.getAttribute('data-href');
        });
    }
});