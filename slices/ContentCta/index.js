import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Link from "@components/Link";
import { motion } from "framer-motion";

const ContentCta = ({ slice }) => {
  const {
    heading,
    body,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink,
  } = slice.primary;

  return (
    <section className="content-cta">
      <div className="content-cta__left-container">
        <PrismicRichText field={heading} />
        <PrismicRichText field={body} />
        {primaryButtonText || secondaryButtonText ? (
          <div className="content-cta__button-container">
            {primaryButtonText && (
              <Link
                className="button button--primary"
                field={primaryButtonLink}
              >
                {primaryButtonText}
              </Link>
            )}
            {secondaryButtonText && (
              <Link className="button button" field={secondaryButtonLink}>
                {secondaryButtonText}
              </Link>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="content-cta__right-container">
        <SVGTriangles />
      </div>
    </section>
  );
};

export default ContentCta;

function SVGTriangles() {
  const secondTriangle = {
    offscreen: {
      x: 0,
    },
    onscreen: {
      x: 150,
      rotate: 25,
      transition: {
        delay: 0.6,
        type: "spring",
        bounce: 0.5,
        duration: 1.5,
      },
    },
  };

  const thirdTriangle = {
    offscreen: {
      x: 0,
    },
    onscreen: {
      x: 280,
      rotate: 50,
      transition: {
        delay: 0.6,
        type: "spring",
        bounce: 0.5,
        duration: 1.5,
      },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      fill="none"
      viewBox="0 0 488 264"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      overflow="visible"
    >
      <motion.path
        className="content-cta__triangle"
        fill="#339AF0"
        d="M112.303 5.53c4.282-7.373 14.987-7.373 19.269 0l110.797 190.757c4.282 7.372-1.071 16.587-9.635 16.587H11.141c-8.563 0-13.916-9.215-9.634-16.587L112.303 5.529z"
      ></motion.path>

      <motion.path
        className="content-cta__triangle"
        fill="#FCC419"
        d="M112.303 5.53c4.282-7.373 14.987-7.373 19.269 0l110.797 190.757c4.282 7.372-1.071 16.587-9.635 16.587H11.141c-8.563 0-13.916-9.215-9.634-16.587L112.303 5.529z"
        variants={secondTriangle}
      ></motion.path>

      <motion.path
        className="content-cta__triangle"
        fill="#FA5252"
        d="M112.303 5.53c4.282-7.373 14.987-7.373 19.269 0l110.797 190.757c4.282 7.372-1.071 16.587-9.635 16.587H11.141c-8.563 0-13.916-9.215-9.634-16.587L112.303 5.529z"
        variants={thirdTriangle}
      ></motion.path>

      {/* <motion.path
   
        fill="#FCC419"
        data-delete
        d="M303.707 8.956c6.998-4.9 16.676-.387 17.421 8.124l19.265 220.209c.745 8.51-8.002 14.636-15.745 11.025l-200.34-93.42c-7.742-3.61-8.673-14.248-1.675-19.148L303.707 8.956z"
      ></motion.path>
      <motion.path
   
        fill="#FA5252"
        data-delete
        d="M474.805 32.974c8.426-1.41 15.219 6.83 12.227 14.832l-77.413 207.051c-2.992 8.002-13.525 9.765-18.959 3.173L250.055 87.462c-5.434-6.592-1.694-16.595 6.732-18.005l218.018-36.483z"
      ></motion.path> */}
    </motion.svg>
  );
}
