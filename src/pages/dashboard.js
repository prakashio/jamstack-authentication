import React, { useEffect } from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import Profile from "../components/profile";
import RouteBase from "../components/route-base";
import RouteSecrets from "../components/route-secrets";
import RouteLogin from "../components/route-login";
import { navigate } from "gatsby";

const Dashboard = ({ location }) => {
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);
  return (
    <Layout>
      <Profile></Profile>
      <Router>
        <RouteBase path="/dashboard/base" />
        <RouteSecrets path="/dashboard/secrets" />
        <RouteLogin path="/dashboard/login" />
      </Router>
      <p>TODO: create a dashboard</p>
    </Layout>
  );
};

export default Dashboard;
