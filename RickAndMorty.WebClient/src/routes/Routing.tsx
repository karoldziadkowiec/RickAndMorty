import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharactersHome from "../components/CharactersHome.tsx";
import CharacterDetails from "../components/CharacterDetails.tsx";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharactersHome />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
};

export default Routing;