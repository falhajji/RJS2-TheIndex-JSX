import React from "react";
import authors from "./data";

function App() {
  return (
    <div className="row">
      <div className="col-2">
        <div id="sidebar">
          <img src="theindex.svg" className="logo" alt="the index logo" />
          <section>
            <h4 className="menu-item active">
              <button>AUTHORS</button>
            </h4>
          </section>
        </div>
      </div>
      <div className="content col-10">
        <div className="authors">
          <h3>Authors</h3>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card">
                <div className="image">
                  <img
                    className="card-img-top img-fluid"
                    src="https://nation.com.pk/digital_images/large/2015-05-10/jk-rowling-believes-in-standing-up-to-bullies-1431261222-3596.jpeg"
                    alt="J.K. Rowling"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <span>
                      {authors[0].first_name} {authors[0].last_name}
                    </span>
                  </h5>
                  <small className="card-text">7 books</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card">
                <div className="image">
                  <img
                    className="card-img-top img-fluid"
                    src="https://typeset-beta.imgix.net/elite-daily/2016/03/06144207/elite-daily-George-RR-Martin.jpg?w=800&h=800&auto=format&q=70&fit=crop&crop=faces"
                    alt="George R.R. Martin"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <span>
                      {authors[1].first_name} {authors[1].last_name}
                    </span>
                  </h5>
                  <small className="card-text">5 books</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card">
                <div className="image">
                  <img
                    className="card-img-top img-fluid"
                    src="https://images.8tracks.com/cover/i/010/010/920/tolkeinbigger-2362.jpg?rect=166,0,500,500&q=98&fm=jpg&fit=max"
                    alt="J.R.R Tolkein"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    <span>
                      {authors[2].first_name} {authors[2].last_name}
                    </span>
                  </h5>
                  <small className="card-text">6 books</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
