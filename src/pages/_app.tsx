import { Header } from "../components/Header"
import { ClassificationContextProvider } from "../context/ClassificationContext"
import { GlobalStyle } from "../styles/global"

function MyApp({ Component, pageProps }) {
  
  return (
    <ClassificationContextProvider>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
    </ClassificationContextProvider>
  )
}

export default MyApp
