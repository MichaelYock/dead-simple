import React, {FC} from "react";

const Footer:FC =() => {
    return (
        <section className="container mx-auto py-2">
            <p>&copy; Dead Simple Web Design {new Date().getFullYear()}</p>
        </section>
    )
}

export default Footer