import React from "react";

const ContactHero = () => {
  return (
    <section className="google-map py-0">
      <div id="map" className="height-500"></div>
      <script src="assets/js/google-map.js"></script>
      <script
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
        async
        defer
      ></script>
    </section>
  );
};

export default ContactHero;
