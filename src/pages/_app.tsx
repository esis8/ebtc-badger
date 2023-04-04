import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
