import React, {FC} from "react";

const BenefitsItem: FC = ({children}) => {
    return (
        <div className="rounded-md my-4 drop-shadow-md hover:drop-shadow-xl">
        {children}
        </div>
    )
}

export default BenefitsItem