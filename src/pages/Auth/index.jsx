import React from "react";

import { Block, LoginForm } from "../../components";


import "./Auth.scss";

const Index = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <div className="auth__top">
          <h2>Welcome to Tima Chat</h2>
          <p>Please enter a username and password</p>
        </div>

        <Block>
          <LoginForm />
        </Block>
      </div>
    </section>
  );
};

export default Index;
