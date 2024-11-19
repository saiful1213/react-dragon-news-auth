import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto my-3">
      <div className="">{user && user?.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div>
          {user?.email ?
            <div className="flex items-center gap-3">
              {user?.photoURL ?
                <img src={user.photoURL} className="w-10 h-10 rounded-full object-contain" />
                : <img src={userIcon} />}
              <h1>{user?.displayName}</h1>
            </div>
            : <img src={userIcon} />}
        </div>
        {
          user ? <button className="btn btn-neutral rounded-none" onClick={logOut}>Logout</button> :
            <Link to='/auth/login'>
              <button className="btn btn-neutral rounded-none">Login</button>
            </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
