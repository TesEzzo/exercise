// import React from "react";
// import { MapContainer, TileLayer } from "react-leaflet";
import logo from "./assets/logo_def.png";
import arrow from "./assets/down-arrow.png";

const App = () => {
  // const position = [8.1386, 5.1026]; // [latitude, longitude]
  // const zoomLevel = 13;

  return (
    // <MapContainer
    //     center={position}
    //     zoom={zoomLevel}
    //     scrollWheelZoom={false}
    // >
    //   <TileLayer
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    //   />
    // </MapContainer>
    <>
      <div className="m-10">
        <div className="mb-20">
          <p className="w-max text-2xl mb-10">
            LOGO <hr />
          </p>
          <img src={logo} alt="" className="h-64" />
        </div>
        <div className="w-2/4 mb-20">
          <p className="w-max text-2xl mb-10">
            BRAND COLORS <hr />
          </p>
          <div className="flex flex-row gap-6">
            <div>
              <div className="bg-[#bdbdbd] h-16 w-32"></div>
              <p>Color primary</p>
            </div>
            <div>
              <div className="bg-[#17202A] h-16 w-32"></div>
              <p>Color secondary</p>
            </div>
            <div>
              <div className="bg-[#313131] h-16 w-32"></div>
              <p>Contrast</p>
            </div>
            <div>
              <div className="bg-[#ffc300] h-16 w-32"></div>
              <p>Bottoni/hover</p>
            </div>
          </div>
        </div>
        <div className="w-2/4 mb-20">
          <p className="w-max text-2xl mb-10">
            STYLE BUTTON <hr />
          </p>
          <div className="flex flex-row items-center gap-6">
            <div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                      font-medium rounded-lg text-sm px-10 py-2.5 mb-2 focus:outline-none w-fit"
              >
                button
              </button>
              <p>Login button</p>
            </div>
            <div>
              <button className="text-black w-max text-center hover:shadow-black bg-[#ffc300] rounded-full p-5 px-10 font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300">
                button
              </button>
              <p>General button</p>
            </div>
            <div>
              <button className="flex flex-row bg-[#ffc300] p-4 w-max items-center justify-center w-full rounded-md transition ease-in-out delay-100 active:scale-100 hover:bg-c_button hover:scale-[0.9] hover:shadow-md duration-300 hover:text-black group/item">
                <p className="pl-2">button</p>
              </button>
              <p>Sidebar button</p>
            </div>
            <div>
              <button
                onClick={() => scrollToSection("reg")}
                className="text-2xl top-96 text-black hover:shadow-black bg-[#ffc300] rounded-full p-5 font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300"
              >
                <img src={arrow} alt="" className="h-6 w-6" />
              </button>
              <p>Rounded button</p>
            </div>
          </div>
        </div>
        <div className="w-2/4 mb-20">
          <p className="w-max text-2xl mb-10">
            TYPOGRAPHY <hr />
          </p>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-anton text-9xl">Header</h1>
              <hr />
            </div>
            <div>
              <h2 className="text-4xl">Sub header</h2>
              <hr />
            </div>
            <div>
              <h3 id="info" className="text-4xl font-semibold">
                Title
              </h3>
              <hr />
            </div>
            <div>
              <h4 className="text-3xl">Sub title</h4>
              <hr />
            </div>
            <div>
            <p>
                Text
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
