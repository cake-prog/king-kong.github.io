
const button = document.getElementById('searching');
const query = document.getElementById('query');

let isActive = false; 

button.addEventListener('click', () => {
    isActive = !isActive;

   
    if (isActive) {
        query.style.visibility = 'visible';
        setTimeout(() => {
            query.style.opacity = '1';
        }, 0);
    } else {
        query.style.opacity = '0'; 
        setTimeout(() => {
            query.style.visibility = 'hidden';
        }, 500);
    }
});


const click_burger = document.getElementById('click_burger');
const burger_menu = document.getElementById('burger_menu');

let isActive_burger = false; 

click_burger.addEventListener('click', (event) => {
    event.stopPropagation(); 
    isActive_burger = !isActive_burger; 

    if (isActive_burger) {
        burger_menu.style.display = 'flex'; 
    } else {
        burger_menu.style.display = 'none';
    }
});

document.addEventListener('click', () => {
    if (isActive_burger) {
        burger_menu.style.display = 'none';
        isActive_burger = false; 
    }
});

burger_menu.addEventListener('click', (event) => {
    event.stopPropagation();
});
