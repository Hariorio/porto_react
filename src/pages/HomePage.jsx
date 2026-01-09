import { useState } from 'react';



const HomePage = () => {
 const [users, setUsers] = useState([
    { id: 1, name: "Ade" },
    { id: 2, name: "Budi" },
  ]);
  
  function handleEdit(user) {
    console.log('Edit user:', user);
  }

return (
    <div>
      <div>Home Page</div>
       <h4>Data User</h4>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th> 
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>



       {/* {users.map((user) => (
        <span key={user.id} style={{ marginRight: 12 }}>
          Nama: {user.name}
        </span>
      ))} */}
    </div>  
  )
}

export default HomePage