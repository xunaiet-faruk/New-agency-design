import { GoHeart } from "react-icons/go";
import { IoBulbOutline } from "react-icons/io5";
import { PiBriefcaseThin } from "react-icons/pi";


const FeatureSection = () => {
    return (
        <div className="mb-12">
            <div className="text-center space-y-7 mt-32">
                <h1 className="text-4xl">We are Digital Agency</h1>
                <p className="text-[14px] opacity-70 font-normal">Lorem ipsum is simply dummy text of the printing and typesetting.<br/> Lorem Ipsum has been the industry’s standard dummy.</p>
            </div>

            <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto mt-32">
                <div className="bg-white relative shadow-gray-200 border-t border-gray-100 shadow-xl rounded-xl   h-[180px] w-[380px]   text-center flex flex-col justify-center items-center">
                    <IoBulbOutline className="text-8xl absolute bottom-32 text-[#dabf07]"/>
                    <p className="text-[22px] font-normal">We have some creative <br/> ideas for you.</p>
                </div>
                <div className="bg-white relative shadow-gray-200 border-t border-gray-100 shadow-xl rounded-xl w-[380px]   h-[180px]   text-center flex flex-col justify-center items-center">
                    <PiBriefcaseThin className="text-8xl absolute bottom-32 text-[#dabf07]" />
                    <p className="text-[22px] font-normal">We have some creative <br /> ideas for you.</p>
                </div>

                <div className="bg-white relative shadow-gray-200 border-t border-gray-100 shadow-xl rounded-xl w-[380px]   h-[180px]   text-center flex flex-col justify-center items-center">
                    <GoHeart className="text-8xl absolute bottom-32 text-[#9cc11a]" />
                    <p className="text-[22px] font-normal">We have some creative <br /> ideas for you.</p>
                </div>
              
                
            </div>

            <div className="flex justify-center items-center py-28">
                <button className="bg-[#0596a1] px-9 py-3 rounded-full text-white hover:bg-[#dabf07] scroll-smooth transition-colors duration-500">Start Your Project</button>
            </div>
            
        </div>
    );
};

export default FeatureSection;