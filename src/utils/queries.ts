// Get all articles
export const articles = '*[_type == "article"] | order(date desc){"slug": slug.current, name, tags, date, "image": image.asset->url, content, author}'

// Get all other articles
export const otherArticles = '*[_type == "article" && slug.current != $slug] | order(date desc){"slug": slug.current, name, tags, date, "image": image.asset->url, content, author}'

// Get array of slugs
export const slugs = '*[_type == "article"]{"params": {"slug": slug.current}}'



// Fetch the each blog post from sanity by that slug
export const postDetails = `*[_type == "article" && slug.current == $slug][0]{
name,
"slug": slug.current,
"image": image.asset->url,
date,
tags,
author,
content
}`