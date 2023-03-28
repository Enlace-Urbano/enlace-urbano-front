import { useState, useEffect } from 'react';
import axios from 'axios';
import { WorkersListStyle } from './WorkersListStyle';

interface Worker {
  name: string;
  role: string;
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
    <WorkersListStyle>
      <h3>Workers</h3>
      <ul>
        {workers.map(worker => (
          <li key={worker.name}>
            <h3>Nombre {worker.name}</h3>
            <p>Rol  {worker.role}</p>
            <img src={`http://localhost:3000/api/v1/workers/${worker.name}/image`} alt={worker.name} />
          </li>
        ))}
      </ul>
    </WorkersListStyle>
  );
}

export default WorkersList;