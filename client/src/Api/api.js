// Add your imports here
import axios from "axios";

// 


let Base_URL = "localhost";
Base_URL = Base_URL.replace(/\/$/, "");

// Use the Final_URL when you need to set URL for axios GET request
const Final_URL= "http://"+Base_URL+":3000";
const instance = axios.create({
  baseURL: Final_URL    
});

export default instance;

// Write your code here