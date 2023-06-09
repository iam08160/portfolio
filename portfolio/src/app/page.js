"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-30 sm:px-10 dark:bg-gray-900">
        <section className="min-h-full">
          <nav className="py-10  mb-12 flex justify-between">
            <h1 className="text-xl dark:text-white">developedbyIan</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="/resume"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">
              Ian MacKenzie
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Software Developer | Sales Representative
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-7xl mx-auto dark:text-white">
              Innovative Software Developer offering experience in the full
              software development lifecycle, from concept through delivery of
              next-generation applications and customizable solutions, as well
              as over 5 years experience in B2B sales. Currently working as a Teaching Assistant for Upright Educations Software Development Bootcamps. 
            </p>
          </div>
          <div className="text-7xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a href="https://github.com/iam08160" target="blank">
              <AiFillGithub className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/ian-mackenzie-bb8960129/"
              target="blank"
            >
              <AiFillLinkedin className="cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/macksauce_/" target="blank">
              <AiFillInstagram className="cursor-pointer" />
            </a>
          </div>
          <div>
            <Image
              className=" rounded-full w-100 h-100 mt-20  mx-auto"
              src="/iandev.png"
              width="700"
              height="700"
              style={{ objectFit: "contain" }}
            />
          </div>
        </section>
        {/* Main */}
        <section className="flex justify-between">
          <div>
            <h3 className="text-3xl pt-7 mt-10 dark:text-white">
              What I've Learned So Far
            </h3>
            <p className=" text-md py-2 leading-8 text-gray-800 dark:text-white">
              I began my coding journey in January 2023, by means of Upright
              Education's Software Development Bootcamp, completing the progam
              in April of 2023. During that time, I created a solid foundation
              of key software development concepts, and became proficient in
              programming languages such as{" "}
              <span className="text-teal-500"> HTML</span>,
              <span className="text-teal-500"> CSS</span>, and most importantly,
              <span className="text-teal-500"> JavaScript. </span>
              Couple this with my knowledge of the
              <span className="text-teal-500"> React</span> framework, as well
              as my server-side knowledge of
              <span className="text-teal-500"> MongoDB</span>,
              <span className="text-teal-500"> Express </span>, and
              <span className="text-teal-500"> Node.js</span>, I can provide the
              full-stack developer experience you are looking for.
            </p>
          </div>
        </section>
        {/* projects */}
        <section>
          <div>
            <h3 className="text-3xl py-6 dark:text-white">
              Projects I've Worked On
            </h3>
            <h3 id="cosmable" className="text-5xl py-10 dark:text-white">
              COSMABLE
            </h3>
            <p className="text-md py-4 mb-4 leading-8 text-gray-800 dark:text-white">
              Part of Upright Education's curriculum involves working on a
              real-world capstone project during the final 4 weeks of the
              course. Our class was tasked with creating a fully functioning
              full-stack web application called Cosmable. Cosmable is designed
              for beauticians and aestheticians in the Chicago metropolitain area
              to upload and showcase their work. My role in this project
              involved creating an "Upload from Instagram" feature, so users
              could upload and save photos directly from their clinics Instagram
              page. I accomplished this by accessing <span className="text-teal-500">
                Instagram's Basic Display API
              </span>{" "}
              to
              <span className="text-teal-500"> fetch</span> users posts, by
              means of a{" "}
              <span className="text-teal-500">short-lived-access-token</span>.
            </p>
            <div className="md:flex justify-center gap-5 py-3">
              <div className=" mx-auto shadow-lg rounded-xl dark:m-w-3px ">
                <Image
                  className="mx-auto my-12 py-12 pl-6 pr-6 rounded-xl "
                  src="/upload.PNG"
                  width="300"
                  height="300"
                />
                <p className="py-15 pl-3 my-3 dark:text-white">
                  <span className="text-teal-500 ">handleAuth</span> function
                  created to handle Instagram's authentication process via<span className="text-teal-500"> string-interpolated query parameters.</span>
                </p>
              </div>
              <div className=" mx-auto shadow-lg rounded-xl">
                <Image
                  className="mx-auto rounded-xl"
                  src="/insta.PNG"
                  width="180"
                  height="180"
                />
                <p className="py-3 pl-3 pr-3 dark:text-white">
                  <span className="text-teal-500">handleRedirect</span> function
                  used after authentication is complete, authorization code
                  exhanged for
                  <span className="text-teal-500"> access token</span>,
                  <span className="text-teal-500"> useEffect</span> hook used to
                  redirect back to our application.
                </p>
              </div>
              <div className=" text-center shadow-lg rounded-xl">
                <Image
                  className="mx-auto rounded-xl "
                  src="/select2.jpg"
                  width="100"
                  height="200"
                />
                <p className="py-7 dark:text-white">
                  <span className="text-teal-500">Fetch</span> used to grab
                  user's media using generated
                  <span className="text-teal-500"> access-token</span>,
                  <span className="text-teal-500"> handleSelectedMedia</span>{" "}
                  function used to select desired images and store in
                  local-storage.
                </p>
              </div>
            </div>
                <h3 className="text-5xl py-10 dark:text-white">
              Weather App
            </h3>
            <p className="text-md py-4 mb-4 leading-8 text-gray-800 dark:text-white">
              A staple in any developers portfolio. Following my bootcamp, I wanted to solidify the concept of working with <span className="text-teal-500">API's</span> even further. With my existing knowledge of the <span className="text-teal-500">React framework</span>, I built this responsive weather app completely from scratch. It was the perfect project to practice <span className="text-teal-500">fetching data</span>, as well as writting comprehensive <span className="text-teal-500">functions</span> in <span className="text-teal-500">Javascript</span> to make my application run. For this project, I implemented <span className="text-teal-500">OpenWeather's API</span> in order to <span className="text-teal-500">fetch</span> multiple data points, including real time weather for any city around the world, feels like temp, humidity, wind speed, and even the high/low temperatures for the current day. For fun, I made the background of my application <span className="text-teal-500">dynamic</span>, displaying blue for colder temperatures, and red for warmer temperatures.
            </p>
            <div className="md:flex justify-center gap-5 py-3">
              <div className=" mx-auto shadow-lg rounded-xl dark:m-w-3px ">
                <Image
                  className="mx-auto my-12 py-12 pl-6 pr-6 rounded-xl "
                  src="/openweatherpic.png"
                  width="300"
                  height="300"
                />
                <p className="pb-8 pl-3 my-3 dark:text-white">
                  <span className="text-teal-500">getWeatherData</span> function written for initial <span className="text-teal-500">fetch</span>. <span className="text-teal-500">formatForecast</span> and <span className="text-teal-500">formatCurrentWeather</span> functions written to handle formatting of data coming in.
                </p>
              </div>
              <div className=" mx-auto shadow-lg rounded-xl">
                <Image
                  className="mx-auto rounded-xl py-5"
                  src="/warm.PNG"
                  width="200"
                  height="200"
                />
                <p className="py-9 pl-3 pr-3 dark:text-white">
                  Simple and Elegant <span className="text-teal-500">UI</span> design. Data displayed from <span className="text-teal-500">API</span> that shows current day conditions, button to display weather for current location, toggle for imperial and metric, as well as hourly and weekly forecasts.
                </p>
              </div>
              <div className=" text-center shadow-lg rounded-xl">
                <Image
                  className="mx-auto rounded-xl py-5 "
                  src="/cold.PNG"
                  width="200"
                  height="200"
                />
                <p className="py-8 dark:text-white">
                  <span className="text-teal-500">tempChange</span> function written show a blue background during cold days, and a red background during warmer days, by means of <span className="text-teal-500">"if" statements</span> and <span className="text-teal-500">ternaries</span>. 
                </p>
              </div>
            </div>
            <a href="https://weather-app-beta-gilt.vercel.app/" target="blank">
                <h2 href=""className="dark:text-white hover:text-teal-500 text-center cursor-pointer">Demo Me Here!</h2>
                </a>
          </div>
        </section>
        

        <p className=" text-xs text-center text-gray-900 dark:text-white mt-12 ">
          Created by <span className="text-teal-500">learning</span>
          <span className="text-teal-500"> Next.js</span> and
          <span className="text-teal-500"> Tailwind</span>
        </p>
      </main>
    </div>
  );
}
