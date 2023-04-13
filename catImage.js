function getCatImage() {
    const url = "https://api.thecatapi.com/v1/images/search";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.url;
        const img = new Image();
        img.src = imageUrl;
        document.body.appendChild(img);
      })
  }
  