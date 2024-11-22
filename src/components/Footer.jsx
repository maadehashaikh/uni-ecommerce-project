import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="flex items-start justify-center gap-11 py-3">
        {/* Column 1 */}
        <div>
          <h4 className="text-lg font-semibold  ">About the Brand</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-slate-400 hover:underline ">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-slate-400 hover:underline">
                Store Locator
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:underline">
                LookBook
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold ">More About Us</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-slate-400 hover:underline">
                Stockists
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold">Online Information</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-slate-400 hover:underline">
                My Account
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-slate-400 hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-slate-400 hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:underline">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-lg font-semibold ">Customer Service</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-slate-400 hover:underline">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-slate-400 hover:underline">
                Shipping & Handling
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-slate-400 hover:underline">
                Payments
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-slate-400 hover:underline">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-400 hover:underline">
                Track Order
              </a>
            </li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div className="flex flex-col items-start justify-center">
          <p className="mb-4 text-slate-400">
            Sign up to keep up to date with the latest collections from Sania
            Maskatiya!
          </p>
          <form className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent px-4 py-2 text-white border-2 border-gray-600 rounded-l-md w-full md:w-64 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-600 text-white px-4 py-2 rounded-r-md hover:bg-gray-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
