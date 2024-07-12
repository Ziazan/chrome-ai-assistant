/*
 * @Date: 2024-07-12 22:16:05
 * @LastEditTime: 2024-07-12 22:23:14
 * @Description: 请填写简介
 */
// popup.js
window.onload = function(){
  console.log('window.load')
  document.getElementById("myButton").addEventListener("click", function() {
    console.log('Hello from the Chrome extension!')
      alert("Hello from the Chrome extension!");
    });
}