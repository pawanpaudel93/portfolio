import { useMemo, useState } from "react";
import {
  hackathonProjects,
  web3Projects,
  web2Projects,
} from "@/utils/projects";
import { SectionTitle, TextBox, PortfolioModal } from "@/components";

const Tabs = ["All", "Hackathons", "Web3", "Web2"];

export default function Portfolio() {
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const projects = useMemo(() => {
    if (activeTab === "All") {
      return hackathonProjects.concat(web3Projects, web2Projects);
    } else if (activeTab === "Web3") {
      return hackathonProjects.concat(web3Projects);
    } else if (activeTab === "Hackathons") {
      return hackathonProjects;
    } else {
      return web2Projects;
    }
  }, [activeTab]);

  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <SectionTitle title="Portfolio" description="My Works" />

          <div className="flex items-center justify-center">
            <ul className="flex gap-1 p-0 mx-auto mb-[15px] text-center rounded-[50px] py-[2px] px-[15px]">
              {Tabs.map((tab, index) => (
                <li
                  key={index}
                  className={`cursor-pointer inline-block py-[6px] px-3 text-[14px] font-[600] uppercase mb-[10px] mx-[3px] rounded-md hover:bg-[#18d26e] ${
                    activeTab === tab ? "bg-[#18d26e]" : "bg-[#ffffff1a]"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {projects.map((project, index) => (
              <div
                className="border-[1px] border-[#18d26e] px-[5px] m-2 relative group z-0"
                key={index}
              >
                <div>
                  {project.image ? (
                    <img
                      src={project.image}
                      className="h-[300px] w-full"
                      alt={project.title}
                    />
                  ) : (
                    <TextBox title={project.title} />
                  )}

                  <div className="hidden group-hover:block">
                    <div className="absolute top-0 left-0 h-full w-full bg-black opacity-80"></div>
                    <div className="absolute top-0 left-0 h-full w-full flex flex-col gap-1 items-center justify-center text-center px-3 z-20 animate-slideUpEnter">
                      <h4 className="text-xl font-[500] font-poppins text-primary">
                        {project.title}
                      </h4>
                      <p className="text-slate-300">{project.description}</p>
                      <div className="mt-[5px]">
                        <button
                          type="button"
                          className="py-1 px-4 bg-[#18d26e] rounded-md hover:opacity-90"
                          onClick={() => setProject(project)}
                        >
                          Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {project && <PortfolioModal project={project} setProject={setProject} />}
    </>
  );
}
