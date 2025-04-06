import { Button, Label, TextInput } from "flowbite-react";
import { useAuth } from "../hooks/AuthProvider";
import { useState, type ChangeEvent, type SyntheticEvent } from "react";

const Login = () => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFormOnSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      // TODO show validation messages
      alert("Email and password is required");
      return;
    }

    auth.login({ email, password });
  };

  return (
    <form data-testid="LoginPage" onSubmit={handleFormOnSubmit}>
      <div>
        <Label id="email">Email:</Label>
        <TextInput
          aria-labelledby="email"
          name="email"
          type="email"
          placeholder="Please enter your email"
          onChange={handleEmailOnChange}
        ></TextInput>
      </div>
      <div>
        <Label id="password">Password:</Label>
        <TextInput
          aria-labelledby="password"
          name="password"
          type="password"
          placeholder="Please enter your password"
          onChange={handlePasswordOnChange}
        ></TextInput>
      </div>
      <div>
        <Button type="submit"> Login</Button>
      </div>
    </form>
  );
};
export default Login;
