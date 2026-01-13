import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import "./Home.css";

/* ===== IMPORT ALL IMAGES FROM PUBLIC ===== */
import githubLogo from "/github.png";
import linkedinLogo from "/linkedin.png";
import gmailLogo from "/gmail.png";
import instagramLogo from "/insta.png";
import facebookLogo from "/facebook.png";
import leetcodeLogo from "/leetcode.png";
import whatsappLogo from "/whatsapp.png";

import lightBg from "/j.jpg";
import darkBg from "/Hero.jpg";

interface HeroProps {
  theme: "light" | "dark";
}

export function Home({ theme }: HeroProps) {
  const roles = [
    "AI Enthusiast",
    "Machine Learning Engineer",
    "Deep Learning Expert",
    "Computer Vision Researcher",
    "Developer",
  ];

  const connectLinks = [
    { img: linkedinLogo, link: "https://www.linkedin.com/in/jatin-lakhani-1a2324305/" },
    { img: gmailLogo, link: "mailto:jatinlakhani0596@gmail.com" },
    { img: whatsappLogo, link: "https://wa.me/919328688819" },
    { img: instagramLogo, link: "https://www.instagram.com/_jatin_596_?igsh=bHNqb2hxaHRhbmo1" },
  ];

  const workLinks = [
    { img: githubLogo, link: "https://github.com/jatinlakhani0596-create" },
    { img: leetcodeLogo, link: "https://leetcode.com/u/Jatinlakhani0596/" },
  ];

  const [typedRoles, setTypedRoles] = useState("");
  const rolesText = "Cyber Security | Full Stack Developer | Tech Explorer | ";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedRoles(rolesText.slice(0, i + 1));
      i++;
      if (i === rolesText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  return (
    <section id="home" className="hero">
      {/* BACKGROUND */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${theme === "light" ? lightBg : darkBg})`,
        }}
      />

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* NAME */}
        <motion.h1 className="hero-name" variants={itemVariants}>
          Hi! I’m <br />
          <span className="gradient-text hero-name-line">Jatin Lakhani</span>
          <motion.div className="hero-line" variants={itemVariants} />
        </motion.h1>

        {/* TYPING TEXT */}
        <motion.p className="hero-intro typing-effect" variants={itemVariants}>
          {typedRoles}
        </motion.p>

        <motion.p className="hero-intro" variants={itemVariants}>
          Creating AI-powered solutions.  
          Building modern web experiences.  
          Solving real-world problems with technology.
        </motion.p>

        {/* ROLES */}
        <motion.div className="hero-roles" variants={itemVariants}>
          {roles.map((r, i) => (
            <motion.div key={i} className="role-tag" variants={itemVariants}>
              {r}
            </motion.div>
          ))}
        </motion.div>

        {/* INFO CARDS */}
        <motion.div className="hero-info" variants={itemVariants}>
          {[
            { label: "📍 Location", value: "Bhavnagar, Gujarat, India" },
            { label: "💼 Expertise", value: "Cyber Security, Backend Developer" },
            { label: "📞 Contact", value: "9328688819" },
          ].map((info, i) => (
            <motion.div
              key={i}
              className="info-card"
              whileHover={{ scale: 1.05, y: -3 }}
              variants={itemVariants}
            >
              <h4>{info.label}</h4>
              <p>{info.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* SOCIALS */}
        <motion.div className="hero-socials" variants={itemVariants}>
          <div className="social-group">
            <h5>Connect with me</h5>
            <div className="social-icons">
              {connectLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 3 }}
                >
                  <img src={s.img} className="social-icon" alt="" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="social-group">
            <h5>See what I'm doing</h5>
            <div className="social-icons">
              {workLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 3 }}
                >
                  <img src={s.img} className="social-icon" alt="" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SCROLL ARROW */}
        <motion.div
          className="hero-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
