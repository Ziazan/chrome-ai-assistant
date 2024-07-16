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