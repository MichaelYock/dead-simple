import React, {FC} from "react";
import BlogSlides from "./BlogSlides";

const BlogRoll: FC = () => {
    return (
        <section className="overflow-visible min-h-[60vh] mb-40">
            <div>
                <BlogSlides  />
            </div>
        </section>
    )
}

export default BlogRoll