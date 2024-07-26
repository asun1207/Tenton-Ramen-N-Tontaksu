import React from "react";

function Reservation() {
  return (
    <section id="reservation" className="container py-5">
      <h2 className="text-center">Make a Reservation</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input type="time" id="time" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <input type="number" id="guests" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Reserve Table
        </button>
      </form>
    </section>
  );
}

export default Reservation;
