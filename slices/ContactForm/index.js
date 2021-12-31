import { PrismicRichText } from "@prismicio/react";

import IconLink from "@components/IconLink";

const ContactForm = ({ slice }) => {
  const { heading, body } = slice.primary;

  return (
    <section className="contact-form ">
      <div className="contact-form__details">
        <DecorativeSVG className="contact-form__decorative-svg" />
        {heading && <h1 className="contact-form__heading">{heading}</h1>}
        {body.length && (
          <div>
            <PrismicRichText field={body} />
          </div>
        )}
        <div className="contact-form__icons">
          {slice?.items?.map((item) =>
            item.link ? <IconLink {...item} /> : null
          )}
        </div>
      </div>

      <form
        className="contact-form__form"
        name="contact"
        action="/success"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">
            <div>
              Name
              <span className="form-required">*</span>
            </div>
            <input type="text" name="name" id="name" required />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            <div>
              Email
              <span className="form-required">*</span>
            </div>
            <input type="email" name="email" id="email" required />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            <div>
              Message
              <span className="form-required">*</span>
            </div>
            <textarea name="message" id="message" required></textarea>
          </label>
        </p>
        <p className="contact-form__submit-container">
          <button type="submit">Submit</button>
        </p>
      </form>
    </section>
  );
};

function DecorativeSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="477"
      height="728"
      viewBox="0 0 477 728"
      {...props}
    >
      <path
        fill="none"
        stroke="url(#a)"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M46-167c126-7 256 44 391 180 134 136 311 309 256 472-55 162-351 338-520 308S-47 498-119 342c-71-156-85-192-51-298s89-205 216-211zm0 0c126-7 256 44 391 180"
      ></path>
      <path
        fill="none"
        stroke="url(#b)"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M55-145c120-6 244 43 373 172 129 130 297 296 244 451-52 155-335 323-496 294C15 744-34 490-102 342c-68-149-82-183-49-285 32-101 85-195 206-202zm0 0c120-6 244 43 373 172"
      ></path>
      <path
        stroke="url(#c)"
        fill="none"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M64-122c115-6 233 40 355 164 123 124 283 281 233 429S333 778 179 751C26 724-20 483-85 341s-78-174-47-271c31-96 81-186 196-192zm0 0c115-6 233 40 355 164"
      ></path>
      <path
        stroke="url(#d)"
        fill="none"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M73-99c109-6 221 38 338 156 116 117 268 267 221 407-48 141-303 292-449 266C37 705-7 476-69 341c-61-135-74-166-44-257C-84-8-36-94 73-99zm0 0c109-6 221 38 338 156"
      ></path>
      <path
        stroke="url(#e)"
        strokeOpacity="0.1"
        fill="none"
        strokeWidth="1.9"
        d="M82-76c104-6 210 36 320 147s255 253 210 386-288 277-426 253C48 685 6 468-52 340c-58-127-70-156-42-243S-21-71 82-76zm0 0c104-6 210 36 320 147"
      ></path>
      <path
        fill="none"
        stroke="url(#f)"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M91-54c98-5 198 35 303 140 104 105 240 239 197 364-42 126-271 262-401 239C59 666 20 461-35 340c-56-121-67-148-40-230C-49 28-6-49 91-54zm0 0c98-5 198 35 303 140"
      ></path>
      <path
        fill="none"
        stroke="url(#g)"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M101-31c92-5 186 32 284 131s226 225 186 344c-40 118-255 245-378 224C70 646 33 453-19 340c-52-114-62-140-37-217S9-26 101-31zm0 0c92-5 186 32 284 131"
      ></path>
      <path
        stroke="url(#h)"
        fill="none"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M110-8c86-5 174 30 266 123s212 211 175 322c-38 111-239 230-355 210C81 626 46 446-2 339c-49-106-59-130-35-203C-14 64 24-4 110-8zm0 0c86-5 174 30 266 123"
      ></path>
      <path
        stroke="url(#i)"
        fill="none"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M119 15c80-4 163 28 249 114 86 87 198 197 163 301-35 103-224 215-331 196C92 607 60 438 14 339c-45-99-54-122-32-190C3 82 38 19 119 15zm0 0c80-4 163 28 249 114"
      ></path>
      <path
        stroke="url(#j)"
        strokeOpacity="0.1"
        fill="none"
        strokeWidth="1.9"
        d="M128 37c75-3 151 27 231 107s184 183 151 279c-32 96-207 200-307 182S73 431 31 338c-42-92-51-113-30-176C21 100 53 41 128 37zm0 0c75-3 151 27 231 107"
      ></path>
      <path
        fill="none"
        stroke="url(#k)"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M137 60c69-3 140 24 213 99 74 74 170 168 140 257S299 600 206 584C114 568 87 423 48 338S1 233 19 176C38 118 68 64 137 60zm0 0c69-3 140 24 213 99"
      ></path>
      <path
        stroke="url(#l)"
        fill="none"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M146 83c64-3 128 22 196 90 67 68 155 155 128 236-28 81-176 169-260 154-85-15-110-147-146-225-35-78-43-96-26-149C56 136 83 86 146 83zm0 0c64-3 128 22 196 90"
      ></path>
      <path
        fill="none"
        stroke="url(#m)"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M156 106c57-3 116 20 177 82 62 61 142 140 117 214S290 556 213 542c-77-13-100-134-132-205-33-71-39-87-24-135 16-48 41-93 99-96zm0 0c57-3 116 20 177 82"
      ></path>
      <path
        stroke="url(#n)"
        fill="none"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M165 128c51-2 105 19 160 74 55 56 127 127 104 193-22 67-143 139-212 126-70-12-90-120-119-184-30-64-36-79-22-122s37-84 89-87zm0 0c51-2 105 19 160 74"
      ></path>
      <path
        stroke="url(#o)"
        fill="none"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M174 151c46-2 93 16 142 66 49 49 113 112 93 171-20 60-128 123-189 112-61-10-80-107-106-164-26-56-31-69-19-108 13-38 33-74 79-77zm0 0c46-2 93 16 142 66"
      ></path>
      <path
        fill="none"
        stroke="url(#p)"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M183 174c40-2 82 14 124 57 43 44 99 99 82 151-18 51-112 107-166 98-53-10-70-94-92-144-23-50-28-61-17-95 11-33 29-65 69-67zm0 0c40-2 82 14 124 57"
      ></path>
      <path
        stroke="url(#q)"
        fill="none"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M192 197c35-2 70 12 107 49s85 84 70 129c-15 44-96 92-142 84s-60-81-80-123c-19-43-23-53-14-82 10-29 25-55 59-57zm0 0c35-2 70 12 107 49"
      ></path>
      <path
        stroke="url(#r)"
        fill="none"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M201 219c29-1 59 11 89 41 31 31 71 71 58 108-12 37-79 77-118 70-38-7-50-67-66-103-16-35-20-43-12-67 8-25 21-47 49-49zm0 0c29-1 59 11 89 41"
      ></path>
      <path
        stroke="url(#s)"
        fill="none"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M210 242c23-1 47 8 72 33 24 25 56 56 46 86-10 29-64 61-94 56-31-6-40-54-53-82-13-29-16-35-10-54 6-20 16-38 39-39zm0 0c23-1 47 8 72 33"
      ></path>
      <path
        stroke="url(#t)"
        fill="none"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M220 265c17-1 35 6 53 25 18 18 42 42 35 64-8 22-48 46-71 42s-30-40-40-62c-10-21-11-26-7-40 5-15 12-28 30-29zm0 0c17-1 35 6 53 25"
      ></path>
      <path
        fill="none"
        stroke="url(#u)"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M229 288c11-1 23 4 35 16 13 13 29 28 24 43s-32 31-48 28c-15-3-20-27-26-41-7-14-8-17-5-27s8-19 20-19zm0 0c11-1 23 4 35 16"
      ></path>
      <path
        stroke="url(#v)"
        fill="none"
        strokeOpacity="0.1"
        strokeWidth="1.9"
        d="M238 311c6-1 12 2 18 8s14 14 11 21c-2 8-16 16-23 14-8-1-10-13-14-20-3-7-3-9-2-14 2-5 4-9 10-9zm0 0c6-1 12 2 18 8"
      ></path>
      <defs>
        <linearGradient
          id="a"
          x1="-212.5"
          x2="706.7"
          y1="245.4"
          y2="421.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="b"
          x1="-191.6"
          x2="685.8"
          y1="249.3"
          y2="417.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="c"
          x1="-170.7"
          x2="664.9"
          y1="253.3"
          y2="413.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="d"
          x1="-149.8"
          x2="644"
          y1="257.3"
          y2="409.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="e"
          x1="-128.9"
          x2="623.1"
          y1="261.3"
          y2="405.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="f"
          x1="-108"
          x2="602.2"
          y1="265.3"
          y2="401.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="g"
          x1="-87.2"
          x2="581.3"
          y1="269.3"
          y2="397.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="h"
          x1="-66.3"
          x2="560.4"
          y1="273.3"
          y2="393.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="i"
          x1="-45.4"
          x2="539.6"
          y1="277.3"
          y2="389.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="j"
          x1="-24.5"
          x2="518.7"
          y1="281.3"
          y2="385.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="k"
          x1="-3.6"
          x2="497.8"
          y1="285.3"
          y2="381.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="l"
          x1="17.3"
          x2="476.9"
          y1="289.3"
          y2="377.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="m"
          x1="38.2"
          x2="456"
          y1="293.3"
          y2="373.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="n"
          x1="59.1"
          x2="435.1"
          y1="297.3"
          y2="369.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="o"
          x1="80"
          x2="414.2"
          y1="301.3"
          y2="365.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="p"
          x1="100.9"
          x2="393.3"
          y1="305.3"
          y2="361.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="q"
          x1="121.7"
          x2="372.4"
          y1="309.3"
          y2="357.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="r"
          x1="142.6"
          x2="351.5"
          y1="313.3"
          y2="353.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="s"
          x1="163.5"
          x2="330.7"
          y1="317.3"
          y2="349.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="t"
          x1="184.4"
          x2="309.8"
          y1="321.3"
          y2="345.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="u"
          x1="205.3"
          x2="288.9"
          y1="325.3"
          y2="341.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
        <linearGradient
          id="v"
          x1="226.2"
          x2="268"
          y1="329.3"
          y2="337.3"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ContactForm;
