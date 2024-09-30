import React from "react";
import Image from "next/image";

const BottomFooter = () => {
  return (
    <>
      <div className="mb-6" />
      <footer className="bg-gradient-to-b from-white to-gray-200 text-black p-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* ZOIR Logo */}
          <div className="footer-logo mb-6 md:mb-0">
            <Image
              src="/zoirw.png"
              alt="ZOIR Logo"
              width={128} // Adjusted to a more reasonable size
              height={128}
            />
          </div>

          {/* Footer Links */}
          <div className="footer-links flex flex-wrap justify-center space-x-8 md:space-x-12">
            <ul className="text-center">
              <li>
                <a href="#" className="hover:underline">
                  Apply Now
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Maps & Directions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Anti Ragging
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Outreach
                </a>
              </li>
            </ul>

            <ul className="text-center">
              <li>
                <a href="#" className="hover:underline">
                  Interests
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Locations
                </a>
              </li>
            </ul>

            <ul className="text-center">
              <li>
                <a href="#" className="hover:underline">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apply for Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reports
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer powered by */}
        <div className="footer-powered text-center mt-6 text-gray-600">
          Powered by ZOIR™
        </div>
      </footer>
    </>
  );
};

export default BottomFooter;
