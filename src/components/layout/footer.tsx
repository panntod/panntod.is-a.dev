import { contact } from "@/data";
import { Link } from "react-router-dom";

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex h-full flex-col items-center justify-between space-y-2 py-4 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center space-y-2 md:items-start">
          <p>&copy; {date} Pandhu A. Munjalindra, All Rights Reserved</p>
          <p>
            This website is open source.{" "}
            <Link
              to="https://github.com/panntod/Personal-Website"
              target="_blank"
              className="link"
              aria-label="GitHub repository"
            >
              View on GitHub
            </Link>
          </p>
        </div>
        <div className="flex space-x-4">
          {contact.map(item => (
            <Link key={item.link} to={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
              <span className={`${item.icon} size-6`} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
