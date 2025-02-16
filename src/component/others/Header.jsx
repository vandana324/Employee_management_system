import React, { useState, useEffect } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = (props) => {
  // const [username, setUsername] = useState("Admin"); // Default username

  // useEffect(() => {
  //   if (data && data.firstName) {
  //     setUsername(data.firstName);
  //   } else {
  //     setUsername("Admin");
  //   }
  // }, [data]); // Update state when `data` changes


  const logOut = () => {
    localStorage.removeItem("loggedInUser"); // Remove instead of setting " "
    // window.location.reload();
    // console.log(props.changeUser)
    if (props.changeUser) {
      props.changeUser('');  // Ensure changeUser exists before calling
    }
  
};

    return (
        <div className=' mt-10 ml-10 mr-10 
        text-white flex items-end justify-between'>
          <h1 className="text-2xl font-medium">Hello <br /> <span className="text-3xl font-semibold">admin 👋</span></h1>
          <button onClick ={logOut} className="border-red-600 font-medium bg-red-600 text-white px-3 py-4 rounded-lg text-lg">Log Out</button>
          
        </div>
    )
}

export default Header;