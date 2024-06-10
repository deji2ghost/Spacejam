import { Header } from "../common/Header"
import MoonimageLayout from "../layout/moonimage.layout"


export const Home = () => {
  return (
    <MoonimageLayout>
      <div className="flex flex-col gap-24 mt-[100px] justify-between mx-auto md:gap-0 md:flex-row md:mt-[200px] w-[80%]">
        <div className="md:w-[38%] flex flex-col gap-1">
          <h2 className="text-[22px] text-center md:text-left">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="text-8xl text-center md:text-left md:text-9xl tracking-[11px]">SPACE</h1>
          <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover on the kind of on the edge of it. Well sit back, and relax because we'll give you a truly </p>
        </div>
        <h1 className="bg-[#fff] shadow-2xl text-[#2F2F2F] mx-auto w-[88%] h-[f] text-center p-5 flex items-center justify-center rounded-[100%] md:mx-0 md:w-[25%] md:h-[280px] text-[25px]">EXPLORE</h1>
      </div>
    </MoonimageLayout>
  )
}
