import nodemailer from "nodemailer";
import { GoogleAuth } from "google-auth-library";

export default async function handler(req, res) {
  // Your Gmail OAuth credentials
  const clientId = process.env.GMAIL_CLIENT_ID;
  const clientSecret = process.env.GMAIL_CLIENT_SECRET;
  const refreshToken = process.env.GMAIL_REFRESH_TOKEN;

  // Create a new OAuth2 client
  const auth = new GoogleAuth({
    credentials: {
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
    },
  });

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { fullName, email, message } = req.body;

  try {
    // Fetch the access token
    const accessToken = await auth.getAccessToken();

    // Create a transporter with OAuth2 authentication
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "dorcasmomodu1@gmail.com",
        clientId,
        clientSecret,
        refreshToken,
        accessToken,
      },
    });

    // Define email options
    const mailOptions = {
      from: email,
      to: "charlesdorcas01@gmail.com",
      subject: "New Email From Contact",
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
}
