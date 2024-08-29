import { Link } from "react-router-dom";
import BigButton from "../Button/BigButton";

const VerifyMailModal = ({setResendMail}) => {
    return ( 
        <div className="modal z-20 flex flex-col py-[40px] px-[20px] gap-5 bg-white rounded-3xl w-[300px] h-[324px]">
            <h3 className="text-2xl text-center leading-7 font-bold">Didn't receive mail?</h3>

            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <h5 className="font-medium text-base leading-[22.4px] text-[#111111]">Your email address</h5>
                    <div className="h-9 flex gap-2 rounded-lg border border-[#bcbcbc] px-2">
                        <input placeholder="example@gmail.com" type="text" className="outline-none border-none text-base leading-5" />
                    </div>

                    <div className="flex flex-col gap-4">
                        <BigButton className="w-[250px]" text="Save changes" />
                        <Link onClick={() => setResendMail(false)} className="text-black self-center " >Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default VerifyMailModal;