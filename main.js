let array = [];
p = document.querySelector('.p');
h1 = document.querySelector('.h1');
div = document.querySelector('.div');
p.addEventListener('click', function() {
    document.getElementById('.out').innerHTML = alert(event.target.tagName);
});
h1.addEventListener('click', function() {
    document.getElementById('.out').innerHTML = alert(event.target.tagName);
});
div.addEventListener('click', function() {
    document.getElementById('.out').innerHTML = alert(event.target.tagName);
});