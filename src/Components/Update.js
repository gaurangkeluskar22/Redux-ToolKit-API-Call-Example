import { useEffect, useState } from "react";
import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import {  useDispatch,useSelector } from "react-redux";
import { updateUser } from "../Features/userDetailSlice";
const Update = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateData, setUpdateData] = useState();
  const { users, loading } = useSelector((state) => state.app);
  

  useEffect(() => {
    if(id){
    const singleUser = users.filter((ele) => ele.id === id);
    setUpdateData(singleUser[0]);
   }
  }, []);

  const newData=(e)=>{
    setUpdateData({...updateData,[e.target.name]:e.target.value});
  }

  const handleUpdate =(e) =>{
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate('/read');
  }
  

  return (
    <form className="w-50 m-5 mx-auto" onSubmit={handleUpdate}>
      <div className="form-group my-1">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter Name"
          defaultValue={updateData && updateData.name}
          onChange={newData}
          
        />
      </div>
      <div className="form-group my-1">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          name="email"
          defaultValue={updateData && updateData.email}
          onChange={newData}
        />
      </div>
      <div className="form-group my-1">
        <label for="exampleInputEmail1">Age</label>
        <input
          type="number"
          name="age"
          className="form-control"
          placeholder="Enter Age"
           onChange={newData}
          defaultValue={updateData && updateData.age}
        />
      </div>
      <div className="w-5">
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            defaultChecked={updateData && updateData.gender=="Male"}
            onChange={newData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            defaultChecked={updateData && updateData.gender=="Female"}
            onChange={newData}
          />
          <label className="form-check-label">Female</label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary my-1">
        Submit
      </button>
    </form>
  );
};

export default Update;
