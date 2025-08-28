document.addEventListener('DOMContentLoaded', () => {
    let selectedPWList = [];
    let currentMissile = null;
    let currentPlane = null;
    const planeEvent = document.querySelector('.planeButton');
    const weaponEvent = document.querySelector('.weaponButton');
    let defaultInner = weaponEvent.innerHTML
    const options =  document.querySelector('.options');
    const weaponOptions = document.querySelector('.weaponOptions');
    const weaponOptionsOptions = weaponOptions.querySelectorAll('.option');
    planeEvent.addEventListener('click', () =>{
        console.log('clicking');
        options.classList.toggle('show');
        //if an item is selected then close the menu automatically
    });
    options.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            weaponEvent.innerHTML = defaultInner
            if (currentPlane != null){
                currentPlane.classList.toggle('hide')
                selectedPWList.forEach(item =>{
                    item.classList.remove('hide');
                });
                selectedPWList = []
            };
            planeEvent.innerHTML = option.innerHTML;
            options.classList.toggle('show');
            currentPlane = option; //CurrentPlane = 'Su27'//
            option.classList.toggle('hide');
            weaponOptionsOptions.forEach(option2 =>{
                selectedPlane = currentPlane?.dataset?.plane?.trim();
                missileCheck = option2.dataset.plane?.trim();
                if (selectedPlane && missileCheck.includes(selectedPlane)){
                console.log("Somethings working");
                }
                else if(selectedPlane){
                    option2.classList.add('hide');
                    selectedPWList.push(option2);
                }
            });
        });
    });
    weaponEvent.addEventListener('click', () =>{
        console.log('clicking');
        weaponOptions.classList.toggle('show');
        //if an item is selected then close the menu automatically
    });
    weaponOptionsOptions.forEach(option => {
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
