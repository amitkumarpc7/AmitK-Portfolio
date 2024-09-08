import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const linkedinUrl = "https://www.linkedin.com/in/amitchaurasia07";
  const githubUrl = "https://github.com/amitkumarpc7";
  const instagramUrl = "https://www.instagram.com/amitkumarpc";
  return (
    <div className="border-b border-neutral-900 pb-20" id="Contact">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-3xl"
      >
        Contact Me
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        {/* <p className="my-4">{CONTACT.phoneNo}</p> */}
        <a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          href={`mailto:${CONTACT.email}`}
          className=" hover:underline hover:text-purple-400"
        >
          {CONTACT.email}
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500"
        >
          <FaLinkedin />
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500"
        >
          <FaGithub />
        </a>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Contact;
