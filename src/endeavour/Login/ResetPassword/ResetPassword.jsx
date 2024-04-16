import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import img from "../../../assets/ForgetPassword/wallpaper.jpg";
import img1 from "../../../assets/Login/reset pass.jpeg";
function ResetPassword() {
  const history = useNavigate();
  const { id, token } = useParams();
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(0);
  const [rePassVisibility, setRePassVisibility] = useState(0);
  const [disable, setDisable] = useState(0);

  const submit = async (e) => {
    e.preventDefault();
    setDisable(1);
    if (password !== repass) {
      setDisable(0);
      return toast.warn("Password Does not match", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
    try {
      await axios
        .post(
          `https://e-cell2024backend-production.up.railway.app/reset-password`,
          {
            password,
            id,
            token,
          }
        )
        .then((res) => {
          if (res.data == "Successfully Changed the password") {
            toast.success("Successfully Changed the password", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
            history("/endeavour/login");
          } else if (res.data == "Don't use same password :]") {
            toast.warn("Don't use same password again :]", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
          }
        })
        .catch(() => {
          toast.error("Internal Server Error", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        });
    } catch (error) {
      toast.error("Internal Server Error", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
    setDisable(0);
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="flex flex-row w-full h-[100vh]">
      <div className="pt-[13vh] pb-8 bg-white text-black w-full md:w-1/2 flex flex-col justify-center items-center ">
        <h1 className="text-4xl text-black font-semibold tracking-wider">
          Reset Password
        </h1>
        <form
          className="flex flex-col w-full justify-center items-center mt-4"
          onSubmit={submit}
        >
          <div className="flex flex-col w-[75%] md:w-[60%] mt-3">
            <label
              className="font-medium text-gray-600 ml-2 "
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex border-2 border-[#a5a5a57e]  rounded-lg">
              <input
                className=" bg-transparent  p-2 w-full border-r-0 focus:outline-none font-medium"
                type={passwordVisibility ? "text" : "password"}
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}"
                title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 and at most 15 characters"
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPasswordVisibility(!passwordVisibility);
                }}
                className="bg-transparent focus:border-0  h-auto w-[4rem] font-semibold text-[#6a6a6a] z-10"
              >
                {passwordVisibility ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="flex flex-col w-[75%] md:w-[60%] mt-3">
            <label
              className="font-medium text-gray-600 ml-2 "
              htmlFor="repassword"
            >
              Confirm-Password
            </label>
            <div className="flex border-2 border-[#a5a5a57e]  rounded-lg">
              <input
                className=" bg-transparent  p-2 w-full border-r-0 focus:outline-none font-medium"
                type={rePassVisibility ? "text" : "password"}
                name="repassword"
                id="repassword"
                onChange={(e) => {
                  setRepass(e.target.value);
                }}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}"
                title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 and at most 15 characters"
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setRePassVisibility(!rePassVisibility);
                }}
                className="bg-transparent focus:border-0  h-auto w-[4rem] font-semibold text-[#6a6a6a] z-10"
              >
                {rePassVisibility ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-[75%] md:w-[60%] bg-black disabled:bg-slate-600 disabled:cursor-wait text-white rounded-full py-2 mt-8 z-10"
            disabled={disable}
          >
            Submit
          </button>
        </form>

        {/* <div className="flex flex-col justify-center w-full items-center">
          <Link to="/endeavour/register">
            <button className="bg-white text-black px-3 py-2 h-auto w-[12rem] hover:bg-black hover:text-white rounded-full">
              Register
            </button>
          </Link>
          <Link to="/endeavour/login">
            <button className="bg-white text-black px-3 py-2 h-auto w-[12rem] hover:bg-black hover:text-white rounded-full">
              Login
            </button>
          </Link>
        </div> */}
      </div>
      <div className="hidden md:flex w-1/2">
        <img
          src={img1}
          className="h-full w-full"
          alt=""
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default ResetPassword;
