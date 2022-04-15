const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
    let inBetween = false;
    if (e.shiftKey) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
        })
    }
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));