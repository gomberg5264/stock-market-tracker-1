import React from "react";

const today = new Date();
function month(month) {
  switch (month) {
    case "00":
      return "January";
    case "01":
      return "February";
    case "02":
      return "March";
    case "03":
      return "April";
    case "04":
      return "May";
    case "05":
      return "June";
    case "06":
      return "July";
    case "07":
      return "August";
    case "08":
      return "September";
    case "09":
      return "October";
    case "10":
      return "November";
    case "11":
      return "December";
  }
}

const FormattedDate = () => (
  <div className="date">
    {`${String(today.getDate()).padStart(2, "0")} ${month(
      String(today.getMonth())
    )} ${today.getFullYear()}`}
  </div>
);
export default FormattedDate;
