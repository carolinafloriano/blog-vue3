<script setup>
import BlogPost from './components/BlogPost.vue'
import BlogCard from './components/BlogCard.vue'
</script>

<template>
  <BlogCard title="Posts">
    <BlogPost>
      <template #title> The biggest whale on earth </template>
      <template #subtitle> Lorem ipsum dolor sit emet! </template>
      <template #author> Pedro Pedrozo </template>
      <template #date>12/12/2022</template>
      <template #content
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel urna ac leo porttitor
        malesuada. Duis nec sollicitudin diam. Nullam vitae elit pellentesque, porta tortor a,
        gravida nibh. Phasellus ut ultrices odio. Vestibulum quis rhoncus nisl. Vivamus eget
        elementum justo, vel mattis justo. Nullam varius diam non arcu fermentum, ac lacinia erat
        maximus.</template
      >
    </BlogPost>
  </BlogCard>
</template>

<style scoped></style>
