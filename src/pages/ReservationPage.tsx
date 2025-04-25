
import React from 'react';
import ReservationForm from '@/components/reservation/ReservationForm';
import { Card } from '@/components/ui/card';

const ReservationPage = () => {
  return (
    <div>
      {/* Reservation Header Banner */}
      <section className="relative h-[40vh] flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight animate-fade-in">
            Reserve Your Table
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in">
            Experience exceptional dining in an elegant atmosphere. Book your table now.
          </p>
        </div>
      </section>

      {/* Reservation Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Reservation Form */}
            <Card className="p-6 md:p-8 shadow-lg bg-white">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-restaurant-burgundy mb-6">
                Make a Reservation
              </h2>
              <ReservationForm />
            </Card>

            {/* Reservation Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-restaurant-burgundy mb-4">
                  Dining Hours
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Thursday</span>
                    <span>11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Friday - Saturday</span>
                    <span>11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>10:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-restaurant-burgundy mb-4">
                  Reservation Policies
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Reservations can be made up to 30 days in advance</li>
                  <li>For parties of 9 or more, please call us directly</li>
                  <li>Please arrive on time. Tables will be held for 15 minutes past reservation time</li>
                  <li>Cancellations should be made at least 24 hours in advance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-restaurant-burgundy mb-4">
                  Private Events
                </h2>
                <p className="text-gray-700 mb-4">
                  Looking to host a private event? YumYum offers elegant spaces for
                  celebrations, corporate gatherings, and special occasions.
                </p>
                <p className="text-gray-700">
                  For private event inquiries, please contact our events team at{" "}
                  <a
                    href="mailto:events@yumyum.com"
                    className="text-restaurant-burgundy underline"
                  >
                    events@yumyum.com
                  </a>{" "}
                  or call us at{" "}
                  <a
                    href="tel:+15551234568"
                    className="text-restaurant-burgundy underline"
                  >
                    (555) 123-4568
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReservationPage;
