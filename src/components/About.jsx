import { EthersSvg } from "@/assets";
import {
  DjangoSvg,
  FlaskSvg,
  HardhatSvg,
  NextSvg,
  NodeSvg,
  NuxtSvg,
  PostgresqlSvg,
  PythonSvg,
  ScrapySvg,
  SeleniumSvg,
  SoliditySvg,
} from "../assets";

const skills = [
  { Icon: SoliditySvg, name: "Solidity" },
  { Icon: HardhatSvg, name: "Hardhat" },
  { Icon: EthersSvg, name: "Ethers.js" },
  { Icon: PythonSvg, name: "Python" },
  { Icon: NodeSvg, name: "NodeJS" },
  { Icon: DjangoSvg, name: "Django Rest Framework" },
  { Icon: FlaskSvg, name: "Flask" },
  { Icon: NextSvg, name: "NextJS" },
  { Icon: NuxtSvg, name: "NuxtJS" },
  { Icon: PostgresqlSvg, name: "PostgreSQL" },
  { Icon: SeleniumSvg, name: "Selenium" },
  { Icon: ScrapySvg, name: "Scrapy" },
];

export default function About() {
  return (
    <section id="about" className="about">
      {/* <!-- ======= About Me ======= --> */}
      <div className="about-me container">
        <div className="section-title">
          <h2>About</h2>
          <p>Learn more about me</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="img/me.png" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Freelance Software Developer</h3>
            <p className="fst-italic">
              Hi, I am Pawan, a passionate, enthusiast, focused and self taught
              developer with over 3 years of freelance experience working with
              different web2 technologies and over 1 year of experience playing
              around with different web3 technologies.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong>{" "}
                    <span>
                      <a href="https://pawanpaudel.com.np" target="_blank">
                        https://pawanpaudel.com.np
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong>{" "}
                    <span>Bachelors in Computer Engineering</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              I am working on the different web2 projects as a freelance
              developer and on the same time I am also involved in learning and
              developing projects in web3. I have participated in 5 web3
              hackathons in the past 1 year and won atleast a sponser prizes in
              all of them.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- End About Me --> */}

      {/* <!-- ======= Skills  ======= --> */}
      <div className="interests container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row">
          <div className="row">
            {skills.map((skill, index) => (
              <div className="col-lg-3 col-md-4 mt-4" key={index}>
                <div className="icon-box">
                  <i>
                    <skill.Icon style={{ height: "40px", width: "40px" }} />
                  </i>
                  <h3>{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- End Skills --> */}
    </section>
  );
}
