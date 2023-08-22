<template>
  <div class="card">
    <div class="icone">
        <span id="icones" class="material-symbols-rounded">{{ icone }}</span>
    </div>
    <div class="descricao">
        <h4>{{ titulo }}</h4>
        <p>{{ descricao }}</p>
    </div>
    <div class="status">
        <span class="material-symbols-rounded">{{ statusIcon }}</span>
        <p>{{ status }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
    icone: String,
    titulo: String,
    descricao: String,
    status: String,
    statusIcon: String
})
</script>

<style lang="scss" scoped>
.card{
    background-color: #171717;
    display: flex;
    flex-direction: column;
    width: 25rem;
    padding: 16px 22px;
    height: 12rem;
    justify-content: space-between;
    border-radius: 12px;
    position: relative;
    #icones{
        background-color: #242424;
        padding: 10px;
        border-radius: 50%;
    }
    .descricao{
        display: flex;
        flex-direction: column;
        gap: 12px;
        h4{
            font-size: 20px;
        }
        p{
            font-size: 16px;
            line-height: 28px;
            color: #999999
        }
    }
    .status{
        position: absolute;
        right: 1rem;
        border-radius: 5px;
        width: 6rem;
        justify-content: center;
        display: flex;
        align-items: center;
        gap: 5px;
        opacity: 0.7;
        span{
            background-color: none;
        }
    }
}
</style>