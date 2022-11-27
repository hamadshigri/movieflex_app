import React from "react";
import Card1 from "./images/Superman-return.jpg";
import Card2 from "./images/The-Hobbit-Movie.jpg";
import Card3 from "./images/comic-book.jpg";
import Card4 from "./images/Money-heist.png";

const Movies = () => {
  return (
    <>
      <h2 className="text-center card-sec-heading mt-5">Trending</h2>
      <div className="row my-5 card-sec">
        <div className="col-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Card1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Superman Return</h5>
              <a href="/" className="btn fav-btn">
                Add to Favourite
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Card2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">The Hobbit</h5>
              <a href="/" className="btn fav-btn">
                Add to Favourite
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Card3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Comic Book</h5>
              <a href="/" className="btn fav-btn">
                Add to Favourite
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Card4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Money Heist</h5>
              <a href="/" className="btn fav-btn">
                Add to Favourite
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
