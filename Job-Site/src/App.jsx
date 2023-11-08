import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JobsCategory from './Component/JobsCategore/JobsCategory'
import Jobs from './Component/Jobs/Jobs'
import HomeTop from './Component/HomeTop/HomeTop'
import { useLoaderData } from 'react-router-dom'

function App() {
  const jobDetaisData=useLoaderData();

  return (
    <>
    <HomeTop></HomeTop>
     <JobsCategory></JobsCategory>
     <Jobs jobDetaisData={jobDetaisData}></Jobs>
    </>
  )
}

export default App
