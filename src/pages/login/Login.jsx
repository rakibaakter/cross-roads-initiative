import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useAuthHook from "../../hooks/useAuthHook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import loginImg from "../../assets/loginImg.jpg";
import SectionTitle from "../../components/SectionTitle";

const Login = () => {
  const [isShow, setIsShow] = useState(false);
  const { logInbyEmail, signInByGoogle } = useAuthHook();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    logInbyEmail(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("logged in successfully !", {
          position: toast.POSITION.BOTTOM_CENTER,
        });

        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  };

  const handleSignInByGoogle = () => {
    signInByGoogle();
    navigate(location?.state ? location.state : "/");
  };

  return (
    <div className="hero pt-10">
      <div className="hero-content flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card w-full md:w-1/2 md:shadow-2xl bg-base-100 -mt-16 md:mt-10 card-body ">
          <div>
            <SectionTitle
              title={"login"}
              subtitle={"Login Now"}
              highlight={"!"}
            />

            <button
              onClick={handleSignInByGoogle}
              className="my-8 w-full btn bg-gray-300 flex justify-center gap-2 capitalize text-red-600"
            >
              <span className="text-2xl">
                <FcGoogle />
              </span>
              <span>Continue With Google</span>
            </button>
            <div className="divider">Or continue with useremail</div>
            <form onSubmit={handleLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={isShow ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered "
                  required
                />
                <button
                  onClick={() => setIsShow(!isShow)}
                  className="absolute top-2/3 right-4"
                >
                  {isShow ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login Now"
                  className="btn bg-[#DF826C] text-white uppercase "
                />
              </div>
              <ToastContainer />
            </form>

            <p className="text-center my-4">
              {`Don't have any account?`}
              <Link to="/sign-up" className="text-blue-600">
                {" "}
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
