
import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Table } from "./Table";
function App() {
  const [data, setData] = useState(null);
  const GetFormData = (recievedData) => {
    setData(recievedData);
  };

  const Getdata = () => {
    fetch("http://localhost:3001/forms")
      .then((e) => e.json())
      .then((e) => setData(e));
  };

  const deleteData = (id) => {
    fetch(`http://localhost:3001/forms/${id}`, {
      method: "DELETE",
    }).then(() => Getdata());
  };

  return (
    <div className="App">
      <Form GetFormData={GetFormData} />
      <Table data={data} deleteData={deleteData} />
    </div>
  );
}

export default App;