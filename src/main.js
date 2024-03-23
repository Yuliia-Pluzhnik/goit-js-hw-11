import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
  form: document.querySelector(".search-form"),
  input: document.querySelector(".search-input"),
  container: document.querySelector(".container"),
  list: document.querySelector(".gallery"),
  loader: document.querySelector(".loader"),
};

function showLoader() {
    if (refs.loader) {
      refs.loader.style.display = 'block';
    }
  }
  
  function hideLoader() {
    if (refs.loader) {
      refs.loader.style.display = 'none';
    }
  }

refs.form.addEventListener("submit", e => {
  e.preventDefault();
  const searchQuery = refs.input.value;
if (searchQuery === "") {
    iziToast.error({
        title: 'Error',
        message: 'Please enter a search query.',
        position: "topRight"
      });
      return;
}

showLoader()


function getImage(query) {
    const BASE_URL = "https://pixabay.com";
    const END_POINT = "/api/";
    const params = new URLSearchParams({
      key: "43022038-5a6e0a87a795a8bbaa0a62c30",
      q: query,
      type: "photo",
      orientation: "horizontal",
    });
    const url = `${BASE_URL}${END_POINT}?${params}`;
  
    return fetch(url).then(res => res.json());
  }

  getImage(searchQuery)
  .then(data => {
    displayImages(data.hits);
  })
  .catch(error => {
    console.error(error);
  });

});

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });

  function displayImages(images) {
    refs.list.innerHTML = '';
  
    if (images.length === 0) {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again.',
          position: "topRight"
      });
      return;
    };
  
    const markup = createMarkup(images);
    refs.list.innerHTML = markup;
  
    lightbox.refresh();
    hideLoader();
  }
  

  function createMarkup(images) {
    return images
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) =>
          `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
            width="360"
          />
        </a>
        <div class="thumb-block">
          <div class="block">
            <h2 class="title">Likes</h2>
            <p class="amount">${likes}</p>
          </div>
          <div class="block">
            <h2 class="title">Views</h2>
            <p class="amount">${views}</p>
          </div>
          <div class="block">
            <h2 class="title">Comments</h2>
            <p class="amount">${comments}</p>
          </div>
          <div class="block">
            <h2 class="title">Downloads</h2>
            <p class="amount">${downloads}</p>
          </div>
        </div>
      </li>`
      )
      .join('');
  }