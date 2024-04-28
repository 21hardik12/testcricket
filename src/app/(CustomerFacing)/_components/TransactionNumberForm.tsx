"use client";

export default function TransactionNumberForm() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
      <div className="text-center">
        After Payment, Please Enter Your 12 Digits UTR or Transaction Number to
        Verify Your Payment and Track your Tickets
      </div>
      <div className="w-full">
        <input
          type="text"
          name="transactionNumber"
          id="transactionNumber"
          className="block w-full px-3 py-2 border-2 border-green-900 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900 sm:text-sm"
          placeholder="xxxx-xxxx-xxxx-xxxx"
        />
      </div>
      <button className="bg-red-500 rounded-sm text-white p-2 text-base ">Verify Your Payment</button>
    </form>
  );
}
