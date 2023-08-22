<template>
    <section>
        <div class="card">
            <div class="imagem-container">
                <img src="../assets/images/ideapad.webp" alt="">
            </div>

            <div class="conteudo-container">
                <h3>Idea pad Ryzen 5</h3>
                <p>De R$ 2500,99 por R$ 00,00</p>
            </div>
        </div>
        <div class="card">
            <div class="imagem-container">
                <img src="../assets/images/ideapad.webp" alt="">
            </div>

            <div class="conteudo-container">
                <h3>Idea pad Ryzen 5</h3>
                <p>De R$ 2500,99 por R$ 00,00</p>
            </div>
        </div>
        <div class="card">
            <div class="imagem-container">
                <img src="../assets/images/ideapad.webp" alt="">
            </div>

            <div class="conteudo-container">
                <h3>Idea pad Ryzen 5</h3>
                <p>De R$ 2500,99 por R$ 00,00</p>
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
        <button>Rodar</button>
    </section>
</template>

<script setup>


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
    padding: 12px 30px;
    background-color: rgb(86, 43, 194);
    border: none;
    border-radius: 8px;
    position: absolute;
    bottom: 0;
    cursor: pointer;
    color: #FFF;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 20px;
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
</style>