import React from "react";
import "./styles.css";
import moment from "moment";

export default function App() {
  let startTime = "2020-09-01 00:30:10.654Z";
  let finishTime = "2020-09-01 09:00:03.986Z";
  let breakTime = 30;
  let jobTime = moment(finishTime).diff(moment(startTime), "minutes");
  let actualJobTime = jobTime - breakTime;
  let currentHours = parseFloat((actualJobTime / 60).toFixed(2));
  console.log(moment(startTime).seconds(0).toDate());
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start Time : {moment(startTime).format("DD-MMM-YYYY hh:mm:ss a")}</h2>
      <h2>
        Finish Time : {moment(finishTime).format("DD-MMM-YYYY hh:mm:ss a")}
      </h2>
      <h2>JOB Time : {jobTime} minutes</h2>
      <h2>Break Time : {breakTime} minutes</h2>
      <h2>Actual Time : {actualJobTime} minutes</h2>
      <h2>Job hours : {currentHours} hrs</h2>
    </div>
  );
}
