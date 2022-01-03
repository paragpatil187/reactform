
import displayimage from "./images/vs.png";
export const Tabledata = ({ data, deleteData }) => {
  return (
    <>
      <div className="TableItemclass">
        <div>
           <img src={data.file || displayimage} alt="displayimage"></img>
         </div>
        <div>
          <p>Name : {data.name}</p>
          <p>Age : {data.age}</p>
          <p>Address : {data.address}</p>
          <p>Department : {data.department}</p>
          <p>Salary : {data.salary}</p>
          <p>
            Martial Status :{" "}
            {data?.single
              ? "Single"
              : data.married
              ? "Married"
              : "Not Avaliable"}
          </p>
        </div>
        <div>
          <button className="deleteButton" onClick={() => deleteData(data.id)}>
            X
          </button>
        </div>
      </div>
     
    </>
  );
};