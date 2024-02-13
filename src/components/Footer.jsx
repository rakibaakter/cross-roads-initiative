import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <footer className="footer mt-16 py-16 bg-base-200 text-base-content px-4 md:px-12 lg:px-32 flex flex-wrap justify-between">
        <aside>
          <div className="">
            <h2 className="uppercase text-xs md:text-xl lg:text-2xl font-bold md:font-semibold">
              Cr
              <span className="text-red-600">o</span>
              ssRoads Initiative
            </h2>

            <div className="mt-4">
              <h2 className="mb-2 text-xl font-bold">Follow Us</h2>
              <div className="flex text-2xl gap-3 text-gray-600 ">
                <BsFacebook />
                <BsInstagram />
                <BsLinkedin />
                <BsYoutube />
              </div>
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact Us</h6>

          <ul>
            <li className="flex mt-1 items-center gap-3 ">
              <BiSolidPhoneCall />
              <h4>+88 01782-412227</h4>
            </li>
            <li className="flex mt-1 items-center gap-3 ">
              <HiOutlineMail />
              <h4>crossroads.orgcom@gmail.com</h4>
            </li>
            <li className="flex mt-1 items-center gap-3 ">
              <HiLocationMarker />
              <h4>Dhaka, Bangladesh</h4>
            </li>
          </ul>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item w-3/4"
              />
              <button className="btn bg-red-600 text-white join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className=" py-4 bg-gray-500 text-white font-semibold text-center">
        <span>Copyright © 2024 - All right reserved</span>
      </div>
    </>
  );
};

export default Footer;
