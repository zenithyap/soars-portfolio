import { RxLinkedinLogo, RxInstagramLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
    return (
        <div className="flex justify-center items-center lg:gap-40 gap-20 h-24 text-2xl mt-[10%]">
            <a href="mailto:ngsoarz@gmail.com">
                <HiOutlineMail />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ng-soar-z/">
                <RxLinkedinLogo />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/so.art.z/profilecard/?igsh=aW5vdWtjcGl2b3E2">
                <RxInstagramLogo />
            </a>
        </div>
    );
};