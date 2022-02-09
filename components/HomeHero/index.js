import { motion } from "framer-motion";

export default function HomeHero() {
  const transitionConfig = {
    delay: 0.2,
    duration: 1.2,
  };

  const titles = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delay: 1.5,
        staggerChildren: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const title = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 2.3,
      },
    },
    hidden: { opacity: 0, x: -10 },
  };

  return (
    <section className="home-hero">
      <h1 className="home-hero__name-container">
        <motion.span
          initial={{ y: "-50%" }}
          animate={{ y: 0 }}
          transition={transitionConfig}
          className="home-hero__alex"
        >
          Alex
        </motion.span>
        <motion.span
          initial={{ y: "50%" }}
          transition={transitionConfig}
          animate={{ y: 0 }}
          className="home-hero__trost"
        >
          Trost
        </motion.span>
      </h1>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={titles}
        role="list"
        className="home-hero__titles"
      >
        <motion.li variants={title}>Frontend Developer</motion.li>
        <motion.li variants={title}>Streamer</motion.li>
        <motion.li variants={title}>Dev Advocate</motion.li>
        <motion.li variants={title}>Community Builder</motion.li>
      </motion.ul>
    </section>
  );
}
