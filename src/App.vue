<template>
  <YoutubeChannelModal
    v-on:inputSubmit="recieveEvent"
    :name="youtuberModal"
    v-if="youtuberModal"
  />
  <header class="min-h-650px bg-gradient-to-r from-gr1 to-gr2">
    <Navigation v-on:inputSubmit="recieveEvent" />
    <div class="text-center text-white mt-12">
      <h1 class="text-3rem mb-8 font-medium">I ♥ Garry's Mod France</h1>
      <p class="text-xl font-thin mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br />
        sed do eiusmod tempor incididunt ut labore magna aliqua. Ut enim ad
        minim veniam
      </p>
      <a
        class="
          text-lg text-white
          font-medium
          border border-2
          px-8
          py-2
          rounded-full
        "
        href="https://discord.com"
        >Rejoindre le serveur Discord</a
      >
    </div>
  </header>
  <div
    class="
      flex flex-col
      gap-8
      justify-center
      items-center
      mt-32
      md:-mt-48
      lg:(flex-row)
    "
  >
    <FeatureCard
      v-for="{ id, name, description, img } in features"
      :name="name"
      :description="description"
      :img="img"
      :key="id"
    />
  </div>
  <Footer />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  methods: {
    //evInFather also triggers when the clickBtn event in the Child subcomponent is emit ted
    recieveEvent(data) {
      console.log(data);
      this.youtuberModal = data;
      console.log(this.youtuberModal);
    },
  },
  emits: ["inputSubmit"],
  data() {
    return {
      youtuberModal: null,
      features: [
        {
          id: "1",
          name: "Certification",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis ac lacus ac gravida. Vivamus interdum enim quis sem volutpat, a blandit metus tincidunt. ",
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
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis ac lacus ac gravida. Vivamus interdum enim quis sem volutpat, a blandit metus tincidunt. ",
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
*:focus {
  outline: 0 !important;
}
</style>