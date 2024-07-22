import ReviewList from "./review_list";
import "./review.css";
import ReactDOM from "react-dom/client";
const rootElement = document.getElementById('root');
const rootRef = ReactDOM.createRoot(rootElement);
rootRef.render(<ReviewList/>);