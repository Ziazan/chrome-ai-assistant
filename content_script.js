const LOGO = 'https://img.icons8.com/?size=48&id=59023&format=png'
const BTN_IMG_ID = 'ai-btn-img';

document.addEventListener('mouseup', function(event) {
    var existingButton = document.querySelector('#chrome-ai-button');
    if (existingButton) {
        existingButton.remove();
    }
    const isAiBtnClick = event.target.id === BTN_IMG_ID;
    const userSelection = window.getSelection().toString();
    if(isAiBtnClick){
        //TODO 请求接口
        console.log('%c [ userSelection ]-11', 'font-size:13px; background:pink; color:#bf2c9f;', userSelection)

    }else{
        if (userSelection.length > 0) {
            var button = document.createElement('button');
            button.id = 'chrome-ai-button'
            button.innerHTML = `<img id="${BTN_IMG_ID}" src="${LOGO}" alt="Icon" />`;
            button.style.position = 'fixed';
            button.style.top = event.clientY + 'px';
            button.style.left = event.clientX + 'px';
            document.body.appendChild(button);
        }
    }
    

});
