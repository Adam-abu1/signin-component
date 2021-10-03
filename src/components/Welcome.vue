<template>
  <main v-if="name" id="Welcome">Welcome {{ name }}!</main>
</template>

<script>
export default {
  name: "AdditionalInfo",
  data() {
    return {
      name: "",
    };
  },
  mounted() {
    this.$root.$on("sign-in-success", (name) => {
      this.name = name;
    });
  },
};
</script>

<style scoped>
#Welcome {
  border-radius: var(--border-radius);
  box-shadow: 0px 0 20px 5px var(--card-drop-shadow);
  padding: 1.5rem;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: var(--text);
}

@media screen and (max-width: 420px) {
  #Welcome {
    width: max(256px, 80vw);
  }
}
</style>
