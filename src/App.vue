<script setup lang="ts">
import BlogPost from './components/BlogPost.vue'
import BlogCard from './components/BlogCard.vue'
import BlogForm from './components/BlogForm.vue'
import { useStore } from './store'
import type { Post } from './types'

const store = useStore()

const postsList: Post[] = store.getPostsList
</script>

<template>
  <div class="blog">
    <BlogCard title="Posts">
      <BlogPost v-for="(post, index) in postsList" :key="'post' + index">
        <template #title>{{ post.title }} </template>
        <template #subtitle> {{ post.subtitle }}</template>
        <template #author> {{ post.author }} </template>
        <template #date>{{ post.date }}</template>
        <template #content>{{ post.content }}</template>
      </BlogPost>
    </BlogCard>
    <BlogCard title="Form"> <BlogForm></BlogForm></BlogCard>
  </div>
</template>

<style lang="scss" scoped>
@import url('@/assets/styles/all.scss');

.blog {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
</style>
