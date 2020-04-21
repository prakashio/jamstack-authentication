import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import Profile from "../components/profile";
import PrivateRoute from "../components/private-route";
import RouteBase from "../components/route-base";
import RouteSecrets from "../components/route-secrets";
import RouteLogin from "../components/route-login";
import { navigate } from "gatsby";
import IdentityModal from "react-netlify-identity-widget";

import "react-netlify-identity-widget/styles.css";

const Dashboard = ({ location }) => {
  const [isVisible, setVisible] = useState(false);

  const showModal = () => setVisible(true);

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);

  return (
    <Layout>
      <Profile showModal={showModal}></Profile>
      <Router>
        <PrivateRoute component={RouteBase} path="/dashboard/base" />
        <PrivateRoute component={RouteSecrets} path="/dashboard/secrets" />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisible(false)}
      ></IdentityModal>
    </Layout>
  );
};

export default Dashboard;
