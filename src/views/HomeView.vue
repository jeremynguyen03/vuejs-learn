<script setup>
import TabbableTextarea from "@/components/TabbableTextarea.vue";
import {ref} from "vue";

let comment = ref('test comment')

setTimeout(() => {
  comment.value = "new comment"
}, 2000)
</script>

<template>
  <main>
    <TabbableTextarea v-model="comment" style="width: 100%; height: 200px"/>
  </main>
</template>
