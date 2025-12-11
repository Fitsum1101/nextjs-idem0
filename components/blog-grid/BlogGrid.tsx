import React from "react";
import Image from "next/image";
import { getPublicAbsoluteURL } from "@/lib/utils";
import Link from "next/link";
import { blogPosts } from "@/_constant/testimonial";

const BlogGrid: React.FC = () => {
  return (
    <section className="blog-grid pb-50">
      <div className="container">
        {/* Heading */}
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-40">
              <h2 className="heading__subtitle">Recent Articles</h2>
              <h3 className="heading__title">Resource Library</h3>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-sm-12 col-md-4 col-lg-4">
              <div className="post-item">
                <div className="post__img">
                  <a href={post.link}>
                    <Image
                      width={370}
                      height={270}
                      src={getPublicAbsoluteURL(post.img)}
                      alt="blog image"
                    />
                  </a>
                </div>
                <div className="post__content">
                  <div className="post__meta d-flex flex-wrap">
                    <div className="post__meta-cat">
                      {post.categories.map((cat, idx) => (
                        <Link key={idx} href="#">
                          {cat}
                        </Link>
                      ))}
                    </div>
                    <span className="post__meta-date">{post.date}</span>
                  </div>
                  <h4 className="post__title">
                    <a href={post.link}>{post.title}</a>
                  </h4>
                  <p className="post__desc">{post.description}</p>
                  <Link
                    href={post.link}
                    className="btn btn__secondary btn__link"
                  >
                    <span>Read More</span>
                    <i className="icon-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
