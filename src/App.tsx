import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Search from "./pages/Search";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  console.log(loggedIn);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("user-data", JSON.stringify(user));
    setLoggedIn(true);
  };

  const handleDelete = () => {
    localStorage.removeItem("user-data");
    setLoggedIn(false);
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user-data")!);
    userData && setLoggedIn(true);
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn} handleDelete={handleDelete} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>ページがありません</h1>} />
        <Route
          path="/register"
          element={
            <Register
              handleChange={handleChange}
              handleRegister={handleRegister}
            />
          }
        />
        {loggedIn && <Route path="/search" element={<Search />} />}
      </Routes>
    </>
  );
};

export default App;
