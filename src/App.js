import './App.css';
  
// Example of a data array that
// you might receive from an API
const data = [
  {
    "id": "1",
    "last_name": "tsaktsira",
    "first_name": "zacharenia",
    "is_active": "true",
    "date_of_birth": "1998-09-28"
},{
  "id": "2",
  "last_name": "anastasopoulou",
  "first_name": "aggeliki",
  "is_active": "true",
  "date_of_birth": "1997-01-28"
},{
  "id": "3",
  "last_name": "tzovaras",
  "first_name": "giorgis",
  "is_active": "true",
  "date_of_birth": "1998-08-18"
}
]
  
function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>ID</th>
          <th>LAST_Name</th>
          <th>FIRST_NAME</th>
          <th>IS_ACTIVE</th>
          <th>DATE_OF_BIRTH</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.last_name}</td>
              <td>{val.first_name}</td>
              <td>{val.is_active}</td>
              <td>{val.date_of_birth}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}
  
export default App;
