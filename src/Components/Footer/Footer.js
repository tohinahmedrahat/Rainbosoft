import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer text-center">
        <div className="md:w-[90%] mx-auto py-10 pt-28">
          <div className="md:grid grid-cols-4 relative text-white">
            <div>
              <h4 className="text-lg font-medium mb-2">USE CASES</h4>
              <Link className="hover:text-green-400">Web-development</Link>
              <br />
              <Link className="hover:text-green-400">Small Business</Link>
              <br />
              <Link className="hover:text-green-400">E-commerce</Link>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">RESOURCES</h4>
              <Link className="hover:text-green-400">Themes</Link>
              <br />
              <Link className="hover:text-green-400">Developer</Link>
              <br />
              <Link className="hover:text-green-400">Hosting</Link>
              <br />
              <Link className="hover:text-green-400">Support</Link>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">PRODUCT</h4>
              <Link className="hover:text-green-400">Landing Page</Link>
              <br />
              <Link className="hover:text-green-400">Popup Builder</Link>
              <br />
              <Link className="hover:text-green-400">Web-design</Link>
              <br />
              <Link className="hover:text-green-400">Content</Link>
              <br />
              <Link className="hover:text-green-400">Integrations</Link>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">CONTACT US</h4>
              <Link className="hover:text-green-400">
                Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
              </Link>
              <br />
              <Link className="hover:text-green-400">support@figma.com</Link>
              <br />
              <Link className="hover:text-green-400">+8801317713199</Link>
            </div>
          </div>
          <div className="mt-28 flex text-white relative flex-col md:flex-row md:justify-between items-center text-sm">
            <Link
              to="/home"
              className="order-2 md:order-1 mt-8 md:mt-0 hover:text-green-400"
            >
              {" "}
              &copy; Rainbosoft, 2023.{" "}
            </Link>
            <div className="order-1 md:order-2 ">
              <Link to="/about" className="px-2 hover:text-green-400">
                About us
              </Link>
              <Link
                to="/contact"
                className="px-2 border-l hover:text-green-400"
              >
                Contact us
              </Link>
              <Link to="/" className="px-2 border-l hover:text-green-400">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
