let array = [];
p = document.querySelector('.p');
h1 = document.querySelector('.h1');
div = document.querySelector('.div');

function handleClick(event) {
    alert(event.target.tagName);
}
p.addEventListener('click', handleClick);
h1.addEventListener('click', handleClick);
div.addEventListener('click', handleClick);