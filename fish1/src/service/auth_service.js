import firebase from 'firebase';
import firebaseApp from './firebase';


class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();//왜 []묶음?
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    firebase.auth().signOut();
  }

  onAuthChange(onUserChanged) { //사용자가 바뀌었을 때 원하는 기능을 수행하는 이 콜백함수를 받아서 
    firebase.auth().onAuthStateChanged(user => { //항상 사용자가 로그인이 되었는지 로그아웃을 했는지 확인 가능
      onUserChanged(user);
    });
  }
  

}

export default AuthService;
