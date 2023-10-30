import {
  InstagramLogo,
  LinkedinLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="relative p-10 flex flex-col items-center justify-center">
      <div className="absolute w-24 p-[2px] top-0 rounded-full bg-[#E4AEA7]" />
      <div className="flex items-center gap-2 mb-2 text-[#E4AEA7]">
        <a
          href="https://www.instagram.com/tuepat/"
          target="_blank"
          className="text-[#E4AEA7] hover:text-[#0e050d] duration-300"
        >
          <InstagramLogo weight="bold" size={28} />
        </a>
        |
        <a
          href="https://www.linkedin.com/in/asrullah-asrul-767655262/"
          target="_blank"
          className="text-[#E4AEA7] hover:text-[#0e050d] duration-300"
        >
          <LinkedinLogo weight="bold" size={28} />
        </a>
        |
        <a
          href="mailto:asrul010302@gmail.com"
          target="_blank"
          className="text-[#E4AEA7] hover:text-[#0e050d] duration-300"
        >
          <EnvelopeSimple weight="bold" size={28} />
        </a>
      </div>
      <h3 className="text-[#E4AEA7] font-['Bebas_Neue'] text-2xl">
        &copy; Asrullah - 2023
      </h3>
      <p className="text-[#E4AEA7]">
        Site designed with love by:{" "}
        <a
          className="font-bold underline decoration-2 hover:no-underline duration-300"
          href="https://muhammadfathurraiyan.site"
        >
          Raiyan.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
