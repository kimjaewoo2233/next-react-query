import Link from "next/link";
import MaxWidthWrapper from "./ui/MaxWidthWrapper"
import { buttonVariants } from "./ui/button";


const Navbar = () => {

    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div>
                    <Link href="/"> 
                        case <span className="text-green-600">cobra</span>
                    </Link>

                    <div className="h-full flex items-center space-x-4">
                        <Link
                            href='/dashboard'
                            className={buttonVariants({
                                size: 'sm',
                                variant: 'ghost',
                            })}>
                            Dashboard ✨
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar;
