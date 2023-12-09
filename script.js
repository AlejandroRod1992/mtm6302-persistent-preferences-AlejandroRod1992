document.addEventListener('DOMContentLoaded', function () {
   
    //local storage
    const savedTheme = localStorage.getItem('theme') || 'theme1';
    const savedListStyle = localStorage.getItem('listStyle') || 'list-style1';

    // Apply saved preferences
    document.getElementById('theme').value = savedTheme;
    document.getElementById('list-style').value = savedListStyle;
    applyPreferences();

    //items for the list
    const dynamicList = document.getElementById('dynamic-list');
    const items = ['Yellow', 'Blue', 'Red', 'Brown', 'Pink'];

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        dynamicList.appendChild(li);
    });

    // Event listener for theme and list
    document.getElementById('theme').addEventListener('change', applyPreferences);
    document.getElementById('list-style').addEventListener('change', applyPreferences);
});

function applyPreferences() {

    // Selected theme 
    const selectedTheme = document.getElementById('theme').value;
    const selectedListStyle = document.getElementById('list-style').value;

    // Apply selected preferences
    document.body.className = selectedTheme;
    document.getElementById('dynamic-list').className = selectedListStyle;

    // Save preferences to local
    localStorage.setItem('theme', selectedTheme);
    localStorage.setItem('listStyle', selectedListStyle);
}