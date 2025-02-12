// pt fiecare ex o sa avem o const ex_name care o sa aiba numele ex acolo

// variabila next o sa fie unde trimitem cand apasam submit

document.addEventListener('DOMContentLoaded', function() {
    const previousKg = localStorage.getItem(`${ex_name}_kg`) || 0;
    const previousSets = localStorage.getItem(`${ex_name}_sets`) || 0;
    const previousReps = localStorage.getItem(`${ex_name}_reps`) || 0;
    document.getElementById('previous-best').textContent = `${previousKg} kg, ${previousSets} sets, and ${previousReps} reps`;

    document.getElementById('weight').value = previousKg || 0;
    document.getElementById('sets').value = previousSets || 0;
    document.getElementById('reps').value = previousReps || 0;
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const kg = document.getElementById('weight').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    
    if (event.submitter.id === 'skip-button') {
        if (typeof last !== 'undefined' && last) {
            alert("This is the last exercise. You cannot skip it.");
            return;
        }
        let skippedExercises = JSON.parse(localStorage.getItem('skippedExercises')) || [];
        skippedExercises.push(`ex${ex_num}`);
        localStorage.setItem('skippedExercises', JSON.stringify(skippedExercises));
        window.location.href = next;
        return;
    }

    if (kg > localStorage.getItem(`${ex_name}_kg`)) {
        localStorage.setItem(`${ex_name}_kg`, kg);
        localStorage.setItem(`${ex_name}_sets`, sets);
        localStorage.setItem(`${ex_name}_reps`, reps);
    } else if (kg == localStorage.getItem('lift_kg') && sets > localStorage.getItem('lift_sets')) {
        localStorage.setItem(`${ex_name}_kg`, kg);
        localStorage.setItem(`${ex_name}_sets`, sets);
        localStorage.setItem(`${ex_name}_reps`, reps);
    } else if (kg == localStorage.getItem('lift_kg') && sets == localStorage.getItem('lift_sets') && reps > localStorage.getItem('lift_reps')) {
        localStorage.setItem(`${ex_name}_kg`, kg);
        localStorage.setItem(`${ex_name}_sets`, sets);
        localStorage.setItem(`${ex_name}_reps`, reps);
    }

    // Check for skipped exercises after form submission
    let skippedExercises = JSON.parse(localStorage.getItem('skippedExercises')) || [];
    
    const index = skippedExercises.indexOf(`ex${ex_num}`);
    if (index > -1) {
        skippedExercises.splice(index, 1);
        localStorage.setItem('skippedExercises', JSON.stringify(skippedExercises));
    }

    skippedExercises = JSON.parse(localStorage.getItem('skippedExercises')) || [];
    
    if (skippedExercises.length > 0) {
        let retry = confirm("You have skipped exercises. Do you want to complete them now?");
        
        if (retry) {
            let nextSkippedExercise = skippedExercises.shift();
            localStorage.setItem('skippedExercises', JSON.stringify(skippedExercises));
            window.location.href = `/gym-app-ai/workouts/${ex_type}/${nextSkippedExercise}.html`;
            return;
        }
    }

    window.location.href = `${next}`;
});

console.log(localStorage.skippedExercises);