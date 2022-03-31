let postCont = document.getElementById("container");

let socialPost = [
  {
    authorName: "Phil Mangione",
    profilePic: "https://unsplash.it/300/300",
    postDate: "4 mesi fa",
    postText:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    postImg: "https://unsplash.it/600/300",
    likeNumber: 80,
  },

  {
    authorName: "Phil Mangione",
    profilePic: "https://unsplash.it/300/300",
    postDate: "4 mesi fa",
    postText:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    postImg: "",
    likeNumber: 60,
  },

  {
    authorName: "Phil Mangione",
    profilePic: "https://unsplash.it/300/300",
    postDate: "4 mesi fa",
    postText: "",
    postImg: "https://unsplash.it/600/300",
    likeNumber: 35,
  },

  {
    authorName: "Phil Mangione",
    profilePic: "https://unsplash.it/300/300",
    postDate: "4 mesi fa",
    postText:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    postImg: "https://unsplash.it/600/300",
    likeNumber: 10,
  },
];

for (let i = 0; i < socialPost.length; i++) {
  const { authorName, profilePic, postDate, postText, postImg, likeNumber } =
    socialPost[i];

  postCont.innerHTML += `<div class="post"></div>`;

  const innerPost = document.getElementsByClassName("post")[i];

  innerPost.innerHTML += `
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${profilePic}" alt="${authorName}">
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${authorName}</div>
                    <div class="post-meta__time">${postDate}</div>
                </div>
            </div>
        </div>
    `;

  if (postText !== "") {
    innerPost.innerHTML += `
            <div class="post__text">${postText}</div>
        `;
  }

  if (postImg !== "") {
    innerPost.innerHTML += `
            <div class="post__image">
                <img src="${postImg}" alt="">
            </div>
        `;
  }

  innerPost.innerHTML += `
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="javascript:void(0)" data-postid="${i}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${i}" class="js-likes-counter">${likeNumber}</b> persone
                </div>
            </div>
        </div>
    `;
}

let likeBtn = document.querySelectorAll(".like-button");
console.log(likeBtn);

let likeCounter = document.querySelectorAll(".js-likes-counter");
console.log(likeCounter);

for (let i = 0; i < socialPost.length; i++) {
  const baseLike = socialPost[i].likeNumber;
  likeBtn[i].addEventListener("click", function () {
    if (likeCounter[i].innerHTML == baseLike) {
      socialPost[i].likeNumber++;
      likeCounter[i].innerHTML++;
      console.log(socialPost[i].likeNumber);
    } else {
      socialPost[i].likeNumber--;
      likeCounter[i].innerHTML--;
      console.log(socialPost[i].likeNumber);
    }

    likeBtn[i].classList.toggle("like-button--liked");
  });
}
