"use client";

import { MapPin, Phone, Mail } from "lucide-react";

const ContactThirdSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Contact Us To Work Together
      </h2>

      <div className="grid grid-cols-1 place-items-center">
        {/* Contact Card */}
        <div className="p-6 w-full sm:w-[500px] rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-5">
          {/* Address */}
          <div className="flex items-start gap-3">
            <MapPin className="text-blue-600 w-5 h-5 mt-1" />
            <div>
              <p className="font-semibold">Address:</p>
              <p className="text-muted-foreground text-sm">
                 Gurugram, Haryana, India
              </p>
            </div>
          </div>

          {/* Contact Number */}
          <div className="flex items-center gap-3">
            <Phone className="text-blue-600 w-5 h-5" />
            <div>
              <p className="font-semibold">Contact Number:</p>
              <p className="text-muted-foreground text-sm">+91 98756 43210</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="text-blue-600 w-5 h-5" />
            <div>
              <p className="font-semibold">Email:</p>
              <p className="text-muted-foreground text-sm">
                support@TrinetraAI.com
              </p>
            </div>
          </div>

          {/* Company CIN */}
          {/* <div className="flex items-start gap-3">
            <Building2 className="text-blue-600 w-5 h-5 mt-1" />
            <div>
              <p className="font-semibold">TrinetraAI Private Limited</p>
              <p className="text-muted-foreground text-sm">
                CIN: U80200TS2025PTC195158
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactThirdSection;
