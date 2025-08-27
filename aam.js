document.addEventListener('DOMContentLoaded', () => {
    const triggerEvent = document.querySelector('.triggerButton');
    const options =  document.querySelector('.options');
    triggerEvent.addEventListener('click', () =>{
        console.log('clicking')
        options.classList.toggle('show')
        //if an item is selected then close the menu automatically
    });
    options.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            triggerEvent.innerHTML = option.innerHTML;
        });
    });
});