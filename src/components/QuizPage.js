import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './QuizPage.module.scss';

function QuizPage() {
    const [answers, setAnswers] = useState({});  // Store user's answers
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAnswers(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();  // Prevent default form submission
        navigate('/results');
    };    

    return (
        <div className={styles.quizPage}>
            <h2>Health Quiz</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.question}>
                    <label>Question 1: How do you feel today?</label>
                    <select name="question1" onChange={handleInputChange}>
                        <option value="good">Good</option>
                        <option value="average">Average</option>
                        <option value="bad">Bad</option>
                    </select>
                </div>
    
                <div className={styles.question}>
                    <label>Question 2: How often do you experience stress?</label>
                    <select name="question2" onChange={handleInputChange}>
                        <option value="always">Always</option>
                        <option value="often">Often</option>
                        <option value="sometimes">Sometimes</option>
                        <option value="rarely">Rarely</option>
                        <option value="never">Never</option>
                    </select>
                </div>
    
                <div className={styles.question}>
                    <label>Question 3: How many hours of sleep do you get on average?</label>
                    <select name="question3" onChange={handleInputChange}>
                        <option value="lessThan4">Less than 4 hours</option>
                        <option value="4to6">4 to 6 hours</option>
                        <option value="6to8">6 to 8 hours</option>
                        <option value="moreThan8">More than 8 hours</option>
                    </select>
                </div>
    
                <div className={styles.question}>
                    <label>Question 4: How often do you exercise?</label>
                    <select name="question4" onChange={handleInputChange}>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="never">Never</option>
                    </select>
                </div>
    
                <div className={styles.question}>
                    <label>Question 5: Are you currently on any medication?</label>
                    <select name="question5" onChange={handleInputChange}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
    
                <button type="submit">Submit</button>
            </form>
        </div>
    );    
}

export default QuizPage;
