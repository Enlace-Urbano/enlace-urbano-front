import { useState, useEffect } from 'react';
import { ProjectsListStyle  } from './ProjectsListStyle';
import { Button } from '../../../elements/Index';
import { getProjectRequest } from '../../../apiServices/proyectsServices';

interface Project {
  title: string;
  description: string;
  image: Buffer;
}

const ProjectsList = ()=> {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjectRequest()
      .then(response => {
        setProjects(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  return (
    <>
    <ProjectsListStyle>
      <h3>Equipo de Enlace Urbano</h3>
      <ul>
        {projects.map(project => (
          <li key={project.title}>
            <img src={`http://localhost:3000/api/v1/projects/${project.title}/image`} alt={project.title} />
            <h1>{project.title}</h1>
            <h4>{project.description}</h4>
            
          </li>
        ))}
      </ul>
      <Button label={'Guardar cambios'}/> 
    </ProjectsListStyle>
    </>
  );
}

export default ProjectsList;