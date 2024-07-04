import { FiPlayCircle } from "react-icons/fi";


const Banner = () => {
    return (
        <div>
            <div className="flex">
                <div className="bg-[#0596a1] lg:h-[780px] w-[50%]">
                   <div className="flex justify-center items-center animate-pulse ">
                        <img src="https://megaone.acrothemes.com/design-agency/img/slider-object1.png" alt="" />
                   </div>
                   <div className="mt-28">
                        <h4 className="text-white text-[60px] text-center" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: '550' }}>Design.
                           <br/> <p className="-mt-6">Revolution</p>
                        </h4>
                        <div className="flex absolute  top-[200px] left-36 justify-center items-center h-[270px] w-[270px] border-4 opacity-35  border-[#a0eaef]">
                        </div>
                        <div className="flex items-center gap-3 justify-center mt-24">
                            <a href="/"><FiPlayCircle className="text-3xl text-white opacity-85 hover:text-black" /></a>
                            <a href="/" className="text-white text-[16px] opacity-85"> Play Video</a>

                        </div>
                   </div>

                  <div className="flex justify-between items-center py-[100px] px-5">
                        <a href="/"><img className="w-[60px] mt-12" src="https://i.ibb.co/BVGF7hx/image.png" alt="" /></a>
                        <img className="animate-pulse" src="https://megaone.acrothemes.com/design-agency/img/slider-object2.png" alt="" />
                  </div>
                </div>
                    <div className="w-[50%] ">
                    <div className="bg-[#dabf07] lg:h-[390px] w-full">
                        <div className="flex items-center px-8 ">

                            <div className="">
                                <img className="w-[560px] pt- " src="https://megaone.acrothemes.com/design-agency/img/slider-object3.png" alt="" />
                            </div>
                            <div className="text-end text-white space-y-2">
                                <h1 className="text-[24px] font-normal -mb-4 opacity-75">Simple & Easy</h1>
                                <h1 className="text-[42px] ">Digital Marketing</h1>
                                <p className="text-[15px]  font-normal opacity-75">Lorem ipsum is simply dummy text of the printing and typesetting. Lorem  Ipsum has been the industry’s standard dummy.</p>
                           <div className="pt-5">
                                    <button className="border  px-6 hover:bg-white bg-transparent ease-in-out duration-500 hover:text-[#dad08d] font-normal py-2 rounded-full text-white">Get Started Now</button>

                           </div>
                            </div>

                         </div>
                        </div>



                    <div className="bg-[#9cc11a] lg:h-[390px] w-full">
                          <div className="flex items-center justify-center  py-16 px-6 max-w-screen-xl mx-auto">

                            <div className="text-start text-white space-y-2 ml-2 ">
                                <h1 className="text-[24px] font-normal -mb-4 opacity-75">Simple & Easy</h1>
                                <h1 className="text-[42px] ">Creative Websites</h1>
                                <p className="text-[15px]  font-normal opacity-75">Lorem ipsum is simply dummy text of the printing and typesetting. Lorem  Ipsum has been the industry’s standard dummy.</p>
                                <div className="pt-5">
                                    <button className="border  px-6 hover:bg-white bg-transparent ease-in-out duration-500 hover:text-[#dad08d] font-normal py-2 rounded-full text-white">Get Started Now</button>

                                </div>
                            </div>

                            <div className="mt-12">
                                <img className="w-[800px] " src="https://megaone.acrothemes.com/design-agency/img/slider-object4.png" alt="" />
                            </div>

                          </div>
                          
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Banner;