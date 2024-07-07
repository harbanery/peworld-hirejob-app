import imageUser1 from "../assets/img/profile-img/user-1.jpg";
import imageUser2 from "../assets/img/profile-img/user-2.jpg";
import imageUser3 from "../assets/img/profile-img/user-3.jpg";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const imageLogo = [
  {
    name: [`Tokopedia`],
    image: `https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/672c8b0f.png`,
  },
];

export const user_reviews = [
  {
    name: `Olivia Jones`,
    img: imageUser1,
    jobdesk: `Software Developer`,
    review: `Peworld offers a fantastic platform where IT professionals like
    myself can easily discover promising career paths.`,
  },
  {
    name: `Ethan Walker`,
    img: imageUser2,
    jobdesk: `Computer Network Specialist`,
    review: `I'm impressed by Peworld's intuitive interface and their
    attentive customer service.`,
  },
  {
    name: `Sophia Martinez`,
    img: imageUser3,
    jobdesk: `Data Analyst`,
    review: `Peworld's commitment to promoting diversity and inclusivity
    within the IT industry creates a welcoming and enriching
    experience for all users.`,
  },
];

export const allowedDomains = ["gmail.com", "yahoo.com"];

export const notAllowedDomains = ["example.com"];

export const errorRegisterMessages = {
  name: {
    require: "Name is required",
    textOnly: "Name must contain only letters and spaces",
  },
  email: {
    require: "Email is required",
    invalidFormat: "Email format is invalid",
    domain: "Email domain is invalid",
  },
  phone: {
    require: "Phone number is required",
    numberOnly: "Phone must contain only numbers",
  },
  company: {
    require: "Company is required",
  },
  position: {
    require: "Position is required",
    textOnly: "Position must contain only letters and spaces",
  },
  password: {
    require: "Password is required",
    noSpace: "Password cannot contain spaces",
    minLength: "Password must have more than 8 characters",
    digit: "Password must contain at least one digit",
    upperCase: "Password must contain at least one uppercase letter",
    specialCase: "Password must contain at least one special character",
  },
  confirmPassword: {
    require: "Confirm Password is required",
    mismatch: "Confirm Password must be same with Password",
  },
};
