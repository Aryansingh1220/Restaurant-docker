
import React, { useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import { Card, CardContent } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

const MenuPage = () => {
  const menuItems = useAppSelector((state) => state.menu.items);
  const categories = useAppSelector((state) => state.menu.categories);

  // Format category name for display
  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div>
      {/* Menu Header Banner */}
      <section className="relative h-[40vh] flex items-center">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight animate-fade-in">
            Our Menu
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in">
            Explore our carefully crafted selections, made with locally sourced
            ingredients and prepared with passion.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 flex flex-wrap justify-center">
              <TabsTrigger value="all">All</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {formatCategoryName(category)}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* All Items Tab */}
            <TabsContent value="all" className="space-y-12">
              {categories.map((category) => (
                <div key={category}>
                  <h2 className="text-3xl font-serif font-bold text-restaurant-burgundy mb-6 border-b-2 border-restaurant-gold pb-2">
                    {formatCategoryName(category)}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems
                      .filter((item) => item.category === category)
                      .map((item) => (
                        <Card
                          key={item.id}
                          id={item.id}
                          className="overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          <div className="h-48 overflow-hidden">
                            <img
                              src={
                                item.image ||
                                "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80"
                              }
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-5">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-serif font-semibold text-restaurant-burgundy">
                                {item.name}
                                {item.isSpecial && (
                                  <span className="ml-2 text-sm bg-restaurant-gold text-white px-2 py-0.5 rounded-full">
                                    Special
                                  </span>
                                )}
                              </h3>
                              <span className="text-lg font-medium text-restaurant-gold">
                                ${item.price.toFixed(2)}
                              </span>
                            </div>
                            <p className="text-gray-700">{item.description}</p>
                            {item.allergens && item.allergens.length > 0 && (
                              <p className="text-sm text-gray-500 mt-2">
                                <strong>Allergens:</strong>{" "}
                                {item.allergens.join(", ")}
                              </p>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            {/* Category Tabs */}
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menuItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <Card
                        key={item.id}
                        id={item.id}
                        className="overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="h-48 overflow-hidden">
                          <img
                            src={
                              item.image ||
                              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80"
                            }
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-5">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-serif font-semibold text-restaurant-burgundy">
                              {item.name}
                              {item.isSpecial && (
                                <span className="ml-2 text-sm bg-restaurant-gold text-white px-2 py-0.5 rounded-full">
                                  Special
                                </span>
                              )}
                            </h3>
                            <span className="text-lg font-medium text-restaurant-gold">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>
                          <p className="text-gray-700">{item.description}</p>
                          {item.allergens && item.allergens.length > 0 && (
                            <p className="text-sm text-gray-500 mt-2">
                              <strong>Allergens:</strong> {item.allergens.join(", ")}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Menu Footer */}
          <div className="mt-16 p-6 bg-restaurant-cream rounded-lg text-center">
            <p className="text-restaurant-burgundy text-lg mb-4">
              Please inform your server of any allergies or dietary restrictions.
              Prices are subject to change.
            </p>
            <p className="text-restaurant-burgundy font-serif font-semibold">
              We source our ingredients locally and seasonally when possible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
