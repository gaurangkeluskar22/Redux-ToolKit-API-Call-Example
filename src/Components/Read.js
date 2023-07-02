import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../Features/userDetailSlice";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <h2>All Users Data</h2>
      {console.log(users)}
      {users &&
        users.map((ele) => {
          return (
            <div className="card w-50 mx-auto m-2" key={ele.id}>
              <div className="card-body">
                <h5 className="card-title">Name : {ele.name}</h5>
                <p className="card-text">Email ID : {ele.email}</p>
                <div className="row">
                  <div className="col-lg-6">
                    <p className="card-text">Gender : {ele.gender}</p>
                  </div>
                  <div className="col-lg-6">
                    <p className="card-text">Age : {ele.age}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <button className="card-text btn btn-primary">Edit</button>
                  </div>
                  <div className="col-lg-6">
                    <button className="card-text btn btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Read;
