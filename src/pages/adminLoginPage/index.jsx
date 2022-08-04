import React from "react";
import "./adminLoginPage.css";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                  minLength: {
                    value: 3,
                    message: "Username must have atleast 3 characters.",
                  },
                  validate: (value) =>
                    value === "Admin" || "only Admin is allowed",
                })}
                onBlur={() => {
                  trigger("username");
                }}
                // onKeyUp={() => {
                //   trigger("username");
                // }}
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
                  minLength: {
                    value: 3,
                    message: "Password must have atleast 3 characters.",
                  },
                  validate: (value) =>
                    value === "12345" || "only password = 12345 is allowed",
                })}
                onBlur={() => {
                  trigger("password");
                }}
                onKeyUp={() => {
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
