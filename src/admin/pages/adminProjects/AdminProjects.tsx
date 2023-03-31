import { useState } from 'react';
import axios from 'axios';
import { AdminProjectsStyle } from './AdminProjectsStyle';
import { Button, Title } from '../../../elements/Index';
import { ProjectsList } from '../../components/index';

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
      const res = await axios.post('http://localhost:3000/api/v1/projects/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminProjectsStyle>
      <Title label={'Crea un nuevo Proyecto'} />
      <form onSubmit={handleSubmit}>
        <input placeholder={'Título del proyecto'} type="text" value={title} onChange={(e) => setName(e.target.value)} />
        <input placeholder={'Descripción'} type="text" value={description} onChange={(e) => setRole(e.target.value)} />
        <input type="file" accept=".png" onChange={(e) => setImage((e.target.files as FileList)[0])} />
        <Button type="submit" label='Crear ' />
      </form>
      <div>
        <Title label={'Elimina o edita un proyecto'} />
        <ProjectsList />
      </div>
    </AdminProjectsStyle>
  );
}

export default Projects;