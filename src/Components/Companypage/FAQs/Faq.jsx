import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import "./Faq.css";
import CustomButton from "../../Common Comp/ButtonComp";
import FAQSection from "../../Common Comp/FAQ/FAQ.JSX";


const CompanyFAQ = () => {
  const companyFaqs = [
    {
      question: "How is Sunrun different from other solar and battery storage providers?",
      answer:
        "Sunrun stands out in the clean energy sector with a commitment to quality, innovation, and customer satisfaction. Unlike other providers, we offer a tailored approach to meet your specific energy needs, ensuring you get the most efficient and cost-effective solar solution to meet your family’s individual needs. Our industry-leading warranty, The Sunrun Guarantee, and dedicated customer support team mean you’re covered with comprehensive care and service throughout the lifespan of your system. We offer payment solutions for every home, from America’s number 1 solar subscription to full ownership options. Plus, our commitment to using only the latest, high-efficiency solar panels and battery storage technology ensures you're investing in a system designed for peak performance and reliability.",
    },
    {
         question: "What happens if something goes wrong with my solar system?",
      answer:
        "Your peace of mind is our top priority. If you encounter any issue with your Sunrun system, our dedicated support team is on standby to assist you. We provide industry-leading warranties that cover repairs, maintenance, and even system monitoring to ensure your solar panels and battery storage are always running optimally. The Sunrun Solar Subscription Plan, the industry’s most comprehensive warranty, includes 24/7 system monitoring, free maintenance and repairs, and solar performance guarantee.",
      
    },
    {
           question: "What type of solar panels and batteries does Sunrun offer ?",
      answer:
        "Sunrun selects only the highest quality solar panels and batteries, focusing on durability, efficiency, and performance. Our solar panels are designed to deliver maximum energy output, even in varying weather conditions, ensuring you get the most from your solar investment. For battery storage, we offer cutting-edge solutions that provide reliable backup power, enhanced energy independence, and the ability to store excess solar energy for use when you need it most. With Sunrun, you're not just getting solar and battery technology; you're getting the future of clean, sustainable energy tailored to your lifestyle.",
  
    },
   
    {
      question: "How does the solar installation process work with?",
      answer:
        ['Our solar installation process is designed to be as smooth and efficient as possible. From the initial consultation to the final system activation, our team of experts will guide you every step of the way. We handle all necessary permits and inspections, ensuring your system meets local regulations and is optimized for maximum performance.',
            'Once approved for a solar installation, your property will undergo a site assessment, and an expert technician will schedule a visit with you to confirm the design of your solar panels and full solar energy system.',
'After that, our Solar Design Experts will make any necessary adjustments to the design of your solar panels and get your final approval. Once it’s approved, we’ll submit your design to the city for permitting, which can take up to eight weeks. From there, either Sunrun or one of our local certified partners will install your solar panels. We only partner with top-rated solar installers, so you can rest easy knowing you’ll have the highest quality solar installation available.',
'When your installation is finished, the city or county will perform a final inspection of your system. Once it’s approved, it’ll be connected to the grid, and we’ll submit your documents to the utility company. After your utility company grants Permission to Operate (PTO), you’ll be all set to start powering your home with the sun.'
        ],
          
    },
    {
       question: "What Financing options does Sunrun offer?",
      answer:"We believe in making solar energy accessible to everyone. We offer a range of flexible financing options, including solar leases, power purchase agreements (PPAs), loans, and outright purchase, to fit different budgets and preferences. Our solar consultants will help you choose the best option for your financial goals."
      
    },
    {
      question: "How much  can i expect to save when i go Solar with Sunrun?",
      answer: "When you sign up for a free quote our in-house Solar Advisors will work with you to determine how much you can expect to save on your monthly energy bill. This relies on factors like your utilities, how much electricity you use and how much sunlight your home gets. We’ll only recommend solar if it’s the right fit for your home energy needs and profile."
      
    },
  ];

  return (
   <>
    <FAQSection
      title="FAQs"
      faqs={companyFaqs}
      theme="light"
    />
    </>
  );
};

export default CompanyFAQ;

