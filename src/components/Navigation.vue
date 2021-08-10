<template>
  <div class="flex py-6 flex-col md:flex-row">
    <div class="flex-1 flex items-center justify-center ">
      <img class="h-12" src="/gmod.png" alt="Garry's Mod Logo" />
    </div>
    <div class="flex-1 mt-6 md:mt-0 ">
      <ul class="font-medium inline text-lg flex flex-col items-center gap-4 md:(flex-row gap-0)">
        <li><a href="/" class="text-white inline p-6">Accueil</a></li>
        <li>
          <a
            href="https://discord.com"
            class="text-white text-opacity-60 inline p-6"
            >Discord</a
          >
        </li>
        <li>
          <div
            class="flex items-center border border-white border-2 rounded-full"
          >
            <input
              v-model="input"
              @keyup.enter="submit"
              type="text"
              placeholder="Chaîne youtube"
              class="
                rounded-full
                bg-transparent
                text-white text-base
                py-6px
                px-4
                placeholder-white placeholder-opacity-60
              "
            />
            <SearchIcon v-on:click="submit" class="mr-2 h-4 cursor-pointer" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
li {
  float: left;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      input: "",
    };
  },

  methods: {
    submit() {
      this.$emit("inputSubmit", this.input);
    },
    
    
  },
});
</script>