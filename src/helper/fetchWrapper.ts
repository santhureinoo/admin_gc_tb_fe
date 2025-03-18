import { ACCESS_TOKEN } from "@/constants";
import { getDecryptedAccessToken } from "@/utils";
import axios from "axios";
import { getCookie } from "cookies-next";

export const fetchWrapper = {
  POST: post,
  PUT: put,
  GET: get
};

let userToken: string = "";
let config = {
  "Content-Type": "application/json",
};

async function post(isPublic: boolean, subUrl: string, body: any = null) {
  const url = process.env.NEXT_PUBLIC_API_URL + subUrl;

  let encryptToken = (await getCookie(ACCESS_TOKEN)) ?? "";

  if (!isPublic) {
    userToken = (await getDecryptedAccessToken(encryptToken)) ?? "";
    Object.assign(config, { Authorization: "Bearer " + userToken });
  }

  const response = await axios.post(url, body, {
    headers: config,
  });

  return response;
}

// need to check with sam for this GET method with body
async function get(isPublic: boolean, subUrl: string, body: any = null) {
  const url = process.env.NEXT_PUBLIC_API_URL + subUrl;

  let encryptToken = (await getCookie(ACCESS_TOKEN)) ?? "";

  if (!isPublic) {
    userToken = (await getDecryptedAccessToken(encryptToken)) ?? "";
    Object.assign(config, { Authorization: "Bearer " + userToken });
  }

  const response = await axios({ method: "GET", url, data: body, headers: config});

  return response;
}

async function put(isPublic: boolean, subUrl: string, body: any = null) {
  const url = process.env.NEXT_PUBLIC_API_URL + subUrl;
  let encryptToken = (await getCookie(ACCESS_TOKEN)) ?? "";
  if (!isPublic) {
    userToken = (await getDecryptedAccessToken(encryptToken)) ?? "";
  }
  const response = await axios.put(url, body);
  return response;
}
