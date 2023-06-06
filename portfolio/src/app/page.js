import { BsFillMoonStarsFill } from "react-icons/bs";

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
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
            </li>
          </ul>
        </nav>
        <div>
          <h2>Ian MacKenzie</h2>
          <h3>Developer and Sales Professional.</h3>
          <p>Innovative Software Developer offering experience in the full software development lifecycle, from concept though delivery of next-generation applications and customizable solutions, as well as over 5 years experience in B2B sales.</p>
        </div>
      </section>
    </main>
  );
}
