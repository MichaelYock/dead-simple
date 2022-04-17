import React, {FC} from "react";
import styled from "styled-components";

const AccordianStyles = styled.div`
min-height: 0;
  display: inline-block;
  position: relative;
  margin-bottom: 2rem;

  h4 {
    display: block;
    cursor: pointer;
  }

  h4::after {
      content: "+";
      float: right;
  }

  p {
    position: relative; 
    z-index: 0;
    margin-top: 0;
    max-height: 0;
    opacity: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul li {
    position: relative;
    padding: 0;
    margin: 0;
    padding-bottom: 4px;
    padding-top: 18px;
  }

  ul li .QBox {
    padding: 2rem;
  }
  

  ul li input[type=checkbox] {
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
  }

  ul li input[type=checkbox]:checked ~ .QBox {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  ul li input[type=checkbox]:checked ~ .QBox p {
    overflow: hidden;
    opacity: 1;
    margin-top: 14px;
    max-height: 800px;
    z-index: 2;
  }
  ul li input[type=checkbox]:checked ~ .QBox h4::after {
    content: "-";
  }


`;

const QuestionAnswer: FC =({children}) => {
    return (
    <li>
        <input type="checkbox"></input>
        <div className="QBox">{children}</div>     
    </li>
    )
}

const FAQ:FC = () => {

    return (
      <>
        <section id="faq" className="container mx-auto min-h-[60vh] mb-40">
        <h2 className="text-center text-6xl mb-8">FAQ</h2>
        <AccordianStyles>
        <ul>
            <QuestionAnswer>
                <h4 className="text-3xl">How long will it take?</h4>
                <p className="text-xl mt-4">We aim to have a basic site live within the first week, which we will iterate and improve, expecting to complete the project in 4-6 weeks, assuming design approval.</p>
            </QuestionAnswer>
            <QuestionAnswer>
                <h4 className="text-3xl">Can you connect to my bookings/orders/POS software?</h4>
                <p className="text-xl mt-4">Probably, but speak to us first. Connecting to 3rd party software can be easy or extremely difficult and costly, it depends on the software in question.</p>
            </QuestionAnswer>
            <QuestionAnswer>
                <h4 className="text-3xl">Can you do eCommerce?</h4>
                <p className="text-xl mt-4">Not at this time, sorry. We're focusing on keeping this service as simple as possible, and eCommerce is anything but. We are actively reviewing eCommerce solutions, so watch this space.</p>
                <p className="text-xl mt-4">We <i>can</i> do <strong>payments</strong>, via Stripe.</p>
            </QuestionAnswer>
            <QuestionAnswer>
                <h4 className="text-3xl">Can you help with my existing website?</h4>
                <p className="text-xl mt-4">We specialise in creating new sites. We can help you transfer content from an existing site to a new one, but not with troubleshooting your old site.</p>
            </QuestionAnswer>
            <QuestionAnswer>
                <h4 className="text-3xl">Do you use WordPress?</h4>
                <p className="text-xl mt-4">No. We use a modern JAMStack approach, typically Gatsby hosted on Netlify.</p>
            </QuestionAnswer>
            <QuestionAnswer>
                <h4 className="text-3xl">Can I pay in installments?</h4>
                <p className="text-xl mt-4">We have set up our Monthly plan for this purpose. Our up front pricing is paid half in advance, half on completion.</p>
            </QuestionAnswer>

        </ul>
        </AccordianStyles>
        </section>
        </>
    )
}

export default FAQ