import React, { useState, useEffect } from "react";
import "./adminLoginPage.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions.js";

const LoginPage = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (userInfo) {
      navigate("/admin/home", { replace: true });
    }
  }, [userInfo]);

  const onSubmit = (data) => {
    const { username, password } = data;
    console.log(username, password);
    dispatch(login(username, password));
    reset();
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <div className="LoginPage-wrapper">
      <div className="login-container container">
        <div className="login flex absolute-center">
          <form
            action=""
            className="login-form flex flex-column gap-1"
            onSubmit={handleSubmit(onSubmit, onError)}
            method="post"
          >
            <div>
              <input
                type="text"
                placeholder="UserName"
                autoComplete="Off"
                className={`${errors.username && "invalid"}`}
                {...register("username", {
                  required: "Username is Required",
                  // validate: (value) => value === "Admin",
                })}
                onBlur={() => {
                  trigger("username");
                }}
              />
              {errors.username && (
                <p className="errors">{errors.username.message}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                autoComplete="Off"
                className={`${errors.password && "invalid"}`}
                {...register("password", {
                  required: "Password is Required",
                  // validate: (value) => value === "12345",
                })}
                onBlur={() => {
                  trigger("password");
                }}
              />
              {errors.password && (
                <p className="errors">{errors.password.message}</p>
              )}
            </div>
            <input
              type="submit"
              value="submit"
              name="password"
              className="btn btn-login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
