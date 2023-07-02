import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../Features/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState({});

  const getUsersData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <form className="w-50 m-5 mx-auto" onSubmit={handleSubmit}>
      <div className="form-group my-1">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter Name"
          onChange={getUsersData}
        />
      </div>
      <div className="form-group my-1">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          name="email"
          onChange={getUsersData}
        />
      </div>
      <div className="form-group my-1">
        <label for="exampleInputEmail1">Age</label>
        <input
          type="number"
          name="age"
          className="form-control"
          placeholder="Enter Age"
          onChange={getUsersData}
        />
      </div>
      <div className="w-5">
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            onChange={getUsersData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            onChange={getUsersData}
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

export default Create;
