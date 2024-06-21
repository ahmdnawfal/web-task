import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import InputTextArea from "./input-textarea";

const Contact = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-center px-4 md:px-16 py-10">
        <div>
          <p className="font-bold text-4xl">Contact</p>
          <Separator className="h-[3px]" />
        </div>
      </div>
      <div className="grid gap-10 max-w-[95vw] w-screen m-auto md:grid-cols-2 place-content-center place-items-center  px-4 md:px-16 ">
        <div>
          <Image
            src={"/contact.webp"}
            width={300}
            height={300}
            alt="contact"
            className="rounded-md"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <Card className="shadow-lg w-full h-full">
            <CardContent className="p-6">
              <div className="mb-10">
                <p className="font-semibold text-2xl text-center mb-10">
                  Contact Us
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <FaWhatsapp size={25} />
                    <p>+6281585041075</p>
                  </div>
                  <a
                    href="https://www.instagram.com/web_task"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-blue-400"
                  >
                    <div className="flex items-center gap-2">
                      <FaInstagram size={25} />
                      <p>@web_task</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <InputTextArea />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
