import React from "react";

import PlayStore from "../assets/img/googleplay.png";
import Icon from "../assets/img/originalicon.png";
import Return from "../assets/img/icon.png";
import AppStore from "../assets/img/apple.png";

import facebook from "../assets/img/facebook.png";
import twitter from "../assets/img/twitter.png";
import instagram from "../assets/img/instagram.png";
import youtube from "../assets/img/youtube.png";

const Footer = () => {
  const popularSearches = [
    "Makeup",
    "Dresses For Girls",
    "T-Shirts",
    "Sandals",
    "Headphones",
    "Babydolls",
    "Blazers For Men",
    "Handbags",
    "Ladies Watches",
    "Bags",
    "Sport Shoes",
    "Reebok Shoes",
    "Puma Shoes",
    "Boxers",
    "Wallets",
    "Tops",
    "Earrings",
    "Fastrack Watches",
    "Kurtis",
    "Nike",
    "Smart Watches",
    "Titan Watches",
    "Designer Blouse",
    "Gowns",
    "Rings",
    "Cricket Shoes",
    "Forever 21",
    "Eye Makeup",
    "Photo Frames",
    "Punjabi Suits",
    "Bikini",
    "Myntra Fashion Show",
    "Lipstick",
    "Saree",
    "Watches",
    "Dresses",
    "Lehenga",
    "Nike Shoes",
    "Goggles",
    "Bras",
    "Suit",
    "Chinos",
    "Shoes",
    "Adidas Shoes",
    "Woodland Shoes",
    "Jewellery",
    "Designers Sarees",
  ];

  return (
    <footer className="mt-20 bg-gray-50 px-6 pt-14 pb-10 text-black md:px-12 lg:px-20">

      {/* ================= TOP FOOTER ================= */}
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* ================= SHOP ================= */}
          <div>
            <h6 className="mb-4 text-xs font-semibold uppercase tracking-wide text-black">
              Shop
            </h6>

            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Men
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Women
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Kids
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Beauty
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  GenZ
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Gift Cards
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Myntra Insider
                </a>
              </li>
            </ul>

            {/* Useful Links */}
            <h6 className="mb-4 mt-8 text-xs font-semibold uppercase tracking-wide text-black">
              Useful Links
            </h6>

            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Site Map
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Corporate Information
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Whitehat
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Cleartrip
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Myntra Global
                </a>
              </li>
            </ul>
          </div>

          {/* ================= CUSTOMER POLICIES ================= */}
          <div>
            <h6 className="mb-4 text-xs font-semibold uppercase tracking-wide text-black">
              Customer Policies
            </h6>

            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  T&C
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Terms of Use
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Track Orders
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Shipping
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Cancellation
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Grievance Redressal
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  FSSAI Food Safety
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-black">
                  Connect App
                </a>
              </li>
            </ul>
          </div>

          {/* ================= APP + SOCIAL ================= */}
          <div>
            <h6 className="mb-4 text-xs font-semibold uppercase tracking-wide text-black">
              Experience Our App on Mobile
            </h6>

            <div className="flex flex-wrap items-center gap-3">
              <img
                src={PlayStore}
                alt="Google Play Store"
                className="h-10 w-auto cursor-pointer"
              />

              <img
                src={AppStore}
                alt="Apple App Store"
                className="h-10 w-auto cursor-pointer"
              />
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h6 className="mb-4 text-xs font-semibold uppercase tracking-wide text-black">
                Keep in Touch
              </h6>

              <div className="flex items-center gap-4">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="h-5 w-5 cursor-pointer object-contain transition hover:scale-110"
                />

                <img
                  src={twitter}
                  alt="Twitter"
                  className="h-5 w-5 cursor-pointer object-contain transition hover:scale-110"
                />

                <img
                  src={youtube}
                  alt="Youtube"
                  className="h-5 w-5 cursor-pointer object-contain transition hover:scale-110"
                />

                <img
                  src={instagram}
                  alt="Instagram"
                  className="h-5 w-5 cursor-pointer object-contain transition hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* ================= GUARANTEE ================= */}
          <div>
            <div className="space-y-6">

              {/* Original */}
              <div className="flex items-start gap-3">
                <img
                  src={Icon}
                  alt="Original"
                  className="h-12 w-12 object-contain"
                />

                <p className="text-sm leading-5 text-gray-500">
                  <b className="text-black">100% ORIGINAL</b>
                  <br />
                  guarantee for all products
                  <br />
                  at myntra.com
                </p>
              </div>

              {/* Return */}
              <div className="flex items-start gap-3">
                <img
                  src={Return}
                  alt="Return"
                  className="h-9 w-9 object-contain"
                />

                <p className="text-sm leading-5 text-gray-500">
                  <b className="text-black">Return within 14 days</b>
                  <br />
                  of receiving your order
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* ================= POPULAR SEARCHES ================= */}
        <div className="mt-12">

          <div className="mb-4 flex items-center gap-4">
            <h6 className="whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-black">
              Popular Searches
            </h6>

            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="text-xs leading-loose text-gray-500">
            {popularSearches.map((item, index) => (
              <React.Fragment key={index}>
                <a
                  href="#"
                  className="text-gray-500 no-underline transition hover:text-black"
                >
                  {item}
                </a>

                {index < popularSearches.length - 1 && (
                  <span className="mx-1 text-gray-300">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="my-6 border-t border-gray-200 pt-6">

          <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-500 md:flex-row">

            <div>
              In case of any concern,{" "}
              <a
                href="#"
                className="font-bold text-blue-600 no-underline hover:underline"
              >
                Contact Us
              </a>
            </div>

            <div>
              © 2026 www.myntra.com. All rights reserved.
            </div>

            <div>
              A Flipkart company
            </div>

          </div>

        </div>

        {/* ================= OFFICE ADDRESS ================= */}
        <div className="border-t border-gray-200 pt-6">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            <div className="text-xs leading-5 text-gray-500">

              <h6 className="mb-3 text-xs font-semibold text-black">
                Registered Office Address
              </h6>

              <p className="mb-1">Buildings Alyssa,</p>

              <p className="mb-1">
                Begonia and Clover situated in Embassy Tech Village,
              </p>

              <p className="mb-1">Outer Ring Road,</p>

              <p className="mb-1">
                Devarabeesanahalli Village,
              </p>

              <p className="mb-1">Varthur Hobli,</p>

              <p className="mb-0">
                Bengaluru 560103, India
              </p>

            </div>

            <div className="flex flex-col justify-end text-xs text-gray-500 md:items-end">

              <p className="mb-1">
                CIN: U72300KA2007PTC041799
              </p>

              <p className="mb-0">
                Telephone:{" "}
                <a
                  href="tel:08040011450"
                  className="font-bold text-blue-600 no-underline hover:underline"
                >
                  080-40011450
                </a>
              </p>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;