import React,{FC} from "react";

const FeaturesItem: FC = ({children}) => {
    return (
        <div className="rounded-md p-2 my-4 drop-shadow-md hover:drop-shadow-xl">
        {children}
        </div>
    )
}

export default FeaturesItem