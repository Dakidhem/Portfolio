import projects_info from "../../utils/projects_info";
import Project from "./project";
export default function Projects() {
  return (
    <section className="p-10">
      <h3 className="text-teal-700 text-3xl font-burtons font-bold">
        My Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-4">
        {projects_info.map((project) => {
          return <Project key={project.project_id} project={project} />;
        })}
      </div>
    </section>
  );
}
