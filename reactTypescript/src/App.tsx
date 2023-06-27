import Heading from "./components/Heading"
import Counter from "./components/counter"
import { Section } from "./components/Section"

function App() {
  return  (
    <>
      <Heading title={"Hello"} />
      <Section title="Different Title">This is my section</Section>
      <Counter/>
    </>
   
    )
}

export default App
