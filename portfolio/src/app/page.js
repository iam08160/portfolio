import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";



export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="h-screen">
        <nav className="py-10  mb-12 flex justify-between">
          <h1 className="text-xl">developedbyIan</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className=" cursor-pointer text-xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-500 font-medium">
            Ian MacKenzie
          </h2>
          <h3 className="text-2xl py-2">Developer and Sales Representative.</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            Innovative Software Developer offering experience in the full
            software development lifecycle, from concept though delivery of
            next-generation applications and customizable solutions, as well as
            over 5 years experience in B2B sales.
          </p>
        </div>
        <div className="text-7xl flex justify-center gap-16 py-3 text-gray-600">
          <a href="https://github.com/iam08160">
          <AiFillGithub className="cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/ian-mackenzie-bb8960129/">
          <AiFillLinkedin className="cursor-pointer " />
          </a>
          <a href="https://www.instagram.com/macksauce_/">
          <AiFillInstagram className="cursor-pointer hover:" />
          </a>
        </div>
        <div>
          <Image
          className=" rounded-full w-100 h-100 mt-20 mx-auto"
          src="/iandev.png"
          width="700"
          height="700"
          style={{objectFit: "contain"}}
          />
        </div>
      </section>
      {/* Main */}
      <section>
        <div>
          <h3 className="text-3xl py-1"> What I've Learned So Far</h3>
          <p className=" text-md py-2 leading-8 text-gray-800"> I began my coding journey in January 2023, by means of Upright Education's Software Development Bootcamp. During that time, I created a solid foundation of key software development concepts, and became proficient in programming languages such as HTML, CSS, and most importatntly, JavaScript. Couple this with my knowledge of the React framework, as well as my server-side knowledge of MongoDB, Express, and Node.js, I can provide the full-stack developer experience you are looking for.</p>
        </div>
      </section>
      {/* projects */}
      <section>
        <div>
          
        </div>
      </section>
    </main>
  );
}
