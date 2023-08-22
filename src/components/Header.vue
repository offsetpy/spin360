<template>
  <nav>

    <div class="logo">
        <div class="titulo">
            <h2>
                FK
            </h2>
        </div>
        <p>Technology</p>
    </div>

    <div class="links">
        <router-link @click="scrollToReviews" to="/">Roleta</router-link>
        <router-link to="/">Premios</router-link>
        <router-link to="/">Vencedores</router-link>
    </div>

    <div class="button-sign">
        <button>Participar</button>
    </div>
  </nav>
</template>

<script setup>
const scrollToReviews = () => {
    const reviewsElement = document.getElementById('roleta');
    if (reviewsElement) {
      const yOffset = reviewsElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }
</script>

<style setup lang="scss">
nav {
    font-family: 'Inter';
    display: flex;
    width: 100%;
    padding: 35px 100px;
    color: #FFF;
    align-items: center;
    justify-content: space-between;
}
.logo{
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all ease-in 0.5s;
    cursor: pointer;
    p{
        font-weight: 600
    }
}
.logo:hover{
    color: #A9A9A9;
    .titulo{
        background-color: #A9A9A9;
    }
}
.titulo{
    background-color: #FFF;
    color: #121212;
    padding: 5px 5px;
    border-radius: 6px;
    font-weight: 600;
    transition: all ease-in 0.5s;
    cursor: pointer
}
.links{
    display: flex;
    gap: 40px;

    a{
        color: #FFF;
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
        transition: all ease-in 0.5s
    }
    a:hover{
        color: #A9A9A9;
    }
}
.button-sign button{
    padding: 10px 17px;
    border: 1px solid #FFF;
    background-color: transparent;
    color: #Fff;
    border-radius: 12px;
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all ease-in 0.2s
}
.button-sign button:hover{
    border: 1px solid #7b7b7b;
}
</style>