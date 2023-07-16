var posts = [
    {
        id: 0,
        title: 'Post 1',
        imageUrl: 'https://i.pinimg.com/564x/81/f6/6f/81f66f185a8994dfa83470e75ea68d18.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 1,
        title: 'Post 2',
        imageUrl: 'https://i.pinimg.com/564x/81/f6/6f/81f66f185a8994dfa83470e75ea68d18.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 2,
        title: 'Post 3',
        imageUrl: 'https://i.pinimg.com/564x/81/f6/6f/81f66f185a8994dfa83470e75ea68d18.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 3,
        title: 'Post 4',
        imageUrl: 'https://i.pinimg.com/564x/81/f6/6f/81f66f185a8994dfa83470e75ea68d18.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 4,
        title: 'Post 5',
        imageUrl: 'https://i.pinimg.com/564x/81/f6/6f/81f66f185a8994dfa83470e75ea68d18.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 5,
        title: 'Post 6',
        imageUrl: 'https://i.pinimg.com/564x/81/f6/6f/81f66f185a8994dfa83470e75ea68d18.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 6,
        title: 'Post 7',
        imageUrl: 'https://i.pinimg.com/564x/81/f6/6f/81f66f185a8994dfa83470e75ea68d18.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    }
];
var comments = [
    {
        id: 0,
        postId: 0,
        username: "user1",
        email: "user1@example.com",
        body: "Great post!",
    },
    {
        id: 1,
        postId: 1,
        username: "user2",
        email: "user2@example.com",
        body: "Great post!",
    },
    {
        id: 2,
        postId: 1,
        username: "user2",
        email: "user2@example.com",
        body: "I really enjoyed reading this.",
    },
    {
        id: 3,
        postId: 2,
        username: "user2",
        email: "user2@example.com",
        body: "Great post!",
    },
    {
        id: 4,
        postId: 3,
        username: "user2",
        email: "user2@example.com",
        body: "Great post!",
    },
    {
        id: 5,
        postId: 3,
        username: "user2",
        email: "user2@example.com",
        body: "Great post!",
    },
    {
        id: 6,
        postId: 0,
        username: "user2",
        email: "user2@example.com",
        body: "Great post!",
    },
    {
        id: 7,
        postId: 0,
        username: "user2",
        email: "user2@example.com",
        body: "Great post!",
    },
    {
        id: 8,
        postId: 0,
        username: "user2",
        email: "user2@example.com",
        body: "Great post!",
    }
];
console.log(comments.filter(function (comment) { return comment.postId === 1; }));
export { posts, comments };
