import Banner from "./Banner"
import Nav from "./Nav"
import Logo from "./assets/logo-text.png"
import Ban from "./assets/banner-stack.png"
import Technologies from "./Technologies/Technologies"

import { Suspense } from "react"
import type { ItechType } from "./techTypes"


const techFetch = async(): Promise<ItechType[]>=>{
  const res = await fetch('/data.json')
  const data =await res.json()
  return data
}



function App() {
  const techPromise = techFetch();
  return (
    <>
      
    <Nav></Nav>
    <Banner></Banner>
    <Suspense
    fallback = {<h2>Loading Content...</h2>}>
      <Technologies techPromise = {techPromise}></Technologies>
    </Suspense>

      
    </>
  )
}

export default App
