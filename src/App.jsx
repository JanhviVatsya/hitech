import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import JobsPage from "./components/JobsPage";
import Profile from "./components/Profile";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import { getUserAuth } from "./redux/actions";
import { connect } from "react-redux";

const App = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Layout>
                  <Home />
                </Layout>
              </RequireAuth>
            }
          />
          <Route
            path="/jobs"
            element={
              <Layout>
                <JobsPage />
              </Layout>
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
