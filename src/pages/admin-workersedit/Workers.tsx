import  { useState } from 'react';
import axios from 'axios';

const Workers= () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e:any) => {
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
    <div>
      <h1>Create Worker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Role:
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" accept=".png" onChange={(e) => setImage(e.target.files[0])} />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Workers;