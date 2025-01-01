const blogContainer = document.querySelector('.blog-content');
    const blogPosts = document.querySelectorAll('.blog-content div');

    blogPosts.forEach(post => {
      post.addEventListener('click', () => {
        const isHighlighted = post.classList.contains('highlight');
        blogPosts.forEach(p => p.classList.remove('highlight'));
        blogContainer.classList.remove('highlight-active');

        if (!isHighlighted) {
          post.classList.add('highlight');
          blogContainer.classList.add('highlight-active');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.blog-content div')) {
        blogPosts.forEach(p => p.classList.remove('highlight'));
        blogContainer.classList.remove('highlight-active');
      }
    });