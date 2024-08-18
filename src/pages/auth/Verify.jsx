import { Link } from "react-router-dom";
const Verify = () => {
    return (
        <div className="h-[90vh] w-full flex justify-center items-center">
            <form
                action=""
                className="flex-col justify-center items-center p-4 "
            >
                <h2 className="flex justify-center items-cente text-2xl text-blue-500">
                    Verify
                </h2>

                <div className="">OTP</div>

                <input
                    type="number"
                    placeholder="otp"
                    className="border-2 rounded-md border-blue-100 w-full"
                />
                <br />

                
                <button className="bg-green-300 text-black rounded-md px-2 my-2">
                    Verify
                </button>
                <div>
                    Go to {" "}
                    <Link to="/login">
                        <span className="underline text-red-300">Login</span>
                    </Link> page
                </div>
            </form>
        </div>
    );
};

export default Verify;
