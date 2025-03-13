import jwt from "jsonwebtoken";
import "dotenv/config";

const jwtKey = process.env.JWT_KEY || "";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (username == "superadmin" && password == "secret") {
    const token = jwt.sign({ username }, jwtKey, {
      expiresIn: "1h",
    });

    return {
      success: true,
      token,
    };
  } else {
    return {
      success: false,
      token: "",
    };
  }
});
