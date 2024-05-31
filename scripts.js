
const books = [
    { title: "1984", author: "George Orwell", year: 2020, url: "books/1984.pdf", image: "img/1984.jpg", summary: "A dystopian social science fiction novel and cautionary tale, warning of the dangers of totalitarianism." },
    { title: "The 39 Steps", author: "John Buchan", year: 1915, url: "books/the-39-steps.pdf", image: "img/39-steps.jpg", summary: "An adventure novel about a man who becomes embroiled in a plot involving spies and a mysterious secret." },
    { title: "Life Is What You Make It", author: "Preeti Shenoy", year: 2011, url: "books/Life_is_What_You_Make_it.pdf", image: "img/life-is-what.jpg", summary: "A story about hope, faith, and the resilience of the human spirit in the face of life's challenges." },
    { title: "Gentle Green", author: "Ann Sepine", year: 2024, url: "books/gentle-green.pdf", image: "img/green.jpg", summary: "A novel that explores the complexities of human relationships and the healing power of nature." },
    { title: "Critical Thinking", author: "Simon Bradley", year: 2016, url: "books/Critical_Thinking.pdf", image: "img/critical-thinking.jpg", summary: "A guide to improving your critical thinking skills and making better decisions in everyday life." },
    { title: "Boundaries", author: "Dr. Henry Cloud", year: 1992, url: "books/Boundaries.pdf", image: "img/boundaries.jpg", summary: "A book about setting healthy boundaries in relationships and maintaining personal integrity." },
    { title: "Give and Take", author: "Adam Grant", year: 2013, url: "books/Give_and_Take.pdf", image: "img/give-and-take.jpg", summary: "A revolutionary approach to success based on the principles of giving and receiving." },
    { title: "How to Think Like Bill Gates", author: "Danial Smith", year: 2015, url: "books/How_to_Think_Like_Bill_Gates.pdf", image: "img/think-like-bill-gates.jpg", summary: "Insights into the mind and strategies of one of the world's most successful entrepreneurs." },
    { title: "How Successful People Think", author: "John C. Maxwell", year: 2009, url: "books/How_Successful_People_Think.pdf", image: "img/how-successful-people-think.jpg", summary: "A guide to developing the mindset and habits of highly successful people." },
    { title: "Living in the Light", author: "Shakti Gawain", year: 1948, url: "books/Living_in_the_Light.pdf", image: "img/living-in-the-light.jpg", summary: "A spiritual guide to living a life of joy, creativity, and fulfillment." },
    { title: "Positive Thinking", author: "Michael Chapman", year: 2016, url: "books/Positive_Thinking.pdf", image: "img/50-positive-habits.jpg", summary: "A collection of strategies for developing a positive mindset and achieving success." },
    { title: "Leadership Lessons", author: "Will Peters", year: 1990, url: "books/Leadership_Lessons.pdf", image: "img/leadership.jpg", summary: "A compilation of leadership principles and lessons from some of history's greatest leaders." }
];


function populateBooks() {
    const bookList = document.getElementById('book-list');
    const bookSelect = document.getElementById('book');
    
    books.forEach(book => {
       
        const listItem = document.createElement('div');
        listItem.className = 'book-item';
        listItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Year: ${book.year}</p>
            <button onclick="openBookDetails('${book.title}')">View Details</button>
        `;
        bookList.appendChild(listItem);

      
        const option = document.createElement('option');
        option.value = book.title;
        option.textContent = book.title;
        bookSelect.appendChild(option);
    });
}


function handleCommentSubmit(event) {
    event.preventDefault();

    const book = document.getElementById('book').value;
    const comment = document.getElementById('comment').value;
    const commentList = document.getElementById('comment-list');

    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${book}:</strong> ${comment}`;
    commentList.appendChild(listItem);

    
    document.getElementById('comment-form').reset();
}


function filterBooks() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const bookItems = document.getElementsByClassName('book-item');

    Array.from(bookItems).forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}


function openBookDetails(title) {
    const book = books.find(b => b.title === title);
    const width = window.outerWidth;
    const height = window.outerHeight;
    const newWindow = window.open('', '_blank', `width=${width},height=${height}`);
    newWindow.document.write(`
        <html>
        <head>
            <title>${book.title}</title>
            <style>
                body {
                    font-family: 'Comic Sans MS', 'Chalkduster', 'fantasy';
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .book-details {
                    display: flex;
                    gap: 20px;
                    flex: 1;
                }
                .book-image {
                    max-width: 300px; /* Increase the image width */
                }
                .book-summary {
                    max-width: 600px;
                    flex: 1;
                }
                .download-button {
                    display: block;
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #14263a;
                    color: white;
                    text-align: center;
                    border-radius: 5px;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div class="book-details">
                <img src="${book.image}" alt="${book.title}" class="book-image">
                <div class="book-summary">
                    <h1>${book.title}</h1>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><strong>Year:</strong> ${book.year}</p>
                    <p>${book.summary}</p>
                    <a href="${book.url}" download class="download-button">Download</a>
                </div>
            </div>
        </body>
        </html>
    `);
}


document.addEventListener('DOMContentLoaded', () => {
    populateBooks();

    
    document.getElementById('comment-form').addEventListener('submit', handleCommentSubmit);
});
