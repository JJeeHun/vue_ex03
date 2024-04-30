<template>
  <section :class="['loading-container' , isLoading ? 'action' : '']">
    <div class="loading-bg"></div>
    <div class="loading">
      <h1 class="loading-title">Loading...</h1>
      <div class="loading-bar">
        <span class="loading-bar-gauge"></span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import {useStore} from "vuex";
  import {computed} from "vue";

  const store = useStore();
  const isLoading = computed(() => store.state['loading'].isLoading);
</script>

<style scoped>
  .loading-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
  }

  .loading-container.action {
    visibility: inherit;
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .loading-title {
    font-size: 3rem;
    padding: 15px;
    color: rgb(var(--v-theme-primary));
  }

  .loading-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: gray;
    opacity: 0.4;
    pointer-events: none;
  }

  .loading-bar {
    position: relative;
    width: 300px;
    height: 10px;
    background: lightgray;
    border-radius: 5px;
  }

  .loading-bar-gauge {
    position: absolute;
    width: 0%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgb(var(--v-theme-primary));
    border-radius: 5px;
  }

  .loading-container.action .loading-title {
    animation-name: flicker;
    animation-duration: 1600ms;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  .loading-container.action .loading-bar-gauge {
    animation-name: loading-bar;
    animation-duration: 1600ms;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  }

  @keyframes flicker {
    from {
     opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes loading-bar {
    0% {
      width: 0;
    }
    80% {
      width: 100%;
    }
    100%{
      width: 100%;
    }
  }
</style>
