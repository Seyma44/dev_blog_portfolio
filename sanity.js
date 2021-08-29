
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "3sfefya2",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2019-01-29',
  useCdn: true,
})