<template>
  <v-flex xs12>
    <div>
      <v-text-field label="Введите сообщение" outline v-model="text" @keydown.enter="MessageSend" />
    </div>
  </v-flex>
</template>



<script>
export default {
  props: ["myname"],
  data: () => ({
    text: null
  }),
  methods: {
    async MessageSend() {
      if (typeof this.text === "string") {
        try {
          try {
            await this.$store.dispatch("newMessage", {
              name: this.myname,
              text: this.text
            });
            this.text = null;
            const newMessages = await this.$store.dispatch("fetchMessages");
            this.$emit("updateMessage", newMessages);
          } catch (e) {}
        } catch (e) {}
      }
    }
  }
};
</script>

