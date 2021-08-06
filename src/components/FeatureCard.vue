<template>
    <div class="bg-white rounded-xl w-112 text-center flex justify-center items-center flex-col shadow-xl">
        <img class="h-24 my-8" v-bind:src="'./'+img+'.png'"/>
        <h2 class="font-bold text-3xl mb-4">{{name}}</h2>
        <p class="text-base text-grey mb-4">{{description}}</p>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: ["id", "name","description","img"],
});
</script>