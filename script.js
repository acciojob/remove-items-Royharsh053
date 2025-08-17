//your JS code here. If required.
document.querySelector('input[type="button"]').addEventListener('click', function() {
    let colorSelect = document.getElementById('colorSelect');
    let selectedIndex = colorSelect.selectedIndex;

    if (selectedIndex !== -1) { // Check if an option is selected
        colorSelect.remove(selectedIndex); // Remove the selected option
    }
});