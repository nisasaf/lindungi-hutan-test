export default async function fetchArticles() {
  try {
    const config = useRuntimeConfig().public

    const response = await fetch(`https://newsapi.org/v2/everything?q=nature&apiKey=${config.apiKey}`);
    const data = await response.json();

    if (!data.articles) {
      console.error('No articles found');
      return [];
    }

    const filteredArticles = data.articles.filter(article => {
      return article.title !== '[Removed]';
    });

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
