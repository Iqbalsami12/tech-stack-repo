import Banner from "./Banner"
import Nav from "./Nav"
import Technologies from "./Technologies/Technologies"

import { Suspense, useState } from "react"
import type { ItechType } from "./techTypes"
import Footer from "./footer/Footer"


const techFetch = async(): Promise<ItechType[]>=>{
  const res = await fetch('/data.json')
  const data =await res.json()
  return data
}



function App() {
  const [selectedTechs, setSelectedTechs] = useState<ItechType[]>([])
  const techPromise = techFetch();
  
  return (
    <>
      
    <Nav></Nav>
    <Banner></Banner>
    <Suspense
    fallback = {<h2>Loading Content...</h2>}>
      <Technologies
        techPromise={techPromise}
        selectedTechs={selectedTechs}
        setSelectedTechs={setSelectedTechs}
      />
    </Suspense>
    
    
    <Footer></Footer>

      
    </>
  )
}

export default App
