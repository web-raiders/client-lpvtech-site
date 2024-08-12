// Get all articles
export const articles = '*[_type == "article"] | order(date desc){"slug": slug.current, name, tags, date, "image": image.asset->url, content, author}'
// Get all articles
export const projects = '*[_type == "projects"] | order(_createdAt desc){"slug": slug.current, "image": background_image.url, name, description}'
// Get all articles
export const services = '*[_type == "services"] | order(_createdAt desc){"slug": slug.current, title, description, image}'
// Get all terms
export const terms = '*[_type == "terms"]{ title, content, _createdAt } | order(_createdAt asc)'
// Get all faqs
export const faqs = '*[_type == "faqs"]{ question, answer }'
// Get all policies
export const policy = '*[_type == "policy"]{ title, content, _createdAt } | order(_createdAt asc)'


// Get all other articles
export const otherArticles = '*[_type == "article" && slug.current != $slug] | order(date desc){"slug": slug.current, name, tags, date, "image": image.asset->url, content, author}'

// Get array of article slugs
export const articleSlugs = '*[_type == "article"]{"params": {"slug": slug.current}}'

// Get array of project slugs
export const projectSlugs = '*[_type == "projects"]{"params": {"slug": slug.current}}'

// Get array of service slugs
export const serviceSlugs = '*[_type == "services"]{"params": {"slug": slug.current}}'

// Fetch the each blog post from sanity by slug
export const postDetails = `*[_type == "article" && slug.current == $slug][0]{
name,
"slug": slug.current,
"image": image.asset->url,
date,
tags,
author,
content
}`

// Fetch the each project from sanity by slug
export const projectDetails = `*[_type == "projects" && slug.current == $slug][0]{
name,
"slug": slug.current,
date,
client,
budget,
industry,
description,
"image": background_image.url,
"thumbnails": project_images
}`

// Fetch the each service from sanity by slug
export const serviceDetails = `*[_type == "services" && slug.current == $slug][0]{
title,
"slug": slug.current,
 description,
image,
features,
sub_services
}`