import { Button } from "flowbite-react";
import { useAuth } from "../hooks/AuthProvider";

const Welcome = () => {
  const auth = useAuth();
  return (
    <div data-testid="WelcomePage">
      Welcome {auth.user}
      <div>
        <Button type="submit" onClick={() => auth.logout()}>
          Logout
        </Button>
      </div>
    </div>
  );
};
export default Welcome;
