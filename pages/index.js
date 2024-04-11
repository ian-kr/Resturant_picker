import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'


function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}
function fetch() {
  (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "YOUR_API_KEY",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });
}

function Home() {
 

  return (
    <main className={styles.main}>
      <h1 className={styles.titlePage}>Restruant Picker</h1>
      <h2>[Restruant]</h2>
      <hr className={styles.hr} />
      <h3 className={styles.topPlace}>Adress:</h3>
      <input className={styles.form}></input>
      <h3 className={styles.topPlace}>Search Radius (miles):</h3>
      <input className={styles.form}></input>
      <h3 className={styles.br}/>
      <Button>Generate</Button>

    </main>
  )
}

export default Home
