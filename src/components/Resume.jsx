export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Check My Resume</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Pawan Paudel</h4>
              <p>
                <em>
                  Passionate, enthusiast, focused and self taught developer with
                  2+ years of freelance experience working with different web2
                  technologies and nearly 1 year of experience playing around
                  with different web3 technologies.
                </em>
              </p>

              <ul>
                <li>***REMOVED***</li>
                <li>***REMOVED***</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
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
          <div className="col-lg-6">
            <h3 className="resume-title">Working Experience</h3>
            <div className="resume-item">
              <h4>Freelancer Software Developer</h4>
              <h5>Apr 2020 - Present</h5>
              {/* <!-- <p><em>Experion, New York, NY </em></p> --> */}

              <ul>
                <li>
                  Worked on different Python Automation projects using Selenium
                  & created dashboard with Django for all the projects.
                </li>
                <li>
                  Created a web app to control the different servers and the
                  automation with Flask APIs and Vue.
                </li>
                <li>
                  Worked on a project called HeliumControl created using Django
                  Rest Framework (DRF) and Vue to manage and visualize the stats
                  of different helium hotspots.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Freelance at Freelancer.com</h4>
              <h5>Jan 2020 - Apr 2020</h5>
              {/* <!-- <p><em>Stepping Stone Advertising, New York, NY</em></p> --> */}

              <ul>
                <li>
                  Worked on different projects related to Python, Django,
                  JavaScript, Machine Learning etc
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
