export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig().public
  const url = `https://newsapi.org/v2/everything?q=nature&apiKey=${config.apiKey}`;

  try {
    const response = await $fetch(url);
    return response;
  } catch (error) {
    return { error: 'Failed to fetch data from News API' };
  }
});