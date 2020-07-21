<template>
  <div>
    <div v-if="name === 'admin'" class="system">
      <p class="text-xs-center">{{text}}</p>
      <hr />
    </div>
    <div v-else class="wrap">
      <div class="mes" :class="{friend}">
        <small>
          <strong>{{name}}</strong>
        </small>
        <p>{{text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    text: String,
    friend: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style   lang="scss" scoped>
.system {
  margin-bottom: 1rem;
  text-align: center;

  p {
    margin-bottom: 1rem;
  }
}

.wrap {
  display: flex;
  position: relative;
  flex-direction: column;
}

.mes {
  padding: 1rem;

  width: 60%;
  margin: 1rem;
  box-shadow: 0 1px 0 0 rgba(50, 50, 50, 0.3);
  border-radius: 40px;
  background: #168d0b;
  position: relative;
  margin-bottom: 1rem;

  p {
    margin-bottom: 0;
  }
}

.friend {
  color: #ffffff;
  align-self: flex-end;
  padding: 1rem;

  width: 60%;
  margin: 1rem;
  box-shadow: 0 1px 0 0 rgba(50, 50, 50, 0.3);
  border-radius: 40px;
  background: #0b168d;
}
</style>

