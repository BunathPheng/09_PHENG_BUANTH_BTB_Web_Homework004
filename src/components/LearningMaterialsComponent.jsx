import React, { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  const [learningMaterial, setLearningMaterial] = useState(learningMaterials);
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options).replace(',', '');
}

  const handleFavoriteToggle = (id) => {
    setLearningMaterial((prevMaterials) =>
      prevMaterials.map((material) =>
        material.id === id
          ? { ...material, isFavorite: !material.isFavorite }
          : material
      )
    );
  };
  const handleData = (data) => {
    if (data === "A-Z") {
      setLearningMaterial((prevMaterials) => 
      {
        return [...prevMaterials].sort((a, b) =>
          a.title.localeCompare(b.title)
        )
      }
         
      );
    } else if (data === "Z-A") {
      setLearningMaterial((prevMaterials) => 
        [...prevMaterials].sort((a, b) => b.title.localeCompare(a.title))
      );
    }
  };

  
  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh] no-scrollbar">
      {/* calling filter component */}
      <FilterComponent values={handleData}/>
      {

      }
      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-3">
        {learningMaterial.map((material) => (
          <div key={material.id} className="bg-light-gray px-4 py-2 flex gap-5 items-center">
            <img
              src={material.image}
              alt={material.title}
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{material.title}</p>
                <Star
                  size={20}
                  onClick={() => handleFavoriteToggle(material.id)}
                  className={`cursor-pointer ${
                    material.isFavorite? "text-amber-400 fill-amber-400" : ""
                  }`}
                />
              </div>
              <p className="text-gray-400 text-sm">posted at:{formatDate(material.postedAt)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
