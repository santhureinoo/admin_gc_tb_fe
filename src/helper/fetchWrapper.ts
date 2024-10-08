import axios from "axios";

export const fetchWrapper = {
  POST: post,
};

let userToken: string = "";
let config = {
  "Content-Type": "application/json",
};

async function post(isPublic: boolean, subUrl: string, body: any = null) {
  const url = process.env.NEXT_PUBLIC_API_URL + subUrl;

  //   let encryptToken = (await getCookie(gcconstant.ACCESS_TOKEN)) ?? "";

  if (!isPublic) {
    // userToken = (await getDecryptedAccessToken(encryptToken)) ?? "";
    Object.assign(config, { Authorization: "Bearer " + userToken });
  }

  const response = await axios.post(url, body, {
    headers: config,
  });

  return response;
}
