import Image from "next/image";
import React from "react";
import { CookieValueTypes } from "cookies-next";

type Props = {
  language: string;
};

const LandingPage = ({ language }: Props) => {
  const handleLanguage = (lang: CookieValueTypes) => {
    if (lang === "en") {
      return (
        <span>
          <span className="font-semibold">
            We are your trusted partner in building and managing a successful
            online presence.{" "}
          </span>
          Do you need a professional website to expand the reach of your
          business or expert help to complete your academic assignments at an
          affordable price? We are here to help.
        </span>
      );
    } else if (lang === "id") {
      return (
        <span>
          <span className="font-semibold">
            Kami adalah mitra terpercaya Anda dalam membangun dan mengelola
            kehadiran online yang sukses.{" "}
          </span>
          Apakah Anda membutuhkan website profesional untuk memperluas jangkauan
          bisnis Anda atau bantuan ahli untuk menyelesaikan tugas-tugas akademis
          Anda dengan harga yang terjangkau? kami hadir untuk membantu.
        </span>
      );
    }
  };

  return (
    <div className="bg-[#F8F8F8] min-h-screen flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center md:justify-normal items-center px-4 md:px-16">
      <div className="md:w-[50%] space-y-3 md:space-y-6 mt-6 md:mt-0">
        <div className="text-[#414141] text-3xl md:text-6xl font-semibold">
          <p>Web Task</p>
        </div>
        <div className="text-sm sm:text-base">{handleLanguage(language)}</div>
      </div>
      <div className="md:w-[50%] flex justify-end">
        <div className="relative">
          <Image
            src={"/landing-page.png"}
            width={600}
            height={525}
            alt="image landing page"
            className="z-10 relative"
          />
          <Image
            src={"/bg-landing-page.png"}
            width={600}
            height={525}
            alt="bg image landing page"
            className="absolute top-0"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
