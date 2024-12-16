"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import React, { ChangeEvent, useState } from "react";

export const Contact = () => {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <Card className="mb-8 p-3 sm:p-6 border-custom">
      <form className="flex gap-4 flex-col max-w-25">
        <Label className="text-sm sm:text-md" htmlFor="name">
          Noble identité
          <Input
            onChange={handleChange}
            className="placeholder:text-xs placeholder:sm:text-sm mt-1"
            type="text"
            id="name"
            name="name"
            placeholder="Sir Eldric le Juste"
          />
        </Label>
        <Label className="text-sm" htmlFor="email">
          Missive electronique
          <Input
            onChange={handleChange}
            className="placeholder:text-xs placeholder:sm:text-sm mt-1"
            type="email"
            id="email"
            name="email"
            placeholder="juste_le_eldric@ordre-de-la-justice.org"
          />
        </Label>
        <Label className="text-sm" htmlFor="message">
          Lettre de la quête
          <Textarea
            onChange={handleChange}
            id="message"
            name="message"
            className="placeholder:text-xs placeholder:leading-5 placeholder:sm:text-sm mt-1"
            placeholder="Hé Seb, ton profil est des plus intéressants ! Et si nos talents s’alliaient pour accomplir de grandes choses ensemble ?"
            rows={10}
          />
        </Label>
      </form>
    </Card>
  );
};
