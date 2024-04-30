<script setup lang="ts">

  import {reactive, ref} from "vue";
  import {RouterMenu} from '@/router'
  import Loading from '@/view/Loading.vue';

  let title = 'Home';
  let drawer = ref<boolean>(false);
  let menus = RouterMenu;

  const isDrawer = () => drawer.value = !drawer.value;
  const changeTitle = (menu) => title = menu.title;
</script>


<template>
  <Loading/>
  <v-app app>
      <v-app-bar
          color="primary"
          prominent
          app
      >
        <v-app-bar-nav-icon variant="text" @click.stop="isDrawer"></v-app-bar-nav-icon>

        <v-toolbar-title>{{title}}</v-toolbar-title>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
          temporary
          app
      >
        <v-list>
            <RouterLink class="menu-link" :to="menu.path" v-for="menu in menus" :key="menu.id" @click.prevent="changeTitle(menu)">
              <v-list-item :title="menu.title"></v-list-item>
            </RouterLink>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh;" app>

        <RouterView />
      </v-main>
  </v-app>
</template>


<style scoped>
  .menu-link {
    text-decoration: none;
    color: #000000;
  }
</style>
