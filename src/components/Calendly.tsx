import React, {FC} from "react";
import { PopupButton } from "react-calendly";

type CalendlyProps = {
    text: string,
}

const CalendlyLink: FC<CalendlyProps> = ({text}) => {
  return (
    <div className="inline-block text-center py-2 px-4 w-full text-bold rounded-l-xl rounded-t-xl bg-teal-500 hover:opacity-75 text-white font-bold leading-loose transition duration-200">
      <PopupButton
        url="https://calendly.com/michael-yockney/website-consultation-dead-simple?hide_gdpr_banner=1"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("___gatsby")}
        text={text}
      />
    </div>
    
  );
};

export default CalendlyLink