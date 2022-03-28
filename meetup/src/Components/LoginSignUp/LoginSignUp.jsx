import { useState } from "react";

export const LoginSignUp = () => {
  const [users, setUsers] = useState({
    name: "",
    password: "",
    location: "",
    technology: [],
    image: "",
  });

  console.log(users);

  const handleChange = (e) => {
    setUsers({ ...users, [event.target.name]: event.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/users", users);
  }

  const onSignin = () => {
    
  }

  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={(e) => { }}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => { handleChange(e) }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => { handleChange(e) }}
          required
        />
        <br />
        <select value={""} className="location" onChange={(event) => { handleChange(e) }}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          onChange={(event) => { handleChange(e) }}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" onChange={(event) => { handleChange(e) }} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" onChange={(event) => { handleChange(e) }} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" onChange={(event) => { handleChange(e) }} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" onChange={(event) => { handleChange(e) }} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" onChange={(event) => { handleChange(e) }} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={(event) => { handleChange(e) }}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={(e) => { handleChange(e) }}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => { handleChange(e) }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => { handleChange(e) }}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
