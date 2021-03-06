import Image1 from "../../images/svg-1.svg";
import Image2 from "../../images/svg-2.svg";
import Image3 from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: Image1,
  alt: "Man looking at card on the phone",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headline: "Login to your account at any time",
  description:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
  buttonLabel: "Get Started",
  imgStart: true,
  img: Image2,
  alt: "Car",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "sign up",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Join Our Team",
  headline: "Creating an account is extremely easy",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go!",
  buttonLabel: "Start Now",
  imgStart: false,
  img: Image3,
  alt: "Man looking at card",
  dark: true,
  primary: true,
  darkText: false,
};
