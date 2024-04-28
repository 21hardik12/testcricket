"use client";

export default function ContactForm() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  }

  return (
    <form
          onSubmit={handleSubmit}
          className="flex gap-3 p-4 bg-gray-100"
        >
          <div className="">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Email Address"
            />
          </div>
          <div className="">
            <input
              type="tel"
              name="phone"
              id="phone"
              className="block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="+91 XXXXXXXXXX"
            ></input>
          </div>
          <button className="px-6 bg-red-500 rounded-sm text-white text-base">
            Continue
          </button>
        </form>
  );
}