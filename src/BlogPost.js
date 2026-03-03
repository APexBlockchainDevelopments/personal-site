import './Blog.css';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from './data/blogPosts';

function BlogPost() {
  const { slug } = useParams();
  
  // Find the post by slug
  const post = blogPosts.find(p => p.slug === slug);

  // If post not found, show 404
  if (!post) {
    return (
      <div className="blog-main">
        <div className="blog-header">
          <Link to="/blog" className="back-link">
            <span>← Back to Blog</span>
          </Link>
          <h1 className="blog-title">Post Not Found</h1>
          <p className="blog-subtitle">// 404: This post doesn't exist</p>
        </div>
      </div>
    );
  }

  // Split content by newlines to create paragraphs
  const renderContent = (content) => {
    const lines = content.trim().split('\n\n');
    
    return lines.map((block, index) => {
      // Handle code blocks (```language...```)
      if (block.startsWith('```')) {
        const codeMatch = block.match(/```(\w+)?\n([\s\S]*?)```/);
        if (codeMatch) {
          const language = codeMatch[1] || 'bash';
          const code = codeMatch[2];
          return (
            <div key={index} className="code-block">
              <div className="code-header">
                <span className="code-lang">{language}</span>
              </div>
              <pre><code>{code}</code></pre>
            </div>
          );
        }
      }
      
      // Handle headers (# ## ###)
      if (block.startsWith('#')) {
        const level = block.match(/^#+/)[0].length;
        const text = block.replace(/^#+\s*/, '');
        const HeaderTag = `h${Math.min(level + 1, 6)}`; // h1 in markdown becomes h2 on page
        return <HeaderTag key={index} className="post-content-header">{text}</HeaderTag>;
      }
      
      // Regular paragraph
      return <p key={index} className="post-content-paragraph">{block}</p>;
    });
  };

  return (
    <div className="blog-main">
      {/* Header */}
      <div className="blog-header">
        <Link to="/blog" className="back-link">
          <span>← Back to Blog</span>
        </Link>
      </div>

      {/* Post Container */}
      <article className="blog-post-full">
        {/* Post Meta */}
        <div className="post-full-meta">
          <span className="post-date">$ {post.date}</span>
          <span className="post-readtime">⟩ {post.readTime || '5 min read'}</span>
        </div>

        {/* Post Title */}
        <h1 className="post-full-title">{post.title}</h1>

        {/* Tags */}
        <div className="post-tags">
          {post.tags.map(tag => (
            <span key={tag} className="tag">[{tag}]</span>
          ))}
        </div>

        {/* Divider */}
        <div className="post-divider"></div>

        {/* Post Content */}
        <div 
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer */}
        <div className="post-footer-full">
          <Link to="/blog" className="back-to-blog">
            ← Back to all posts
          </Link>
        </div>
      </article>
    </div>
  );
}

export default BlogPost;