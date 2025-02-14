export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex h-full flex-col items-center justify-between py-4 md:flex-row md:space-y-0">
        <div className="rounded py-4">
          <img src="https://panntod-spotify-readme.vercel.app/api" alt="Panntod Playing Spotify" />
        </div>
        <div className="flex items-center md:items-start">
          <p>Copyright &copy; {date} Pandhu A. Munjalindra</p>
        </div>
      </div>
    </footer>
  );
};
