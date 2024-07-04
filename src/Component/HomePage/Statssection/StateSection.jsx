import { FaCheck, FaList, FaUsers } from "react-icons/fa";


const StateSection = () => {
    return (
        <div className="bg-[#f7f8fb] w-full h-[700px] mb-32">
            <div className="flex justify-around max-w-screen-xl mx-auto py-32">
                <div className="space-y-5">
                    <h4 className="text-[#696969]  text-[20px] font-normal">Let us show you some stats</h4>
                    <h1 className="text-[40px]">We have done great stuff over  <p className="-mt-6">the past few years.</p></h1>
                    <p className="text-[#696969] font-normal">There are many variations of passages of Lorem Ipsum available, but the majority have <br/> suffered alteration in some form, by injected .</p>
                </div>
                <div>
                    <img className="w-[200px]" src="https://megaone.acrothemes.com/design-agency/img/plant.png" alt="" />
                </div>
            </div>


            <div className="flex justify-center items-center gap-64">
                <div className="flex items-center gap-6">
                    <FaUsers className="text-[#9cc11a] text-[52px]" />
                  <div>
                        <p className="text-[36px] font-semibold">500 +</p>
                        <p className="font-normal">Happy Clients</p>
                  </div>

                </div>
                <div className="flex items-center gap-6">
                    <FaList className="text-[#0596a1] text-[42px]" />
                  <div>
                        <p className="text-[36px] font-semibold">500 +</p>
                        <p className="font-normal">Happy Clients</p>
                  </div>

                </div>
                <div className="flex items-center gap-6">
                    <FaCheck className="text-[#dabf07] text-[42px]" />
                  <div>
                        <p className="text-[36px] font-semibold">500 +</p>
                        <p className="font-normal">Happy Clients</p>
                  </div>

                </div>
            </div>
        </div>
    );
};

export default StateSection;