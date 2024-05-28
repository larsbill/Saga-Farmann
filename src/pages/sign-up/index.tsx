import React, { useState } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import DarkContainer from "@/components/containers/darkContainer/DarkContainer";
import styles from "./SignUp.module.css";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";

const SignUp = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "_wpcf7_unit_tag",
      process.env.NEXT_PUBLIC_WPCF7_UNIT_TAG as string
    );
    formData.append("your-name", formInputs.name);
    formData.append("your-email", formInputs.email);
    formData.append("your-message", formInputs.message);

    try {
      const response = await fetch(
        "https://saga2024.sagafarmann.com/wp/wp-json/contact-form-7/v1/contact-forms/2298/feedback",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setMessageSent(true);
      console.log("Success:", result);
      // Handle successful form submission (e.g., show a success message, clear the form, etc.)
    } catch (error) {
      console.error("Error:", error);
      // Handle errors (e.g., show an error message)
    }
  };

  return (
    <>
      <Head>
        <title>Saga Farmann sign up</title>
        <meta name="description" content="Saga Farman donate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header="Join us" />
      <DarkContainer>
        <div className={styles.container}>
          {!messageSent ? (
            <>
              <HeadingTwo>Apply to join us on our voyage</HeadingTwo>
              <form className={styles.form} onSubmit={handleSubmit}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  value={formInputs.name}
                  onChange={handleChange}
                />
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  value={formInputs.email}
                  onChange={handleChange}
                />
                <textarea
                  className={styles.input}
                  placeholder="Why do you want to join us?"
                  name="message"
                  required
                  value={formInputs.message}
                  onChange={handleChange}
                  rows={8}
                />
                <button className={styles.button} type="submit">
                  Sign Up
                </button>
              </form>
            </>
          ) : (
            <>
              <p className={styles.message}>
                Thank you for your interest! We will contact you soon regarding
                your application.
              </p>
            </>
          )}
        </div>
      </DarkContainer>
    </>
  );
};

export default SignUp;
