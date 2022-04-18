
import React, {FC} from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {Helmet} from 'react-helmet';

const SEO: FC = ({children}) => {
    const {site} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description 
                }
            }
        }
    `)
    return (
        <Helmet>
            <html lang="en" />
            <title>{site.siteMetadata.title}</title>
            <link rel="icon" type="image/x-icon" href="src/images/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <meta name="description" content={site.siteMetadata.description} />
        </Helmet>
    )
}

export default SEO