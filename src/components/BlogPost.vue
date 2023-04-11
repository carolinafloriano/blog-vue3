<script setup>
defineProps({})
</script>

<template>
  <div class="post">
    <div class="header">
      <div class="avatar"></div>
      <div class="informations">
        <span class="title"><slot name="title"></slot></span>
        <span class="subtitle"><slot name="subtitle"></slot></span>
      </div>
      <div class="others">
        <div class="icons">
          <i class="fa-solid fa-trash"></i>
          <i class="fa-solid fa-pen"></i>
        </div>
        <div class="author">
          <slot name="author"></slot>
        </div>
      </div>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="footer">
      <slot name="date"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css';
.post {
  display: flex;
  flex-direction: column;
  color: black;

  > .header {
    display: flex;
    flex-direction: row;
    gap: 10px;

    > .informations {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    > .others {
      display: flex;
      flex-direction: column;
      gap: 10px;

      > .icons {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }
    }
  }
}
</style>
