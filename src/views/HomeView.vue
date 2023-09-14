<script setup>
import {useStorage} from "@/composables/useStorage";

let food = useStorage('food', 'salad');
let age = useStorage('age');

let obj = useStorage('obj', {name: 'jeremy', age: 32})

setTimeout(() => {
  obj.value.name = "Nguyen Ngoc"
}, 3000)

</script>

<template>
  <main>
    <p>
      What is your favorite food? <input type="text" v-model="food">
    </p>
    <p>
      How old are you? <input type="text" v-model="age">
    </p>
  </main>
</template>
