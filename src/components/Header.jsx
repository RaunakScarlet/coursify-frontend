import { NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="flex items-center justify-between p-3">
            <div className="text-xl md:text-3xl text-blue-500 font-bold">
                Coursify
            </div>

            <div className="flex gap-2 sm:gap-4 md:gap-6 text-md md:md:text-xl items-center justify-center">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 font-bold"
                            : "text-gray-500 font-bold "
                    }
                >
                    Home{" "}
                </NavLink>

                <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 font-bold"
                            : "text-gray-500 font-bold"
                    }
                >
                    Courses{" "}
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 font-bold"
                            : "text-gray-500 font-bold"
                    }
                >
                    About
                </NavLink>

                <NavLink
                    to="/account"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-500 font-bold"
                            : "text-gray-500 font-bold"
                    }
                >
                    Account
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
