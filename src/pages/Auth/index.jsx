import React from "react";
import { Route, Routes } from "react-router-dom";

import { Block, LoginForm, RegistrationForm } from "../../components";

import "./Auth.scss";

const Index = () => {
  return (
    <section className="auth">
      <div className="auth__content">
       

        <Block>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </Block>
      </div>
    </section>
  );
};

export default Index;
