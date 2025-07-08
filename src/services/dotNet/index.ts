import axios from "axios";

const baseURL: string | undefined = process.env.VITE_URL;

export const login = async (postData: any) => {
  const url = `${baseURL}/login`;
  return await axios.post(url, postData);
};
