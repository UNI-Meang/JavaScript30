const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handledCheck(){
    
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));