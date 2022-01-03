import { useEffect, useState } from "react"
import displayimage from "./images/vs.png";
export const Form = ({GetFormData}) => {
    useEffect(() => {
        fetch("http://localhost:3001/forms")
          .then((e) => e.json())
          .then((e) => GetFormData(e));
      }, []);
    const [form,setForm] =useState({
        name:"",
        age:"",
        department:"",
        salary:"",
        file:"",



    });
    const handleChange =(e) =>{
        const {value,name} =e.target;
        setForm({
            ...form,
            [name]: e.target.type === "checkbox" ? e.target.checked :value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/forms", {
          method: "POST",
          body: JSON.stringify(form),
          headers: { "Content-Type": "application/json" },
        }).then(() => fetchdata());
      };
      const fetchdata = () => {
        fetch("http://localhost:3001/forms")
          .then((e) => e.json())
          .then((e) => GetFormData(e));
      };
      const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setForm({ ...form, file: reader.result });
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      };
    
      const salarySort = (val) => {
        fetch(`http://localhost:3001/forms?_sort=Salary&_order=${val}`)
          .then((e) => e.json())
          .then((e) => GetFormData(e));
      };
    
    
    return (
        <>
        <img
        src={form.file || displayimage}
        alt="displayimage"
        style={{ width: "100px", borderRadius: "50%" }}
      ></img>
        <form onSubmit={handleSubmit}>
        <input  onChange={handleChange}  name="name" type="text" placeholder="enter name"/><br/>
        <input  onChange={handleChange} type="number" name="age" placeholder="enter age"/> <br/>
        <input  onChange={handleChange}  type="text" name="address" placeholder="enter adress"/><br/>
        
        <label>department</label>
        <select onChange={handleChange} name="department">
        <option>science</option>
        <option>commerce</option>
        <option default>arts</option>
        </select><br/>
        <input type="number"  name="salary"  placeholder="enter salary"/><br/>
         <label>maratial status</label><br/>

         <input onChange={handleChange}  type="checkbox"  name="single"/>
         <label>single</label>
         <input onChange={handleChange}  type="checkbox"  name="single"/>
         <label>married</label><br/>
         <input onChange={imageHandler} type="file" name="ProfileImage"></input><br/>
        <input type="submit"></input>
        </form>
        <button onClick={() => salarySort("asc")}>Salary Low to High</button>
      <button onClick={() => salarySort("desc")}>Salary High to Low</button>
      </>
    );
}