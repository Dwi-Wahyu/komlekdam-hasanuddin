import Twilio from "twilio";
import "dotenv/config";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = Twilio(accountSid, authToken);

export default defineEventHandler(async (event) => {
  const payload = await readBody(event);

  const { nama, nomor, pesan, email } = payload;

  client.messages
    .create({
      from: "whatsapp:+14155238886",
      body: ` -- Laporan Masuk -- 
        Nama : ${nama}
        Nomor : ${nomor}
        Email : ${email}
        Pesan : ${pesan}
      `,
      to: "whatsapp:+6289643144013",
    })
    .then((message) => {
      return { sucess: true };
    })
    .catch((error) => {
      console.log(error);
      return "Gagal";
    });
});
