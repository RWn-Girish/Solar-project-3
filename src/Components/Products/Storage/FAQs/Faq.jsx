import "./FAQ.css";
// import FAQSection from "../../../Common Comp/FAQ/FAQSection";
import FAQSection from "../../../Common Comp/FAQ/FAQ";

const FAQ = () => {
  const homeFaqs = [
    {
      question: "How long do solar panels really last?",
      answer:
        "Solar panels can last anywhere between 25 to 30 years, sometimes more. This doesn’t mean that the panels on your roof will stop producing electricity after a couple of decades. It just means their energy production will decrease by what solar panel manufacturers consider optimal to meet the average household's energy needs. With proper care and maintenance, you can expect to receive significant solar benefits for the next 20 to 30 years.",
    },
    {
         question: "What happens if I decide to move?",
      answer:
        "Sunrun makes it easy to transfer your solar lease agreement to the new homeowners. Our service transfer specialists handle everything from educating realtors and potential buyers to working with escrow officers, title agents, home inspectors, and anyone else who might need to know about your system or solar lease agreement. When you decide to move, contact us at 855.478.6786 ext 3 or servicetransfers@sunrun.com and we will get started on facilitating the transfer process.",
      
    },
    {
           question: "How much can I expect to save when I go solar?",
      answer:
        "When you sign up for a free quote, our in-house Solar Advisors will work with you to determine how much you can expect to save on your monthly energy bill. This relies on factors like your utility, how much electricity you use and how much sunlight your home gets. We’ll only recommend solar if it’s the right fit for your home energy needs and profile.",
  
    },
   
    {
      question: "Does my state offer incentives to go solar?",
      answer:
        ['See where Sunrun currently operates and what solar incentives may be available in your state. The most common solar incentives include state tax credits, net metering and rebates from your local utility. No matter what state you live in, you’ll also be eligible for the federal solar tax credit when you purchase your own solar system.',
          "The great thing about BrightSave Monthly is that any benefits you would get through rebates and tax credits come to you in the form of a lower monthly cost with Sunrun. You can avoid high upfront costs, and we'll take care of the paperwork."
        ],
          
    },
    {
       question: "How many solar panels will my home need?",
      answer:["Every household is different. When determining the number of solar panels your home needs, consider the following questions:",
        "How much power do I need? Check your electric bills to see how many kilowatt hours (kWhs) you use throughout the year. We’ll go over this with you in detail during your free solar consultation to figure out just how much power your panels will need to produce.",
        "What’s your climate like? The number of panels you need depends on how much sun reaches the ground where you are.",
        "How much direct sun hits your roof? Shading, which direction your roof faces, and any aesthetic preferences you have can impact how big your system needs to be.","At Sunrun, we have proprietary solar design technology called BrightPath™ to help us create a customized system that maximizes energy production better and faster than if we did it by hand."
      ],
    },
    {
      question: "Is my home good for solar?",
      answer: ["A lot of things affect how well-suited your home is for solar, including where your home is, the angle of your roof, how much shade it gets throughout the day, and how old your home is.",
        "Our solar advisors can help you determine if your home is a good fit for solar at the moment. They’ll run a custom analysis of your home with our proprietary solar design technology, BrightPath,™ and they’ll get a sense for your energy needs."
      ],
    },
  ];

  return (
   <>
    <FAQSection
      title="FAQs"
      faqs={homeFaqs}
      theme="light"
      showCTA={true}
    /></>
  );
};

export default FAQ;

