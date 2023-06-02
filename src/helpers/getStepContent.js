import { Age } from "../components/form/Age";
import { Email } from "../components/form/Email";
import { Gender } from "../components/form/Gender";
import { Location } from "../components/form/Location";
import { Password } from "../components/form/Password";
import { Username } from "../components/form/Username";

export const getStepContent = (num) => {
  switch (num) {
    case 1:
      return <Gender />;
    case 2:
      return <Age />;
    case 3:
      return <Location />;
    case 4:
      return <Username />;
    case 5:
      return <Password />;
    case 6:
      return <Email />;
    default:
      throw new Error("Unknown step");
  }
};
