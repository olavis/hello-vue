<template>
  <v-app>
    <v-app-bar app color="info" flat>
      <v-tabs centered class="ml-n9" color="accent">
        <v-tab to="/">Home</v-tab>
        <v-tab to="/about">About</v-tab>
        <v-tab to="/calendar">Calendar</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#calendarItem {
  color: #fff8e1;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
  }
}
</style>