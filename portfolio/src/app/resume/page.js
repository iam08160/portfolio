export default function Page() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <nav className="py-10  mb-12 flex justify-between px-10">
        <h1></h1>
        <ul className="flex items-center">
          <li></li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
              href="/.."
            >
              Back
            </a>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
              href="/Ian MacKenzie Resume.pdf"
              download
            >
              Download
            </a>
          </li>
        </ul>
      </nav>
      <div className=" py-2 text-center">
        <h1 className="text-4xl font-bold mb-4">Ian MacKenzie</h1>
        <p className="text-sm my-6">
          603.504.4359 | ianmackenzie81691@gmail.com |
          linkedin.com/in/ian-mackenzie
        </p>

        <h2 className="text-2xl font-bold my-10">
          SOFTWARE DEVELOPER | SALES REPRESENTATIVE
        </h2>
        <p className="text-base mb-8 md:px-20 md:max-md:">
          Innovative Software Developer offering experience in the full software
          development lifecycle, from concept through delivery of
          next-generation applications and customizable solutions. Strong
          ability to analyze code and engineer well-researched, cost-effective,
          and responsive solutions. Goal-driven, resourceful, creative
          problem-solver with a passion for lifelong learning and development.
        </p>

        <h3 className="text-xl font-bold my-4 sm:text-center">EDUCATION</h3>
        <ul className="pl-6 mb-8 sm:text-center">
          <li>Software Development Certificate | Upright Education - 2023</li>
          <li>WSET Level 2 Certificate - 2018</li>
          <li>B.S Music Business and Industry | Lyndon State College - 2017</li>
        </ul>

        <h3 className="text-xl font-bold mb-5 md:px-30">TECHNICAL SKILLS</h3>
        <div className="flex flex-wrap justify-center md:px-20 ">
          <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 m-2">
            <span className="text-lg font-semibold">JavaScript</span>
          </div>
          <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 m-2">
            <span className="text-lg font-semibold">HTML & CSS</span>
          </div>
          <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 m-2">
            <span className="text-lg font-semibold">Node.js</span>
          </div>
          <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 m-2">
            <span className="text-lg font-semibold">React</span>
          </div>
          <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 m-2">
            <span className="text-lg font-semibold">Material-UI</span>
          </div>
          <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 m-2">
            <span className="text-lg font-semibold">Heroku</span>
          </div>
          <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 m-2">
            <span className="text-lg font-semibold">Git/GitHub</span>
          </div>
          <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 m-2">
            <span className="text-lg font-semibold">CI/CD</span>
          </div>
          <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 m-2">
            <span className="text-lg font-semibold">MongoDB</span>
          </div>
          <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 m-2">
            <span className="text-lg font-semibold">Express</span>
          </div>
          <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 m-2">
            <span className="text-lg font-semibold">Firebase</span>
          </div>
          <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 m-2">
            <span className="text-lg font-semibold">Linux/Unix</span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4 my-10">TECHNICAL PROJECTS</h3>
        <ul className="pl-6 mb-8">
          <li className="sm:text-center">
            <h4 className="font-bold">
              Project Manager/Software Developer | Cosmable | April 2023
            </h4>
            <ul className="pl-6">
              <li>Integrated Instagram Graph API for use in our application</li>
              <li>
                Managed team to create fully functioning application using
                Javascript, React, and HTML/CSS
              </li>
              <li>
                Delegated tasks and managed weekly sprints to ensure production
                timelines have been met
              </li>
              <li>
                Communicated with client to ensure all product needs were being
                met
              </li>
              <li>
                Incorporated Agile Methodology to streamline production and keep
                goals clear
              </li>
              <li>Provided support as needed to different production teams</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-bold mb-4 my-12">
          PROFESSIONAL EXPERIENCE
        </h3>
        <ul className="pl-6 mb-8">
          <li>
            <h4 className="font-bold">
              Sales Representative | Baker Distributing | January 2017 - January
              2023
            </h4>
            <ul className="">
              <li>
                Built and maintained relationships with customers, including
                bars, restaurants, and retail stores.
              </li>
              <li>
                Sold beer, wine, and non-alcoholic beverages to customers while
                providing excellent customer service.
              </li>
              <li>
                Conducted market research to identify potential new customers
                and developed strategies to build lasting relationships.
              </li>
              <li>Stayed up-to-date on industry trends and developments.</li>
              <li>
                Utilized WSET Level 2 Certification to provide expert advice and
                recommendations to customers.
              </li>
              <li>Ensured accurate and timely delivery of orders.</li>
              <li>
                Managed inventory levels to avoid stockouts or overstocking.
              </li>
              <li>
                Worked closely with the customer service team to resolve any
                issues or concerns that customers may have had.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
