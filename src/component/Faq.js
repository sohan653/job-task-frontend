import React, { useState } from 'react';

const Faq = () => {
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: 'How long is the free trial for paid plans?',
      answer: 'Unless otherwise specified, free trials of Evernote last for 14 days. If you cancel before the trial ends, your credit card will not be charged.',
    },
    {
      id: 2,
      question: 'How long is the free trial for paid plans?',
      answer: 'Unless otherwise specified, free trials of Evernote last for 14 days. If you cancel before the trial ends, your credit card will not be charged.',
    },
    {
      id: 3,
      question: 'How long is the free trial for paid plans?',
      answer: 'Unless otherwise specified, free trials of Evernote last for 14 days. If you cancel before the trial ends, your credit card will not be charged.',
    },
    {
      id: 4,
      question: 'How long is the free trial for paid plans?',
      answer: 'Unless otherwise specified, free trials of Evernote last for 14 days. If you cancel before the trial ends, your credit card will not be charged.',
    },
    
  ]);

  const handleCollapse = (index) => {
    const updatedFaqItems = faqItems.map((item, i) => {
      if (index === i) {
        return { ...item, isOpen: !item.isOpen };
      }
      return { ...item, isOpen: false };
    });
    setFaqItems(updatedFaqItems);
  };

  return (
    <div className="items-center">
      <div className="w-full shadow-xl card card-compact bg-base-100">
        <div className="p-10 mx-10 my-6 space-y-4 card-body">
          <h1 className='text-4xl font-extrabold text-center text-green-600'>Frequently Asked Questions!</h1>
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              tabIndex={0}
              className={`collapse   collapse-arrow bg-base-100 shadow-xl max-w-full my-4 border border-gray-200 rounded-lg
              transform ease-out duration-300 
               hover: drop-shadow-lg hover :shadow-[#FF4157]  ${item.isOpen ? 'collapse-open' : ''
                }`}
            >
              <div
                className="text-xl font-medium collapse-title"
                onClick={() => handleCollapse(index)}
              >
                {item.question}
              </div>
              {item.isOpen && (
                <div className="collapse-content">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Faq;