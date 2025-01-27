import { Link } from "@tanstack/react-router";

// This component will render all the avaiable routes in the app
export const RoutesViewer = () => {
  return (
    <div>
      <h2>Routes</h2>
      <ul>
        <li>
          <Link to="/twitch-layout/webcam">Webcam</Link>
        </li>
      </ul>
    </div>
  );
};
