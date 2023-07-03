import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import {  useSelector } from "react-redux";

const Update = () => {
  const {id} = useParams();
  const [updateData, setUpdateData] = useState();
  const { users, loading } = useSelector((state) => state.app);
  

  useEffect(() => {
    if(id){
    const singleUser = users.filter((ele) => ele.id === id);
    setUpdateData(singleUser[0]);
    }
  }, []);

  

  return (
    <form className="w-50 m-5 mx-auto">
      <div className="form-group my-1">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter Name"
          value={updateData.name}
          //onChange={}
        />
      </div>
      <div className="form-group my-1">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          name="email"
          value={updateData.email}
          //onChange={}
        />
      </div>
      <div className="form-group my-1">
        <label for="exampleInputEmail1">Age</label>
        <input
          type="number"
          name="age"
          className="form-control"
          placeholder="Enter Age"
          // onChange={}
          value={updateData.age}
        />
      </div>
      <div className="w-5">
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            //onChange={}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            //onChange={}
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
