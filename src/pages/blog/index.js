import React, { useState } from 'react'
import Head from 'next/head'
import sanityClient from '../../../sanity'
import Link from 'next/link' 
import SanityBlockContent from '@sanity/block-content-to-react'

import {Span, Div1} from '../../../src/components/Header/HeaderStyles'

const Blog = ({posts}) => {
    const [blockContent, setBlockContent] = useState()
  const fetchPostData = async (slug) => {
    const query = `*[_type == "post" && slug.current == $slug]{
      body
    }[0]`
    const singlePost = await sanityClient.fetch(query, { slug })

   
    setBlockContent(
      <SanityBlockContent
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        blocks={singlePost.body}
        
      />
    )
  }
    return (
        
    <main className='blog-main'>
    <Head>
      <title>Blog</title>
        <meta name='description' content='Portfolio Blog' />
        <script type='text/javascript' src='js/winbox.bundle.js'></script>
    </Head>
     <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"#f46737",  marginBottom: '20;'}}>
        <Span> Bact to SeymaDEV </Span> 
        </a>
      </Link>
    </Div1>
      <section className='post-section'>
        <h1>
        <Span> SeymaDEV </Span>
          <span className='cursor'>|</span> blog
        </h1>
        
      
        
        <h3>Recent Posts</h3>
        <div className='posts'>
          {posts &&
            posts.map((post) => (
              <article key={post.slug.current}>
                <span
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    fetchPostData(post.slug.current)
                    new WinBox({
                      title: post.title,
                      background: 'linear-gradient(121.57deg, #8321bf 18.77%, rgba(255, 120, 120, 0.66) 60.15%)',
                      x: 'center',
                      y: 'center',
                      height: '70%',
                      width: '70%',
                      border: "0.3em",
                      
                      mount: document.querySelector('.single-post'),
                    })
                  }}
                  className='post-body'
                >
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                  ></img>
                  <span className='post-info'>
                    <h3 className='post-category'>
                      {post.categories ? post.categories[0] : 'No category'}
                    </h3>
                    <h3 className='post-title'>{post.title}</h3>
                  </span>
                </span>
              </article>
            ))}
        </div>
      </section>
      <div className='hidden'>
        <div className='single-post'>{blockContent}</div>
      </div>
    </main>
    )
}
export const getStaticProps = async () => {
    const query = `*[ _type == "post"] | order(_createdAt desc) {
        title,
        slug,
        "categories": categories[] -> title,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }`
    const posts = await sanityClient.fetch(query)
    
    if (!posts.length) {
        return {
          props: {
            posts: [],
          },
        }
      } else {
        return {
          props: {
            posts,
          },
        }
      }

}

export default Blog
