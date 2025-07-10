import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Section1 = () => {
  return (
    <div id="Home" className='min-h-[95vh] relative bg-gradient-to-br from-blue-100 to-white' >

      <div className="flex flex-col  md:flex-row flex-1 items-center justify-between px-7s xl:px-40 py-50">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-purple-700  text-gradient">
            Empower Your Business with<br />Proven AI Excellence
          </h2>
          <p className="mt-6 text-lg text-gray-600 tex-gradient">
            Enhance Business Potential, Optimize Decision Making,
            & Fuel Sustainable Growth with <span className="text-blue-800 font-semibold text-gradient">Advanced AI Solutions & AI Product Development Services</span>.
          </p>
          <div className="mt-8 flex space-x-4">
            <Link href="#solutions">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white px-6 py-3 rounded-full shadow hover:opacity-90">
                Explore Solutions
              </button>
            </Link>

            <Link href="#contactus">
              <button className="border-2 flex items-center gap-4 font-bold rounded-full border-blue-800 px-5 py-3 text-blue-800">
                Get In Touch
              </button>
            </Link>
          </div>

        </div>

        <div className="mt-10 md:mt-0">
          <Image src="/images/hero.png" alt="AI Banner" width={400} height={300} />
        </div>
      </div>
    </div>
  )
}

export default Section1
