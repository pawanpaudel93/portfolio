export default function PortfolioModal({ project }) {
  return (
    <div
      className="modal fade"
      id="portfolioModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="portfolioModal"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-xl"
        role="document"
      >
        {project && (
          <div
            className="modal-content"
            style={{ background: "rgba(0, 0, 0, 0.8)" }}
          >
            <div className="modal-header">
              <h2 className="modal-title portfolio-title" id="ModalLongTitle">
                {project.title}
              </h2>
              <button
                className="btn-close"
                type="button"
                style={{
                  background: `transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat`,
                }}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div id="portfolio-details" className="portfolio-details">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="portfolio-details-slider swiper">
                        <div className="swiper-wrapper align-items-center">
                          <img
                            className="img-fluid"
                            src={project.image}
                            alt={`${project.title} image`}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-8 portfolio-info">
                      <h3>Project information</h3>
                      <ul>
                        <li>
                          <strong>Name</strong>: {project.title}
                        </li>
                        {project.url && (
                          <li>
                            <strong>Hackathon URL</strong>:{" "}
                            <a
                              href={project.url}
                              title="Hackathon URL"
                              target="_blank"
                            >
                              {project.url}
                            </a>
                          </li>
                        )}
                        <li>
                          <strong>GitHub URL</strong>:{" "}
                          <a
                            href={project.github}
                            title="GitHub URL"
                            target="_blank"
                          >
                            {project.github}
                          </a>
                        </li>
                      </ul>

                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
