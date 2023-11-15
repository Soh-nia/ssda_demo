import React from "react";
import "../ourworks.css";
import "../blog.css";
import { Link } from "react-router-dom";
import { IoCopyOutline } from "react-icons/io5";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

const Podcast = () => {
  return (
    <>
      <div className="container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="breadcrumb-bloglink" to="/blog">
                Blogs
              </Link>
            </li>
            <li
              className="breadcrumb-item breadcrumb-link2"
              aria-current="page"
            >
              Podcast: Creating a better CX Community
            </li>
          </ol>
        </nav>
      </div>

      <article className="blogPost-container container">
        <div className="padding1 blogPost-header">
          <div className="padding2">
            <div>
              <p className="blogPost-subheading">Customer Success</p>
              <p className="blogPost-heading">
                Podcast: Creating a better CX Community
              </p>
              <p className="blogPost-supportText">
                Starting a community doesn’t need to be complicated, but how do
                you get started?
              </p>
            </div>

            <div>
              <p className="blogPost-author mb-0">Orlando Diggs</p>
              <p className="blogPost-date">20 Jan 2022</p>
            </div>
          </div>

          <div className="container">
            <div className="blogPost-img padding2">
              <img src="assets/image12.png" alt="blog" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="blogPost-section container">
          <div className="padding2 blogPost-details">
            <div className="container">
              <div className="py-5 border-top border-bottom">
                <p className="title">Introduction</p>
                <p className="first-paragraph">
                  Customer Experience (CX) is not just a buzzword; it's the
                  heartbeat of successful businesses. As the CX landscape
                  evolves, the need for a vibrant and informed community becomes
                  increasingly vital. In this blog post, we'll explore the power
                  of podcasts in creating a thriving CX community and the impact
                  they can have on shaping the future of customer-centric
                  endeavors.
                </p>
                <p className="title">The Rise of CX Podcasts:</p>
                <div className="first-paragraph">
                  <ol>
                    <li>
                      Accessible Insights: Podcasts break down the barriers to
                      industry insights. They provide a convenient and
                      accessible platform for CX professionals, experts, and
                      enthusiasts to share their knowledge, experiences, and
                      valuable tips.
                    </li>
                    <li>
                      Diverse Perspectives: A podcast format allows for the
                      inclusion of diverse voices and perspectives within the CX
                      community. Listeners gain exposure to a range of
                      viewpoints, fostering a more inclusive and well-rounded
                      understanding of customer experience.
                    </li>
                    <li>
                      Real-world Success Stories: CX podcasts often feature
                      real-world success stories, offering listeners practical
                      examples of strategies and tactics that have positively
                      impacted customer satisfaction and loyalty. Learning from
                      the experiences of others is a powerful motivator for
                      improvement.
                    </li>
                  </ol>
                </div>
                <div className="container">
                  <div className="padding2">
                    <img
                      src="assets/image13.png"
                      alt="blog"
                      className="img-fluid"
                    />
                    <figcaption>
                      Image courtesy of Scott Webb via Pexels
                    </figcaption>
                  </div>
                </div>
                <p className="title">
                  Crafting a Better CX Community through Podcasts:
                </p>
                <div className="first-paragraph">
                  <ol>
                    <li>
                      <span>
                        Interview Thought Leaders: Bring in thought leaders,
                        industry experts, and seasoned professionals as guests.
                        Their insights, experiences, and predictions can serve
                        as a valuable resource for both beginners and seasoned
                        CX practitioners.
                      </span>
                    </li>
                    <li>
                      <span>
                        Spotlight Innovations: Use podcasts to shine a spotlight
                        on emerging technologies and innovative CX solutions.
                        Discussing the latest trends and tools keeps the
                        community informed and inspires new approaches to
                        customer-centric practices.
                      </span>
                    </li>
                    <li>
                      <span>
                        Engage the Community: Encourage community participation
                        by featuring listener questions, comments, or success
                        stories. This interactive element not only strengthens
                        the sense of community but also provides an avenue for
                        shared learning.
                      </span>
                    </li>
                    <li>
                      <span>
                        Cover Diverse Topics: Address a broad range of
                        CX-related topics, from customer journey mapping and
                        user experience design to customer feedback analysis and
                        employee training. This diversity ensures that podcasts
                        cater to the varied interests and needs of the CX
                        community.
                      </span>
                    </li>
                  </ol>
                </div>
                <div className="container m-2">
                  <div className="padding2">
                    <img
                      src="assets/image14.png"
                      alt="blog"
                      className="img-fluid"
                    />
                    <figcaption>Image courtesy of Leon via Unsplash</figcaption>
                  </div>
                </div>
                <p className="title">Podcasts as a Catalyst for Change:</p>
                <div className="first-paragraph">
                  <ol>
                    <li>
                      Continuous Learning: Podcasts foster a culture of
                      continuous learning within the CX community. As
                      professionals tune in regularly, they stay abreast of
                      industry developments, emerging trends, and best
                      practices, contributing to their personal and professional
                      growth.
                    </li>
                    <li>
                      Networking Opportunities: The shared experience of
                      listening to podcasts creates common ground for networking
                      within the CX community. Professionals can connect, share
                      insights, and even collaborate on initiatives inspired by
                      podcast discussions.
                    </li>
                    <li>
                      Inspiring Action: Beyond knowledge-sharing, podcasts have
                      the power to inspire action. As community members hear
                      success stories and innovative strategies, they are
                      motivated to implement positive changes within their own
                      organizations, ultimately elevating the standards of CX
                      across the board.
                    </li>
                  </ol>
                </div>
                <div className="conclusion mt-5">
                  <p className="title">Conclusion</p>
                  <p className="first-paragraph">
                    Podcasts are not just a source of entertainment; they are a
                    dynamic tool for community-building and knowledge
                    dissemination. By harnessing the power of podcasts, the CX
                    community can create a collaborative space where
                    professionals learn, share, and inspire one another. The
                    result? A stronger, more informed, and customer-centric
                    community that is well-equipped to shape the future of
                    customer experience. So, plug in those headphones, hit play,
                    and embark on a journey toward creating a better CX
                    community through the world of podcasts.
                  </p>
                </div>
              </div>

              <div className="categories pt-5">
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex justify-content-center">
                      <span className="badge rounded-pill mx-2 badge-blue">
                        Product
                      </span>
                      <span className="badge rounded-pill mx-2 badge-red">
                        Tools
                      </span>
                      <span className="badge rounded-pill mx-2 badge-red">
                        SaaS
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex justify-content-center">
                      <Link
                        to="/designWireframe"
                        className="btn blog-copy me-3"
                      >
                        <IoCopyOutline className="me-2" />
                        Copy link
                      </Link>
                      <Link
                        to="/designWireframe"
                        className="btn blog-social me-3"
                      >
                        <BsTwitter />
                      </Link>
                      <Link
                        to="/designWireframe"
                        className="btn blog-social me-3"
                      >
                        <BsFacebook />
                      </Link>
                      <Link
                        to="/designWireframe"
                        className="btn blog-social me-3"
                      >
                        <BsLinkedin />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="padding1">
          <div className="padding2">
            <div className="row">
              <div className="col-md-9">
                <div>
                  <p className="latestBlog-subheading">Our blog</p>
                  <p className="latestBlog-heading">Lastest blog posts</p>
                  <p className="latestBlog-supportText">
                    Tool and strategies modern teams need to help their
                    companies grow.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <Link
                  to="/blog"
                  className="latestblog-btn btn btn-lg rounded-2"
                >
                  View all posts
                </Link>
              </div>
            </div>

            <div className="blog-container">
              <div className="row mt-5">
                <div className="col-md-4">
                  <div className="blog-img">
                    <img
                      src="assets/image4.png"
                      alt="blog"
                      className="img-fluid"
                    />
                  </div>

                  <div className="blog-post mt-3">
                    <p className="blog-subheading mb-1">Design</p>
                    <Link to="/UXReview" className="blogPost-link">
                      <div className="d-flex justify-content-between">
                        <p className="blog-heading">UX review presentations</p>
                        <FiArrowUpRight className="blog-icon" />
                      </div>
                    </Link>
                    <p className="blog-details">
                      How do you create compelling presentations that wow your
                      colleagues and impress your managers?
                    </p>
                    <div className="author">
                      <p className="blog-author mb-0">Olivia Rhye</p>
                      <p className="blog-date">20 Jan 2022</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="blog-img">
                    <img
                      src="assets/image5.png"
                      alt="blog"
                      className="img-fluid"
                    />
                  </div>

                  <div className="blog-post mt-3">
                    <p className="blog-subheading mb-1">Product</p>
                    <Link to="/migratingLinear" className="blogPost-link">
                      <div className="d-flex justify-content-between">
                        <p className="blog-heading">Migrating to Linear 101</p>
                        <FiArrowUpRight className="blog-icon" />
                      </div>
                    </Link>
                    <p className="blog-details">
                      Linear helps streamline software projects, sprints, tasks,
                      and bug tracking. Here’s how to get started.
                    </p>
                    <div className="author">
                      <p className="blog-author mb-0">Phoenix Baker</p>
                      <p className="blog-date">19 Jan 2022</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="blog-img">
                    <img
                      src="assets/image6.png"
                      alt="blog"
                      className="img-fluid"
                    />
                  </div>

                  <div className="blog-post mt-3">
                    <p className="blog-subheading mb-1">
                      Building your API Stack
                    </p>
                    <Link to="/restfulApi" className="blogPost-link">
                      <div className="d-flex justify-content-between">
                        <p className="blog-heading">The Profound Benefits of RESTful APIs</p>
                        <FiArrowUpRight className="blog-icon" />
                      </div>
                    </Link>
                    <p className="blog-details">
                      The rise of RESTful APIs has been met by a rise in tools
                      for creating, testing, and managing them.
                    </p>
                    <div className="author">
                      <p className="blog-author mb-0">Lana Steiner</p>
                      <p className="blog-date">18 Jan 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Podcast;
