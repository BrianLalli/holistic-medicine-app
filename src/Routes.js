import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import PhysicianDetailPage from './components/PhysicianDetailPage';


function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/results" element={<ResultsPage />} />
                <Route path="/physician/:id" element={<PhysicianDetailPage />} />
                {/* Add other routes as you create other components/pages */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;
