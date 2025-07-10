import axios from "axios";
import store from "../hooks/store";
import { RsetToast } from "@/common/mainSlice";
import * as Keychain from 'react-native-keychain';

axios.interceptors.request.use(
  function (config: any) {
    const state = store.getState();
    // if (config.url.toLowerCase().includes("/addattachment")) {
    //   config.headers["Content-Type"] = "multipart/form-data";
    // } else if (config.url.toLowerCase().includes("/attachmentplay")) {
    //   config.headers["Content-Type"] = "video/mp4";
    // } else {
    //   config.headers["Content-Type"] = "application/json";
    // }
    // if (config.url.toLowerCase().includes("/attachmentplay")) {
    //   console.log(config.url.toLowerCase().includes("/attachmentplay"));
    //   config.headers["Content-Type"] = "video/mp4";
    // } else if (config.url.toLowerCase().includes("/addattachment")) {
    //   config.headers["Content-Type"] = "multipart/form-data";
    // } else {
    //   config.headers["Content-Type"] = "application/json";
    // }

    config.headers.Authorization = `Bearer ${sessionStorage.getItem("token")}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  async function (response) {
    // if (!!response?.headers?.authorization) {
    //     console.log(!!response?.headers?.authorization, "This is set token");
    //     const fixTokenId = response?.headers?.authorization?.split(" ")?.[1]
    //     localStorage?.setItem("token", fixTokenId)
    // }

    if (
      !!response?.data?.code &&
      response?.data?.code !== 0 &&
      response?.data?.code !== 2 &&
      response?.data?.code !== 5 &&
      response?.data?.code !== 10 &&
      response?.data?.code !== 11
    ) {
      store.dispatch(
        RsetToast({
          show: true,
          title: "مشکلی در سرور به وجود آمده است.",
        })
      );
    }
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      store.dispatch(
        RsetToast({
          show: true,
          title:
            error.response.data.message || "مشکلی در سرور به وجود آمده است.",
        })
      );
      localStorage.clear();
      //   window.location = "/login";
    }
    try {
      const expectedErrors =
        error.response &&
        error.response.status !== 401 &&
        error.response.status >= 400 &&
        error.response.status < 500;

      if (expectedErrors) {
        store.dispatch(
          RsetToast({
            show: true,
            title:
              error.response.data.message || "مشکلی در سرور به وجود آمده است.",
          })
        );
        return;
      }
    } catch (error: any) {
      const { message }: any = error;
      // Do something with response error
      store.dispatch(
        RsetToast({
          show: true,
          title:
            error.response.data.message || "مشکلی در سرور به وجود آمده است.",
        })
      );
      return Promise.reject(message);
    }
  }
);


// // ذخیره توکن
// const saveJWT = async (token: string) => {
//   try {
//     await Keychain.setGenericPassword('jwt', token, {
//       service: 'com.yourapp.jwt', // یک شناسه منحصر به فرد
//       accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY
//     });
//   } catch (error) {
//     console.error('خطا در ذخیره توکن:', error);
//   }
// };

// // دریافت توکن
// const getJWT = async () => {
//   try {
//     const credentials = await Keychain.getGenericPassword({
//       service: 'com.yourapp.jwt'
//     });
//     return credentials ? credentials.password : null;
//   } catch (error) {
//     console.error('خطا در خواندن توکن:', error);
//     return null;
//   }
// };

// // حذف توکن (برای لاگ‌اوت)
// const deleteJWT = async () => {
//   await Keychain.resetGenericPassword({ service: 'com.yourapp.jwt' });
// };
