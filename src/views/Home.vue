<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8>
      <v-card min-width="400">
        <v-snackbar v-model="snackbar" :timeout="6000" top>
          {{ message }}
          <v-btn color="pink" @click="snackbar = false">Закрыть</v-btn>
        </v-snackbar>
        <v-card-title>
          <h2>Рума для цветочков 🌹</h2>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="30"
              :rules="nameRules"
              @keydown.enter="submit"
              label="Введите ник "
              required
            ></v-text-field>

            <v-btn :disabled="!valid" color="primary" @click="submit">Войти</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    snackbar: false,
    valid: true,
    name: "",
    message: "",
    nameRules: [
      v => !!v || "Введите ник",
      v => (v && v.length <= 30) || "ник не должно превышать 30 символов"
    ]
  }),
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.name = this.name.toLowerCase();
        this.$router.push({ name: "chat", params: { myname: this.name } });
      }
    }
  }
};
</script>
