import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            {/* Add other links as you create other routes */}
            {/* Example: <Link to="/quiz">Take the Quiz</Link> */}
        </nav>
    );
}
