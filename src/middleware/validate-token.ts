// import {
//   API_URL,
//   getDecryptedAccessToken,
//   getDecryptedRefreshToken,
//   getEncryptedToken,
//   PUBLIC_ROUTES,
// } from "@/helper/constant";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

export default async function ValidateToken(pathname: string) {
  //   const accessToken = getCookie("_auth_access") ?? "";
  //   const userId = getCookie("_auth_id") ?? "";
  //   const decryptedAccessToken = await getDecryptedAccessToken(accessToken);
  //   const response = await (
  //     await fetch(API_URL + "auth/check-access-token/", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + decryptedAccessToken,
  //       },
  //     })
  //   ).json();
  //   if (
  //     !response.active &&
  //     !PUBLIC_ROUTES.includes(pathname) &&
  //     pathname != "/"
  //   ) {
  //     const refreshToken = getCookie("_auth_refresh") ?? "";
  //     const decryptedRefreshToken = await getDecryptedRefreshToken(refreshToken);
  //     const response = await fetch(API_URL + "auth/refresh", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         refresh_token: decryptedRefreshToken,
  //       }),
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       deleteCookie("_auth_access");
  //       if (userId != "") {
  //         setCookie(
  //           "_auth_access",
  //           await getEncryptedToken(data.access_token, userId)
  //         );
  //         window.location.href = pathname;
  //       } else {
  //         console.log("Something went wrong!");
  //       }
  //     } else {
  //       await fetch(API_URL + "auth/logout", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           refresh_token: decryptedRefreshToken,
  //         }),
  //       });
  //       deleteCookie("_auth_id");
  //       deleteCookie("_auth_username");
  //       deleteCookie("_auth_fullname");
  //       deleteCookie("_auth_access");
  //       deleteCookie("_auth_refresh");
  //       window.location.href = "/login";
  //     }
  //   }
}
