import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/logo.png"
import  Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between"
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("min-width: 1069px")


    return <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                {/* Left Side */}
                <div className={`${flexBetween} w-full gap-16`}>
                    <img src={Logo} alt="logo" />
                </div>

                {/* Right Side */}
                {isAboveMediumScreens ?
                    (<div className={`${flexBetween} w-full `}>
                        {/* Inner Left side (Links)*/}
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link 
                            page="Benefits" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link 
                            page="OurClasses"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} 
                            />
                            <Link 
                            page="Contact us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage} 
                            />
                        </div>
                        {/* Inner right Side (Signin/Become a member) */} 
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <button>Become a Member</button>
                        </div>
                    </div>) : (
                        <button 
                            className="rounded-full bg-secondary-500 p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                    )}
            </div>

        </div>
    </nav>
}

export default Navbar

function useMediaQuerySelect() {
    throw new Error("Function not implemented.")
}
