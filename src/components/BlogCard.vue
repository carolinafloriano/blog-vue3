<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
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
  }
}
</style>
