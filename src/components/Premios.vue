<template>
    <section>
        <div class="card">
            <div class="imagem-container">
                <img src="../assets/images/ideapad.webp" alt="">
            </div>

            <div class="conteudo-container">
                <h3>Idea pad Ryzen 5</h3>
                <span>preço de mercado: R$ 2.339,00</span>
                <p>IdeaPad Ryzen: Poderoso laptop Ryzen, desempenho excepcional. Mais de 327 unidades entregues, confiabilidade comprovada. Inovação em movimento.</p>
            </div>
        </div>
        <div class="card">
            <div class="imagem-container">
                <img src="../assets/images/s23.avif" alt="">
            </div>

            <div class="conteudo-container">
                <h3>Galaxy S23 Ultra</h3>
                <span>preço de mercado: R$ 6.599,00</span>
                <p>Galaxy S23 Ultra: Tecnologia máxima no celular. Câmera poderosa, desempenho top. Já 75 unidades entregues, revolucionando.</p>
            </div>
        </div>
        <div class="card">
            <div class="imagem-container">
                <img src="../assets/images/geforece.png" alt="">
            </div>

            <div class="conteudo-container">
                <h3>RTX 3080</h3>
                <span>preço de mercado: R$ 2.030,00</span>
                <p>RTX 3080: Monstro dos gráficos. Jogos ganham vida, desempenho incrível. 61 unidades já enviadas, potencializando experiências.</p>
            </div>
        </div>
        <div class="card">
            <div class="imagem-container">
                <img src="../assets/images/Bag.png" alt="">
            </div>
            
            <div class="conteudo-container">
                <h3>Bolsa de moedas</h3>
                <p>Bolsa Premiada: Seu caminho para recompensas! Jogue, colete moedas e ganhe. Cada bolsa vale R$10. Participe agora!</p>
            </div>
        </div>
        <div class="card">
            <div class="imagem-container">
                <img src="../assets/images/Bitcoin.png" alt="">
            </div>

            <div class="conteudo-container">
                <h3>Moeda dourada</h3>
                <p>Essa moeda dourada é puro luxo! Parece até tesouro. Cada uma vale R$ 2,00 e olha só, junta 5 delas e ganhe 10 reais!</p>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>
<style lang="scss" scoped>
section{
    display: flex;
    padding: 0px 10px;
    flex-wrap: wrap;
    gap: 35px;
    align-items: center;
    justify-content: center;
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
    gap: 2rem;
    font-size: 14px;
    padding: 10px 20px;
    text-align: center;
}
.imagem-container{
    img{
        width: 15rem;
    }
}
.conteudo-container{
    h3{
        font-size: 16px;
    }
    p{
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 1px;
    }
    span{
        font-size: 10px;
        color: #999999;
    }
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>