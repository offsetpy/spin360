<template>
    <section>
        <div class="card">
            <div class="imagem-container">
                <img src="../assets/images/ideapad.webp" alt="">
            </div>

            <div class="conteudo-container">
                <h3>Idea pad Ryzen 5</h3>
                <p>De R$ 2499,99 por R$ 00,00</p>
            </div>
        </div>
        <div class="card">
            <div class="imagem-container">
                <img src="../assets/images/Bitcoin.png" alt="">
            </div>

            <div class="conteudo-container">
                <h3>Moeda dourada</h3>
                <p></p>
            </div>
        </div>
        <div class="card">
            <div class="imagem-container">
                <img src="../assets/images/Bag.png" alt="">
            </div>

            <div class="conteudo-container">
                <h3>Bolsa de moedas</h3>
                <p></p>
            </div>
        </div>

        <div id="cardEsquerda" class="card">
            <div class="imagem-container">
                <img src="../assets/images/ideapad.webp" alt="">
            </div>

            <div class="conteudo-container">
                <h3>Idea pad Ryzen 5</h3>
                <p>De R$ 2500,99 por R$ 00,00</p>
            </div>
        </div>
        <div id="cardDireita" class="card">
            <div class="imagem-container">
                <img src="../assets/images/ideapad.webp" alt="">
            </div>

            <div class="conteudo-container">
                <h3>Idea pad Ryzen 5</h3>
                <p>De R$ 2500,99 por R$ 00,00</p>
            </div>
        </div>

        <img v-if="estaGirando" class="blur" src="../assets/images/blur.jpg" alt="">
        <div class="button-section">
            <button id="recarregar">Recarregar</button>
            <div class="saldo-container">
                <h4>Saldo</h4>
                <p>R${{ saldo }}</p>
            </div>
            <button :disabled="isDisabled" @click="iniciarAcao">Rodar</button>
        </div>

        <div v-if="overlay" class="overlay"></div>

        <div v-show="premioBag" class="premios_bag">
            <h3>Você recebeu uma bolsa de moedas!</h3>
              <img src="../assets/images/resultado_bag.jpg" alt="">
              <button @click="fecharBag" class="button_fechar">Fechar</button>
              
        </div>  

        <div v-show="premioMoeda" class="premios_bag">
            <h3>Você recebeu uma moeda dourada!</h3>
              <img src="../assets/images/resultado_moeda.jpg" alt="">
              <button @click="fecharMoeda" class="button_fechar">Fechar</button>
        </div> 
    </section>
</template>

<script setup>
import {ref, computed} from 'vue'
const estaGirando = ref(false)
const saldo = ref(50)
// const disabled = ref(false)
const isDisabled = computed(()=>{
    return saldo.value >= 5 ? false : true
})

const overlay = ref(false)
const premioBag = ref(false)
const premioMoeda = ref(false)


const fecharMoeda = ()=>{
    premioMoeda.value = false
    overlay.value = false 
}
const fecharBag = ()=>{
    premioBag.value = false
    overlay.value = false 
}
const girarRoleta = ()=> {
        saldo.value -= 5
        estaGirando.value = true
    }

const iniciarAcao = () => {
      girarRoleta();
      setTimeout(realizarFuncaoAleatoria, 4000);
    };

    const recebeuBag = ()=>{
        premioBag.value = true
        overlay.value = true
        saldo.value += 5
        estaGirando.value = false
    }
    const recebeuMoeda = ()=>{
        premioMoeda.value = true
        overlay.value = true
        saldo.value += 2
        estaGirando.value = false
    }

    const realizarFuncaoAleatoria = () => {
      const numeroAleatorio = Math.random();

      if (numeroAleatorio < 0.5) {
        recebeuBag();
      } else {
        recebeuMoeda();
      }
    };
</script>

<style lang="scss" scoped>
section{
    width: 70rem;
    height: auto;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    position: relative;
    height: 40rem;
    overflow: hidden;
}
.card{
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 25rem;
    background-color: #171717;
    border: 5px #212121 solid;
    border-radius: 8px;
    gap: 2rem
}
.imagem-container{
    img{
        width: 15rem;
    }
}
button{
    padding: 16px 60px;
    background-color: #005CE6;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: #FFF;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 1px;
    transition: background-color ease-in 0.2s;
}
button:disabled{
    opacity: 0.5;
    cursor: not-allowed;
}
button:hover{
    background-color: #5193f5;
}
.button-section{
    position: absolute;
    display: flex;
    gap: 2rem;
    bottom: 0;
}
.saldo-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
#recarregar{
    background-color: rgb(209, 78, 78)
}
#recarregar:hover{
    background-color: rgb(212, 38, 38);
}
.conteudo-container{
    text-align: center;
    p{
        font-size: 14px;
        color: #929292;
    }
}
#cardEsquerda{
    position: absolute;
    left: -18rem;
}
#cardDireita{
    position: absolute;
    right: -18rem;
}
.blur{
    position: absolute;
}
.premios_bag{
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 500px;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    top: 2rem;
    gap: 1rem;
    z-index: 51;
    img{
        width: 350px;
        border-radius: 10px;
    }
    .button_fechar{
        padding: 15px 100px;
        color: #FFF;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        background-color: rgb(87, 87, 223);
        font-family: 'Inter'
    }
  }
  .overlay{
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 50;
  }
</style>