import React from "react";

export function Landing(props) {
  const login = () => (window.location.href = "http://192.168.0.110:3001/api/auth/discord/");
  return (
    <button className='Login' onClick={login}>Login</button>
  );
}

// export function Landing(props) {
//   const login = () => (window.open("http://192.168.0.110:3001/api/auth/discord/", "name", "width=500, height=860"));
//   return (
//     <button className='Login' onClick={login} target='popup'>Login</button>
//   );
// }