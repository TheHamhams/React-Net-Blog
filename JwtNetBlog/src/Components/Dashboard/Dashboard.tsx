import React from 'react'
import { PostForm } from '../Forms'

export const Dashboard = () => {
  return (
    <section className="mt-5 gradient-custom default-bg">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-dark text-white">
                        <div className="card-body p-5 text-center">
                            <div className="mb-md-5 mt-md-4 pb-5">
                                <h2 className="fw-bold mb-2 text-uppercase">Make a post!</h2>
                                <PostForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
