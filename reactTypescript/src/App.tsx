import Heading from "./components/Heading"
import Counter from "./components/counter"
import { Section } from "./components/Section"

import { useState } from "react"

function App() {
  const [count, setCount] = useState<number>(1)

  return  (
    <>
      <Heading title={"Hello"} />
      <Section title="Different Title">This is my section</Section>
      <Counter setCount={setCount}>Count A is {count} </Counter>
      <Counter setCount={setCount}>Count B is {count} </Counter>
    </>
   
    )
}

export default App
