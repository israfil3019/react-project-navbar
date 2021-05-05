import "./Cards.css";
import img from "./avatar2.png";

const Cards = () => {
  return (
    <div className="container">
        <div className="card">
          <img src={img} className="img" alt="" />
          <div className="card-body">
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            </p>
          </div>
          <div className="btn-container">
            <button type="button" className="btn btn-outline-primary text-info mb-2">
              More
            </button>
          </div>
        </div>
        <div className="card" id="card2">
          <img src={img} className="img" alt="" />
          <div className="card-body">
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            </p>
          </div>
          <div className="btn-container">
            <button type="button" className="btn btn-outline-primary text-info mb-2">
              More
            </button>
          </div>
        </div>
    </div>
  );
};
export default Cards;
