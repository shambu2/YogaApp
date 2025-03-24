import React from 'react';
import { Timer, Award, Leaf } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
export const PoseCard = ({ pose }) => {
  const navigate = useNavigate();
  
  return (
    <div
    onClick={() => navigate(`/pose/${encodeURI(pose.name)}`)}
    // onClick={()=> Link(`/pose/${pose.name}`)}
    className="bg-blue-700/5 border-blue-50 shadow-gray-800 backdrop-blur-3xl rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <img 
        src={pose.imageUrl} 
        alt={pose.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6 ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">{pose.name} Pose</h2>
          <span className="text-gray-300 italic">{pose.sanskrit}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <Timer className="w-4 h-4 text-gray-300" />
          <span className="text-sm text-gray-300">{pose.duration}</span>
          <Award className="w-4 h-4 text-gray-300 ml-4" />
          <span className="text-sm text-gray-300 capitalize">{pose.difficulty}</span>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2 text-gray-300">Benefits:</h3>
          <ul className="list-disc list-inside text-gray-300">
            {pose.benefits.map((benefit, index) => (
              <li key={index} className="text-sm">{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="w-4 h-4 text-green-600" />
            <h3 className="font-semibold text-gray-300">Ayurvedic Recommendations:</h3>
          </div>
          {pose.ayurvedaRecommendations.map((rec, index) => (
            <div key={index} className="mb-3">
              <p className="font-medium text-gray-200 ">{rec.herb}</p>
              <p className="text-sm text-gray-500">Dosage: {rec.dosage}</p>
              <div className="flex gap-2 mt-1">
                {rec.dosha.map(dosha => (
                  <span 
                    key={dosha}
                    className="px-2 py-1 rounded-full text-xs capitalize bg-green-100 text-green-800"
                  >
                    {dosha}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};