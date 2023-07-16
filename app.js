import { comments, posts } from './dist/data.js'

const postUl = document.querySelector("#post-ul")

//create card function
function createCard(post) {
    postUl.innerHTML += `
    <li id="post-${post.id}">
        <div class="card">
        <figure>
            <img src="${post.imageUrl}" alt="">
            <figcaption>
            <h2>
                ${post.title}
            </h2>
            <p>
                ${post.body}
            </p>
            <a class="expand-btn" data-id="${post.id}">
                Expand...
            </a>
            </figcaption>
        </figure>
        </div>
    </li>
    `
}

posts.forEach(post => createCard(post))
const postsLinks = document.querySelectorAll(`a.expand-btn`)

postsLinks.forEach(link => link.onclick = () => {
    const id = link.getAttribute('data-id')

    const expandPostObject = {
        id,
        title: posts[id].title,
        body: posts[id].body,
        imageUrl: posts[id].imageUrl,
        comments: comments.filter((comment) => {
            return comment.postId == id
        })
    }

    localStorage.setItem("expanded_post", JSON.stringify(expandPostObject))
    location.href = "post-details.html"
})

