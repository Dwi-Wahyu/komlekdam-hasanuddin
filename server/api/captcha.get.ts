import * as svgCaptcha from "svg-captcha";

export default defineEventHandler(async (event) => {
  return svgCaptcha.create({
    noise: 2,
  });
});
