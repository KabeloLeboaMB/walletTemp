import '../styles/globals.css'
import { Web3ReactProvider} from '@web3-react/core'
// import your favorite web3 convenience library here
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
  <Component {...pageProps} />
  </Web3ReactProvider>
  
  )
}

export default MyApp
