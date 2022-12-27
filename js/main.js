let inpInfo = document.getElementById("inp__info");
let btnAdd = document.getElementById("btn-add");
let tweet = document.getElementsByClassName("tweet");
let inpText = document.getElementById("inpText");

let tweetArray = [];

function info(inpInfo) {
  this.inpInfo = inpInfo;
}
document.addEventListener("DomContentLoaded", function () {
  tweetArray = [
    {
      inpInfo: "helloo",
    },
  ];
  displayRecord();
});

function displayRecord() {
  tweetArray.forEach(function (post) {
    addTweet(post);
  });
}

// btnAdd.addEventListener("click", addTweet);

btnAdd.addEventListener("click", function () {
  const newPost = new info(inpInfo.value);
  tweetArray.push(newPost);
  localStorage.setItem("post", JSON.stringify(tweetArray));

  addTweet(newPost);
});

function addTweet(item) {
  const newRecordDiv = document.createElement("div");
  newRecordDiv.classList.add("record-item");
  newRecordDiv.innerHTML = `
  <div class="twit__info">
    <h2>tweet</h2>
    <div class="inp__value">
      <div class="tweet-el">
        <p id="inp__text">${item.inpInfo}</p>
      </div>
    </div>
    <div class="rate">
      <img
        class="icons"
        src="https://www.pngitem.com/pimgs/m/111-1119418_twitter-like-icon-png-transparent-png.png"
        alt=""
      />
      <div>0</div>
      <img
        class="icons"
        src="https://cdn1.iconfinder.com/data/icons/twitter-ui-glyph/48/Sed-17-512.png"
        alt=""
      />
      <div>0</div>
      <img
        class="icons"
        src="https://www.kindpng.com/picc/m/153-1537658_twitter-comment-icon-png-clipart-png-download-topic.png"
        alt=""
      />
      <div>0</div>
      <img
        class="icons"
        src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
        alt=""
      />
      <div>0</div>
    </div>
  </div>
  <div>
    <button class="btn-delete">delete</button>
  </div>
   `;
  tweet[0].appendChild(newRecordDiv);
}

// document.addEventListener("click", (e) => {
//   if (e.target.classList.contains("btn-delete")) {
//     let recordItem = e.target.parentElement;

//     tweet.removeChild(recordItem);
//   }
// });

// tweet[0].addEventListener("click", function (event) {
//   if (event.target === "btn-delete") {
//   tweet.removeChild(newRecordDiv);
//   }
// });

// let icons = document.getElementsByClassName("icons");
// icons.addEventListener("click", function () {
//   ++icons
// });
