<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="card">
    <header class="card-title">
      {{ title }}
    </header>
    <div class="card-content"><slot></slot></div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 2px solid;
  border-color: map-get($colors, 'dark');
  border-radius: 7px;

  > .card-title {
    font-family: 'Josefin Sans', sans-serif;
    color: #ffffff;
    background-color: #4c4352;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    padding: 12px;
    text-align: center;
  }

  > .card-content {
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 100%;
    box-sizing: border-box;
    flex-grow: 1;
    max-height: 80vh;
    overflow-y: auto;
  }
}
</style>
