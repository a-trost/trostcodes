import { useState, useEffect } from "react";

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

export default function ThemeSwitch() {
  const doc = document.firstElementChild;
  const [activeTheme, setActiveTheme] = useState(
    doc.getAttribute("color-scheme")
  );
  const inactiveTheme =
    activeTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

  const toggleTheme = () => {
    if (activeTheme === THEMES.LIGHT) {
      setActiveTheme(THEMES.DARK);
    } else {
      setActiveTheme(THEMES.LIGHT);
    }
  };

  useEffect(() => {
    doc.setAttribute("color-scheme", activeTheme);
    window.localStorage.setItem("colorScheme", activeTheme);
  }, [activeTheme]);

  const svgSize = 28;
  return (
    <button
      className={`theme-switch theme-switch--${activeTheme}`}
      onClick={toggleTheme}
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type="button"
    >
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="ray-mask">
            <rect x="0" y="0" width="42" height="42" fill="#000" />
            <circle cx="21" cy="21" r="22" id="ray-mask-circle" fill="#fff" />
          </mask>
        </defs>

        <path
          d="M21 9a2 2 0 0 0 2-2V3a2 2 0 0 0-4 0v4a2 2 0 0 0 2 2Zm18 10h-4a2 2 0 1 0 0 4h4a2 2 0 0 0 0-4ZM9 21a2 2 0 0 0-2-2H3a2 2 0 1 0 0 4h4a2 2 0 0 0 2-2Zm.44-14a2.02 2.02 0 1 0-2.78 2.94l2.88 2.78a2 2 0 0 0 1.46.56 2 2 0 0 0 1.44-.62 2 2 0 0 0 0-2.82L9.44 7ZM31 13.28a2 2 0 0 0 1.38-.56l2.88-2.78A2 2 0 0 0 32.56 7l-2.88 2.84a2 2 0 0 0 0 2.82 2 2 0 0 0 1.32.62ZM21 33a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2Zm11.46-3.72a2 2 0 0 0-2.78 2.88L32.56 35a2 2 0 0 0 2.82-.04 2 2 0 0 0 0-2.84l-2.92-2.84Zm-22.92 0-2.88 2.78a2 2 0 0 0 .66 3.29 2 2 0 0 0 .78.15 2 2 0 0 0 1.34-.5l2.88-2.78a2 2 0 0 0-2.78-2.88v-.06Z"
          id="rays"
          mask={`url(#ray-mask)`}
        />
        <circle cx="21" cy="21" r="8" id="sun" />
        <path
          d="M20.71 29h-.08a7.75 7.75 0 0 1-5.51-2.37 7.86 7.86 0 0 1-.2-10.52 7.61 7.61 0 0 1 3-2.06.75.75 0 0 1 .8.17.75.75 0 0 1 .19.75A6.32 6.32 0 0 0 27 23.05a.75.75 0 0 1 .95.97 7.64 7.64 0 0 1-4.27 4.4c-.94.39-1.95.58-2.97.58Z"
          id="moon"
        />
      </svg>
    </button>
  );
}
