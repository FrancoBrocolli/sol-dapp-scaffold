import {FC} from "react";
import Text from "../Text";
import NavElement from "../nav-element";


export const Drawer: FC = () => {
    return(
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay gap-6"></label>

            <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 gap-10 sm:flex items-center">
                <li>
                    <Text variant="heading" className='font-extrabold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10'>Menu</Text>
                </li>
                <li>
                    <NavElement
                        label="Home"
                        href="/"
                    />
                </li>
                <li>
                    <NavElement
                        label="Basics"
                        href="/basics"
                    />
                </li>
                <li>
                    <NavElement
                        label="Create token"
                        href="/create-token"
                    />
                </li>
            </ul>
        </div>
    );
}
