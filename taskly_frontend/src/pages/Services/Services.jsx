import React from "react";
import ServiceCategory from "../../components/ServiceCategory";
import "../../pages/Services/Services.css";
import { assets } from "../../assets/assets";

const Services = () => {
    const topServices = [
        {
            title: "AC Repair",
            provider: "Vikas Sharma",
            price: "₹800",
            rating: "4.8",
            img: assets.ACrepair,
        },
        {
            title: "Home Cleaning",
            provider: "Anjali Verma",
            price: "₹600",
            rating: "4.6",
            img: assets.homeCleaning,
        },
        {
            title: "Cleaning",
            provider: "Arun Das",
            price: "₹900",
            rating: "4.7",
            img: assets.pest_control,
        },
    ];

    const data = {
        Electricians: [
            {
                title: "Fan Repair",
                provider: "Ravi Kumar",
                price: "₹300",
                rating: "4.5",
                img: assets.electrician,
            },
            {
                title: "Wiring",
                provider: "Amit Singh",
                price: "₹500",
                rating: "4.2",
                img: assets.electrician,
            },
        ],
        Plumbers: [
            {
                title: "Pipe Fix",
                provider: "Suresh Patel",
                price: "₹250",
                rating: "4.1",
                img: assets.plumber,
            },
        ],
        Painters: [
            {
                title: "Wall Painting",
                provider: "Rohan Mehta",
                price: "₹1200",
                rating: "4.7",
                img: assets.painter,
            },
        ],
    };

    return (
        <div className="services-page">
            {/*Services Near Me Section */}
            <ServiceCategory category="Services Near Me" services={topServices} />
            <hr />
            {/* Other Categories */}
            {Object.keys(data).map((category) => (
                <ServiceCategory
                    key={category}
                    category={category}
                    services={data[category]}
                />
            ))}
        </div>
    );
};

export default Services;
