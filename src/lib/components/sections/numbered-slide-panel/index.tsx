import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export const OldNumberedSlidePanel = () => {
  return (
    <div className="vanya-element numbered-slide-panel w-full h-screen flex p-8 justify-stretch bg-gray-200 gap-4">
      <label
        htmlFor="c1"
        className="slide cursor-pointer p-5 w-full flex flex-col justify-between items-start bg-black rounded-[2rem] min-w-[5rem] h-full text-white"
      >
        <input type="radio" name="slide" id="c1 group" />
        {/* <div></div> */}
        <footer className="flex gap-4">
          <p className="num aspect-square w-12 bg-gray-900 text-gray-400 flex items-center justify-center rounded-full">
            1
          </p>
          <div className="hidden group-checked:grid grid-rows-2">
            <h3 className="font-bold text-white">NEW TECHNOLOGIES</h3>
            <p className="text-sm text-gray-400">Space engineering becomes more and more advanced.</p>
          </div>
        </footer>
      </label>
      <div className="slide cursor-pointer group p-4 flex flex-col justify-between items-start bg-black rounded-[2rem] min-w-[5rem] h-full text-white">
        <div></div>
        <footer className="flex gap-4">
          <p className="num aspect-square w-12 bg-gray-900 text-gray-400 flex items-center justify-center rounded-full">
            2
          </p>
          <div className="hidden group-[.slide-active]:grid grid-rows-2">
            <h3 className="font-bold text-white">NEW TECHNOLOGIES</h3>
            <p className="text-sm text-gray-400">Space engineering becomes more and more advanced.</p>
          </div>
        </footer>
      </div>
      <div className="slide cursor-pointer group p-4 flex flex-col justify-between items-start bg-black rounded-[2rem] min-w-[5rem] h-full text-white">
        <div></div>
        <footer className="flex gap-4">
          <p className="num aspect-square w-12 bg-gray-900 text-gray-400 flex items-center justify-center rounded-full">
            3
          </p>
          <div className="hidden group-[.slide-active]:grid grid-rows-2">
            <h3 className="font-bold text-white">NEW TECHNOLOGIES</h3>
            <p className="text-sm text-gray-400">Space engineering becomes more and more advanced.</p>
          </div>
        </footer>
      </div>
      <div className="slide cursor-pointer group p-4 flex flex-col justify-between items-start bg-black rounded-[2rem] min-w-[5rem] h-full text-white">
        <div></div>
        <footer className="flex gap-4">
          <p className="num aspect-square w-12 bg-gray-900 text-gray-400 flex items-center justify-center rounded-full">
            4
          </p>
          <div className="hidden group-[.slide-active]:grid grid-rows-2">
            <h3 className="font-bold text-white">NEW TECHNOLOGIES</h3>
            <p className="text-sm text-gray-400">Space engineering becomes more and more advanced.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export const NumberedSlidePanel = () => {
  const wrapper = useRef(null)

  function animateComponents() {
    let el = wrapper.current as unknown as HTMLDivElement
    gsap.fromTo(
      el.querySelectorAll("input[name='slide']:checked ~ label .description *"),
      { y: '100%', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 0.4,
      },
    )
  }

  return (
    <div className="vanya-wrapper container bg-gray-200 flex gap-4 text-white w-full h-screen" ref={wrapper}>
      <input type="radio" name="slide" className="hidden peer/radio" id="c1" onClick={animateComponents} />
      <label
        htmlFor="c1"
        className="min-w-[6rem] group peer-[#c1:checked]/radio:w-full flex flex-col justify-between p-6 w-[6rem] bg-black rounded-3xl h-full [transition:.6s_cubic-bezier(.28,-0.03,0,.99)] overflow-hidden"
      >
        <div></div>
        <div className="flex items-end gap-6">
          <div className="bg-gray-900 text-gray-400 aspect-square flex items-center justify-center w-12 h-12 rounded-full">
            1
          </div>
          <div className="description opacity-0 translate-y-full overflow-hidden min-w-max">
            <h3 className="m-0 p-0 text-xl min-w-max text-white font-bold">Winter</h3>
            <p className="text-gray-300 min-w-max">Winter has so mych to offer creative activities</p>
          </div>
        </div>
      </label>
      <input type="radio" name="slide" className="hidden peer/radio" id="c2" onClick={animateComponents} />
      <label
        htmlFor="c2"
        className="min-w-[6rem] group peer-[#c2:checked]/radio:w-full flex flex-col justify-between p-6 w-[6rem] bg-black rounded-3xl h-full [transition:.6s_cubic-bezier(.28,-0.03,0,.99)] overflow-hidden"
      >
        <div></div>
        <div className="flex items-end gap-6">
          <div className="bg-gray-900 text-gray-400 aspect-square flex items-center justify-center w-12 h-12 rounded-full">
            2
          </div>
          <div className="description opacity-0 translate-y-full overflow-hidden min-w-max">
            <h3 className="m-0 p-0 text-xl min-w-max text-white font-bold">Winter</h3>
            <p className="text-gray-300 min-w-max">Winter has so mych to offer creative activities</p>
          </div>
        </div>
      </label>
      <input type="radio" name="slide" className="hidden peer/radio" id="c3" onClick={animateComponents} />
      <label
        htmlFor="c3"
        className="min-w-[6rem] group peer-[#c3:checked]/radio:w-full flex flex-col justify-between p-6 w-[6rem] bg-black rounded-3xl h-full [transition:.6s_cubic-bezier(.28,-0.03,0,.99)] overflow-hidden"
      >
        <div></div>
        <div className="flex items-end gap-6">
          <div className="bg-gray-900 text-gray-400 aspect-square flex items-center justify-center w-12 h-12 rounded-full">
            3
          </div>
          <div className="description opacity-0 translate-y-full overflow-hidden min-w-max">
            <h3 className="m-0 p-0 text-xl min-w-max text-white font-bold">Winter</h3>
            <p className="text-gray-300 min-w-max">Winter has so mych to offer creative activities</p>
          </div>
        </div>
      </label>
      <input
        type="radio"
        name="slide"
        className="hidden peer/radio"
        id="c4"
        onClick={animateComponents}
        defaultChecked
      />
      <label
        htmlFor="c4"
        className="min-w-[6rem] group peer-[#c4:checked]/radio:w-full flex flex-col justify-between p-6 w-[6rem] bg-black rounded-3xl h-full [transition:.6s_cubic-bezier(.28,-0.03,0,.99)] overflow-hidden"
      >
        <div></div>
        <div className="flex items-end gap-6">
          <div className="bg-gray-900 text-gray-400 aspect-square flex items-center justify-center w-12 h-12 rounded-full">
            4
          </div>
          <div className="description opacity-0 translate-y-full overflow-hidden min-w-max">
            <h3 className="m-0 p-0 text-xl min-w-max text-white font-bold">Winter</h3>
            <p className="text-gray-300 min-w-max">Winter has so mych to offer creative activities</p>
          </div>
        </div>
      </label>
    </div>
  )
}
