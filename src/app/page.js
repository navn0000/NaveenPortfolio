"use client";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { useEffect, useState } from 'react'
import CustomLoader from './components/CustomLoader'


export default function Home() {
  const [loading, setLoading] = useState(true);
useEffect(()=>{
  setTimeout(()=>{
      setLoading(false)
  }, 5000)
});



  return <>
{loading && loading ?  <CustomLoader />: <>
<Header />
<HomePage />
</>}
  </>
}
