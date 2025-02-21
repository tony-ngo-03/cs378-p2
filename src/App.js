import './App.css';
import {useState} from 'react'

import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
    amount: 0
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
    amount: 0
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
    amount: 0
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
    amount: 0
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
    amount: 0
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
    amount: 0
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
    amount: 0
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
    amount: 0
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
    amount: 0
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
    amount: 0
  }
];

function App() {

  const [subtotal, setSubtotal] = useState(0);

  const clearAll = () => {
    setSubtotal(0)
    for (let i = 0; i < menuItems.length; i++){
      menuItems[i].amount = 0
    }
  }

  const order = () => {
    var toDisplay = "Order placed\n"

    for (let i = 0; i < menuItems.length; i++){
      if(menuItems[i].amount > 0){
          toDisplay += `${menuItems[i].amount} ${menuItems[i].title} & `;
      }
    }
    if (toDisplay === "Order placed\n"){
      alert("No items in cart");
    }
    else{
      toDisplay = toDisplay.slice(0, -2);
      alert(toDisplay);
    }
  }

  const updateAmount = (index, toAdd) => {
    menuItems[index].amount += toAdd
    setSubtotal(subtotal + (toAdd * menuItems[index].price))
  }
  return (
    <div className="container mw-100 mh-100 m-0 p-0">
      <div className="row h-100">
        {/* <!-- https://www.dreamstime.com/illustration/japan-food-vector-logo-design.html --> */}
        <MenuHeader logoSource={"https://thumbs.dreamstime.com/b/culture-food-noodle-bowl-japan-torii-taste-delicious-line-minimalist-logo-design-vector-280819044.jpg"} cursiveText={"Healthy Recipes Handmade"} taglineText={"Bringing Japan to You"}/>
          {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
          {menuItems.map(({ id, title, description, imageName, price, amount }, index) => (
            <MenuItem key={id} id={id} title={title} description={description} imageName={imageName} price={price} amount={amount} index={index} updateAmount={updateAmount}/>))}
      </div>
      <div>
        <p className="d-inline">Subtotal ${Math.abs(subtotal.toFixed(2))}</p>
        <div className="float-end">
          <button className="rounded-5" onClick={order}>Order</button>
          <button className="rounded-5" onClick={clearAll}>Clear all</button>
        </div>
      </div>
    </div>
  );
}

export default App;
