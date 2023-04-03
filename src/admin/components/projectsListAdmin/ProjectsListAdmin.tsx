import { useState, useEffect } from 'react';
import { Box, ProjectsCard, TextContainer } from './ProjectsListAdminStyle';
import { baseProjectsUrl, deleteProjectRequest, getProjectRequest } from '../../../apiServices/projectsServices';

interface Project {
  title: string;
  description: string;
  image: Buffer;
}

const ProjectsList = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [isReversed, setIsReversed] = useState(false)

  useEffect(() => {
    getProjectRequest()
      .then(response => {
        setProjects(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])


  const handleDeleteProjects = async (title: string) => {
    try {
      await deleteProjectRequest(title);
      setProjects (projects.filter((project) => project.title !== title));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {projects.map((project, index) => (
        <ProjectsCard
          key={project.title}
          isReversed={index % 2 === 1 ? !isReversed : isReversed}  >
          <Box>
            <img src={`${baseProjectsUrl + project.title}/image`} alt={project.title} />
          </Box>
          <Box>
            <TextContainer>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <button onClick={() => handleDeleteProjects(project.title)} > Eliminar</button>

            </TextContainer>
          </Box>
        </ProjectsCard>
      ))}
    </>
  )
}

export default ProjectsList;