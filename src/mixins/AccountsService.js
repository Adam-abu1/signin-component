export default {
  methods: {
    sendSignInRequest() {
      this.showProgressIndicator = true;

      const request = new XMLHttpRequest();
      request.open(
        "PATCH",
        "https://my-json-server.typicode.com/kidsloop-test/accounts/sign-in",
        true
      );
      request.setRequestHeader("Accept", "application/json");
      request.setRequestHeader("Content-Type", "application/json");

      request.send(
        JSON.stringify({
          email: this.emailOrPhoneInput,
          password: this.passwordInput
        })
      );

      request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
          const status = request.status;
          if (status === 0 || (status >= 200 && status < 400)) {
            const name = JSON.parse(request.response).name;
            console.log(`Welcome ${name}!`);
            this.$root.$emit("sign-in-success", name);
            this.$root.$emit("destroy-sign-in");
          } else {
            console.error("There was an error in making the request");
          }
        }
      };
    }
  }
};
