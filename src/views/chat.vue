<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped mobile-break-point="650">
      <v-list subheader>
        <v-subheader>Cписок комнат:</v-subheader>
        <v-list-item link v-for="(room, index) in rooms" :key="`${index} + ${room.title}`">
          <v-list-item-action>
            <v-icon :style="{ color: room.blue}" color="darken-1">mdi-message-text</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{room.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Комната 1</v-toolbar-title>
      <v-btn width="100" height="100%" absolute right class="mr-12" icon @click="exit">
        <v-icon>mdi-arrow-left</v-icon>
        <v-list-item-content>
          <v-list-item-title>Выход</v-list-item-title>
        </v-list-item-content>
      </v-btn>
    </v-app-bar>
    <v-main class="message-block">
      <v-container class="fill-height d-flex align-start" fluid>
        <v-row class="center mt-1">
          <MessageBlock :newMessages="newMessages" :myname="myname" />
          <div class="c-form">
            <FormMessage :myname="myname" @updateMessage="updateMessage" />
          </div>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MessageBlock from "../components/windowMessage";
import FormMessage from "@/components/FormMessage";
export default {
  props: ["myname"],
  data: () => ({
    drawer: null,
    newMessages: [],
    rooms: [
      { title: "room 1", to: "#", blue: "#1E88E5 " },
      { title: "room 2", to: "#" },
      { title: "room 3", to: "#" },
      { title: "room 4", to: "#" }
    ]
  }),
  mounted() {
    if (!this.myname) {
      this.$router.push("/");
    }
  },
  components: {
    MessageBlock,
    FormMessage
  },
  methods: {
    async updateMessage(newMessages) {
      this.newMessages = newMessages;
    },
    async exit() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.message-block {
  height: 100%;
  position: relative;
  overflow: hidden;
}
.c-form {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  height: 80px;
  background: #1e1e1e;
  border-radius: 5px;
}
</style>
