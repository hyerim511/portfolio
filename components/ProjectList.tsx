import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProjectList() {
  // const [projects, setProjects] = useState({message: ''});
  const router = useRouter();
  // const projects = router.query["projects"];
  console.log(router);


  // useEffect(() => {
  //   async function fetchProjects() {
  //     try {
  //       const res = await fetch(
  //         "api/projects"
  //       );
  //       const resData = await res.json();
  //       setProjects(resData);
  //     } catch (error: any) {
  //       new Error("fetch erorr", error);
  //     }
  //   }
  //   fetchProjects();
  // }, []);
  return (
    <section>
      <button>development</button>
      <button>design</button>
      <ul>
        {/* <p>{projects.message}</p> */}
        {/* {projects.map((project: any) => (
          <li key={project.id}>
            <div>
              <p>
                <span>{project.category}</span>
                php / mysql
              </p>
            </div>
            <p>{project.title}</p>
          </li>
        ))} */}
      </ul>
    </section>
  );
}
