import React from "react";
import Tour from "../Tour/Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="text-center text-3xl font-bold">
        <h1>Our Tour Packages</h1>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        ))}
      </div>
    </section>
  );
};

export default Tours;
