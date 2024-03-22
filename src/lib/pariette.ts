/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Axios from "axios";
import Cookies from "js-cookie";
import { glob } from "../../parietteConfig";


export async function $get(url: string) {
  // const Router = useRouter();
  try {
    const bearerToken = Cookies.get("Authorization") ? "Bearer " + Cookies.get("Authorization") : "";
    const res = await Axios({
      baseURL: glob.api_url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        CompanyToken: glob.company_token,
        Sitetoken: glob.site_token,
        Locale: "de",
        Authorization: bearerToken,
      },
      method: "get",
      url: url,
      withCredentials: true,
    });
    return res.data;
  } catch (err: any) {
    if (err.response.status === 401 || err.response.status === 403) {
      // return Router.push("/Auth/Login");
    }
    const msg = err.response.data;
    return msg;
  }
}

export async function $post(url: string, ctx: object, headers?: object) {
  try {
    const bearerToken = Cookies.get("Authorization") ? "Bearer " + Cookies.get("Authorization") : "";
    const res = await Axios({
      baseURL: glob.api_url,
      headers: {
        ...headers,
        Accept: "application/json",
        "Content-Type": Object.prototype.toString.call(ctx) === "[object FormData]" ? "multipart/form-data" : "application/json",
        CompanyToken: glob.company_token,
        Sitetoken: glob.site_token,
        Locale: "de",
        Authorization: bearerToken,
      },
      method: "post",
      url: url,
      data: ctx,
      withCredentials: true,
    });
    return res.data;
  } catch (err: any) {
    // if (err.response.status === 401 || err.response.status === 403) {
    //   return Router.push("/Auth/Login");
    // }
    const msg = err.response.data;
    throw msg;
  }
}

export async function $put(url: string, ctx: object, headers?: object) {
  try {
    const bearerToken = Cookies.get("Authorization") ? "Bearer " + Cookies.get("Authorization") : "";
    const res = await Axios({
      baseURL: glob.api_url,
      headers: {
        ...headers,
        Accept: "application/json",
        "Content-Type": "application/json",
        CompanyToken: glob.company_token,
        Sitetoken: glob.site_token,
        Locale: "de",
        Authorization: bearerToken,
      },
      method: "put",
      url: url,
      data: ctx,
      withCredentials: true,
    });
    return res.data;
  } catch (err: any) {
    // if (err.response.status === 401 || err.response.status === 403) {
    //   return Router.push("/Auth/Login");
    // }
    const msg = err.response.data;
    throw msg;
  }
}

export async function $delete(url: string) {
  try {
    const bearerToken = Cookies.get("Authorization") ? "Bearer " + Cookies.get("Authorization") : "";
    const res = await Axios({
      baseURL: glob.api_url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        CompanyToken: glob.company_token,
        Locale: "de",
        Authorization: bearerToken,
      },
      method: "delete",
      url: url,
      withCredentials: true,
    });
    return res.data;
  } catch (err: any) {
    // if (err.response.status === 401 || err.response.status === 403) {
    //   return Router.push("/Auth/Login");
    // }
    const msg = err.response.data;
    throw msg;
  }
}
