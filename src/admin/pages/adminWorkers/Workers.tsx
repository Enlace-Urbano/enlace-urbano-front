import { useState } from 'react';
import axios from 'axios';
import { InputWorker, WorkersForm, WorkersListContainer, WorkersStyle } from './WorkersStyle';
import { Button, Title } from '../../../elements/Index';
import { WorkersList } from '../../components/index';

const Workers = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('role', role);
    formData.append('image', image);
    try {
      const res = await axios.post('http://localhost:3000/api/v1/workers/', formData, {
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
    <WorkersStyle>
      <Title label={'Crea un nuevo integrante'} />
      <WorkersForm onSubmit={handleSubmit}>
        <InputWorker placeholder={'Name'} type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <InputWorker placeholder={'Rol dentro de la ONG'} type="text" value={role} onChange={(e) => setRole(e.target.value)} />
        <input placeholder={'Image'} type="file" accept=".png" onChange={(e) => setImage(e.target.files[0])} />
        <Button type="submit" label='Crear ' />
      </WorkersForm>
      <WorkersListContainer>
        <Title label={'Elimina o edita un integrante'} />
        <WorkersList />
      </WorkersListContainer>
    </WorkersStyle>
  );
}

export default Workers;


