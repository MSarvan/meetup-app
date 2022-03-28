// User should be able to add/create new meetups 
import { useState } from "react";
import axios from "axios";

export const AddMeetup = () => {

  const [meetup, setMeetup] = useState({
    title: "",
    location: "",
    date: "",
    time: "",
    theme: "",
    image: "",
    description: ""
  });

  const handleChange = () => {
    setMeetup({ ...meetup, [event.target.name]: event.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/meetups", meetup);
  } 
    return (
      <div className="addMeetupContainer">
        <form>
          <h1>Add Meetup</h1>
          <label>title</label>
          <input type="text" className="title" onChange={() => { handleChange(event) }} required />
          <label>Location</label>
          <select value={""} className="location" name="location" onChange={(event) => { handleChange(event) }}>
            <option value=""></option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
          <br />
          <label>date</label>
          <input
            type="text"
            name="date"
            className="date"
            onChange={(event) => { handleChange(event) }}
            placeholder="format YYYY-MM-DD"
            required
          />
          <br />
          <label>time</label>
          <input
            type="text"
            name="time"
            className="time"
            onChange={(event) => { handleChange(event) }}
            placeholder="format HH:MM"
            required
          />
          <br />
          <label>Theme</label>
          <select value={""} className="theme" name="theme" onChange={(event) => { handleChange(event) }}>
            <option value="">-----------</option>
            <option value="technology">Technology</option>
            <option value="food">Food</option>
            <option value="movies">Movies</option>
            <option value="culture">Culture</option>
            <option value="art">Art</option>
            <option value="drama">Drama</option>
          </select>
          <label>description</label>
          <input
            type="text"
            name="description"
            className="description"
            onChange={(event) => { handleChange(event) }}
            placeholder="Description"
            required
          />
          <br />
          <label>Image</label>
          <input
            type="text"
            name="image"
            className="image"
            onChange={(event) => { handleChange(event) }}
            required
          />
          <br />
          <input className="submitMeetupForm" type="submit" />
        </form>
      </div>
    );
  };
  