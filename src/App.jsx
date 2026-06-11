import { Suspense } from 'react'
import './App.css'
import Countries from './component/countries/Countries'

const countryPromise = fetch('https://openapi.programming-hero.com/api/all').then(res=>res.json())

function App() {


  return (
    <>

        <Suspense fallback={<h3>Nadir Vai on the go0...</h3>}>
          <Countries propsName={countryPromise}></Countries>
        </Suspense>
       
    
    </>
  )
}

export default App

