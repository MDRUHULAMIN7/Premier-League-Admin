import { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

const faqItems = [
  {
    title: "Personal Information",
    content: "Edit or view your personal details.",
  },
  {
    title: "Change Password",
    content: "Update your login credentials securely.",
  },
  {
    title: "Terms & Condition",
    content: "Read our terms of service and agreement.",
  },
  { title: "Privacy Policy", content: "Understand how we protect your data." },
  { title: "About Us", content: "Learn more about our team and mission." },
  {
    title: "Support mail address",
    content: "Contact us at support@example.com",
  },
];

const Settings = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#eaf3ff] min-h-screen p-4 md:p-10">
      <div className="max-w-2xl  space-y-3">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-sm transition-all duration-200"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-4 py-4 flex justify-between items-center text-left cursor-pointer"
            >
              <span className="font-medium text-gray-800">{item.title}</span>
              {openIndex === index ? (
                <FiChevronDown size={20} className="text-gray-600" />
              ) : (
                <FiChevronRight size={20} className="text-gray-600" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
