import { Label, TextInput } from "flowbite-react";
const Login = () => {
  return (
    <div data-testid="LoginPage">
      <div>
        <Label id="email">Email:</Label>
        <TextInput
          //   value={email}
          aria-labelledby="email"
          name="email"
          type="email"
          placeholder="Please enter your email"
        ></TextInput>
      </div>
      <div>
        <Label id="password">Password:</Label>
        <TextInput
          aria-labelledby="password"
          name="password"
          type="password"
          placeholder="Please enter your password"
        ></TextInput>
      </div>
    </div>
  );
};
export default Login;
