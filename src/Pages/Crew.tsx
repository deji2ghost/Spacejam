import React, { useEffect, useState } from 'react'
import { Moon } from '../components/Moon'
import MoonimageLayout from '../layout/moonimage.layout'

export const Crew = ({crew}) => {
    console.log(crew)
    const [ number, setNumber ] = useState(0)
    const [ slide, setSlide ] = useState('Douglas Hurley')

    // useEffect(() => {
    //     setInterval(() => {
    //         const newNum = number + 1
    //         setNumber(newNum)
    //         if(number === 4) setNumber(0)
    //             console.log(number)
    //     }, 10000)
    // }, [number])

    useEffect(() => {
        if( number === 0 ){
            setSlide('Douglas Hurley')
        }else if( number === 1){
            setSlide('Mark Shuttleworth')
        }else if(number === 2) {
            setSlide('Victor Glover')
        }else if(number === 3) {
            setSlide('Anousheh Ansari')
        }
    }, [slide, number])
  return (
    <MoonimageLayout image='image/crew/background-crew-desktop.jpg' mobile='image/crew/background-crew-mobile.jpg'>
        <div className="flex flex-col gap-9 w-[80%] mx-auto mt-[20px] md:gap-0">
            <div className='flex text-xl gap-3'>
                <p>02</p>
                <h1>Meet Your Crew</h1>
            </div>
            <div className='flex flex-col-reverse gap-8 md:gap-0 md:flex-row items-center justify-between'>
                <div className='flex flex-col-reverse gap-6 md:flex-col md:gap-5'>
                    {
                        crew?.map((det: any) => {
                            return(
                                <>
                                    {   slide === det.name &&
                                        <div className='md:mb-10 text-center md:text-left'>
                                            <h1 className='text-2xl md:text-4xl mb-2 md:mb-1'>{det.role}</h1>
                                            <p key={det.name} className='text-4xl cursor-pointer mb-5 md:text-6xl md:mb-7'>{det?.name}</p>
                                            <h2 className='md:w-[65%] leading-8'>{det.bio}</h2>
                                        </div>
                                    }
                                </>
                            )
                        })
                    }
                    <div className='flex items-center gap-6 justify-center md:justify-normal md:gap-3'>
                        <p onClick={() => setNumber(0)} className={` ${ number === 0 ? 'bg-white' : 'bg-slate-400' } w-[10px] h-[10px] rounded-[100%] `}></p>
                        <p onClick={() => setNumber(1)} className={` ${ number === 1 ? 'bg-white' : 'bg-slate-400' } w-[10px] h-[10px] rounded-[100%] `}></p>
                        <p onClick={() => setNumber(2)} className={` ${ number === 2 ? 'bg-white' : 'bg-slate-400' } w-[10px] h-[10px] rounded-[100%] `}></p>
                        <p onClick={() => setNumber(3)} className={` ${ number === 3 ? 'bg-white' : 'bg-slate-400' } w-[10px] h-[10px] rounded-[100%] `}></p>
                    </div>
                </div>
                {
                    crew?.map((det) => {
                        // console.log(index)
                        return(
                            <>{det.name === slide && <img key={det.name} className='cursor-pointer mx-auto h-[350px] md:mx-0 w-[100%] md:h-[400px] object-contain' src={det?.images?.webp} />}</>
                        )
                    })
                }
            </div>
        </div>
    </MoonimageLayout>
  )
}
