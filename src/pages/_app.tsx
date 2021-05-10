import { Header } from "../components/Header"
import { GlobalStyle } from "../styles/global"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
