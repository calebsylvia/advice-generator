import React, { useState, useEffect } from 'react'
import LineBreak from './LineBreak'
import getData from '../DataServices/DataService';

const Box = () => {
    const [advice, setAdvice] = useState<string>("");
    const [num, setNum] = useState<number>(0);
  
    const fetchData = async() => {
      let fetchedData = await getData();
      setAdvice(fetchedData.slip.advice);
      setNum(fetchedData.slip.id);
    }
  
    useEffect(() => {
      fetchData();
    }, [advice])
    
  return (
    <div className='bg-darkgrayishblue w-screen h-screen font-primary font-extrabold'>
      <div className='bg-grayishblue w-7/12 md:w-2/5 h-1/3 mt-52 rounded-lg mx-auto relative'>
          <h3 className='text-neongreen text-center pt-8 mb-4'>{`Advice #${num}`}</h3>
          <h1 className="text-white text-base md:text-2xl text-center mb-8 mx-3">{`"${advice}"`}</h1>
          <LineBreak/>
          <button className='bg-neongreen rounded-full w-1/4 md:w-1/12 h-10 max-h-24 md:h-10 hover:shadow-[0px_0px_15px] hover:shadow-neongreen absolute bottom-[-20px] left-[37%] md:left-[45.5%]' onClick={fetchData}>
                <svg className='mx-auto' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
          </button>
      </div>
    </div>
  )
}

export default Box