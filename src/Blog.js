import './Blog.css';
import { Link } from 'react-router-dom';
import { blogPosts } from './data/blogPosts.jsx';

function Blog() {
  // Sort posts by date, newest first
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="blog-main">
      {/* Header */}
      <div className="blog-header">
        <Link to="/" className="back-link">
          <span>← Back to Home</span>
        </Link>
        <h1 className="blog-title">Blog</h1>
        <p className="blog-subtitle">// Technical writeups, security research, and production war stories</p>
      </div>

      {/* Blog Posts List */}
      <div className="blog-posts-container">
        {sortedPosts.map((post, index) => (
          <Link 
            to={`/blog/${post.slug}`} 
            key={post.slug}
            className="blog-post-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="post-header">
              <div className="post-meta">
                <span className="post-date">$ {post.date}</span>
                <span className="post-readtime">{post.readTime || '5 min read'}</span>
              </div>
              <h2 className="post-title">{post.title}</h2>
            </div>

            <p className="post-excerpt">{post.excerpt}</p>

            <div className="post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">[{tag}]</span>
              ))}
            </div>

            <div className="post-footer">
              <span className="read-more">Read more →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State (if no posts) */}
      {sortedPosts.length === 0 && (
        <div className="empty-state">
          <p>$ No posts found...</p>
          <p>// Coming soon: HTB walkthroughs, smart contract security deep dives, and more</p>
        </div>
      )}
    </div>
  );
}

export default Blog;