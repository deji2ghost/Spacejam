import { useState } from "react"
import MoonimageLayout from "../layout/moonimage.layout"
import { useMediaQuery } from 'react-responsive'


export const Technology = ({technology}) => {
    console.log(technology)
    const [ number, setNumber ] = useState('Launch vehicle')
  return (
    <MoonimageLayout image="image/technology/background-technology-desktop.jpg" mobile="image/technology/background-technology-mobile.jpg" >
        <div className="w-[80%] flex flex-col gap-9 md:gap-0 mx-auto mt-[20px] md:mt-0">
            <div className='flex text-xl gap-3'>
                <p>03</p>
                <h1>Space Launch 101</h1>
            </div>
            <div className="flex flex-col-reverse gap-8 md:gap-0 md:flex-row items-center justify-between">
                <div className='flex flex-col md:flex-row items-center justify-evenly gap-5'>
                    <div className='flex md:flex-col items-center gap-6'>
                        <p onClick={() => setNumber('Launch vehicle')} className={` ${ number === 'Launch vehicle' ? 'bg-white text-indigo-950' : 'bg-transparent text-white' } w-[60px] h-[60px] rounded-[100%] border border-white flex items-center justify-center `}>1</p>
                        <p onClick={() => setNumber('Spaceport')} className={` ${ number === 'Spaceport' ? 'bg-white text-indigo-950' :'bg-transparent text-white' } w-[60px] h-[60px] rounded-[100%] border border-white flex items-center justify-center `}>2</p>
                        <p onClick={() => setNumber('Space capsule')} className={` ${ number === 'Space capsule' ? 'bg-white text-indigo-950' :'bg-transparent text-white' } w-[60px] h-[60px] rounded-[100%] border border-white flex items-center justify-center `}>3</p>
                    </div>
                    {
                        technology.map((det: any) => {
                            return(
                                <>
                                    { number === det.name &&
                                        <div className="md:w-[70%]">
                                            <h4 className='text-xl md:text-4xl mb-1 text-center md:text-left'>The Terminology</h4>
                                            <p key={det.name} className='cursor-pointer mb-4 text-5xl md:text-7xl md:mb-7 text-center md:text-left'>{det.name}</p>
                                            <h2 className='md:w-[90%] leading-8 text-center md:text-left'>{det.description}</h2>
                                        </div>
                                    }
                                </>
                            )
                        })
                    }
                </div>
                {
                    technology?.map((det) => {
                        return(
                            <>{ det.name === number && <img className="w-full h-[350px] md:h-[450px] object-fit" src={det.images.portrait}/>}</>
                        )
                    })
                }
            </div>
        </div>
    </MoonimageLayout>
  )
}
