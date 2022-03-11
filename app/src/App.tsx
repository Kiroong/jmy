import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import moment from "moment";
import "./App.css";

function App() {
  const [remaining, setRemaining] = useState<moment.Duration>(
    moment.duration(moment("2025-02-28T17:00:00").diff(moment()))
  );
  const [did, setDid] = useState<moment.Duration>(
    moment.duration(moment().diff(moment("2022-03-01T09:00:00")))
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemaining(
        moment.duration(moment("2025-02-28T23:59:59").diff(moment()))
      );
      setDid(moment.duration(moment().diff(moment("2022-03-01T09:00:00"))));
    }, 500);
    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ opacity: 0.5 }}>
          한 시간: {did.years()}년 {did.months()}개월 {did.days()}일{" "}
          {did.hours()}시간 {did.minutes()}분 {did.seconds()}초
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontWeight: "bolder" }}>
          남은 시간: {remaining.years()}년 {remaining.months()}개월{" "}
          {remaining.days()}일 {remaining.hours()}시간 {remaining.minutes()}분{" "}
          {remaining.seconds()}초
        </p>
      </header>
    </div>
  );
}

export default App;
