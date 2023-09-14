<script setup>

import {useFlash} from "@/composables/useFlash";

let {flash} = useFlash();


</script>

<template>
  <main>
    <p>
      <button @click="flash('About page')">Click me</button>
    </p>
  </main>
</template>
