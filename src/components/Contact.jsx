export default () => {
  return (
    <main className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto space-y-3 sm:text-center">
          <h3 className="text-[#da2c26] font-semibold">Contact</h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p>We’d love to hear from you! Please fill out the form bellow.</p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form
            action="/redirect"
            className="space-y-5"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">First name</label>
                <input
                  name="First Name"
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#da2c26] shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Last name</label>
                <input
                  name="Last Name"
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#da2c26] shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                name="Email"
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#da2c26] shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                name="Message"
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-[#da2c26] shadow-sm rounded-lg"
              ></textarea>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-[#da2c26] hover:bg-red-400 active:bg-[#da2c26] rounded-lg duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
