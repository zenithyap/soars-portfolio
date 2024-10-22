import Dropdown from "./Dropdown";

export default function NavigationBar() {
    return (
        <div className="flex flex-row justify-center fixed z-10 w-[100%] select-none font-semibold bg-white">
            <div className="flex gap-10 p-3">
                <a href="/" className="p-2 hover: cursor-pointer ">
                    Home
                </a>
                <a href="/education" className="p-2 hover: cursor-pointer">
                    Education
                </a>
                <Dropdown/>

            </div>
        </div>
    );
};
