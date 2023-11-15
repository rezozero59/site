import nodemailer from "nodemailer";

import { validationResult, body } from "express-validator";

export default async function handler(req, res) {
  await body("email").isEmail().run(req);
  await body("name").not().isEmpty().trim().escape().run(req);
  await body("message").not().isEmpty().trim().escape().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: req.body.email, // L'adresse email de l'expéditeur (optionnel)
      replyTo: req.body.email, // Ajoutez cette ligne pour permettre la réponse directe à l'expéditeur
      to: "laurentdelassus@gmail.com", // Votre adresse email
      subject: `Message de ${req.body.name}`,
      text: req.body.message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send("Erreur lors de l'envoi de l'e-mail");
      } else {
        console.log("Email envoyé : " + info.response);
        res.status(200).send("Email envoyé avec succès");
      }
    });
  } else {
    res.status(405).end(); // Méthode non autorisée
  }
}
