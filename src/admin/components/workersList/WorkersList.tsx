import { useState, useEffect } from 'react';
import { WorkersListStyle, WorkersName, WorkersUl } from './WorkersListStyle';
import { Button } from '../../../elements/Index';
import { getWorkersRequest, deleteWorkersRequest } from '../../../apiServices/workersServices';

interface Worker {
  name: string;
  role: string;
  profession: string;
  image: Buffer;
}

const WorkersList = ()=> {
  const [workers, setWorkers] = useState<Worker[]>([]);

  useEffect(() => {
    getWorkersRequest()
      .then(response => {
        setWorkers(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDeleteWorker = async (name: string) => {
    try {
      await deleteWorkersRequest(name);
      setWorkers(workers.filter((worker) => worker.name !== name));
    } catch (error) {
      console.log(error);
    }
  };
  
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
            <button onClick={() => handleDeleteWorker(worker.name)} > eliminar</button>
          </li>
        ))}
      </WorkersUl>
      <Button label={'Guardar cambios'}/> 
    </WorkersListStyle>
    </>
  );
}

export default WorkersList;


// import { useState, useEffect } from 'react';
// import { WorkersListStyle, WorkersName, WorkersUl } from './WorkersListStyle';
// import { Button } from '../../../elements/Index';
// import { getWorkersRequest } from '../../../apiServices/workersServices';

// interface Worker {
//   name: string;
//   role: string;
//   profession: string;
//   image: Buffer;
// }

// const WorkersList = ()=> {
//   const [workers, setWorkers] = useState<Worker[]>([]);

//   useEffect(() => {
//     getWorkersRequest()
//       .then(response => {
//         setWorkers(response.data);
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);
  
//   return (
//     <>
//     <WorkersListStyle>
//       <h3>Equipo de Enlace Urbano</h3>
//       <WorkersUl>
//         {workers.map(worker => (
//           <li key={worker.name}>
//             <img src={`http://localhost:3000/api/v1/workers/${worker.name}/image`} alt={worker.name} />
//             <WorkersName>{worker.name}</WorkersName>
//             <h4>{worker.role}</h4>
//             <p>{worker.profession}</p>
//           </li>
//         ))}
//       </WorkersUl>
//       <Button label={'Guardar cambios'}/> 
//     </WorkersListStyle>
//     </>
//   );
// }

// export default WorkersList;