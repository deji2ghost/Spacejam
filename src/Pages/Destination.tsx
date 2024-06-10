import React, { useEffect, useState } from 'react'
import { Moon } from '../components/Moon'
import MoonimageLayout from '../layout/moonimage.layout'

export const Destination = ({ destinations }: any) => {
    const [ slide, setSlide ] = useState('Moon') 
    console.log(destinations)

  return (
    <MoonimageLayout image='image/destination/background-destination-desktop.jpg' mobile='image/destination/background-destination-mobile.jpg'>
        <div className="w-[80%] flex flex-col gap-6 md:gap-10 mx-auto mt-[50px] md:mt-0">
            <div className='flex text-xl gap-3'>
                <p>01</p>
                <h1>Pick Your Destination</h1>
            </div>
            <div className='flex flex-col md:flex-row gap-8 items-start justify-between md:gap-52'>
                {
                    destinations?.map((det: any) => {
                        return(
                            <>{det.name === slide && <img key={det.name} className='cursor-pointer' src={det?.images?.webp} />}</>
                        )
                    })
                }
                <div className='flex flex-col gap-2 md:gap-5'>
                    <div className='flex items-center gap-5 text-center justify-center md:justify-normal'>
                        {
                            destinations?.map((det: any) => {
                                return(
                                    <p key={det.name} className={` ${ slide === det.name && 'md:border-b-2 md:border-b-white' } cursor-pointer`} onClick={() => setSlide(det?.name)}>{det?.name}</p>
                                )
                            })
                        }
                    </div>
                    <div className='flex flex-col md:gap-2'>
                        { slide === 'Moon' ? <Moon destinations={destinations[0]?.name} description={destinations[0]?.description} /> : null}
                        { slide === 'Mars' ? <Moon destinations={destinations[1]?.name} description={destinations[1]?.description} /> : null}
                        { slide === 'Europa' ? <Moon destinations={destinations[2]?.name} description={destinations[2]?.description} /> : null}
                        { slide === 'Titan' ? <Moon destinations={destinations[3]?.name} description={destinations[3]?.description} /> : null}
                        {destinations.map(dest => {
                            console.log(dest)
                            return(
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <p>{ slide === dest.name ? 'AVG Distance' : null}</p>
                                        <h1>{ slide === dest.name ? dest.distance : null}</h1>
                                    </div>
                                    <div>
                                        <p>{ slide === dest.name ? 'EST TRAVEL TIME' : null}</p>
                                        <h1>{ slide === dest.name ? dest.travel : null}</h1>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </MoonimageLayout>
  )
}
