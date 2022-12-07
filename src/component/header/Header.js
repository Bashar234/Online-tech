import React from "react";

const Header = () => {
  return (
    <div className="aboutProgramming container">
      <div className="headerImg mx-4">
        <img
          className="img-fluid mt-5"
          src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/1430490_online-courses-education.png"
          alt=""
        />
      </div>
      <div className="whatIsProgramme">
        <h3 className="my-2 ProgrammingLan">What is online tech?</h3>
        <h6>
          {" "}
          Find the best instructor for you. Choose from many topics skill
          levels, and languages. Shop thousands of high-quality on demand online
          courses. Start learning today with Online Tech course.
        </h6>
      </div>
    </div>
  );
};

export default Header;
