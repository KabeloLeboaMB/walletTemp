import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {injected} from '../component/wallet/connectors'
import { useWeb3React } from '@web3-react/core'
import web3 from 'web3'
import useSWR from 'swr'
import { ModalPopup } from '../component/wallet/modalpopup'




export default function Home() {
  const {
    account,
    activate,
    active,
    chainId,
    connector,
    deactivate,
    error,
    provider,
    setError
  } = useWeb3React();
  const [display,setDisplay]=useState("none");
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, fatchError } = useSWR('https://chainid.network/chains.json', fetcher);
  const [open, setOpen] = useState(false);

const Connect =()=>{

  try{
  activate(injected);
  window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId:web3.utils.numberToHex(1)}]
  });
  setOpen(true)
  }catch(e){
    console.error('Connect',e)
  }finally{
    setDisplay("block")
  }
  

}

const Disconnect =()=>{
  try{
  deactivate();
  }catch(e){
    console.error('Connect',e)
  }finally{
    setDisplay("none")
  }
  
 

  
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>Welcome to WalletConnect</div>

        <div className={styles.grid}>
          <button onClick={() => Connect()} className={styles.card}>
            <div>Connect</div>
          </button>

          <button onClick={() => Disconnect()} style={{display:`${display}`}} className={styles.card}>
            <div>Disconnect</div>
          </button>
          {active ? (
            <div>
              <h1 className={styles.description}>You are connected<br/>{account}</h1>
           
            </div>
          ) : null}
        </div>
      </main>
      <ModalPopup open={open} setClose={setOpen} data={data}/>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}