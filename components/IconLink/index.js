import Link from "@components/Link";
import { FaTwitter, FaTwitch, FaGithub } from "react-icons/fa";

export default function IconLink({ icon, link, variant }) {
  return (
    <Link
      key={icon}
      href={link.url}
      className={`icon-link ${variant && `icon-link--${variant}`}`}
    >
      <Icon icon={icon} />
    </Link>
  );
}

const Icon = ({ icon }) => {
  switch (icon) {
    case "twitter":
      return <FaTwitter className="contact-form__icon" />;
    case "twitch":
      return <FaTwitch className="contact-form__icon" />;
    case "github":
      return <FaGithub className="contact-form__icon" />;
    default:
      return null;
  }
};
