import React, {useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up"); // 'Sign Up' or 'Login'

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault(); //wont reload the page on submit
  };

  return (
    <form action="" className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "log in"} to book
          appointment
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button className="bg-[var(--color-primary)] text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p className="text-sm text-zinc-500">
            Already have an account?{" "}
            <span
              className="text-[var(--color-primary)] cursor-pointer underline"
              onClick={() => setState("Login")}
            >
              {" "}
              Login here
            </span>
          </p>
        ) : (
          <p className="text-sm text-zinc-500">
            Create a new account?{" "}
            <span
              className="text-[var(--color-primary)] cursor-pointer underline"
              onClick={() => setState("Sign Up")}
            >
              {" "}
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
