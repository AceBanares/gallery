const display = document.querySelector('figure img');
const thumbnails = [...document.querySelectorAll('li img')];

const filename = ["flowers-pink","flowers-purple","flowers-red","flowers-white","flowers-yellow"];

thumbnails.map(thumbnail => thumbnail.addEventListener('click',setImage));

thumbnails.map((thumbnail, index) => thumbnail.src = thumbnail.src.replace('[filename]',filename[index]));

display.src = thumbnails[0].src.replace('small','large');

function setImage(e) {
    display.src = e.target.src.replace('small','large');;
}