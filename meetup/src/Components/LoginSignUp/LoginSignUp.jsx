import { useState } from "react";

export const LoginSignUp = () => {

  const dispatch = useDispatch();

  const [users, setUsers] = useState({
    name: "",
    password: "",
    location: "",
    technology: [],
    image: "",
  });

  const handleChange = () => {
    setUsers({ ...users, [event.target.name]: event.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/users", users);
  }

  const onSignin = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    console.log(e.target.password);
    axios.get("http://localhost:8080/users").then((res) => {
      let data =  res.data;
      data.forEach((el) => {
        if((el.name === e.target.name) && (el.password === e.target.password))
        {
          useDispatch(userLogin(data));
        }
      });
    });
  }

  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={(e) => { handleSubmit(e) }}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => { handleChange(event) }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          name="password"
          onChange={(event) => { handleChange(event) }}
          required
        />
        <br />
        <select value={""} className="location" name="location" onChange={(event) => { handleChange(event) }}>
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
          name="technology"
          onChange={(event) => { handleChange(event) }}
        />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" name="food" onChange={(event) => { handleChange(event) }} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" name="movies" onChange={(event) => { handleChange(event) }} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" name="culture" onChange={(event) => { handleChange(event) }} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" name="art" onChange={(event) => { handleChange(event) }} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" name="drama" onChange={(event) => { handleChange(event) }} />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          name="image"
          onChange={(event) => { handleChange(event) }}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form className="login" onSubmit={(e) => { onSignin(e) }}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          name="name"
          onChange={(event) => {}}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          name="password"
          onChange={(event) => {}}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
