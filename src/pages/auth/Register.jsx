import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div className="h-[90vh] w-full flex justify-center items-center">
            <form
                action=""
                className="flex-col justify-center items-center p-4 "
            >
                <h2 className="flex justify-center items-cente text-2xl text-blue-500">
                    Register
                </h2>

                <div className="">Email</div>

                <input
                    type="text"
                    placeholder="email"
                    className="border-2 rounded-md border-blue-100 w-full"
                />
                <br />

                <div>Password</div>
                <input
                    type="password"
                    placeholder="password"
                    className="border-2 rounded-md border-blue-100 w-full"
                />
                <button className="bg-green-300 text-black rounded-md px-2 my-2">
                    Register
                </button>
                <div>
                    Already have an account?{" "}
                    <Link to="/login">
                        <span className="underline text-red-300">Login</span>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
