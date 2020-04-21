import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import Profile from "../components/profile";
import RouteBase from "../components/route-base";
import RouteSecrets from "../components/route-secrets";
import RouteLogin from "../components/route-login";
import { navigate } from "gatsby";
import IdentityModal from "react-netlify-identity-widget";

import "react-netlify-identity-widget/styles.css";

const Dashboard = ({ location }) => {
  const [isVisible, setVisible] = useState(false);

  const showLogin = () => setVisible(true);

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
        <RouteLogin path="/dashboard/login" login={showLogin} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisible(false)}
      ></IdentityModal>
    </Layout>
  );
};

export default Dashboard;
