import React from 'react'
import { termsandConditions } from '@/data'

const Terms = () => {
    const term = termsandConditions;
  
    
    return (
      <div className=" bg-sky-100 bg-opacity-75 flex items-center justify-center p-4 pt-24">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl relative p-6 md:p-10">
          {/* Header */}
          <h1 className="text-sky-500 text-2xl font-medium mb-2">{term.title}</h1>
          
          {term.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-gray-800 text-lg font-medium mb-4">{section.title}</h3>
              {section.introduction && (
                <p className="text-sky-500 text-sm mb-6">{section.introduction}</p>
              )}
  
              {/* Content */}
              <div className="pr-4 space-y-6">
                {section.subSections?.map((subSection, subIndex) => (
                  <div key={subIndex}>
                    <div className="text-sky-500 text-sm font-medium mt-6">{subSection.title}</div>
                    {subSection.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-black mt-1 text-xs leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
  
         
        </div>
      </div>
    );
  };
  export default Terms
  
