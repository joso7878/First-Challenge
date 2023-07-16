const cardExtended = document.querySelector(".card-extended");
const commentsList = document.querySelector("#ul-comment");

const cardObject = JSON.parse(localStorage.getItem("expanded_post"))

if (cardObject == undefined) {
    cardExtended.innerHTML = `
        <h1>
            404 Not Found
        </h1>
    `
}

cardExtended.innerHTML = `
    <figure>
    <img src="${cardObject.imageUrl}" alt="">
    <figcaption>
    <h2>
        ${cardObject.title}
    </h2>
    <p>
        ${cardObject.body}
    </p>
    </figcaption>
    </figure>
`

cardObject.comments.map(comment => renderComment(comment))

function renderComment(comment) {
    commentsList.innerHTML += `
        <li>
            <p>
            <span class="user">${comment.username}:</span> <span class="email">${comment.email}:</span> ${comment.body}</p>
            <hr>
        </li>
        `
}
