import { useState } from 'react';
import { postProjectRequest } from '../../../apiServices/proyectsServices';
import { AdminForm, AdminProjectsStyle, EditProjects, InputProject } from './AdminProjectsStyle';
import { Button, Input, Title } from '../../../elements/index';
import { ProjectsList } from '../../components/index';
import TextArea from '../../../elements/textarea/Textarea';

const Projects = () => {
  const [title, setName] = useState('');
  const [description, setRole] = useState('');
  const [image, setImage] = useState<undefined | Blob>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image !== undefined)
    formData.append('image', image);
    try {
      const res = postProjectRequest(formData)
      }
     catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminProjectsStyle>
      <Title label={'Crea un nuevo Proyecto'} />
      <AdminForm onSubmit={handleSubmit}>
        <InputProject placeholder={'Título del proyecto'} type="text" value={title} onChange={(e) => setName(e.target.value)} required/>
        <TextArea placeholder={'Descripción'} type="text" value={description} onChange={(e) => setRole(e.target.value)} name={''} required/>
        <input type="file" accept=".png" onChange={(e) => setImage((e.target.files as FileList)[0])} />
        <Button type="submit" label='Crear ' />
      </AdminForm>
      <EditProjects>
        <Title label={'Elimina o edita un proyecto'} />
        <ProjectsList />
      </EditProjects>
    </AdminProjectsStyle>
  );
}

export default Projects;