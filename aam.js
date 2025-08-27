const triggerEvent = container.querySelector('.triggerButton');
const options = container.querySelector('.options');
triggerEvent.addEventListener('click', () =>{
    options.classList.toggle('show')
});
options.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        triggerEvent.innerHTML = option.innerHTML;
    });
});