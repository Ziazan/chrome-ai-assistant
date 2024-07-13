const LOGO = 'https://img.icons8.com/?size=48&id=59023&format=png'

document.addEventListener('mouseup', function(event) {
    if (window.getSelection().toString().length > 0) {
        var button = document.createElement('button');
        button.innerHTML = `<img src="${LOGO}" alt="Icon" />`;
        button.style.position = 'fixed';
        button.style.top = event.clientY + 'px';
        button.style.left = event.clientX + 'px';
        button.style.zIndex = 9999;
        document.body.appendChild(button);
    }
});
