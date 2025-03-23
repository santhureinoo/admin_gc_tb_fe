import {
  ACCESS_TOKEN,
  CURRENT_USER_ID,
  LOGOUT_URL,
  PUBLIC_ROUTES,
  REFRESH_TOKEN,
  REFRESH_TOKEN_URL,
} from "@/constants";
import {
  getDecryptedAccessToken,
  getDecryptedRefreshToken,
  getEncryptedToken,
} from "@/utils";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

export default async function ValidateToken(pathname: string) {
  const accessToken = getCookie(ACCESS_TOKEN) ?? "";
  const refreshToken = getCookie(REFRESH_TOKEN) ?? "";
  const userId = getCookie(CURRENT_USER_ID) ?? "";

  const decryptedAccessToken = await getDecryptedAccessToken(accessToken);
  const decryptedRefreshToken = await getDecryptedRefreshToken(refreshToken);

  if(!PUBLIC_ROUTES.includes('/' + pathname.split('/')[1]) || pathname == "/") {
    if (decryptedRefreshToken) {
      if (!decryptedAccessToken) {
        // refresh access token
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + REFRESH_TOKEN_URL,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              refresh_token: decryptedRefreshToken,
            }),
          }
        );
        if (response.ok && userId != "") {
          // update accessToken
          const data = await response.json();
          deleteCookie(ACCESS_TOKEN);
          setCookie(ACCESS_TOKEN, await getEncryptedToken(data.access_token), {
            maxAge: data.expires_in,
          });
          //location.reload();
        } else {
          // logout and delete cookies and user redux
          await fetch(process.env.NEXT_PUBLIC_API_URL + LOGOUT_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              refresh_token: decryptedRefreshToken,
            }),
          });
          deleteCookie(ACCESS_TOKEN);
          deleteCookie(REFRESH_TOKEN);
          deleteCookie(CURRENT_USER_ID);
          return true;
        }
      }
    } else {
      // delete all token and remove current User
      deleteCookie(ACCESS_TOKEN);
      deleteCookie(REFRESH_TOKEN);
      deleteCookie(CURRENT_USER_ID);
      return false;
    }
  }
}
