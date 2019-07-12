import React from 'react';
import RouterMap from './router'
// import Home from './containers/Home'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
      //使用Provider 组件将APP主组件包裹住，这样内部组件都有Store种提供的属性。
      <Provider store={store}>
          <RouterMap />
      </Provider>
  );
}

export default App;
