import { useState, useEffect } from 'react';
import { ProjectsCard, ProjectsListStyle, TextContainer  } from './ProjectsListStyle';
import { baseProjectsUrl, getProjectRequest } from '../../../apiServices/proyectsServices';

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
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  return (
    <>
    <ProjectsListStyle>
        {projects.map(project => (
          <ProjectsCard key={project.title}>
            <img src={`${baseProjectsUrl}${project.title}/image`} alt={project.title} />
            <TextContainer>
            <h1>{project.title}</h1>
            <p>{project.description}</p> 
            </TextContainer>
          </ProjectsCard>
        ))}
  
    </ProjectsListStyle>
    </>
  );
}

export default ProjectsList;