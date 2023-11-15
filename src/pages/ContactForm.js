import Layout from "@/components/Layout";
import React, { useState } from "react";
import Image from "next/image";
import leftArrow from "../../public/images/codeLeft.png";
import rightArrow from "../../public/images/codeRight.png";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState(""); // 'success' ou 'error'

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFeedback("");

    const data = { name, email, message };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setFeedback("Email envoyé avec succès.");
        setFeedbackType("success");
        setTimeout(() => {
          setName("");
          setEmail("");
          setMessage("");
        }, 2000); // Réinitialiser les champs après 2 secondes
      } else {
        setFeedback("Erreur lors de l'envoi de l'e-mail.");
        setFeedbackType("error");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire", error);
      setFeedback("Erreur lors de l'envoi du formulaire.");
    }
  };

  return (
    <Layout>
      <div id="contact" className="flex flex-col justify-center items-center">
        <div className="flex items-center ">
          <Image
            src={leftArrow}
            alt=""
            className="h-16 w-16 dark:invert "
            sizes=""
            priority
          />

          <h2 className="text-myred text-center text-5xl md:3xl sm:text-xl font-bold">
            Me contacter
          </h2>

          <Image
            src={rightArrow}
            alt="Portrait de Laurent Delassus"
            className="h-16 w-16 "
            sizes=""
            priority
          />
        </div>
        <p className="text-xl font-semibold mt-4 text-center dark:text-light">
          Un projet précis ? Des questions ou besoin de conseils, c&apos;est ici
          !{" "}
        </p>

        <form
          className="flex flex-col w-2/3 mx-auto p-4 font-semibold text-xl mt-16 mb-6 sm:text-lg dark:text-light sm:w-full sm:mx-4 lg:w-full"
          onSubmit={handleSubmit}
        >
          {feedback && (
            <div
              className={
                feedbackType === "success" ? "text-green-500" : "text-red-500"
              }
            >
              {feedback}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="name" className="block dark:text-light mb-2">
              Nom:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full txt text-dark"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block  mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full text-dark"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block  mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full text-dark h-48 text-md p-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="   mt-4 
    px-6 py-2 
    text-white 
    bg-myred
    border border-transparent 
    rounded-md 
    shadow 
    hover:bg-dark
    focus:outline-none focus:ring-2 focus:ring-myred focus:ring-offset-2 
    transition duration-300 ease-in-out "
          >
            Envoyer
          </button>
        </form>
      </div>
    </Layout>
  );
}
