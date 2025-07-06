import QuoteForm from "../../Common Comp/Form/Form";

const PlanForm = () => {
  return (
    <>
      <div style={{ paddingTop: "0px" , fontsize : "64px !important"}} >
        <QuoteForm
          heading={"Take control of your energy bills"}
          Quection={"Have Questions? "}
        experts={"Talk to one of our experts"}
        />
        {/* <div>
            <p>Have Questions? <a href="#">Talk to one of our experts</a></p>
        </div> */}
      </div>
    </>
  );
};

export default PlanForm;
