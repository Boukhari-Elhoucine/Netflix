const api_key = "927a4178cca9e2be8051cce69ee92b6e";
export const requests = {
  trending: `/trending/all/week?api_key=${api_key}`,
  netflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
  topRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  action: `/discover/movie?api_key=${api_key}&with_genres=28`,
  animation: `/discover/movie?api_key=${api_key}&with_genres=16`,
  comedy: `/discover/movie?api_key=${api_key}&with_genres=35`,
  romance: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  horror: `/discover/movie?api_key=${api_key}&with_genres=27`,
  drama: `/discover/movie?api_key=${api_key}&with_genres=18`,
  sciFie: `/discover/movie?api_key=${api_key}&with_genres=878`,
};
