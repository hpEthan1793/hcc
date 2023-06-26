import { useState } from "react";

export default () => {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h1 className="text-sm text-[#da2c26] font-medium">
            The #1 Chess Club In The Overberg
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
            Welcome to the Hermanus Chess Club
          </h2>
          <p>
            Our aim at the Hermanus Chess Club is to help grow chess in Hermanus
            as well as the greater Overberg region, by engaging in numerous
            chess development programs and stimulating chess for both youth and
            federation players. We are situated at the Hermanus Sports Club,
            open every Thursday afternoon from 15:30 until 18:00 in the evening.
            If you are interested in joining the club and becoming a member,
            head on over to our membership page or send us an email.
          </p>
        </div>
        <div className="flex-none mt-14 md:mt-0 md:max-w-xl my-2">
          <img src="/banner.jpeg" className="md:rounded-tl-[108px]" alt="" />
        </div>
      </div>
      <div class="md:bg-[url('/board_perspective.svg')] bg-bottom md:h-28" />
    </section>
  );
};
