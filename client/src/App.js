import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './loginPage';
import SearchPage from './SearchPage';
import MainHeader from './components/MainHeader';
import './App.css';
import SignupPage from './signupPage';
import RecipePage from './recipePage';
import ReviewPage from './reviewPage';
import UserReviews from './userReviews';

function App() {

// Using the router dom to make it seem like there are multiple pages but it allows
// using multiple page layouts without sending a request. This is a good way of keeping static elements
// like the header but changing the content under it. 
  return (
    <Router>
    <div className="app">
      <MainHeader />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recipePage" element={<RecipePage />} />
        <Route path="/reviewRecipe" element={<ReviewPage />} />
        <Route path="/reviews" element={<UserReviews />} />
        <Route path="/" element={<SearchPage />} />
      </Routes>
      </div> 
      </Router>
  );
}


export default App;