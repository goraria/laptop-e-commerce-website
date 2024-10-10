import { Navigate } from 'react-router-dom';

const Manager = ({ children, isAuthenticated, userRole }) => {
    if (!isAuthenticated || userRole !== 1) {
        return <Navigate to="/404" />;
    }
    return children;
};

export default Manager;
