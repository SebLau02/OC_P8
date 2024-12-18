import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});
export default async function contactForm(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Message de ${name} via le formulaire du portfolio`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email envoyé avec succès !" });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email", error);
      res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
    }
  } else {
    res.status(405).json({ error: "Méthode HTTP non autorisée" });
  }
}
