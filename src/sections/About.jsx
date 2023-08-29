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
  EthersSvg,
} from "@/assets";
import { SectionTitle } from "@/components";

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
      <div className="container">
        <SectionTitle title="About" description="Learn more about me" />

        <div className="flex max-lg:flex-col max-lg:justify-center">
          <img src="img/me.png" className="h-auto max-lg:w-1/2 w-1/3" alt="" />

          <div className="pt-4">
            <h3 className="font-bold text-[#18d26e] text-[26px] tracking-wide">
              Freelance Software Developer
            </h3>
            <p className="italic">
              Hi, I am Pawan, a passionate, enthusiast, focused and self taught
              developer with over 3 years of freelance experience working with
              different web2 technologies and over 1 year of experience playing
              around with different web3 technologies.
            </p>
            <div className="flex my-3 gap-3 justify-evenly flex-wrap">
              <div>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong>{" "}
                    <span>
                      <a
                        href="https://pawanpaudel.com.np"
                        className="text-[#18d26e]"
                        target="_blank"
                      >
                        https://pawanpaudel.com.np
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong>{" "}
                    <span>Bachelors in Computer Engineering</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-4">
              I am working on the different web2 projects as a freelance
              developer and on the same time I am also involved in learning and
              developing projects in web3. I have participated in 6 web3
              hackathons in the past 1 year and won atleast a sponser prizes in
              all of them.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- End About Me --> */}

      {/* <!-- ======= Skills  ======= --> */}
      <div className="container">
        <SectionTitle title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3">
          {skills.map((skill, index) => (
            <div className="mt-4" key={index}>
              <div className="flex items-center p-3 bg-[#ffffff14] transition gap-2">
                <i>
                  <skill.Icon className="h-10 w-10" />
                </i>
                <h3>{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- End Skills --> */}
    </section>
  );
}
