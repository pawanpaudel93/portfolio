import { useState } from "react";
import {
  hackathonProjects,
  web3Projects,
  web2Projects,
} from "@/utils/projects";
import PortfolioModal from "./PortfolioModal";
import TextSvg from "./TextSvg";

export default function Portfolio() {
  const [project, setProject] = useState();
  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-web3">Web3</li>
                <li data-filter=".filter-web3-hackathon">Hackathons</li>
                <li data-filter=".filter-web2">Web2</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container">
            {hackathonProjects.map((project, index) => (
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-web3 filter-web3-hackathon"
                key={index}
              >
                <div className="portfolio-wrap">
                  {project.image ? (
                    <img
                      src={project.image}
                      className="img-fluid"
                      alt={project.title}
                      width="100%"
                      style={{
                        height: "300px",
                      }}
                    />
                  ) : (
                    <TextSvg title={project.title} />
                  )}
                  <div className="portfolio-info">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div style={{ marginTop: "5px" }}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolioModal"
                        onClick={() => {
                          setProject(project);
                        }}
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {web3Projects.map((project, index) => (
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-web3"
                key={index}
              >
                <div className="portfolio-wrap">
                  {project.image ? (
                    <img
                      src={project.image}
                      className="img-fluid"
                      alt={project.title}
                      width="100%"
                      style={{
                        height: "300px",
                      }}
                    />
                  ) : (
                    <TextSvg title={project.title} />
                  )}
                  <div className="portfolio-info">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div style={{ marginTop: "5px" }}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolioModal"
                        onClick={() => {
                          setProject(project);
                        }}
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {web2Projects.map((project, index) => (
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-web2"
                key={index}
              >
                <div className="portfolio-wrap">
                  {project.image ? (
                    <img
                      src={project.image}
                      className="img-fluid"
                      alt={project.title}
                      width="100%"
                      style={{
                        height: "300px",
                      }}
                    />
                  ) : (
                    <TextSvg title={project.title} />
                  )}
                  <div className="portfolio-info">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div style={{ marginTop: "5px" }}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolioModal"
                        onClick={() => {
                          setProject(project);
                        }}
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PortfolioModal project={project} />
    </>
  );
}
