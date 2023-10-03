<script setup lang="ts">
import { useStore } from '../store'
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import type { Post } from '../types'

const postTitle: Ref<string> = ref('')
const postSubtitle: Ref<string> = ref('')
const postContent: Ref<string> = ref('')

const store = useStore()

const formEdit = computed<boolean>(() => {
  return store.isEditing
})

const newPost = (): void => {
  const data: Date = new Date()
  const dataAtual: string =
    String(data.getDate()).padStart(2, '0') +
    '/' +
    String(data.getMonth() + 1).padStart(2, '0') +
    '/' +
    data.getFullYear()

  const post: Post = {
    title: postTitle.value,
    subtitle: postSubtitle.value,
    author: 'Carolina Floriano',
    date: dataAtual,
    content: postContent.value
  }
  store.updatePostsList(post)

  postTitle.value = ''
  postSubtitle.value = ''
  postContent.value = ''
}
</script>

<template>
  <div class="form">
    <input v-model="postTitle" type="text" placeholder="Insert a title" class="input-text" />
    <input v-model="postSubtitle" type="text" placeholder="Insert a subtitle" class="input-text" />
    <textarea
      v-model="postContent"
      type="text-area"
      placeholder="Type your post (maxinum 300 characters)"
      max-length="300"
      cols="10"
      rows="100"
      class="input-text area-text"
    ></textarea>
    <button type="submit" class="publishButton" @click="newPost()">
      <span v-if="!formEdit">NEW POST</span>
      <span v-else>EDIT</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  box-sizing: border-box;
  flex-grow: 1;
  > .input-text {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    box-sizing: border-box;
    padding: 8px;
    color: map-get($colors, 'light');

    width: 229px;
    height: 40px;
    left: 20px;
    top: 20px;

    background: #ffffff;
    border: 1px solid #939393;
    border-radius: 5px;
  }

  > .input-text:focus {
    border: 2px solid map-get($colors, 'success');
  }
  > .input-text::placeholder {
    color: map-get($colors, 'light');

    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
  }

  > .area-text {
    flex-grow: 1;
    overflow-y: hidden;
  }

  > .publishButton {
    border: 0;
    border-radius: 5px;
    background-color: map-get($colors, 'success');
    color: white;
    box-sizing: border-box;
    box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.25);
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    padding-top: 12px;
    padding-bottom: 10px;
    cursor: pointer;
  }
}
</style>
