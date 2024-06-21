"use client";

import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { FaWhatsapp } from "react-icons/fa";

type Props = {};

const InputTextArea = (props: Props) => {
  const [inputTextarea, setInputTextArea] = useState<string>("");

  const handleSendWhatsapp = () => {
    const encodedMessage = encodeURIComponent(inputTextarea).replace(
      /%0A/g,
      "%0A"
    );
    const apiWhatsapp = `https://api.whatsapp.com/send/?phone=6281585041075&text=${encodedMessage}&type=phone_number&app_absent=0`;
    window.open(apiWhatsapp, "_blank");
  };

  return (
    <>
      <label>Message</label>
      <Textarea
        placeholder="Type your message here."
        className="max-w-[95vw] m-auto w-[300px]"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setInputTextArea(e.target.value)
        }
      />
      <Button className="flex items-center gap-2" onClick={handleSendWhatsapp}>
        <FaWhatsapp size={25} />
        <p>Send Whatsapp</p>
      </Button>
    </>
  );
};

export default InputTextArea;
