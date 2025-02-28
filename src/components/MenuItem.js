import React, {useState} from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title, description, price, imageName, amount, index, updateAmount }) => {

    const updateAmounts = (toAdd) => {
      updateAmount(index, toAdd)
    }

    return (
        <div className="container my-3 px-4" id={id}>
          <div className="row m-0 p-0">
            <div className="col m-0 p-0 ratio ratio-1x1">
              <img className="rounded square-image" src={`./images/${imageName}`} alt={title}/>
            </div>
            <div className="col-8 m-0 px-3">
              <div className="row">
                <div className="col">
                  <h4 className="my-1 py-1 menu-item-name">{title}</h4>
                  <p className="my-1 py-2 menu-item-description">{description}</p>
                  <p className="d-inline price-text">${price}</p>
                  <span className="float-end">
                    <button className="rounded-5" onClick={() => {
                      if(amount > 0){
                        updateAmounts(-1)
                      }
                      }}>-</button>
                    <p className="d-inline px-1">{amount}</p>
                    <button className="rounded-5" onClick={() => {updateAmounts(1)
                    }}>+</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default MenuItem;
