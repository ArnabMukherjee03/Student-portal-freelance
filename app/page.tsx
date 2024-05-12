// LandingPage.js
import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { lusitana } from '@/components/fonts';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="py-1 px-8 flex justify-between items-center">
        <Link href="/" className="">
          <Image src="/MP_Logo_Bg.png" width={80} height={80} alt='MP_Logo'/>
        </Link>
        <div className={cn(lusitana.className)}>
          <Link href="/services" className="text-lg mx-4">Services</Link>
          <Link href="/about" className="text-lg mx-4">About Us</Link>
          <Link href="/contact" className="text-lg mx-4">Contact Us</Link>
          <Link href="/auth/login" className="text-sm rounded-sm transition-all hover:bg-green-400 hover:text-white border-[1px] border-green-400 py-2 px-4 mx-4">Staff Login</Link>
        </div>
      </nav>
      {/* Hero Section */}
      <div className='relative'>
      <div style={{background: "url(/Hero.jpeg)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="py-32  px-4" >
      <div className="after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-30 after:bg-black"></div>
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h1 className={cn("text-4xl md:text-4xl mb-4",lusitana.className)}>Welcome to MP Cleaning Services</h1>
          <p className={cn("text-lg md:text-xl mb-8",lusitana.className)}>Your partner for temporary staffing solutions</p>
          <div className="flex justify-center">
            <button className="bg-white transition-all text-green-400 py-2 px-8  text-lg  hover:bg-green-400 hover:text-white">Get Started</button>
          </div>
        </div>
      </div>
      </div>
      
      {/* Services Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-8",lusitana.className)}>Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className={cn("text-2xl font-semibold mb-4",lusitana.className)}>Find Temporary Staff</h3>
              <p className="text-md mb-4">Explore our pool of skilled temporary workers to fill your staffing needs.</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md  text-lg hover:bg-blue-600">Explore Staff</button>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className={cn("text-2xl font-semibold mb-4",lusitana.className)}>Join Our Team</h3>
              <p className="text-md mb-4">Browse available temporary positions and start your next opportunity.</p>
              <button className="bg-green-500 text-white py-2 px-4 rounded-md  text-lg hover:bg-green-600">View Jobs</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* About Us Section */}
      {/* <div className="bg-gray-200 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg mb-8">We are a leading staffing agency dedicated to providing reliable temporary staffing solutions for businesses of all sizes.</p>
          <p className="text-lg">Our mission is to connect talented individuals with rewarding temporary employment opportunities, while helping businesses thrive by providing them with skilled temporary staff.</p>
        </div>
      </div> */}
      
      {/* Contact Us Section */}
      {/* <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg mb-8">Have questions or need assistance? Reach out to us!</p>
          <p className="text-lg mb-8">Email: info@yourstaffingcompany.com</p>
          <p className="text-lg mb-8">Phone: 123-456-7890</p>
        </div>
      </div> */}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2024 MP cleaning services LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
