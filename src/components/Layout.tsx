import { Session } from "inspector";
import React, {FC} from "react";
import Navbar from "./Navbar";
import SEO from "./SEO";

const Layout: FC = ( {children} ) => {
    return (
        <>
        <SEO />
        <Navbar />
            {children}
        </>
    )
}


export default Layout