import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    const errStyle = { textAlign: 'center' };
    return (
        <div className="error" style={errStyle}>
            <h1>Oops !</h1>
            <h2>{err.data}</h2>
            <p>{err.status} Found!</p>
        </div>
    );
};


export default Error;