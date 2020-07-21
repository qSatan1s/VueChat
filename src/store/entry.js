import firebase from 'firebase/app';

export default {
  actions: {
    async fetchMessages({ commit, dispatch }) {
      try {
        const message = (
          await firebase
            .database()
            .ref(`/room/message`)
            .once('value')
        ).val();
        return Object.keys(message).map((key) => ({
          ...message[key],
          id: key,
        }));
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
    async newMessage({ commit, dispatch }, { name, text }) {
      try {
        const newMessage = await firebase
          .database()
          .ref(`/room/message/`)
          .push({ name, text });
        return { name, text, id: newMessage.key };
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },
  },
};
