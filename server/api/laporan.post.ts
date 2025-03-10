import Twilio from "twilio";

const accountSid = "AC218e81685873a340fd5ed63350cfea28";
const authToken = "3a4bdda84d8523f4bf17456d354f1bc3";
const client = Twilio(accountSid, authToken);

export default defineEventHandler(async (event) => {
  const payload = await readBody(event);

  const { nama, nomor, pesan, email } = payload;

  client.messages
    .create({
      from: "whatsapp:+14155238886",
      body: `
        Nama : ${nama}
        Nomor : ${nomor}
        Email : ${email}
        Pesan : ${pesan}
      `,
      to: "whatsapp:+6289643144013",
    })
    .then((message) => console.log(message.sid))
    .catch((error) => {
      console.log(error);
      return "Gagal";
    })
    .finally(() => {
      return "Berhasil mengirim pesan";
    });
});
