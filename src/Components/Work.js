import React from 'react'
import PickMeals from '../Assets/material-symbols_no-meals-rounded.png'
import ChooseMeals from '../Assets/mdi_cursor-pointer.png'
import DeliveryMeals from '../Assets/mdi_truck-delivery.png'


const Work = () => {
    const workInfodata  = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et As",
        },
    ];


  return <div className='work-section-wrapper'>

    <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.
        </p>
    </div>

    <div className="work-section-bottom">
        {
            workInfodata.map((data) => (
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))
        }
    </div>

  </div>
}

export default Work