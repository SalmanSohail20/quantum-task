import { useEffect, useState } from "react";
import "./ProgressBar.scss";
import ImportCard from "../Importcard/ImportCard";
import { useNavigate } from "react-router-dom";
interface ProgressBarProps {}
const ProgressBar = ({}: ProgressBarProps) => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          localStorage.setItem("currentView", "analytics");
          return 100;
        }
        return prev + 1;
      });
    }, 50); 

    return () => clearInterval(interval);
  }, []);

  const onSwitchToListing = () => {
    navigate("analytics");
  };

  return (
    <>
      {progress < 100 && (
        <div className="progress_container">
          <div className="text_contain">
            <strong className="title">
              Importing your products from Shopify
            </strong>
            <p className="des">
              You can continue using Shopify while we finish in the background.
            </p>
          </div>
          <div className="progress_wrapper">
            <div className="progress_bar">
              <div
                className="progress_fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="progress_text">{progress}%</span>
          </div>
        </div>
      )}

      {progress === 100 && <ImportCard onSwitchToListing={onSwitchToListing} />}
    </>
  );
};

export default ProgressBar;
