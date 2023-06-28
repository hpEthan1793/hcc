export default () => {
  const team = [
    {
      avatar: "/martin.jpeg",
      name: "Martin Brink",
      title: "Chairperson",
      email: "mailto:chairman@hermanuschessclub.co.za",
      contact: "javascript:void(0)",
    },
    {
      avatar: "/mariette.jpeg",
      name: "Mariette Pretorius",
      title: "Vice Chairperson",
      email: "javascript:void(0)",
      contact: "javascript:void(0)",
    },
    {
      avatar: "/ethan.jpeg",
      name: "Ethan Higham",
      title: "Secretary",
      email: "mailto:info@hermanuschessclub.co.za",
      contact: "javascript:void(0)",
    },
    {
      avatar: "/tiaan.jpeg",
      name: "Tiaan Rabe",
      title: "Additional Member",
      email: "javascript:void(0)",
      contact: "javascript:void(0)",
    },
    {
      avatar: "/chess-king-solid.svg",
      name: "Fouche Scholtz",
      title: "Additional Member",
      email: "javascript:void(0)",
      contact: "javascript:void(0)",
    },
    {
      avatar: "/chess-king-solid.svg",
      name: "Lynne Opperman",
      title: "Additional Member",
      email: "javascript:void(0)",
      contact: "javascript:void(0)",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="max-w-xl mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meet our Executive Committee
          </h3>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((item, idx) => (
              <li key={idx}>
                <div className="w-48 h-48 mx-auto">
                  <img
                    src={item.avatar}
                    className="w-full h-full rounded-md"
                    alt=""
                  />
                </div>
                <div className="mt-2">
                  <h4 className="text-gray-700 font-semibold sm:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-[#da2c26]">{item.title}</p>
                  <div className="mt-4 flex justify-center gap-4 text-gray-400">
                    <a href={item.email} aria-label="Email">
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
