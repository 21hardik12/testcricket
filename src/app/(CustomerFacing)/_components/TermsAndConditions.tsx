import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { IoIosArrowDown } from "react-icons/io";

export default function TermsAndConditions() {
  return (
    <Collapsible>
      <CollapsibleTrigger className="w-full">
        <div className="flex justify-between">
          <p className="font-bold text-lg">Terms and conditions</p>
          <IoIosArrowDown className="mt-1 font-bold text-lg" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col items-center">
        <ul className="px-8">
          <li className="list-disc">
            This ticket entitles the holder (“Holder”) to attend the stadium in
            respect of the match or matches (if there is more than one match
            scheduled in the stadium on the same day), details of which are
            referred to on the ticket (“Stadium”, “Match” and “Matches”
            respectively).
          </li>
          <li className="list-disc">
            This ticket must be produced by the Holder at the time of entry into
            the Stadium. The entry gates will open approximately 3 (three) hours
            before the start of the Match or such other time as may be advised /
            published in respect of the Match, by the BCCI.
          </li>
          <li className="list-disc">
            Bigtree may collect certain information (including but not limited
            to personally identifiable information) from you such as name,
            e-mail address or telephone number at the time of
            booking/registration/payment. By purchasing a ticket, agreeing to
            these Terms and Conditions, you hereby give your consent to Bigtree
            to collect, receive, possess, store, deal and handle all information
            as provided herein for its own purposes.
          </li>
          <li className="list-disc">
            Children of two years of age or over must have their own ticket and
            all persons under the age of 18 must be accompanied by and under the
            supervision of (in each case constantly) an adult who also has a
            ticket for the Match.
          </li>
          <li className="list-disc">
            Entry will be refused if the barcode has been tampered with or if
            this ticket has been torn, defaced, damaged or tampered with in any
            way.
          </li>
          <li className="list-disc">
            This ticket is valid for one person only and no re-entry will be
            allowed. If re-entry in any particular Stadium is allowed for any
            particular Match, then such re-entry will be conditional on and
            subject to the Holder complying with all relevant re-entry
            procedures including without limitation, production of this ticket,
            and any re-entry ticket, out-pass or other proof of prior exit as
            may be required at the Stadium and the Holder shall remain bound by
            these terms and conditions and any other Stadium regulations.
          </li>
          <li className="list-disc">
            The ticket only entitles the Holder to access the area of the
            Stadium in which the relevant seat is located and no other area of
            the Stadium.
          </li>
          <li className="list-disc">
            The Holder must retain this ticket at all times whilst in the
            Stadium. This ticket should be produced whenever demanded by the
            organiser of the Match (“Organiser”) and the Organiser’s
            representatives.
          </li>
          <li className="list-disc">
            The Organiser reserves the right to search / frisk the Holder
            (including his/her bags, clothes or other possessions) at any time
            for security reasons including prior to entry (or any permitted
            re-entry) to the Stadium. Should the Holder refuse to be searched,
            the Organiser reserves the right to refuse admission or eject
            him/her from the Stadium without refund. The Holder must comply with
            any reasonable instruction from an officer or security officer of
            the Organiser at the Stadium.
          </li>
          <li className="list-disc">
            No item including without limitation banners or flags etc,
            displaying commercial logos which, in the Organiser’s view, may
            conflict with or in any way detract from the rights of any official
            sponsor related to the Match, will be allowed into the Stadium.
          </li>
          <li className="list-disc">
            Bottles, lighters, tins or cans, musical instruments, flammable,
            toxic, illegal or hazardous substances, metal containers,
            firecrackers, fireworks, weapons, motorcycle helmets, bags or any
            other article (determined at the discretion of the Organiser) which
            might endanger or unduly annoy any other person are not allowed
            inside the Stadium.
          </li>
          <li className="list-disc">
            No food may be brought into the Stadium. No alcohol may be brought
            into or taken out of the Stadium. The consumption of alcohol may be
            permitted only in any authorised designated areas or places in the
            Stadium (if any) during hours determined by the Organiser, which the
            Organiser reserves the right to close or restrict entry to any such
            authorised designated areas at any time.
          </li>
          <li className="list-disc">
            This ticket is for the personal use of the Holder only and shall not
            be offered for sale, auctioned, exchanged, ceded, sold or
            transferred, whether in a commercial or promotional context (such
            as, without limitation, as a prize in a lottery or competition or as
            part of an advertising or promotional campaign) or otherwise, with
            or without consideration, unless written permission has been
            previously obtained from the Organiser. The benefit conferred on the
            Holder by this ticket is personal to him/her only.
          </li>
          <li className="list-disc">
            Kindly occupy the seat mentioned on your physical ticket. In case it
            is mentioned “Free Seating”, choice of seat in respective stand
            mentioned on ticket will be on first come first serve basis.
          </li>
          <li className="list-disc">
            The use of any equipment of any kind including without limitation
            mobile phones, transistors, computers, cameras or any other audio
            visual recording equipment, for recording and/or communication of
            Match details, statistics, images etc is strictly prohibited. By way
            of exception to this paragraph the Holder may bring and use a
            pocket-sized (i.e. small) camera but the use of such camera must be
            for personal and private use and no commercial use must be made by
            the holder or any third party of any image(s) (moving or still)
            taken or otherwise captured within the Stadium before, during or at
            any time after the Match. Board of Control for Cricket in India
            (“BCCI”) and / or Organiser has a discretion to take appropriate
            action in this regard, if required.
          </li>
          <li className="list-disc">
            Neither BCCI nor the Organiser will be liable to the Holder whether
            in contract, tort or otherwise for any indirect, incidental, special
            or consequential loss or damage or for any loss of profit or
            revenue, loss of reputation, loss of use, loss of business or
            contracts or loss of opportunity arising out of or in connection
            with the Match howsoever caused.
          </li>
          <li className="list-disc">
            Foul, abusive or any form of discriminatory language (whether on the
            grounds of race, sex, religion or otherwise), unruly language or any
            unruly or threatening behaviour will not be tolerated at the Stadium
            prior to, during or after the Match and will result in denial of
            entry to or ejection from the Stadium and possible further action as
            per applicable law.
          </li>
          <li className="list-disc">
            This ticket will be valid until the relevant Match has been
            completed or is reasonably deemed by the Organiser to have been
            completed. This ticket may not be exchanged or used for any match or
            event other than that indicated thereon. If the Match is cancelled
            or curtailed for any reason, there shall be no obligation on the
            Organiser to reschedule the Match. The Organiser reserves the right
            to make alterations to the timings, dates and venues of the Match or
            to substitute the seat or area to which this ticket refers at its
            reasonable discretion. The Organiser does not guarantee that the
            Holder will have an uninterrupted and/or uninhibited view of the
            Match from the seat provided nor does the Organiser give any
            warranty as to the quality, content or duration of the Match.
          </li>
          <li className="list-disc">
            Refunds (less any applicable administration fee, if any), will only
            be made if the Match is cancelled or abandoned without a single ball
            being bowled in any Match in the stadium on that day. No other
            refunds will be made.
          </li>
        </ul>
        <p>
          The Organiser reserves the right, without refund or other recourse, to
          refuse admission to anyone and/or if necessary, to eject the Holder/s
          of the ticket from the Stadium after they have entered the Stadium in
          each case if they are found to be in breach of these terms and
          conditions or the other above-mentioned regulations or any other
          regulations issued by the BCCI with regards to the Match/s.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}
