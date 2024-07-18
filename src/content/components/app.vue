<!--
 * @Date: 2024-07-15 21:11:32
 * @LastEditTime: 2024-07-18 23:12:36
 * @Description: 请填写简介
-->
<template>
    <div class="">
      <!-- 输入区域 -->
      <div class="chat-assistant" v-show="isChatShow">
        <div class="header-main">
          <div class="left">
            <img :id="BTN_IMG_ID" :src="LOGO" alt="Icon" />
          </div>
          <div class="right" @click="handleClose">
            <svg data-v-947909ac="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="close-icon"><path data-v-947909ac="" d="M11.1153 4.16924L11.8303 4.88423C12.0559 5.10988 12.0559 5.47573 11.8303 5.70137L9.53141 7.99986L11.8303 10.2986C12.0559 10.5243 12.0559 10.8901 11.8303 11.1158L11.1153 11.8308C10.8897 12.0564 10.5238 12.0564 10.2982 11.8308L7.99878 9.53105L5.70174 11.8299C5.47609 12.0556 5.11025 12.0556 4.8846 11.8299L4.1696 11.1149C3.94395 10.8893 3.94395 10.5234 4.1696 10.2978L6.46615 7.99986L4.1696 5.70221C3.94395 5.47656 3.94395 5.11072 4.1696 4.88507L4.8846 4.17007C5.11025 3.94442 5.47609 3.94442 5.70174 4.17007L7.99878 6.46723L10.2982 4.16924C10.5238 3.94359 10.8897 3.94359 11.1153 4.16924Z" fill="#333940"></path></svg>
          </div>
        </div>
        <!-- 消息容器 -->
        <div class="chat-main">
          <div class="message-list">
            <div class="item">
              <div class="user-card">
                <div class="message">请解释以下内容:签控制</div>
              </div>
            </div>
            <div class="item">
              <div class="ai-card">
                <div class="message-info">
                  <div class="message">
                    <p>选中的文本“插件能做哪些事？”是在询问插件所具备的功能和所能执行的任务。</p>
                    <p>“书签控制”可能是插件能实现的功能之一，比如对书签的添加、删除、排序、权限设定等方面进行操作和管理。但仅从这部分内容，无法确切了解插件在书签控制方面的具体实现方式和详细功能。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 输入框 -->
        <div class="edit-container">
            <div class="main">
              <textarea rows="1" placeholder="请输入相关问题..." class="input" style="height: 22px;"></textarea>
              <div class="icon"></div>
            </div>
        </div>
      </div>
      <!-- ai提问按钮 -->
      <button  v-show="isButtonShow" id="chrome-ai-button" :style="buttonStyle" class="sectionBtn" @click="handleClick">
        <img :id="BTN_IMG_ID" :src="LOGO" alt="Icon" />
      </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import {ref,onMounted,onUnmounted} from 'vue';
  import LOGO from '@/assets/images/logo.png';
  import CROSS_SVG from '@/assets/images/cross.svg';
  const BTN_IMG_ID = 'ai-btn-img';

  const buttonStyle = ref({})
  const isButtonShow = ref(false);
  const sectionValue = ref('');
  const isChatShow = ref(false);
  
  const handleClick = ()=>{
    isButtonShow.value = false;
    isChatShow.value = true;
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

  const  handleClose = ()=>{
    isChatShow.value = false;
  }



  
  
  </script>
  
  <style lang="less" src="./app.less">
 
  </style>
  