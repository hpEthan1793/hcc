export default (props) => {
  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">Blog</h1>
        <p className="mt-3 text-gray-500">
          Blogs that are loved by the community. Updated every hour.
        </p>
      </div>
      <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
          <a href={props.href}>
            <img
              src={props.img}
              loading="lazy"
              alt={props.title}
              className="w-full h-48 rounded-t-md"
            />
            <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
              <div className="flex-none w-10 h-10 rounded-full">
                <img
                  src={props.authorLogo}
                  className="w-full h-full rounded-full"
                  alt={props.authorName}
                />
              </div>
              <div className="ml-3">
                <span className="block text-gray-900">{props.authorName}</span>
                <span className="block text-gray-400 text-sm">
                  {props.date}
                </span>
              </div>
            </div>
            <div className="pt-3 ml-4 mr-2 mb-3">
              <h3 className="text-xl text-gray-900">{props.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{props.desc}</p>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};
