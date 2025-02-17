"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import dynamic from "next/dynamic";
import React, { ChangeEvent, useState } from "react";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Animation from "@/public/assets/coder.json";

export const Contact = () => {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await fetchMessage();
  };

  const fetchMessage = async () => {
    const response = await fetch("/api/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    const data = await response.json();
    if (data) {
      setLoading(false);
    }
  };
  const isFieldValid = () => {
    return (
      contact.email !== "" && contact.name !== "" && contact.message !== ""
    );
  };

  return (
    <Card className="mb-8 p-3 sm:p-6 border-custom">
      <form className="flex gap-4 flex-col max-w-25" onSubmit={handleSubmit}>
        <Label className="text-sm sm:text-md" htmlFor="name">
          Nom Prénom
          <Input
            onChange={handleChange}
            className="placeholder:text-xs placeholder:sm:text-sm mt-1 font-caption"
            type="text"
            id="name"
            name="name"
            placeholder="ex: Jonh Doe"
          />
        </Label>
        <Label className="text-sm" htmlFor="email">
          Addresse mail
          <Input
            onChange={handleChange}
            className="placeholder:text-xs placeholder:sm:text-sm mt-1 font-caption"
            type="email"
            id="email"
            name="email"
            placeholder="ex: jonh.doe@yopmail.yop"
          />
        </Label>
        <Label className="text-sm" htmlFor="message">
          Votre message
          <Textarea
            onChange={handleChange}
            id="message"
            name="message"
            className="placeholder:text-xs placeholder:leading-5 placeholder:sm:text-sm mt-1 font-caption"
            placeholder="ex: Voici un message"
            rows={10}
          />
        </Label>
        <div className="relative min-h-16 flex justify-center">
          {loading ? (
            <Lottie
              animationData={Animation}
              loop={true}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                translate: "-50% -50%",
                width: "60px",
              }}
            />
          ) : (
            <Button
              disabled={!isFieldValid()}
              type="submit"
              className="w-fit self-center"
            >
              Envoyer
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
};
