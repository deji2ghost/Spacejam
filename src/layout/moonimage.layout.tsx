import { Header } from "../common/Header"



type Prop =React.PropsWithChildren<{
    image?:string,
    mobile?:string
}>

const MoonimageLayout = ({children,image='image/home/background-home-desktop.jpg', mobile='image/home/background-home-mobile.jpg'}:Prop)=>{

    const divStyle = {
        backgroundImage:`url(${image})`,
    }
    return (
        <>
            <div className='w-full overflow-hidden h-screen hidden md:block'
            style={divStyle}
            >
                <Header />
                {children}
            </div>
            <div className='w-full overflow-hidden h-screen md:hidden bg-no-repeat bg-cover'
            style={{ backgroundImage: `url(${mobile})` }}
            >
                <Header />
                {children}
            </div>
        </>
    )
}

export default MoonimageLayout;