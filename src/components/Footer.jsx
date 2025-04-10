"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-black py-12 relative select-none">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6">
            <div className="flex items-center mb-4">
              {/* <span className="text-[#FD3A00] font-bold text-3xl">TED <sup>x</sup></span>
              <span className="text-black font-light text-3xl">JUET</span> */}
              <img src="logo.png" className="h-[30px] w-[200px]" alt="" />
            </div>
            <p className="text-[#bbb] text-sm mb-6">
              In the spirit of "Ideas Worth Spreadi
Meet the passionate team behind the magic — a group of driven minds dedicated to crafting an unforgettable TEDxJUET experience! 
Know Our Team
ng", TED has created TEDx, which is a program of local,
              self-organized events that bring people together to share a TED-like experience. Our event is called
              TEDxJUET where x = independently organized TED event.
            </p>
            <div className="flex space-x-3 mt-4">
              {/* <Link
                href="#"
                className="bg-[#7a7a7a7a] hover:bg-red-600 hover:text-white p-2 rounded-full transition-colors duration-300 transform hover:scale-110"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link> */}
              <Link
                href="#"
                className="bg-[#7a7a7a7a] hover:bg-red-600 hover:text-white p-2 rounded-full transition-colors duration-300 transform hover:scale-110"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-[#7a7a7a7a] hover:bg-red-600 hover:text-white p-2 rounded-full transition-colors duration-300 transform hover:scale-110"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="bg-[#7a7a7a7a] hover:bg-red-600 hover:text-white p-2 rounded-full transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              {/* <Link
                href="#"
                className="bg-[#7a7a7a7a] hover:bg-red-600 hover:text-white p-2 rounded-full transition-colors duration-300 transform hover:scale-110"
              >
                <Youtube size={18} />
                <span className="sr-only">YouTube</span>
              </Link> */}
            </div>
          </div>

          <div className="md:col-span-3 sm:block hidden">
            <h3 className="text-xl text-white font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-red-600 after:-bottom-2 after:left-0">
              Contact
            </h3>
            <div className="space-y-3 text-[#bbb]">
              <div className="flex items-start group">
                <div className="mt-1 mr-2 text-red-500">📍</div>
                <p className="group-hover:text-red-600 transition-colors">
                  JUET
                  <br />
                  Mumbai - Agra National Hwy,
                  <br />
                  Raghogarh -Vijaypur, Guna,
                  <br />
                  Madhya Pradesh - 473226
                </p>
              </div>
              <div className="flex items-center group">
                <div className="mr-2 text-red-500">✉️</div>
                <Link href="mailto:tedx@juetguna.in" className="hover:text-red-600 transition-colors">
                  tedx@juetguna.in
                </Link>
              </div>
              {/* <div className="flex items-center group">
                <div className="mr-2 text-red-500">🌐</div>
                <Link href="https://tedxjuet.com" className="hover:text-red-600 transition-colors">
                  tedxjuet.com
                </Link>
              </div> */}
              <div className="flex items-center group mt-2">
                <div className="mr-2 text-red-500">📞</div>
                <Link href="tel:+917047412345" className="hover:text-red-600 transition-colors">
                  +91 70474 12345
                </Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 md:block hidden">
            <h3 className="text-xl text-[white] font-semibold mb-4 relative after:content-[''] after:absolute after:w-12 after:h-1 after:bg-red-600 after:-bottom-2 after:left-0">
              Site links
            </h3>
            <ul className="space-y-2 text-[#bbb]">
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <Link href="/" className="hover:text-red-600 transition-colors flex items-center">
                  <span className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                  Home
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <Link href="/about" className="hover:text-red-600 transition-colors flex items-center">
                  <span className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                  About
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <Link href="/speakers" className="hover:text-red-600 transition-colors flex items-center">
                  <span className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                  Speakers
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <Link href="/team" className="hover:text-red-600 transition-colors flex items-center">
                  <span className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                  Team
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <Link href="/team" className="hover:text-red-600 transition-colors flex items-center">
                  <span className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                  Events
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <Link href="/contact" className="hover:text-red-600 transition-colors flex items-center">
                  <span className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                  Contact
                </Link>
              </li>
              <li className="transform hover:translate-x-2 transition-transform duration-300">
                <Link href="/register" className="hover:text-red-600 transition-colors flex items-center">
                  <span className="mr-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6  border-t-[1px] border-[#333]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#bbb] text-sm">
              © {new Date().getFullYear()} All rights reserved. • Made by TED<sup>x</sup>JUET
            </p>
            <div className="mt-4 md:mt-0">
              <Link href="/policies" className="text-[#bbb] hover:text-red-600 text-sm">
                • Policies & Terms
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="https://wa.me/917047412345"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-colors group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={24} className="group-hover:hidden block" />
          <span className="hidden group-hover:block text-sm font-medium">Chat with us</span>
        </Link>
      </div> */}
    </footer>
  )
}

