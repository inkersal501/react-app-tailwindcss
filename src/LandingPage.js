import React, { useState } from "react";
import { GithubIcon, TwitterIcon, LinkedInIcon } from "./SocialIcons";
import { MenuIcon } from "./MenuIcon";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroImageUrl =
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  const profileImageUrl =
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200";

  return (
    <div>
      {/* Navbar */}
      <nav className="p-4">
        <div>
          <div className="flex justify-between">
            <div>
              <span className="text-blue-900 font-bold text-xl sm:text-2xl">
                Logo
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <div className="sm:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuIcon isOpen={isMenuOpen} />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              >
                Home
              </a>
              <a
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              >
                About
              </a>
              <a
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="sm:grid sm:grid-cols-2">
        <div className="bg-blue-800 px-4 sm:px-20 py-10 sm:py-20 text-center sm:text-start">
          <div>
            <main>
              <div className="grid grid-rows-3 gap-0 sm:gap-2 items-center">
                <h1 className="sm:grid sm:grid-rows-2">
                  <span className="font-poppins text-4xl text-white font-bold">
                    Welcome to Our
                  </span>{" "}
                  <span className="text-4xl text-blue-400 font-bold">
                    Amazing Landing Page
                  </span>
                </h1>
                <p className="text-sm text-blue-200 m-0">
                  Discover the power of Tailwind CSS with this beautifully
                  crafted landing page. Responsive, modern, and easy to
                  customize.
                </p>
                <div>
                  <div>
                    <a
                      href="#"
                      className="bg-white text-blue-800 py-3 px-4 rounded font-semibold"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="w-full h-full">
          <img src={heroImageUrl} alt="Hero image" className="w-full h-full" />
        </div>
      </div>

      {/* Profile Card */}
      <div class="bg-blue-50 px-8 py-4 sm:py-12">
        <div>
          <div className="bg-white box-shadow-lg text-center rounded">
            <div className="flex flex-col justify-center items-center py-4 sm:py-8">
              <img
                src={profileImageUrl}
                alt="Profile picture"
                className="rounded-full w-[120px] h-[120px]"
              />
              <h3 className="font-semibold my-2">John Doe</h3>
              <p className="text-slate-400 mb-4">Web Developer & Designer</p>
              <p className="text-slate-400 w-[350px] mb-4">
                Passionate about creating beautiful and functional web
                experiences using the latest technologies.
              </p>
              <div className="flex gap-2">
                <a href="#" className="text-slate-400">
                  <GithubIcon />
                </a>
                <a href="#" className="text-slate-400">
                  <TwitterIcon />
                </a>
                <a href="#" className="text-slate-400">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
