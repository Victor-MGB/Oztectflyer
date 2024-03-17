import React from 'react'
import { FiSettings, FiMonitor, FiSmartphone } from "react-icons/fi";

function OurService() {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
            <p className="text-sm text-gray-600 mt-2">
              Innovative Solutions Tailored to Your Needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <span className="text-4xl text-yellow-500 mb-4 block">01</span>
              <FiSettings className="text-5xl text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Custom Software Development
              </h3>
              <p className="text-gray-700">
                From idea to implementation, we craft custom software solutions
                that perfectly fit your business requirements, helping you
                streamline processes and drive growth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <span className="text-4xl text-yellow-500 mb-4 block">02</span>
              <FiMonitor className="text-5xl text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Web Development
              </h3>
              <p className="text-gray-700">
                Your online presence matters. Our expert web development team
                creates stunning, user-friendly websites that engage your
                audience and elevate your brand.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <span className="text-4xl text-yellow-500 mb-4 block">03</span>
              <FiSmartphone className="text-5xl text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Mobile App Development
              </h3>
              <p className="text-gray-700">
                Stay connected with your customers on the go. We design and
                develop innovative mobile applications that deliver seamless
                experiences across devices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <span className="text-4xl text-yellow-500 mb-4 block">04</span>
              <FiMonitor className="text-5xl text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                E-commerce Website Development
              </h3>
              <p className="text-gray-700">
                We specialize in creating high-converting e-commerce websites
                that drive sales and provide exceptional shopping experiences
                for your customers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <span className="text-4xl text-yellow-500 mb-4 block">05</span>
              <FiMonitor className="text-5xl text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                CMS Website Development
              </h3>
              <p className="text-gray-700">
                Manage your content with ease. Our CMS website development
                services empower you to control and update your website's
                content effortlessly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <span className="text-4xl text-yellow-500 mb-4 block">06</span>
              <FiMonitor className="text-5xl text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Portfolio Website Development
              </h3>
              <p className="text-gray-700">
                Showcase your work in style. We create stunning portfolio
                websites that highlight your skills and impress potential
                clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurService