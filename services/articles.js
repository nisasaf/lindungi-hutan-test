export default async function fetchArticles() {
  try {
    const response = await $fetch('/api/news');
    if (response.error) {
      console.error('Error fetching articles:', response.error);
      return [];
    }

    if (!response.articles) {
      console.error('No articles found');
      return [];
    }

    const filteredArticles = response.articles.filter(article => article.title !== '[Removed]');

    return filteredArticles.map(article => ({
      author: article.author,
      publishedAt: article.publishedAt,
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
    }));
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}
