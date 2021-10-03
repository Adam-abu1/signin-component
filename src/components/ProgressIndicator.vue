<template>
  <div id="ProgressIndicator">
    <div class="overlay"></div>
    <div class="progress">
      <div class="progress-value"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#ProgressIndicator {
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
}

.progress {
  background: rgba(255, 255, 255, 0.1);
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 40px;
  width: 500px;
}

.progress-value {
  animation: load 3s normal forwards;
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 100px;
  background: #fff;
  height: 30px;
  width: 0;
}

@keyframes load {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
