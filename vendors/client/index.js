import './styles/common.scss';
import './styles/theme.less';
import { LocaleProvider } from 'antd';
import './plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Application';
import { Provider } from 'react-redux';
import createStore from './reducer/create';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';

if (process.env.NODE_ENV === 'production') {
  const Sentry = require('@sentry/react')
  Sentry.init({dsn: "https://6a74bc50d18a41868ea6f5209f871cfd@sentry.medcloud.cn/4"});
}

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('yapi')
);
