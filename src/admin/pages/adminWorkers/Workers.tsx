import { postWorkersRequest } from '../../../apiServices/workersServices';
import { InputWorker, WorkersForm, WorkersListContainer, WorkersStyle } from './WorkersStyle';
import { Button, Title } from '../../../elements/index';
import { WorkersList } from '../../components/index';
import { useState } from 'react';

const Workers = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [profession, setProfession] = useState('');
  const [image, setImage] = useState<undefined | Blob>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('role', role);
    formData.append('profession', profession);
    if (image !== undefined)
    formData.append('image', image);
    try {
      const res = postWorkersRequest(formData)
      }
     catch (error) {
      console.log(error);
    }
  };

  return (
    <WorkersStyle>
      <Title label={'Crea un nuevo integrante'} />
      <WorkersForm onSubmit={handleSubmit}>
        <InputWorker placeholder={'Nombre y apellido'} type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        <InputWorker placeholder={'Rol dentro de la ONG'} type="text" value={role} onChange={(e) => setRole(e.target.value)} required/>
        <InputWorker placeholder={'Profesión'} type="text" value={profession} onChange={(e) => setProfession(e.target.value)} required/>
        <input type="file" accept=".png" onChange={(e) => setImage((e.target.files as FileList)[0])} required/>
        <Button type="submit" label='Crear '/>
      </WorkersForm>
      <WorkersListContainer>
        <Title label={'Elimina o edita un integrante'} />
        <WorkersList />
      </WorkersListContainer>
    </WorkersStyle>
  );
}

export default Workers;


