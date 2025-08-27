document.addEventListener('DOMContentLoaded', () => {
    let currentMissile = null;
    let currentPlane = null;
    const planeEvent = document.querySelector('.planeButton');
    const weaponEvent = document.querySelector('.weaponButton');
    const options =  document.querySelector('.options');
    const weaponOptions = document.querySelector('.weaponOptions');
    planeEvent.addEventListener('click', () =>{
        console.log('clicking');
        options.classList.toggle('show');
        //if an item is selected then close the menu automatically
    });
    options.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            if (currentPlane != null){currentPlane.classList.toggle('hide')};
            planeEvent.innerHTML = option.innerHTML;
            options.classList.toggle('show');
            console.log(option);
            currentPlane = option; //CurrentPlane = 'Su27'//
            option.classList.toggle('hide');
        });
    });
    weaponEvent.addEventListener('click', () =>{
        console.log('clicking');
        weaponOptions.classList.toggle('show');
        //if an item is selected then close the menu automatically
    });
    weaponOptions.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            if (currentMissile != null){currentMissile.classList.toggle('hide')};
            weaponEvent.innerHTML = option.innerHTML;
            weaponOptions.classList.toggle('show');
            console.log(option);
            currentMissile = option; //CurrentPlane = 'Su27'//
            option.classList.toggle('hide');
        });
    });
});
