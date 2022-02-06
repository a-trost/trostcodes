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

function RamenBlockSVG() {
  return (
    <svg
      className="home-hero__squiggle"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1440 663"
    >
      <path
        strokeLinecap="round"
        strokeWidth="12"
        fill="none"
        d="M-9 84c22 3 57 19 105 15s73-36 125-34c51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 48 52-1 73-56 124-56 52 0 77 53 125 58s83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 113c22 3 57 19 105 15s73-36 125-34c51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 48 52-1 73-56 124-56 52 0 77 53 125 58s83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        data-order="3"
        d="M-9 142c22 3 57 19 105 15s73-36 125-34c51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 48 52-1 73-56 124-56 52 0 77 53 125 58s83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 171c22 3 57 19 105 15s73-36 125-34c51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 48 52-1 73-56 124-56 52 0 77 53 125 58s83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 200c22 3 57 19 105 15s73-36 125-34c51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 49 52-2 73-57 124-57 52 0 77 54 125 58 48 5 83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 229c22 3 57 19 105 15s73-36 125-34c51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 49 52-2 73-57 124-57 52 1 77 54 125 58 48 5 83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 258c22 3 57 19 105 15s73-36 125-34c51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 49 52-2 73-57 124-57 52 1 77 54 125 58 48 5 83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 287c22 3 57 19 105 15s73-36 125-34c51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 49 52-2 73-57 124-57 52 1 77 54 125 58 48 5 83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 316c22 3 57 19 105 15s73-36 125-34c51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 49 52-2 73-57 124-57 52 1 77 54 125 58 48 5 83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 345c22 3 57 19 105 15 48-3 73-36 125-34 51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 49 52-2 73-57 124-57 52 1 77 54 125 58 48 5 83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 374c22 3 57 19 105 15 48-3 73-36 125-34 51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 49 52-2 73-57 124-57 52 1 77 54 125 58 48 5 83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 403c22 3 57 19 105 15 48-3 73-36 125-34 51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 49 52-2 73-57 124-57 52 1 77 54 125 58 48 5 83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 432c22 3 57 19 105 15 48-3 73-36 125-34 51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 49 52-2 73-57 124-57 52 1 77 54 125 58 48 5 83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 461c22 3 57 19 105 15 48-3 73-36 125-34 51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 49 52-2 73-57 124-57 52 1 77 54 125 58 48 5 83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 490c22 3 57 19 105 15 48-3 73-36 125-34 51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 49 52-2 73-57 124-57 52 1 77 54 125 58 48 5 83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 519c22 3 57 19 105 15 48-3 73-36 125-34 51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 49 52-2 73-57 124-57 52 1 77 54 125 58 48 5 83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 548c22 3 57 19 105 15 48-3 73-36 125-34 51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 49 52-2 73-57 124-57 52 1 77 54 125 58 48 5 83-28 105-35"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="12"
        d="M-9 577c22 3 57 19 105 15 48-3 73-36 125-34 51 3 72 50 124 47s73-60 124-62c52-1 73 49 125 53 51 5 72-32 124-33s73 30 124 29c52 0 73-34 125-30 51 3 72 50 124 49 52-2 73-57 124-57 52 1 77 54 125 58 48 5 83-28 105-35"
      ></path>
    </svg>
  );
}
