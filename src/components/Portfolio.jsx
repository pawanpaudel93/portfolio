import { useState } from "react";
import { hackathons } from "../projects";
import PortfolioModal from "./PortfolioModal";

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
            {hackathons.map((hackathon, index) => (
              <div
                className="col-lg-4 col-md-6 portfolio-item filter-web3 filter-web3-hackathon"
                key={index}
              >
                <div className="portfolio-wrap">
                  <img src={hackathon.image} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>{hackathon.title}</h4>
                    <p>{hackathon.description}</p>
                    <div style={{ marginTop: "5px" }}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolioModal"
                        onClick={() => {
                          setProject(hackathon);
                        }}
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-4 col-md-6 portfolio-item filter-web3">
              <div className="portfolio-wrap">
                <img
                  src="img/portfolio/portfolio-6.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a
                      href="img/portfolio/portfolio-6.jpg"
                      data-gallery="portfolioGallery"
                      title="App 3"
                      target="_blank"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                    <a
                      href="portfolio-details.html"
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                      target="_blank"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PortfolioModal project={project} />
    </>
  );
}
