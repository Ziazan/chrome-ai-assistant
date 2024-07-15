/// <reference types="chrome"/>
import { createApp } from 'vue'
import App from './components/app.vue'

function injectJsInsert () {
  document.addEventListener ('readystatechange', () => {
    const injectPath = 'js/inject.js';
    const script = document.createElement ('script');
    script.setAttribute ('type', 'text/javascript');
    script.src = chrome.extension.getURL (injectPath);
    document.body.appendChild (script);
  });
}


function joinContent (element: any) {
    const div = document.createElement ('div');
    div.id = 'joinContentApp';
    document.body.appendChild (div);
    const app = createApp (element);
    app.mount ('#joinContentApp');
  }

  injectJsInsert ();
  joinContent(App)


  const LOGO = 'https://img.icons8.com/?size=48&id=59023&format=png'
const BTN_IMG_ID = 'ai-btn-img';

document.addEventListener('mouseup', function(event) {
    const existingButton = document.querySelector('#chrome-ai-button');
    if (existingButton) {
        existingButton.remove();
    }
    const isAiBtnClick = event.target ===  document.querySelector(`#${BTN_IMG_ID}`);
    const userSelection = window.getSelection()?.toString() || '';
    if(isAiBtnClick){
        //TODO 请求接口
        console.log('%c [ userSelection ]-11', 'font-size:13px; background:pink; color:#bf2c9f;', userSelection)

    }else{
        if (userSelection.length > 0) {
            const button = document.createElement('button');
            button.id = 'chrome-ai-button'
            button.innerHTML = `<img id="${BTN_IMG_ID}" src="${LOGO}" alt="Icon" />`;
            button.style.position = 'fixed';
            button.style.top = event.clientY + 'px';
            button.style.left = event.clientX + 'px';
            document.body.appendChild(button);
        }
    }
});
