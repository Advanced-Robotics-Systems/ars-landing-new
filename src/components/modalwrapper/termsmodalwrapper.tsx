import React from 'react';
import { termsandConditions } from '@/data';

const TermsModall = () => {
  const term = termsandConditions;
  
  return (
    <div className="w-full text-left relative">
      {/* Main Header */}
      <h2 className="text-xl font-medium text-sky-500 mb-2">{term.title}</h2>
      
      {term.sections.map((section, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-medium text-gray-800 mb-1">{section.title}</h3>
          
          {section.introduction && (
            <p className="text-sm text-gray-500 mb-4">{section.introduction}</p>
          )}
          
          <div className="space-y-4">
            {section.subSections?.map((subSection, subIndex) => (
              <div key={subIndex} className="mb-4">
                <p className="text-sm text-sky-500 font-medium mb-1">{subSection.title}</p>
                {subSection.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-sm text-gray-700 mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
      
    
    </div>
  );
};

export default TermsModall;