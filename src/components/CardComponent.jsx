import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({ date, title, description, progress }) {
  // Function to calculate days left and convert to weeks when appropriate
  const calculateTimeLeft = (targetDateString) => {
    // Parse the target date
    const targetDate = new Date(targetDateString);
    
    // Get today's date
    const today = new Date();
    
    // Reset time components to compare only dates
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);
    
    // Calculate the difference in milliseconds
    const timeDifference = targetDate.getTime() - today.getTime();
    
    // Convert milliseconds to days
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));
    
    // Convert to weeks if 7 or more days
    if (daysLeft >= 7) {
      const weeks = Math.floor(daysLeft / 7);
      const remainingDays = daysLeft % 7;
      
      if (remainingDays === 0) {
        return {
          value: weeks,
          unit: weeks === 1 ? "week" : "weeks"
        };
      } else {
        return {
          value: `${weeks}w ${remainingDays}d`,
          unit: "" // Empty unit since it's included in the value
        };
      }
    }
    
    return {
      value: daysLeft,
      unit: daysLeft === 1 ? "day" : "days"
    };
  };
  
  const getProgressColorClass = () => {
    switch (progress) {
      case "100": return "text-custom-sky-blue";
      case "75": return "text-custom-carrot";
      case "50": return "text-custom-yellow-500";
      case "25": return "text-custom-pink";
      default: return "text-gray-500";
    }
  };
  
  // Calculate time left
  const timeLeft = calculateTimeLeft(date);
  return (
    <div>
      <div className="max-w-sm h-72 p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between mb-5">
          <p className={getProgressColorClass() + " font-medium"}>{date}</p>
          <EllipsisVertical size={20} color="#374957" />
        </div>
        
        <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        
        <p className="line-clamp-2 mb-3 h-14 font-normal text-justify text-gray-400 dark:text-gray-400">
          {description || 
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias maxime debitis voluptas necessitatibus non nulla quis pariatur, hic expedita quaerat harum optio quae, fugiat esse exercitationem repudiandae totam mollitia natus."
          }
        </p>
        
        {/* Progress bar */}
        <div className="w-full flex justify-between font-medium mb-1">
          <p>Progress</p>
          <p>{progress}%</p>
        </div>
        
        <div className="mb-5 w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full ${
              progress === "100" ? "bg-custom-sky-blue" : 
              progress === "75" ? "bg-custom-carrot" : 
              progress === "50" ? "bg-custom-yellow-500" : 
              "bg-custom-pink"
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-fit text-center">
            {timeLeft.value} {timeLeft.unit} left
          </p>
        </div>
      </div>
    </div>
  );
}