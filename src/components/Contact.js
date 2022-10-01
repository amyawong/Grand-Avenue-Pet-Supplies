import React from "react";

const Contact = () => {
  return (
    <div>
      <h3>Contact Information</h3>
      <p>Address</p>
      <p>Phone Number</p>
      <p>Email</p>
      <table>
        <thead>Hours Of Operation</thead>
        <tbody>
          <tr>
            <td>Sunday</td>
            <td>10AM - 3PM</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>10AM - 7PM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>10AM - 7PM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>10AM - 7PM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>10AM - 7PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>10AM - 7PM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>10AM - 7PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
