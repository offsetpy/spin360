<template>
  <main>
    <div class="card">
        <div class="imagem-container">
            <img :src="source" alt="">
        </div>

        <div class="conteudo-container">
            <h3>{{ titulo }}</h3>
            <p>{{ descricao }}</p>
        </div>
    </div>
  </main>
</template>

<script setup>
defineProps({
    source: String,
    titulo: String,
    descricao: String
})
</script>

<style>

</style>