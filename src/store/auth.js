import firebase from 'firebase/app';

export default {
  name: 'Auth',
  actions: {
    async login({dispatch, commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(
          email,
          password
        );
      } catch (e) {
        console.log(dispatch, commit, email, password);
        throw e;
      }
    }
  }
}