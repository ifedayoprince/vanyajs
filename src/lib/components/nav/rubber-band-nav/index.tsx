// import gsap from 'gsap'
import { Menu } from 'iconsax-react'

const RubberBandNav = () => {
  return (
    <nav className="p-2 w-screen bg-black h-max flex justify-between items-center gap-2">
      <div className="logo bg-orange-200 aspect-square rounded-xl w-14 h-14"></div>
      <div className="right-panel flex rounded-xl h-14 items-center p-2 pl-3 gap-2 bg-orange-200">
        <button title="Menu trigger" className="peer hover:opacity-0">
          <Menu color="#FF8A65" size={'16'} variant="Bold" />
        </button>
        <div className="links flex gap-3 px-2 overflow-hidden opacity-0 w-0 hover:opacity-100 transition-all hover:w-max peer-hover:opacity-100 peer-hover:w-max">
          <a href="#" data-active className="text-orange-400 font-medium">
            Link 1
          </a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
        </div>
        <button className="bg-orange-500 transition-colors hover:bg-orange-400 active:bg-orange-500 rounded-md px-4 text-sm flex h-full items-center justify-center">
          Call to Action
        </button>
      </div>
    </nav>
  )
}

export default RubberBandNav
