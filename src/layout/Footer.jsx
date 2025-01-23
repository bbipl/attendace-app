import React from "react";
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black p-6 ">
      <div>
        <h2 className="text-lg font-bold "><img src="/assets/logo/logo-png.png" 
        alt="logo" 
        srcset="" 
        className="h-20 w-auto m-auto"/></h2>
        <p className="mt-2 text-center">
          Dedicated to providing the best services and solutions to our clients.
          Your satisfaction is our priority.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-1 mt-6 pr-4">
        {/* Logo and About */}
        {/* <div>
          <h2 className="text-lg font-bold">Our Company</h2>
          <p className="mt-2">
            Dedicated to providing the best services and solutions to our clients. 
            Your satisfaction is our priority.
          </p>
        </div> */}

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="http://mypdfhub.s3-website.ap-south-1.amazonaws.com" className="hover:text-blue-600">
                MyPDFHub
              </a>
            </li>
            {/* <li>
              <a href="/pages/about" className="hover:text-blue-600">
                About Us
              </a>
            </li> */}
            {/* <li>
              <a href="/pages/services" className="hover:text-blue-600">
                Services
              </a>
            </li> */}
            {/* <li>
              <a href="/pages/contact-us" className="hover:text-blue-600">
                Contact Us
              </a>
            </li> */}
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div className="pr-8">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p className="mt-2 text-wrap">
            Email: <a href="mailto:rakesh@businessbasket.in" className="hover:text-blue-600 mr-2">rakesh@businessbasket.in</a>
          </p>
          <p className="mt-3">
            Phone: <a href="tel:+91 75036 77953" className="hover:text-blue-600 ">+917503677953</a>
          </p>
        
        </div>
        <div className="flex space-x-10 mt-5 text-center m-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <i className="fa fa-facebook"></i> Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <i className="fa fa-twitter"></i> Twitter
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <i className="fa fa-linkedin text-white-600 text-xl"></i> LinkedIn
        </a>
      </div>
      </div>
      
      <div className="text-center mt-6 text-sm">

        &copy; {new Date().getFullYear()} Our Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;