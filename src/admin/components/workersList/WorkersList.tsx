import { useState, useEffect } from 'react';
import axios from 'axios';
import { WorkersListStyle, WorkersName, WorkersUl } from './WorkersListStyle';
import { Button } from '../../../elements/Index';

interface Worker {
  name: string;
  role: string;
  profession: string;
  image: Buffer;
}

const WorkersList = ()=> {
  const [workers, setWorkers] = useState<Worker[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/workers/')
      .then(response => {
        setWorkers(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  return (
    <>
    <WorkersListStyle>
      <h3>Equipo de Enlace Urbano</h3>
      <WorkersUl>
        {workers.map(worker => (
          <li key={worker.name}>
            <img src={`http://localhost:3000/api/v1/workers/${worker.name}/image`} alt={worker.name} />
            <WorkersName>{worker.name}</WorkersName>
            <h4>{worker.role}</h4>
            <p>{worker.profession}</p>
          </li>
        ))}
      </WorkersUl>
      <Button label={'Guardar cambios'}/> 
    </WorkersListStyle>
    </>
  );
}

export default WorkersList;