import { useState, useEffect } from 'react';
import { Box, ProjectsCard, TextContainer } from './ProjectsListStyle';
import { getProjectRequest } from '../../../apiServices/proyectsServices';

interface Project {
  title: string;
  description: string;
  image: Buffer;
}

const ProjectsList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isReversed, setIsReversed] = useState(false);

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
      {projects.map((project, index) => (
        <ProjectsCard
          key={project.title}
          isReversed={index % 2 === 1 ? !isReversed : isReversed}  >
          <Box> 
            <img src={`http://localhost:3000/api/v1/projects/${project.title}/image`} alt={project.title}/>
          </Box>
          <Box> 
          <TextContainer>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </TextContainer>          
          </Box>
         
        </ProjectsCard>
      ))}
    </>
  );
};

export default ProjectsList;