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

    window.location.href = `${next}`;

});