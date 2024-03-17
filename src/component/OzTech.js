import React from 'react';
import { IoMdBulb } from 'react-icons/io';
import OurService from './OurService';

function OzTech() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="container mx-auto flex justify-center items-center">
          <div className="text-center">
            <IoMdBulb className="text-5xl text-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-800">OZTECH</h2>
            <p className="text-sm text-gray-600">
              Innovating Technology Solutions
            </p>
            <h1 className="text-4xl font-bold text-blue-900 mt-6">
              Modern Websites for Modern Companies
            </h1>
          </div>
          <div className="ml-8">
            <p className="text-gray-700">
              We specialize in creating bespoke software solutions tailored to
              your business needs. From web development to mobile apps and
              beyond, we're here to transform your ideas into reality. Let's
              build the future together!
            </p>
            <div className="mt-4">
              <span className="text-gray-700">
                For more inquiries <i>call us</i> <br />
                <strong>+234 9077955363</strong> <br />
                <strong>oztech640@gmail.com</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            With a passion for innovation and a commitment to excellence, OZTECH
            is a leading technology company dedicated to delivering cutting-edge
            solutions to businesses worldwide. Our team of skilled professionals
            combines creativity, expertise, and advanced technology to help our
            clients thrive in today's digital landscape. At OZTECH, we don't
            just build products; we build relationships and futures. Let us be
            your partner in success.
          </p>
        </div>
      </section>

      <OurService />
    </>
  );
}

export default OzTech