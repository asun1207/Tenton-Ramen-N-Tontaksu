import React from "react";

function Menu() {
  return (
    <section id="menu" className="container py-5">
      <h2 className="text-center mb-5">Our Menu</h2>
      <div className="row">
        <div className="col-md-4">
          <h3>Ramen</h3>
          <ul>
            <li>Original Ramen - $16.5</li>
            <li>Chshu Ramen - $18.5</li>
            <li>Miso Ramen - $18.5</li>
            <li>Spicy Miso Ramen - $19.5</li>
            <li>Black Ramen - $19.5</li>
            <li>Red Ramen - $19.5</li>
            <li>Vegetable Ramen - $20.5</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>Tonkatsu</h3>
          <ul>
            <li>Rosu Katsu - $23.5</li>
            <li>Hire Katsu - $24.5</li>
            <li>Cheese Katsu - $24</li>
            <li>Ebi Katsu - $24</li>
            <li>Chicken Katsu - $24.5</li>
            <li>Curry Katsu - $25</li>
            <li>Fish Katsu - $23.5</li>
            <li>Tofu Katsu - $20.5</li>
            <li>Teppan Tonkatsu - $26.5</li>
            <li>Kimchi Katsu Nabe - $25.5</li>
            <li>Kimchi Cheese Nabe - $26.5</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>Salad</h3>
          <ul>
            <li>House Green Salad - $13.5</li>
            <li>Seaweed Salad - $11</li>
            <li>Tofu with Salad - $17</li>
            <li>Gyoza with Salad - $18</li>
            <li>Chicken with Salad - $18.5</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>Appetizers</h3>
          <ul>
            <li>Agedashi Tofu - $12</li>
            <li>Tako Yaki - $11</li>
            <li>Ebi Mayo - $15</li>
            <li>Chicken Karaage - $12</li>
            <li>Korean Chicken Karaage - $24.5</li>
            <li>Corn Cheese - $13.5</li>
            <li>Prok Gyoza - $10</li>
            <li>Vegetable Gyoza - $10</li>
            <li>Edamame - $10</li>
            <li>French Fries - $9.5</li>
            <li>Chashu Rice - $10.5</li>
            <li>BBQ Salmon Rice - $10.5</li>
            <li>Kimchi - $4.5</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>Donburi</h3>
          <ul>
            <li>Tofu Teriyaki Don - $19.5</li>
            <li>Katsu Don - $21.5</li>
            <li>Karaage Curry Don - $22</li>
            <li>Ebi Don - $19.5</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>Udon</h3>
          <ul>
            <li>Seafood Tempura Udon - $21.5</li>
            <li>Kimchi Seafood Udon - $21.5</li>
            <li>Seafood Yaki Udon - $22</li>
            <li>Curry Katsu Udon - $21</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Menu;
