<!--
 * @Date: 2024-07-15 21:11:32
 * @LastEditTime: 2024-07-17 22:07:36
 * @Description: 请填写简介
-->
<template>
    <div class="">
      <h1 class="blue">CONTENT123</h1>
      <!-- ai提问按钮 -->
      <button  v-show="isButtonShow" id="chrome-ai-button" :style="buttonStyle" class="sectionBtn" @click="handleClick">
        <img :id="BTN_IMG_ID" :src="LOGO" alt="Icon" />
      </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import {ref,onMounted,onUnmounted} from 'vue';
  import LOGO from '@/assets/images/logo.png';
  const BTN_IMG_ID = 'ai-btn-img';

  const buttonStyle = ref({})
  const isButtonShow = ref(false);
  const sectionValue = ref('');
  
  const handleClick = ()=>{
    isButtonShow.value = false;
    console.log('%c [ sectionValue ]-27', 'font-size:13px; background:pink; color:#bf2c9f;', sectionValue)
  }
  
  onMounted(()=>{
    document.addEventListener('mouseup',handleMouseUp);
  })

  const handleMouseUp = (event:MouseEvent)=>{
    const userSelection = window.getSelection()?.toString() || '';
    if (userSelection.length > 0) {
      sectionValue.value = userSelection;
      console.log('%c [ sectionValue.value ]-34', 'font-size:13px; background:pink; color:#bf2c9f;', sectionValue.value)
      isButtonShow.value = true;
      buttonStyle.value = {
        top:event.clientY + 'px',
        left:event.clientX + 'px',
      }
    }
  }

  onUnmounted(() => {
    document.removeEventListener('mouseup',handleMouseUp);
  })



  
  
  </script>
  
  <style lang="css" src="./app.css">
 
  </style>
  