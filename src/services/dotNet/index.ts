import axios from "axios";
// import { DOT_NET_URL } from "@env";

const DOT_NET_URL = "http://10.0.10.48:8085";

export const login = async (postData: any) => {
  const url = `${DOT_NET_URL}/login`;
  return await axios.post(url, postData);
};
