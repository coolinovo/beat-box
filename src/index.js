import React, { Fragment } from 'react'
import { render } from 'react-dom'
import App from 'views/App'
import * as serviceWorker from './serviceWorker'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

render(
  <Fragment>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Fragment>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
