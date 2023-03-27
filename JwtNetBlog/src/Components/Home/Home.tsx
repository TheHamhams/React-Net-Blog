import React from 'react'
import { FetchRecent } from '../../custom-hooks/FetchRecent'
import { PostProps } from '../Forms';

interface PostData {
  id: number,
  title: string,
  userName: string,
  content: string,
  created: string
}

export const Home = () => {
  let { posts, setPosts } = FetchRecent();
  const options = {year: 'numeric', month: '2-digit', day: '2-digit'}

  if (!posts) {
    return <h4>loading</h4>
  }

  return (
    <section className="mt-5 gradient-custom default-bg">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white">
                    <div className="card-body p-5 text-center">
                        <div className="mb-md-5 mt-md-4 pb-5">
                            <h2 className="fw-bold mb-2 text-uppercase">Home</h2>
                            <p className="text-white-50 mb-5">Recent Posts</p>
                            <ul className='list-unstyled'>
                              {(posts as PostData[]).map((post: PostData) => {
                                
                                const date = new Date(post.created);

                                return (
                                  <li key={post.id}>
                                    <h3>{post.title}</h3>
                                    <p>{date.toLocaleDateString('en-US')}</p>
                                    <h5>{post.userName}</h5>
                                    <p>{post.content}</p>
                                  </li>
                                )
                              })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </section>
  )
}
