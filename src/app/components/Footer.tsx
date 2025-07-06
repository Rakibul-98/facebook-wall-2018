export default function Footer() {
  const footerLinks = [
    "About",
    "Advertising",
    "Create a Page",
    "Developers",
    "Careers",
    "Privacy",
    "Terms",
    "Help",
  ];

  return (
    <footer className="border-t border-gray-300 bg-gray-100 text-xs text-gray-600 font-sans">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap justify-center space-x-4">
        {footerLinks.map((link, index) => (
          <a key={index} href="#" className="hover:underline">
            {link}
          </a>
        ))}
      </div>

      <div className="text-center text-gray-500 text-xs py-2">
        Facebook © 2009
      </div>
    </footer>
  );
}
