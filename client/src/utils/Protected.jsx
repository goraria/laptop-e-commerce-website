import { Navigate } from 'react-router-dom';

const Protected = ({ children, isAllowed, redirectTo }) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo} />;
    }
    return children;
};

export default Protected;
