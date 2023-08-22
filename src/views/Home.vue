<template>
    <main>
      <Header />
  
      <section id="main-section">
        
        <div class="imagens-container">
          <h1>Super festival de prêmios!</h1>
          <p>Gire a sorte no Festival de Prêmios: conquiste recompensas incríveis na empolgante roleta de premiações. Sua vitória espera por você!</p>
          <button>Eu quero!</button>
          <img class="presente1" src="../assets/images/presente1.png" alt="">
          <img class="presente3" src="../assets/images/presente3.webp" alt="">
          <img class="presente2" src="../assets/images/presente2.png" alt="">
          <img class="notebook" src="../assets/images/ideapad.webp" alt="">
          <img class="emoji"  src="../assets/images/emoji.png" alt="">
        </div>
      </section>
  
      <section id="card-section">
        
        <Roleta id="roleta" />
        
      </section>
    </main>
  </template>
  
  <script setup>
  import Header from '../components/Header.vue'
  import Roleta from '../components/Roleta.vue';
  </script>
  
  <style scoped lang="scss">
  main{
    background-color: #121212;
    height: 100vh;
    width: 100vw;
  }
  #main-section{
    height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #121212;
    position: relative;
    div{
      color: #FFF;
      text-align: center;
      font-family: 'inter';
      width: 27rem;
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: center;
      justify-content: center;
      z-index: 1;
      p{
        row-gap: 30px;
        color: #929292;
        font-size: 20px;
        line-height: 25px;
        word-spacing: 2px
      }
      h1{
        font-size: 60px;
        font-weight: 600;
        width: 25rem;
        z-index: 5;
      }
      button{
        padding: 14px 30px;
        border-radius: 12px;
        border: none;
        background-color: #FFF;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 18px;
        cursor: pointer;
      }
    }
    img{
      width: 300px;
      position: absolute;
      z-index: 0;
    }
    .imagens-container{
      position: relative
    }
    .presente1{
      right: 34rem;
      bottom: 6rem;    
      z-index: 5;
  
    }
    .presente3{
      left: 23.7rem;
      top: -6rem;
      transform: rotate(-20deg);
      z-index: 5;
    }
    .presente2{
      left: 38rem;
      bottom: 5rem;
      z-index: 5;
    }
    .notebook{
      bottom: 0rem;
      right: 25rem;
    }
    .emoji{
      top: -2rem;
      width: 5rem;
      left: -2rem;
      transform: rotate(-30deg)
    }
  }
  #card-section{
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    background-color: #121212;
    font-family: 'Inter';
    color: #FFF;
    padding-top: 8rem;
    align-items: center;
    position: relative;
    padding: 50px 10px;
  }
  </style>