import { useState } from 'react'
import Data from './Data'
import List from './components/List'
import './App.css'

function App() {
  const [people, setPeople] = useState(Data)
  console.log(people)
return (
  <>
  <main>
    <section className='container'>
      <h3>{people.length} BIRTHDAY TODAY</h3>
      <List people={people}  />
      <button onClick={() => {
        setPeople([]);
      }}>clear all</button>
    </section>
  </main>
  </>
)
}

export default App
