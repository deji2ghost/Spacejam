import React from 'react'
import { Header } from '../common/Header'
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  console.log(isDesktop)
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  console.log(isTablet)
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  console.log(Mobile)
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}


export const Dextopimage = ({ children }) => {
  return (
    // <div className='w-full h-screen'>
    //     <Header />
    //     { children }
    // </div>
    <div className='bg-gray-700'>
      <Desktop>Desktop or laptop</Desktop>
      <Tablet>Tablet</Tablet>
      <Mobile>Mobile</Mobile>
      <Default>Not mobile (desktop or laptop or tablet)</Default>
    </div>
  )
}
