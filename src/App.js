import HeroImageSequence from "./Components/index";

import Fade from "react-reveal/Fade";

function App() {
  return (
    <div>
      <HeroImageSequence />
      <div
        style={{ top: "35%" }}
        className="absolute top-0 my-10 left-1/4 px-8 md:px-24 lg:px-40 xl:px-56 2xl:mx-24 animate-fade-in-down"
      >
        <h4 className="mb-3 text-3xl md:text-5xl font-semibold text-white">
          Davide Areias
        </h4>
        <p className="text-white text-lg md:text-xl ml-16 md:ml-24">
          Portfólio
        </p>
      </div>
      <h3 className="text-4xl text-center -translate-y-32 pl-1">Timeline</h3>
      <div class="flex items-center justify-center pb-72">
        <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-black">
          <div class="flex flex-row-reverse md:contents">
            <div class=" col-start-1 col-end-5 p-4 my-4 ml-auto">
              <Fade left>
                <p class="text-justify text-black animate-fade-in-right font-semibold">
                  Entrei na Universidade de Coimbra em Engenharia Informática
                </p>
              </Fade>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto">
              <div class="w-10 h-10 rounded-full bg-pink-500 mt-9">
                <h1 className="text-sm text-white pt-2.5 pl-1">2019</h1>
              </div>
              <div class="h-full flex items-center justify-center">
                <div class="h-full w-1 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 pointer-events-none pt-96 pb-96"></div>
              </div>
            </div>
          </div>
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="w-10 h-10 rounded-full bg-indigo-500 mt-9">
                <h1 className="text-sm text-white pt-2.5 pl-1">2020</h1>
              </div>
              <div class="h-full flex items-center justify-center">
                <div class="h-full w-1 bg-gradient-to-t from-pink-500 via-purple-500 to-indigo-500 pointer-events-none pt-96 pb-96"></div>
              </div>
            </div>
            <div class=" col-start-6 col-end-10 p-4 my-4 mr-auto">
              <Fade left>
                <h3 class="font-semibold text-lg mb-1 text-black">
                  Lorem ipsum
                </h3>
                <p class="leading-tight text-justify text-black">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae, facilis.
                </p>
              </Fade>
            </div>
          </div>
          <div class="flex flex-row-reverse md:contents">
            <div class="col-start-1 col-end-5 p-4 my-4 ml-auto">
              <Fade left>
                <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p class="leading-tight text-justify text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat?
                </p>
              </Fade>
            </div>
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="w-10 h-10 rounded-full bg-pink-500 mt-9">
                <h1 className="text-sm text-white pt-2.5 pl-1">2021</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center h-screen">
        <p className="text-black text-3xl md:text-5xl font-semibold">
          Projetos
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
          <div className="border rounded-lg group cursor-pointer overflow-hidden">
            <div className="flex justify-between p-5 bg-white">
              <div>
                <p className="text-lg font-bold">React Native</p>
                <p className="text-xs">texttttt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
