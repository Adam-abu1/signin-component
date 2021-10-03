<template>
  <div id="SignIn">
    <ProgressIndicator v-if="showProgressIndicator" />
    <div class="image-wrapper">
      <a href="https://www.kidsloop.net/">
        <img alt="Kidsloop logo" src="../assets/kidsloop_min_logo.svg" />
      </a>
    </div>

    <h1>Sign In</h1>
    <input
      type="text"
      name="email"
      v-model="emailOrPhoneInput"
      placeholder="Email or Phone *"
    />
    <div v-if="errorMessage.emailOrPhone" class="error-message">
      {{ errorMessage.emailOrPhone }}
    </div>
    <input
      type="password"
      name="password"
      placeholder="Password *"
      v-model="passwordInput"
    />
    <div v-if="errorMessage.password" class="error-message">
      {{ errorMessage.password }}
    </div>
    <div class="login-actions">
      <span class="forgot-password">Forgot Password?</span>
      <div @click="signIn()" class="sign-in-button">Sign In</div>
    </div>
    <div class="create-account">Create an account</div>
  </div>
</template>

<script>
import AccountsService from "@/mixins/AccountsService";
import ProgressIndicator from "@/components/ProgressIndicator";

export default {
  name: "SignIn",
  mixins: [AccountsService],
  data() {
    return {
      emailOrPhoneInput: "",
      // Please do note recording the password like so is simply wrong and is being done for the test sake
      passwordInput: "",
      errorMessage: {
        emailOrPhone: "",
        password: "",
      },
      showProgressIndicator: false,
    };
  },
  methods: {
    signIn() {
      this.showProgressIndicator = true;
      setTimeout(() => {
        this.validateInput();

        if (!this.errorMessage.password && !this.errorMessage.emailOrPhone) {
          this.sendSignInRequest();
        }

        this.showProgressIndicator = false;
      }, 3000);
    },
    validateInput() {
      this.validateEmailOrPhone();
      this.validatePassword();
    },
    validatePassword() {
      if (this.passwordInput.length < 6) {
        this.errorMessage.password = "Passwords are 6 characters minimum";
      } else {
        this.errorMessage.password = "";
      }
    },
    validateEmailOrPhone() {
      this.errorMessage.emailOrPhone = "";
      const isPhoneRegex = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?#(\d{4}|\d{3}))?$/;

      if (isPhoneRegex.test(this.emailOrPhoneInput)) {
        return (this.errorMessage.emailOrPhone = "");
      } else {
        this.errorMessage.emailOrPhone += `Please enter a valid phone number`;
      }

      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

      if (emailRegex.test(this.emailOrPhoneInput)) {
        return (this.errorMessage.emailOrPhone = "");
      } else {
        this.errorMessage.emailOrPhone += `\nor enter a valid email address`;
      }
    },
  },
  components: {
    ProgressIndicator,
  },
};
</script>

<style scoped>
#SignIn {
  background: var(--card);
  border-radius: var(--border-radius);
  box-shadow: 0px 0 20px 5px var(--card-drop-shadow);
  padding: 1.5rem;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@media screen and (max-width: 420px) {
  #SignIn {
    width: max(256px, 80vw);
  }
}

.image-wrapper {
  text-align: left;
}

img {
  width: 25%;
}

h1 {
  text-align: left;
  font-size: 2.25rem;
  margin: 0;
  color: var(--text);
}

input {
  width: calc(100% - 1rem);
  color: var(--text);
  padding: 1rem 0;
  padding-left: 1rem;
  background-color: var(--card);
  border-radius: var(--border-radius);
  border: 1px solid var(--input-border-color);
}

.error-message {
  max-width: 300px;
  margin: 0 1rem;
  font-size: 0.7rem;
  color: var(--error-text);
}

.login-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.forgot-password,
.sign-in-button,
.create-account {
  cursor: pointer;
  font-size: 0.85rem;
}

.forgot-password {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--primary);
}

.sign-in-button {
  border: 1px solid var(--blue);
  padding: 0.7em 1.5rem;
  border-radius: var(--border-radius);
  background-color: var(--blue);
  color: var(--white);
}

.create-account {
  text-align: left;
  color: var(--primary);
}
</style>
