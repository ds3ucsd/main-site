import { Route, Routes } from "react-router";
import Home from "../Pages/Home/Home";
import EventPage from "../Pages/Events/EventPage";
import events from "../Assets/Data/events.json";
import Board from "../Pages/Board/Board";
import Projects from "../Pages/Projects/Projects";
import DataHacks from "../Pages/DataHacks/DataHacks";
import JoinUs from "../Pages/JoinUs/JoinUs";
import Partners from "../Pages/Partners/Partners";
import workshopData from "../Assets/Data/workshops.json";
import professionalData from "../Assets/Data/professional-events.json";
import socialData from "../Assets/Data/social-events.json";
import Alumni from "../Pages/Board/Alumni";

const Main = () => {
  const { upcoming, workshops, social, professional } = events;

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/events">
        <Route path="upcoming" element={<EventPage events={upcoming} />} />
        <Route path="workshops" element={<EventPage events={workshops} images={workshopData} />} />
        <Route path="social" element={<EventPage events={social} images={socialData}/>} />
        <Route path="professional" element={<EventPage events={professional} images={professionalData} />} />
      </Route>
      <Route path="/board">
        <Route index element={<Board />} />
        <Route path="alumni" element={<Alumni />} />
      </Route>
      <Route path="/projects" element={<Projects />} />
      <Route path="/datahacks" element={<DataHacks />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/join-us" element={<JoinUs />} />
    </Routes>
  );
};

export default Main;
