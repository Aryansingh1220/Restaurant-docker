
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HomePage = () => {
  // Get special menu items from redux store
  const specialItems = useAppSelector(state =>
    state.menu.items.filter(item => item.isSpecial)
  );

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight animate-fade-in">
              Experience Culinary Excellence
            </h1>
            <p className="text-lg md:text-xl opacity-90 animate-fade-in">
              Indulge in a symphony of flavors at YumYum, where every dish tells a
              story and every meal becomes a cherished memory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button
                asChild
                size="lg"
                className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white"
              >
                <Link to="/reservations">Reserve a Table</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-restaurant-burgundy"
              >
                <Link to="/menu">Explore Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-restaurant-burgundy">
                Our Culinary Journey
              </h2>
              <p className="text-lg text-gray-700">
                Founded in 2010, YumYum has established itself as a beacon of
                gastronomic excellence. Our chefs blend traditional techniques with
                modern innovation, creating dishes that both comfort and surprise.
              </p>
              <p className="text-lg text-gray-700">
                We believe in sustainability and work closely with local farmers to
                source the freshest ingredients. Every season brings new inspirations
                to our menu, reflecting the bounty of nature.
              </p>
              <Button
                asChild
                className="bg-restaurant-gold hover:bg-restaurant-gold/90 text-restaurant-chocolate"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Chef preparing a dish"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-restaurant-cream p-4 rounded shadow-md">
                <p className="text-restaurant-burgundy font-serif text-xl font-semibold">
                  15+ Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Menu Items Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-restaurant-burgundy mb-4">
              Chef's Specials
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover our chef's carefully crafted seasonal specialties, featuring
              the finest ingredients at their peak of freshness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-60 overflow-hidden">
                  <img
                    src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-semibold text-restaurant-burgundy">
                      {item.name}
                    </h3>
                    <span className="text-lg font-medium text-restaurant-gold">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-restaurant-burgundy text-restaurant-burgundy hover:bg-restaurant-burgundy hover:text-white"
                  >
                    <Link to={`/menu#${item.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white"
            >
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-restaurant-burgundy text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              The experiences of our guests are the true measure of our success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Emma Thompson",
                comment:
                  "The truffle risotto was simply divine. The ambiance was perfect for our anniversary dinner. Can't wait to return!",
                rating: 5,
              },
              {
                name: "Michael Chen",
                comment:
                  "Every dish we tried was a masterpiece. The staff was attentive without being intrusive. A true culinary gem!",
                rating: 5,
              },
              {
                name: "Sophia Rodriguez",
                comment:
                  "The chef's tasting menu took us on a journey of flavors. The wine pairing was expertly selected. Worth every penny!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif font-semibold text-xl text-restaurant-gold">
                    {testimonial.name}
                  </h3>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-restaurant-gold">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-white/90">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 bg-restaurant-cream">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-restaurant-burgundy mb-6">
            Reserve Your Table Today
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Join us for an unforgettable dining experience. Whether it's a special
            celebration or a casual meal, we look forward to serving you.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white"
          >
            <Link to="/reservations">Make a Reservation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
