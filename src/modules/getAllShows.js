import listShows from './listShows.js';

const getAllShows = async (appID) => {
  const showCounter = document.getElementById('show-counter');
  try {
    const url = 'https://api.tvmaze.com/shows';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const shows = data.slice(0, 15);
    showCounter.textContent = `Shows: ${shows.length}`;
    listShows(appID, shows);
  } catch (error) {
    throw new Error('Error while fetching shows', error);
  }
};

export default getAllShows;
