import { useEffect, useState } from "react";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(
          "api/projects"
        );
        const resData = await res.json();
        setProjects(resData);
      } catch (error: any) {
        new Error("fetch erorr", error);
      }
    }
    fetchProjects();
  }, []);
  return (
    <section>
      <button>development</button>
      <button>design</button>
      <ul>
        {projects.map((project: any) => (
          <li key={project.id}>
            <div>
              <p>
                <span>{project.category}</span>
                php / mysql
              </p>
            </div>
            <p>{project.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
