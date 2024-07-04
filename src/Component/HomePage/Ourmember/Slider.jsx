import { FaDribbble, FaFacebookF, FaTwitter } from "react-icons/fa";

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full  mt-32 mb-32">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='flex justify-center items-center gap-20 mx-auto'>
                     <div className="flex flex-col relative justify-center items-center">
                            <img
                                src="https://i.ibb.co/12dD8dJ/team1.png"
                                alt="Team 1"
                                className="" />
                            <a href="/" className="mt-8"> <img src="https://megaone.acrothemes.com/design-agency/img/team-bg1.png" alt="" /></a>
                           
                                <p className="text-xl absolute top-[340px] text-white">Alex Stoke </p>
                           
                            <p className="font-normal py-1">Director</p>
                            <div className="flex justify-center items-center gap-5 mt-3">
                                <a href="/"> <FaFacebookF /></a>
                                <a href="/"><FaTwitter /></a>
                                <a href="/"><FaDribbble /></a>

                            </div>
                     </div>
                        <div className="flex flex-col justify-center items-center relative">
                            <img
                                src="https://megaone.acrothemes.com/design-agency/img/team2.png"
                                alt="Team 2"
                                className="" />
                            <a href="/" className="mt-8"><img src="https://megaone.acrothemes.com/design-agency/img/team-bg2.png" alt="" /></a>
                            <p className="font-normal py-1">Manager</p>
                            <p className="text-xl absolute top-[340px] text-white">Lisa Waren </p>

                            <div className="flex justify-center items-center gap-5 mt-3">
                                <a href="/"> <FaFacebookF /></a>
                                <a href="/"><FaTwitter /></a>
                                <a href="/"><FaDribbble /></a>

                            </div>
                       </div>
                        <div className="flex flex-col justify-center items-center relative">
                            <img
                                src=" https://megaone.acrothemes.com/design-agency/img/team3.png"
                                alt="Team 3"
                                className="" />
                            <a href="/" className="mt-8"><img src=
                            "https://megaone.acrothemes.com/design-agency/img/team-bg3.png" alt="" /></a>
                            <p className="text-xl absolute top-[340px] text-white">Lisa Waren</p>
                            <p className="font-normal py-1">Designer</p>
                            <div className="flex justify-center items-center gap-5 mt-3">
                                <a href="/"> <FaFacebookF /></a>
                                <a href="/"><FaTwitter /></a>
                                <a href="/"><FaDribbble /></a>

                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex transform justify-evenly gap-[900px] items-center">
                        <a href="#slide2" className="text-xl text-gray-400 ">❮</a>
                        <a href="#slide2" className="text-xl text-gray-400  ">❯</a>
                    </div>
                </div>


                <div id="slide2" className="carousel-item relative w-full">
                    <div className='flex justify-center items-center gap-20 mx-auto'>
                        <div className="flex flex-col relative justify-center items-center">
                            <img
                                src="https://megaone.acrothemes.com/design-agency/img/team3.png"
                                alt="Team 1"
                                className="" />
                            <a href="/" className="mt-8"> <img src="https://megaone.acrothemes.com/design-agency/img/team-bg1.png" alt="" /></a>

                            <p className="text-xl absolute top-[340px] text-white">Alex Stoke </p>

                            <p className="font-normal py-1">Director</p>
                            <div className="flex justify-center items-center gap-5 mt-3">
                                <a href="/"> <FaFacebookF /></a>
                                <a href="/"><FaTwitter /></a>
                                <a href="/"><FaDribbble /></a>

                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center relative">
                            <img
                                src="https://megaone.acrothemes.com/design-agency/img/team1.png"
                                alt="Team 2"
                                className="" />
                            <a href="/" className="mt-8"><img src="https://megaone.acrothemes.com/design-agency/img/team-bg2.png" alt="" /></a>
                            <p className="font-normal py-1">Manager</p>
                            <p className="text-xl absolute top-[340px] text-white">Lisa Waren </p>

                            <div className="flex justify-center items-center gap-5 mt-3">
                                <a href="/"> <FaFacebookF /></a>
                                <a href="/"><FaTwitter /></a>
                                <a href="/"><FaDribbble /></a>

                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center relative">
                            <img
                                src="https://megaone.acrothemes.com/design-agency/img/team2.png"
                                alt="Team 3"
                                className="" />
                            <a href="/" className="mt-8"><img src="https://megaone.acrothemes.com/design-agency/img/team-bg3.png" alt="" /></a>
                            <p className="text-xl absolute top-[340px] text-white">Lisa Waren</p>
                            <p className="font-normal py-1">Designer</p>
                            <div className="flex justify-center items-center gap-5 mt-3">
                                <a href="/"> <FaFacebookF /></a>
                                <a href="/"><FaTwitter /></a>
                                <a href="/"><FaDribbble /></a>

                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex transform justify-evenly gap-[900px] items-center">
                        <a href="#slide1" className="text-xl text-gray-400">❮</a>
                        <a href="#slide1" className="text-xl text-gray-400">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
