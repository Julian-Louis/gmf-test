<template>
  <div class="flex items-center justify-center text-center" v-if="channelData">
    <div
      class="
        absolute
        rounded-lg
        bg-white
        pb-8
        top-32
        shadow-2xl
        w-9/12
        lg:w-1/3
        flex
        items-center
        justify-center
        flex-col
        px-8
      "
    >
      <CloseIcon class="absolute right-4 top-4 cursor-pointer" v-on:click="submit" />
      <img
        class="rounded-full h-32 mt-8"
        :src="channelData.snippet.thumbnails.default.url"
        alt=""
      />
      <h1 class="font-medium text-2xl mt-4">{{ channelData.snippet.title }}</h1>
      <p class="mt-4">{{ channelData.snippet.description }}</p>
      <span class="mt-2 flex items-center text-black text-opacity-60"
        ><ClockIcon class="h-4" />Crée le
        {{
          new Date(channelData.snippet.publishedAt).toLocaleDateString(
            "fr-FR",
            { weekday: "long", year: "numeric", month: "long", day: "numeric" }
          )
        }}</span
      >

      <div
        class="
          flex flex-wrap
          gap-1
          text-white text-center
          items-center
          justify-center
          mt-8
          gap-4
        "
      >
        <div
          style="flex-basis: 45%"
          class="p-8 bg-primary rounded-md flex flex-col items-center"
        >
          <EyeIcon />
          <span class="font-medium text-xl">
            {{ numberWithSpaces(channelData.statistics.viewCount) }}</span
          >
          <small class="text-white text-opacity-80">vu au total</small>
        </div>
        <div
          style="flex-basis: 45%"
          class="p-8 bg-primary rounded-md flex flex-col items-center"
        >
          <PeopleIcon />
          <span class="font-medium text-xl">
            {{ numberWithSpaces(channelData.statistics.subscriberCount) }}</span
          >
          <small class="text-white text-opacity-80">abonnés au total</small>
        </div>
        <div
          style="flex-basis: 45%"
          class="p-8 bg-primary rounded-md flex flex-col items-center"
        >
          <VideoIcon />
          <span class="font-medium text-xl">
            {{ numberWithSpaces(channelData.statistics.videoCount) }}</span
          >
          <small class="text-white text-opacity-80">vidéos au total</small>
        </div>
        <div style="flex-basis: 45%" class="opacity-0"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import EyeIcon from "./icons/EyeIcon.vue";
import PeopleIcon from "./icons/PeopleIcon.vue";
interface ChannelModal {
  channelData: Object|null;
}

export default defineComponent({
  props: ["name"],
  data() {
    return {
      channelData: null,
      error: "",
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    submit() {
      this.$emit("inputSubmit", "");
    },
    numberWithSpaces(x: number) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    async fetchData() {
      const requestHeaders = new Headers();
      const response = await fetch(
        "https://gmf.julianlouis.fr/channel/" + this.name,
        {
          headers: requestHeaders,
        }
      );
      const data = await response.json();
      if (response.ok) {
        this.channelData = data.items[0];
      } else {
        this.error = "An unknow error occured";
      }
    },
  },
  emits: ["inputSubmit"],
});
</script>