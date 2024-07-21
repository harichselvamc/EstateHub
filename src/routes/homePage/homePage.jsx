import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
        <h1 className="title">Unlock Your Dream Home: Free, Private, and Direct</h1>
        <p>
        Use our open-source platform to find the perfect home. Enjoy the ease of direct access to listings, the freedom of no hidden fees, and the security of private conversation. Discover a smooth and open approach to locating the perfect home.

        </p>

          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>1</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>20</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>20+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
