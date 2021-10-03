<template>
  <div id="AdditionalInfo">
    <div class="configuration">
      <img @click="toggleDarkMode" src="../assets/half.svg" alt="" />
      <select name="languages" id="selectLanguage">
        <option
          v-for="language in languageOptions"
          :key="language.value"
          :value="language.value"
        >
          {{ language.Label }}
        </option>
      </select>
    </div>
    <div class="footer-links">
      <a href="#">Help</a>
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdditionalInfo",
  data() {
    return {
      currentTheme: "light",
      languageOptions: [
        { value: "", Label: "Select Language" },
        { value: "English", Label: "English" },
        { value: "Spanish", Label: "Spanish" },
        { value: "Korean", Label: "Korean" },
        { value: "Welsh", Label: "Welsh" },
      ],
    };
  },
  methods: {
    toggleDarkMode() {
      this.currentTheme = this.currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", this.currentTheme);
    },
  },
};
</script>

<style scoped>
#AdditionalInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(322px + 3rem);
}

@media screen and (max-width: 420px) {
  #AdditionalInfo {
    width: max(calc(3rem + 256px), calc(3rem + 80vw));
  }
}

.configuration {
  text-align: initial;
  margin-left: 1rem;
  display: flex;
  gap: 0.75rem;
  color: var(--secondary);
}

select {
  color: var(--secondary);
  background-color: var(--background);
}

img {
  width: 7%;
  cursor: pointer;
}

select {
  border: none;
  font-size: 0.82rem;
  text-align-last: center;
}

a {
  text-decoration: none;
  color: var(--secondary);
  margin: 0.75rem;
  font-size: 0.82rem;
}
</style>
