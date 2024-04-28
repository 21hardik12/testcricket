import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { IoIosArrowDown } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaCheck, FaCopy, FaRegCopy } from "react-icons/fa6";
import ContactForm from "../../_components/ContactForm";
import AmountPayable from "../../_components/AmountPayable";
import TransactionNumberForm from "../../_components/TransactionNumberForm";
import Image from "next/image";
import { Table, TableRow } from "@/components/ui/table";
import { getEventWithoutImages, getTicket } from "../../_actions/allActions";

export default function BookTickets({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const ticket = searchParams["ticket"];
  const seats = searchParams["seats"];

  return (
    <div className="flex gap-3">
      <div className="grow flex flex-col gap-2">
        <ContactDetailsForm></ContactDetailsForm>
        <PaymentOption></PaymentOption>
      </div>
      <div className="">
        <BillingDetails
          seats={seats as string}
          eventId={params.id}
          ticketId={ticket as string}
        ></BillingDetails>
      </div>
    </div>
  );
}

async function BillingDetails({
  seats,
  ticketId,
  eventId,
}: {
  seats: string;
  ticketId: string;
  eventId: string;
}) {
  const ticket = await getTicket(ticketId);
  const event = await getEventWithoutImages(eventId);
  return (
    <div>
      <div className="flex gap-5 bg-gray-100 rounded-sm p-3">
        <div className="flex flex-col items-start">
          <p className="text-xl font-light mb-3 tracking-wider">ORDER SUMMARY</p>
          <p className="text-black font-bold text-base mb-1">{event?.title}</p>
          <p className="text-black font-light text-sm mb-2">{event?.stadium.location}</p>
          <p className="text-black font-normal text-sm mb-3">{ticket?.name}</p>
          <p>{event?.date.toDateString()}</p>
        </div>
        <div className="flex flex-col items-center mt-2">
          <p className="text-lg font-bold">{seats}</p>
          <p>Tickets</p>
        </div>
      </div>
      <div>
        <div>
          <p>Total</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

function ContactDetailsForm() {
  return (
    <Collapsible open>
      <CollapsibleTrigger className="w-full">
        <div className="flex w-full bg-red-500 p-3 text-white">
          <IoIosArrowDown className="mt-1 mr-3 font-bold text-lg" />
          <p>Share your Contact Details</p>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ContactForm></ContactForm>
      </CollapsibleContent>
    </Collapsible>
  );
}

function PaymentOption() {
  return (
    <Collapsible open>
      <CollapsibleTrigger className="w-full">
        <div className="flex w-full bg-red-500 p-3 text-white">
          <IoIosArrowDown className="mt-1 mr-3 font-bold text-lg" />
          <p>Payment Options</p>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex py-1 flex-col items-start">
          <CardFailure></CardFailure>
          <PaymentOptionDialog paymentOption="Net Banking">
            <div className="flex flex-col items-center gap-2">
              <Table>
                <TableRow>
                  <div className="flex justify-between p-1">
                    <p className="font-bold">Name</p>
                    <div className="flex">
                      <p>Book My Show</p>
                      <FaRegCopy className="font-bold text-lg ml-1" />
                    </div>
                  </div>
                </TableRow>
                <TableRow>
                  <div className="flex justify-between p-1">
                    <p className="font-bold">IFSC</p>
                    <div className="flex">
                      <p>AUB2132132</p>
                      <FaRegCopy className="font-bold text-lg ml-1" />
                    </div>
                  </div>
                </TableRow>
                <TableRow>
                  <div className="flex justify-between p-1">
                    <p className="font-bold">Account Number</p>
                    <div className="flex">
                      <p>213213123123213</p>
                      <FaRegCopy className="font-bold text-lg ml-1" />
                    </div>
                  </div>
                </TableRow>
                <TableRow>
                  <div className="flex justify-between p-1">
                    <p className="font-bold">Bank Name</p>
                    <div className="flex">
                      <p>AU Small Finance Bank</p>
                      <FaRegCopy className="font-bold text-lg ml-1" />
                    </div>
                  </div>
                </TableRow>
              </Table>
              <AmountPayable></AmountPayable>
              <TransactionNumberForm></TransactionNumberForm>
            </div>
          </PaymentOptionDialog>
          <PaymentOptionDialog paymentOption="Upi">
            <div className="w-full flex flex-col items-center gap-4">
              <div className="flex text-green-900">
                <p>Pay using any upi to mke your order success </p>
                <FaCheck className="mt-1 ml-1"></FaCheck>
              </div>
              <div className="flex w-full gap-1 p-1 flex-col items-center border-2 border-gray-200 shadow-sm">
                <p>mfdjkf@aubank</p>
                <button className="w-full mx-9 flex border-2 justify-center rounded-xl border-blue-700 text-blue-700">
                  <FaCopy className="mt-1 mr-1"></FaCopy>Copy Upi
                </button>
              </div>
              <AmountPayable></AmountPayable>
              <TransactionNumberForm></TransactionNumberForm>
            </div>
          </PaymentOptionDialog>
          <PaymentOptionDialog paymentOption="QR Code">
            <div className="flex flex-col items-center gap-1">
              <p className="text-xs">Pay With UPI QR</p>
              <Image
                src="/generalAssets/qrcode.jpg"
                width={150}
                height={150}
                alt=""
              />
              <AmountPayable></AmountPayable>
              <p className="text-green-700 text-center text-sm">
                As per UPI guidelines for payments above Rs 2000, scan the qr
                code with another device
              </p>
              <TransactionNumberForm></TransactionNumberForm>
              <div>
                <p>Scan the QR code using any upi app on your phone.</p>
                <div className="flex justify-evenly">
                  <Image
                    src="/generalAssets/gpay-logo.jpeg"
                    width={50}
                    height={50}
                    alt=""
                  />
                  <Image
                    src="/generalAssets/phonepe-logo.png"
                    width={50}
                    height={50}
                    alt=""
                  />
                  <Image
                    src="/generalAssets/paytm-logo.png"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </PaymentOptionDialog>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function CardFailure() {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div className="p-1 w-full flex items-start text-gray-800 text-sm bg-gray-100 border-solid border-1 border-gray-700">
          Debit/Credit Card
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center">
          <Image
            src="/generalAssets/bookmyshow-logo.png"
            width={150}
            height={100}
            alt=""
          />
          <p className="text-2xl font-bold">Oops...</p>
          <p className="text-center text-wrap">
            Currently we are facing high rate of failures please choose another
            payment method
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

type PaymentOptionDialogProps = {
  paymentOption: string;
  children?: React.ReactNode;
};

function PaymentOptionDialog({
  paymentOption,
  children,
}: PaymentOptionDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div className="p-1 w-full flex items-start text-gray-800 text-sm bg-gray-100 border-solid border-1 border-gray-700">
          {paymentOption}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Image
            src="/generalAssets/bookmyshow-logo.png"
            width={100}
            height={100}
            alt=""
          />
        </DialogHeader>
        <hr />
        {children}
      </DialogContent>
    </Dialog>
  );
}
