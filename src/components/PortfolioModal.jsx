import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import TextSvg from "./TextSvg";
import { CloseSvg } from "@/assets";

export default function PortfolioModal({ project, setProject }) {
  function closeModal() {
    setProject(null);
  }

  return (
    <Transition appear show={!!project} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-[#2b2b2b] p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="flex justify-between text-lg font-medium leading-6 text-white-900 pb-3"
                >
                  <span>{project.title}</span>
                  <CloseSvg
                    className="h-4 cursor-pointer w-max transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-150"
                    onClick={() => setProject(null)}
                  />
                </Dialog.Title>
                <Dialog.Description>
                  <div className="flex max-lg:flex-col gap-3">
                    <div className="flex items-center justify-center">
                      {project.image ? (
                        <img
                          className="h-[300px] w-auto rounded-md"
                          src={project.image}
                          alt={`${project.title} image`}
                        />
                      ) : (
                        <TextSvg title={project.title} />
                      )}
                    </div>

                    <div className="flex flex-1 flex-col gap-3 items-center justify-start">
                      <h3 className="text-xl font-bold font-poppins">
                        Project information
                      </h3>
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
                              className="text-main"
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
                            className="text-main"
                          >
                            {project.github}
                          </a>
                        </li>
                      </ul>

                      <p>{project.description}</p>
                    </div>
                  </div>
                </Dialog.Description>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
