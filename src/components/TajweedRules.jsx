import React, { useState } from 'react'
import TabButton from './TabButton'
import { TAJWEED_RULES } from '../data'
import Section from './Section'

export default function TajweedRules() {

  const [selectedRule, setSelectedRule] = useState(null);

  function handleSelect(selectedButton) {
    setSelectedRule(selectedButton);
    console.log(selectedButton);
  }


  return (
    <Section className="rulesSec" title="Tajweed Rules">
        <div className='tab'>
          {TAJWEED_RULES.map((rule, index) => 
            <TabButton 
              isSelected={selectedRule === rule.title}
              onClick={() => handleSelect(rule.title)} 
              key={rule.title}
            >
              {rule.title}
            </TabButton>
          )}
        </div>
        {/* TabContent */}
        {selectedRule ? (
        <div id='tab-content'>
          <p>{TAJWEED_RULES.find(rule => rule.title === selectedRule).description}</p>
          <iframe
           src={TAJWEED_RULES.find(rule => rule.title === selectedRule).video}></iframe>
        </div>
      ) : (
        <p>Please select a rule you want to learn.</p>
      )}
        
    </Section>
  )
}
