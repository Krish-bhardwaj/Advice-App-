import type { NextPage  } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import { AdviceCard } from '../components/AdviceCard'



const API="https://api.adviceslip.com/advice";

const Home: NextPage= () => {

  const [adviceText ,setAdviceText] =useState<string>("Never regret. If it's good, it's wonderful. If it's bad, it's experience.");
  const [adviceId, setAdviceId] = useState<number>(143);

    const fetchAdvice = async () => {

      const res = await fetch(API);
      const data= await res.json();

      setAdviceId(data.slip.id);
      setAdviceText(data.slip.advice);
    };
     
  
  const handleAdvice= () => {
    fetchAdvice();
  };

  return (
    <div className="flex min-h-screen bg-gray-800 flex-col items-center py-2">
      <Head>
        <title>Advice Generator App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-emerald-200 font-bold text-2xl md:text-4xl font-manrope mt-4 rounded-xl hover:rounded-xl hover:shadow-lg hover:shadow-emerald-600 hover:bg-emerald-500 hover:text-emerald-100 px-4 py-2 transition duration-300 ease-in ">
        Advice Generator App
        </h1>
      {/* <CircularButton /> */}
      <AdviceCard id={adviceId} adviceText={adviceText}  handleAdvice={handleAdvice} />
    </div>
  )
}

export default Home


