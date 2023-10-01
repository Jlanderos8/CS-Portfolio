import React from "react";

export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Jorge.
              <br className="hidden lg:inline-block" />I'm a Full Stack Developer.
            </h1>
            <p className="mb-8 leading-relaxed">
            I'm a dedicated software developer from Las Vegas, Nevada with experience in software development. I've worked with Python, FastAPI, Django, and React, and have experience using both SQL and NoSQL databases. I'm passionate about building high-quality software solutions that meet the needs of end-users and I'm always striving to learn new technologies and frameworks to stay up-to-date with the latest trends.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Contact Me
              </a>
              <a
                href="jorge_landeros_resume.pdf"
                target="_blank"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Download Resume
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./coding.svg"
            />
          </div>
        </div>
      </section>
    );
  }
