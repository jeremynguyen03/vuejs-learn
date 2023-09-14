<script>

import flash from "@/mixins/flash";

export default {
  mixins: [flash]
}


</script>

<template>
  <main>
    <p>
      <button @click="flash('About page')">Click me</button>
    </p>
  </main>
</template>
