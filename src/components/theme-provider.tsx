import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

type Theme = "light" | "dark" | "system";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "system");

  // Fungsi untuk mendapatkan tema sistem
  const getSystemTheme = (): Theme => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";

    return "light";
  };

  useEffect(() => {
    const root = document.documentElement;

    // Tentukan tema berdasarkan preferensi
    const appliedTheme = theme === "system" ? getSystemTheme() : theme;

    root.classList.remove("light", "dark");
    root.classList.add(appliedTheme);

    // Event listener untuk perubahan tema sistem
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        root.classList.remove("light", "dark");
        root.classList.add(getSystemTheme());
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
