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
      <h2>All Data</h2>
      {console.log(users)}
      {users && users.map((ele) => {
        return(
        <div className="card w-50 mx-auto" key={ele.key}>
          <div className="card-body">
            <h5 className="card-title">{ele.name}</h5>
            <p className="card-text">{ele.email}</p>
          </div>
        </div>
        );
      })}
    </>
  );
};

export default Read;
