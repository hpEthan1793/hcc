export default () => {
  const currentYear = new Date().getFullYear();

  const footerNavs = [
    {
      label: "Site",
      items: [
        {
          href: "/",
          name: "Home",
        },
        {
          href: "/membership",
          name: "Membership",
        },
        {
          href: "/leaderboard",
          name: "Leaderboard",
        },
        {
          href: "/news",
          name: "News",
        },
      ],
    },
    {
      label: "Useful Links",
      items: [
        {
          href: "https://lichess.org",
          name: "Play Chess Online",
        },
        {
          href: "https://chessa.co.za",
          name: "Chess SA",
        },
        {
          href: "https://chess-results.com",
          name: "Chess-Results",
        },
        {
          href: "https://www.fide.com/FIDE/handbook/LawsOfChess.pdf",
          name: "Chess Rules",
        },
        {
          href: "https://houseofchess.co.za",
          name: "Chess Equipment",
        },
      ],
    },
    {
      label: "Other",
      items: [
        {
          href: "/constitution.pdf",
          name: "Constitution",
        },
        {
          href: "/code-of-conduct.pdf",
          name: "Code of Conduct",
        },
        {
          href: "https://hermanuschessclub.co.za/sitemap-index.xml",
          name: "Sitemap",
        },
        {
          href: "https://lichess.org/team/hermanus-chess-club",
          name: "Lichess.org Team",
        },
      ],
    },
  ];

  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="gap-6 justify-between md:flex border-t pt-4">
        <div className="flex-1">
          <div className="max-w-xs">
            <img src="/logo.png" className="w-32" alt="Hermanus Chess Club logo" />
            <p className="leading-relaxed mt-2 text-[15px]">
              The Home of Chess In Hermanus
            </p>
          </div>
          <div>
            <div>
              Whatsapp:&nbsp;
              <a
                href="https://wa.me/+27736417346"
                className="hover:underline hover:text-[#da2c26]"
              >
                +27 73 641 7346
              </a>
            </div>
            <div>
              Email:&nbsp;
              <a
                href="mailto:info@hermanuschessclub.co.za"
                className="hover:underline hover:text-[#da2c26]"
              >
                info@hermanuschessclub.co.za
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-gray-800 font-medium">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href={el.href}
                    className="hover:underline hover:text-[#da2c26]"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; {currentYear} Hermanus Chess Club. All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="https://facebook.com/HermanusChessClub" aria-label="Facebook">
                <svg
                  class="svg-icon w-6 h-6 text-[#da2c26]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="https://www.instagram.com/Hermanus.Chess.Club/" aria-label="Instagram">
                <svg
                  class="svg-icon w-6 h-6 text-[#da2c26]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="https://www.youtube.com/@HermanusChessClub" aria-label="Youtube">
                <svg
                  class="svg-icon w-6 h-6 text-[#da2c26]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </a>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <a href="mailto:info@hermanuschessclub.co.za" aria-label="Email">
                <svg
                  class="svg-icon w-6 h-6 text-[#da2c26]"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};
