import React from "react";
import Image from "next/image";

const BottomFooter = () => {
  return (
    <>
      <div className="mb-6" />
      <footer className="bg-gradient-to-b from-white to-gray-200 text-black p-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="footer-logo mb-6 md:mb-0">
            <Image
              src="/zoirw.png"
              alt="Gayatri Vidya Parishad College Logo"
              width={200}
              height={200}
            />
          </div>
          <div className="footer-links flex flex-wrap px-2 py-2">
            <ul className="mr-10 mb-4 py-2 px-2 mx-2">
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
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Join
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="mr-10 mb-4">
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
                  About Gayatri Vidya Parishad
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Locations
                </a>
              </li>
            </ul>
            <ul className="mr-10 mb-4">
              <li>
                <a href="#" className="hover:underline">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apply for Degree Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Amravati Campus
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Visakhapatnam
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hyderabad
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tirupati
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Vijayawada
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kakinada
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Nellore
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Anantapur
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Reports
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-powered text-center mt-6">Powered by ZOIR™</div>
      </footer>
    </>
  );
};

export default BottomFooter;
