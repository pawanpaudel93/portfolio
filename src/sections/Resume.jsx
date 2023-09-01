import { SectionTitle } from "@/components";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <SectionTitle title="Resume" description="Check My Resume" />

        <div className="flex max-lg:flex-col">
          <div>
            <h3 className="text-[26px] font-bold my-4">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Pawan Paudel</h4>
              <p>
                <em>
                  I am a passionate, enthusiast, focused and self taught
                  developer with over 3 years of freelance experience working
                  with different web2 technologies. I have also spent over 1
                  year exploring different web3 technologies.
                </em>
              </p>
            </div>
            <h3 className="text-[26px] font-bold my-4">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Computer Engineering</h4>
              <h5>2015 - 2019</h5>
              <p>
                <em>
                  Institute of Engineering, Pashchimanchal Campus, Pokhara
                </em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Higher Secondary</h4>
              <h5>2012 - 2013</h5>
              <p>
                <em>Gurukul National College, Kathmandu</em>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[26px] font-bold my-4">Working Experience</h3>
            <div className="resume-item">
              <h4>Part-Time Developer at Longview Labs</h4>
              <h5>Jan 2023 - Present</h5>

              <ul>
                <li>
                  Developed a web app called{" "}
                  <a href="https://ella.social" target="_blank">
                    ella.social
                  </a>{" "}
                  that permanently backs up Instagram photos to{" "}
                  <a href="https://arweave.org/" target="_blank">
                    Arweave
                  </a>
                  .
                </li>
                <li>
                  Created a web app called{" "}
                  <a href="https://dragondeploy.xyz/" target="_blank">
                    dragondeploy
                  </a>{" "}
                  with{" "}
                  <a href="https://ar.io/arns/" target="_blank">
                    ArNS
                  </a>{" "}
                  support, allowing users to deploy web apps to{" "}
                  <a href="https://arweave.org/" target="_blank">
                    Arweave
                  </a>
                  . Also wrote Python code to display deployment statistics
                  using GitHub Actions.
                </li>
                <li>
                  Developed a web app called{" "}
                  <a href="https://mediamoat.vercel.app/" target="_blank">
                    Media Moat
                  </a>{" "}
                  that uploads photos permanently to{" "}
                  <a href="https://arweave.org/" target="_blank">
                    Arweave
                  </a>{" "}
                  using{" "}
                  <a href="https://othent.io/" target="_blank">
                    Othent
                  </a>
                  .
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Freelancer Software Developer</h4>
              <h5>Apr 2020 - Mar 2023</h5>

              <ul>
                <li>
                  Worked on various Python Automation projects using Selenium
                  and created a dashboard with Django to display statistics for
                  all those projects.
                </li>
                <li>
                  Developed a web app using Flask APIs and VueJS to control
                  different servers running Selenium automation code.
                </li>
                <li>
                  Created{" "}
                  <a href="https://heliumcontrol.com/" target="_blank">
                    HeliumControl
                  </a>
                  , a project using Django Rest Framework (DRF) and VueJS, to
                  manage and visualize statistics of different Helium hotspots.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Freelance at Freelancer.com</h4>
              <h5>Jan 2020 - Apr 2020</h5>

              <ul>
                <li>
                  Worked on various projects related to Python, Django,
                  JavaScript, Machine Learning, and more.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
