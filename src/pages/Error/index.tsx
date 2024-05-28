import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-red-400 font-semibold">
        <h4>Something went wrong</h4>
      <Link to="/">Return to home</Link>
    </div>
  );
};

export default ErrorPage;