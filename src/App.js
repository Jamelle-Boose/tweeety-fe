import { BrowserRouter, Route, Routes } from "react-router-dom"
import RuleList from "./RuleList"

// TODO #1 Add RuleList route
function App() {
  return (
    <div className="ui container">
      <div className="introduction"></div>

      <h1 className="ui header">
        <img
          className="ui image"
          src="/Twitter_Logo_Blue.png"
          alt="Twitter Logo"
        />
        <div className="content">
          Real Time Tweet Streamer
          <div className="sub header">Powered by Twitter data</div>
        </div>
      </h1>

      <div className="ui container">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<RuleList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
