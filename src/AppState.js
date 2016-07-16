import { observable } from 'mobx';

class AppState {
  @observable posts = [];
  @observable isLoading = false;
  @observable error = null;
}

export default AppState;
