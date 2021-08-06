<template>
  <header class="min-h-650px bg-gradient-to-r from-gr1 to-gr2">
    <nav>
      <ul>
        <li>Accueil</li>
        <li></li>
        <li></li>
      </ul>
    </nav>
    <div class="text-center text-white">
      <h1 class="text-3rem mb-8 font-medium">I ♥ Garry's Mod France</h1>
      <p class="text-xl font-thin mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
        sed do eiusmod tempor incididunt ut labore magna aliqua. Ut enim ad
        minim veniam
      </p>
      <a
        class="text-lg font-medium border border-2 px-8 py-2 rounded-full"
        href="https://discord.com"
        >Rejoindre le serveur Discord</a
      >
    </div>

  </header>
  <div class="flex gap-8 justify-center -mt-48">
      <FeatureCard
        v-for="{ id, name, description,img } in features"
        :name="name"
        :description="description"
        :img="img"
        :key="id"
      />
    </div>
    <Footer/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FeatureCard from "./components/FeatureCard.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      features: [
        {
          id: "1",
          name: "Certification",
          description: "desc",
          img: "certification",
        },
        {
          id: "2",
          name: "You'Stats",
          description:
            "En 1 click découvre les statisitiques d'un compte youtube ! Simple et efficace, le module YouStat ne cesse de se moderniser.",
          img: "youtube",
        },
        {
          id: "3",
          name: "Discord",
          description: "desc",
          img: "discord",
        },
      ],
    };
  },
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

body {
  font-family: "Lato", sans-serif;
}
</style>