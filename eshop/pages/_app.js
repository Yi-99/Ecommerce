import '@/styles/globals.scss'
import { Provider } from 'react-redux'
import store from '../store'
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import Head from 'next/head'

let persistor = persistStore(store)

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Eshop</title>
        <meta name="description" content="Eshop online shopping store"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Provider store={store}>
        <PersistGate Loading={null} persistor={persistor}>
        <Component {...pageProps}/>
        </PersistGate>
      </Provider>
    </>
  )
}

