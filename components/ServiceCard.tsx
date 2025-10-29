import React from "react";

type ServiceCardProps = {
  Icon: React.ElementType;
  title: string;
  description: string;
};

const ServiceCard = React.memo(({ Icon, title, description }: ServiceCardProps) => (
  <div className="group flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
    <Icon className="text-5xl text-gray-800 transition-colors duration-300 group-hover:text-[#0AB3F6]" />
    <h3 className="text-2xl font-semibold my-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
));

ServiceCard.displayName = "ServiceCard";

export default ServiceCard;