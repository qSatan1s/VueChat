<template>
  <div class="window">
    <div class="chat" ref="block">
      <message
        v-for="m in messages"
        :key="m.id"
        :name="m.name"
        :text="m.text"
        :friend="m.name !== myname"
      />
    </div>
  </div>
</template>

<script>
import message from "./message";
export default {
  props: ["newMessages", "myname"],

  watch: {
    newMessages: function(newMessages) {
      this.messages = this.newMessages;
      setTimeout(() => {
        this.$refs.block.scrollTop = this.$refs.block.scrollHeight;
      });
    }
  },
  data: () => ({
    messages: []
  }),
  components: {
    message
  },
  mounted() {
    this.interval = setInterval(async () => {
      this.messages = await this.$store.dispatch("fetchMessages");
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style scoped lang="scss">
.window {
  height: 80vh;
  background: white;
  width: 100vw;
  margin: 0 1vw;
  border-radius: 50px;

  position: relative;
  overflow: hidden;
}

.chat {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1rem;
  overflow-y: auto;
}
</style
>>
