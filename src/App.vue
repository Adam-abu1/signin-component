<template>
  <div id="app">
    <SignIn v-if="showSignIn" />
    <Welcome />
    <AdditionalInfo />
  </div>
</template>

<script>
import SignIn from "@/components/SignIn";
import AdditionalInfo from "@/components/AdditionalInfo";
import Welcome from "@/components/Welcome";

export default {
  name: "App",
  data() {
    return {
      showSignIn: true,
    };
  },

  mounted() {
    this.$root.$on("destroy-sign-in", () => {
      this.showSignIn = false;
    });
  },
  components: {
    SignIn,
    AdditionalInfo,
    Welcome,
  },
};
</script>

<style>
:root {
  --black: #000;
  --blue: #0e78d5;
  --navy-blue: #0c3680;
  --white: #FFF;

  --text: #000;
  --error-text: #F00;
  --background: #f5f5f5;
  --card: #fafafa;
  --primary: #3379ce;
  --secondary: #17377b;
  --label-text: rbga(0, 0, 0, 0.5);
  --input-border-color: rgba(0, 0, 0, 0.25);
  --card-drop-shadow: rgba(0, 0, 0, 0.1);

  --border-radius: 12px;
}

[data-theme="dark"] {
  --text: #fff;
  --error-text: #d76a6a;
  --background: #272727;
  --card: #212121;
  --primary: #3379ce;
  --secondary: #77b0f4;
  --label-text: rbga(255, 255, 255, 0.5);
  --input-border-color: rgba(255, 255, 255, 0.25);
  --card-drop-shadow: rgba(255, 255, 255, 0.1);
}
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--background);
  display: grid;
  place-content: center;
  row-gap: 0.75rem;
  height: 100vh;
  width: 100vw;
}
</style>
