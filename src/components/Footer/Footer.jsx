import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaSkype, FaTiktok } from "react-icons/fa";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
      }, []);
  

    const footerData = {
      
      aboutUs: {
        title: "About Us",
        links: [
          { href: "/about", text: "About Us" },
          { href: "/terms", text: "Our Terms" },
          { href: "/partners", text: "Partnerships" },
          { href: "/story", text: "Our Story" },
          { href: "/faq", text: "FAQs" },
        ],
      },
      policy: {
        title: "Policy",
        links: [
          { href: "/shipping", text: "Shipping & Return" },
          { href: "/privacy", text: "Privacy Policy" },
          { href: "/cookies", text: "Cookie Policy" },
          { href: "/terms", text: "Terms & Conditions" },
          { href: "/blog", text: "Blogs" },
        ],
      },
    };
  
    return (
      <footer className="bg-gray-800 p-4 ">
       
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-2">
        <div className="md:col-span-4 p-8">
          <h1 className="text-orange-400 font-sm text-xl mb-3">ComfortZone</h1>
          <p className="text-blue-200 text-md mb-4 ">
            Growth happens outside of your comfort zone. So, take a deep breath,
            step out of your familiar outfit, and embrace the unknown. You might
            be surprised at what you&apos;re capable of. 
          </p>
          <span className="text-gray-200 text-md mb-4 ">Email:ComfortZone@gmail.com</span>
          <hr className=" text-blue-500 w-60"/>
        </div>
          {Object.entries(footerData).map(([key, section]) => (
            <div key={key} className="md:col-span-2 p-8">
              <h2 className="text-orange-400 font-lg mb-2">{section.title}</h2>
              {section.description && <p className="text-blue-200  text-sm mb-2">{section.description}</p>}
              {section.links && (
                <ul className="text-blue-200 ">
                  {section.links.map((link, index) => (
                    <li key={index} className="mb-1">
                      <a href={link.href} aria-label={link.text}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              )}
              
            </div>
          ))}
          <div className="md:col-span-4 p-8">
          <h2 className="text-orange-400 font-lg mb-2">Contact Us</h2>
          <p className="text-blue-200  mb-2">
            Get a membership card to get special offers!
          </p>
         <div className="flex flex-row items-center px-3 py-2 rounded bg-gray-700 justify-between">
         <input
            type="email"
            placeholder="Enter your email"
            className="w-full   text-white focus:outline-none "
          />
          <CiMail className="text-2xl  text-gray-200 "/>
         </div>
         <div className="flex flex-row gap-4 p-2 text-2xl text-blue-200   ">
        <FaInstagram className="hover:text-gray-200 duration-300"/>
        <FaFacebook className="hover:text-gray-200 duration-300"/>
        <FaTiktok className="hover:text-gray-200 duration-300" />
        <FaSkype className="hover:text-gray-200 duration-300"/>
        </div>
        </div>
       
        </div>
        <hr className="text-blue-500 mt-8"/>

        <div className="mt-10 text-center font-semibold text-sm text-blue-200">
            <p>&copy; <span> {currentYear}-  
          Comfort <span className="text-orange-600 text-2xl">Z</span>one
        , All rights reserved</span>
            </p>
            </div>
        
      </footer>
    );
  };
  
  export default Footer;