let URL = "http://localhost:3000/api";

if (process.env.NODE_ENV === "production") {
  URL = "https://pride-education.herokuapp.com/api";
}

export const BASE_URL = URL;
