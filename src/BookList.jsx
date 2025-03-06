import {React,useState} from "react";
import { useParams } from "react-router-dom";
import "./BookList.css"; 
const bookData = {
  fiction: [
  { title: "The Great Gatsby", img: "/images/fic1.jpeg" ,description: "A classic novel about the American dream, love, and tragedy in the roaring 1920s.", pdf: "/pdfs/The Great Gatsby.pdf" },
  { title: "To Kill a Mockingbird", img:"/images/fic2.jpeg",description: "A gripping story of racial injustice and moral growth set in the American South.",pdf: "/pdfs/To Kill A Mockingbird.pdf"},
  { title: "1984", img:"/images/fic3.jpeg",description: "A dystopian novel that explores government surveillance and totalitarianism."},
  { title: "Pride and Prejudice", img: "/images/fic4.jpeg", description: "A romantic classic that explores themes of love, class, and social expectations in Regency-era England." },
  { title: "The Catcher in the Rye", img: "/images/fic5.jpg", description: "A coming-of-age novel about teenage rebellion and identity, following the experiences of Holden Caulfield." },
  { title: "Beautiful Ugly", img: "/images/fic6.jpg", description: "A gripping contemporary novel that delves into self-worth, beauty standards, and the struggles of personal identity." },
  { title: "An Orphan's War", img:"/images/fic7.jpg", description: "A historical fiction novel about an orphan’s resilience and courage during World War II." },
  { title: "The Fall Risk", img: "/images/fic8.jpg", description: "A thrilling mystery novel that follows a protagonist caught in a web of danger, deception, and unexpected twists." },
  { title: "The Book of Lost Friends", img: "/images/fic9.jpg", description: "A historical novel weaving two timelines—one of post-Civil War America and another of modern-day discoveries about lost histories." },
  { title: "The Housemaid's Wedding", img: "/images/fic10.jpg", description: "A dramatic tale of love, secrets, and ambition set against the backdrop of societal expectations." },
  { title: "The Lord of the Rings", img: "/images/fic12.jpeg", description: "A fantasy masterpiece about the struggle between good and evil." },
  { title: "Jane Eyre", img: "/images/fic11.jpeg", description: "A novel about independence, love, and self-discovery." },
  { title: "Brave New World", img: "/images/fic13.jpeg", description: "A dystopian novel questioning the price of progress and happiness." },
  { title: "Wuthering Heights", img: "/images/fic14.jpeg", description: "A tragic romance set on the Yorkshire moors." },
  { title: "Anna Karenina", img: "/images/fic15.jpeg", description: "A love story intertwined with themes of social change and morality." },
  { title: "The Picture of Dorian Gray", img: "/images/fic16.jpeg", description: "A gothic tale about vanity, corruption, and a supernatural portrait." },
  { title: "The Hobbit", img: "/images/fic17.jpeg", description: "A fantasy adventure about a reluctant hero and a dangerous journey." },
  { title: "Les Misérables", img: "/images/fic18.jpeg", description: "A novel about justice, redemption, and the struggles of the poor." },
  { title: "Fahrenheit 451", img: "/images/fic19.jpeg", description: "A dystopian novel about censorship and the power of books." },
  { title: "Life of Pi", "img": "/images/fic20.jpeg", "description": "A novel about survival, faith, and storytelling." }
],
"non-fiction": [
  {
    title: "Sapiens",
    img: "/images/nonfic1.jpeg",
    pdf: "/pdfs/Sapiens.pdf",
    description: "A thought-provoking book by Yuval Noah Harari that explores the history and impact of humankind from the Stone Age to modern civilization."
  },
  {
    title: "Educated",
    img: "/images/nonfic2.jpeg",
    description: "A memoir by Tara Westover, recounting her journey from a survivalist family in rural Idaho to earning a PhD at Cambridge University.",
    pdf: "/pdfs/Educated.pdf"
  },
  {
    title: "The Power of Habit",
    img: "/images/nonfic3.jpeg",
    description: "Charles Duhigg explores the science of habit formation and how understanding habits can lead to personal and professional transformation."
  },
  {
    title: "Silent Spring",
    img: "/images/nonfic4.jpeg",
    description: "Rachel Carson’s groundbreaking work that exposed the dangers of pesticides, leading to a shift in environmental policies worldwide."
  },
  {
  title: "Out of Africa",
    img: "/images/nonfic5.jpeg",
    description: "A memoir by Karen Blixen (Isak Dinesen) about her life on a coffee plantation in Kenya, filled with rich descriptions of African landscapes and cultures."
  },
  {
    title: "On Human Nature",
    img: "/images/nonfic6.jpeg",
    description: "E.O. Wilson delves into the biological basis of human behavior, exploring themes of genetics, evolution, and social structures."
  },
  {
    title: "The Beauty Myth",
    img: "/images/nonfic7.jpeg",
    description: "Naomi Wolf critiques society's unrealistic beauty standards and their impact on women’s personal and professional lives."
  },
  {
    title: "The Double Helix",
    img: "/images/nonfic8.jpg",
    description: "James Watson’s personal account of the discovery of DNA’s structure, providing an inside look at scientific competition and breakthroughs."
  },
  {
    title: "The Diary of a Young Girl",
    img: "/images/nonfic9.jpeg",
    description: "Anne Frank’s poignant diary, documenting her experiences hiding from the Nazis during World War II and offering a unique perspective on history."
  },
  {
    title: "Fast Food Nation",
    img: "/images/nonfic10.jpeg",
    description: "Eric Schlosser investigates the fast food industry’s impact on health, workers, and the global economy, exposing its hidden dangers."
  }
],

  "story-books": [
    { title: "Charlotte's Web", img: "/images/st1.jpeg",pdf: "/pdfs/Charlotte_s.pdf",description: "A heartwarming tale by E.B. White about the friendship between a pig named Wilbur and a clever spider named Charlotte." },
    { title: "Charlie Cook's Favourite Book", img: "/images/st2.jpeg",description:"A delightful picture book by Julia Donaldson, taking readers on a journey through different stories within a story."},
    { title: "Story Thieves", img: "/images/st3.jpeg",description: "A fantasy adventure by James Riley where characters jump in and out of books, blurring the lines between fiction and reality."},
    { title: "The Secret Life Of Birds", img: "/images/st4.jpeg",description: "A fascinating book that reveals the hidden lives, habits, and wonders of birds in an engaging and educational way."},
    { title: "Ruskin Bond", img: "/images/st5.jpeg",description: "A collection of timeless stories by Ruskin Bond, filled with charming characters, nostalgia, and heartwarming tales."},
    { title: "The Christmas Story", img: "/images/st6.jpeg",description: "A beautifully illustrated book retelling the traditional nativity story, perfect for the holiday season."},
    { title: "Winter Stories", img: "/images/st7.jpeg" ,description: "A cozy collection of short winter-themed tales, bringing warmth and adventure to chilly days."},
    { title: "Scruffy Puppy", img: "/images/st8.jpeg" ,description:"A sweet and touching story about a lonely little puppy searching for love and a forever home."},
    { title: "The Bug Girl", img: "/images/st9.jpeg",description: "A true story about a young girl's passion for insects and her journey of self-discovery." },
    { title: "Room on the Broom", img: "/images/st10.jpg",description: "A fun rhyming story by Julia Donaldson about a kind witch and her adventures with some unexpected animal friends." },
  ],
  horror: [
    {
      title: "Dracula",
      img: "/images/ho1.jpeg",
      pdf:  "/pdfs/Dracula.pdf",
      description: "Bram Stoker's classic vampire novel that introduced Count Dracula and defined gothic horror."
    },
    {
      title: "The Shining",
      img: "/images/ho2.jpeg",
      pdf: "/pdfs/The Shinning.pdf",
      description: "Stephen King's chilling tale of a haunted hotel and a man's descent into madness."
    },
    {
      title: "It",
      img: "/images/ho3.jpeg",
      description: "A terrifying story of an ancient evil that preys on the fears of children in Derry, Maine."
    },
    {
      title: "Those Eyes",
      img: "/images/ho4.jpeg",
      description: "A psychological horror novel about an eerie presence watching from the darkness."
    },
    {
      title: "Frankenstein",
      img: "/images/ho5.jpeg",
      description: "Mary Shelley's classic novel about a scientist who creates a monstrous being with tragic consequences."
    },
    {
      title: "The Ritual",
      img: "/images/ho6.jpeg",
      description: "A spine-chilling survival horror story set deep in the Scandinavian wilderness."
    },
    {
      title: "Hanging House",
      img: "/images/ho7.jpeg",
      description: "A haunted house tale where eerie whispers and ghostly figures lurk in the shadows."
    },
    {
      title: "Night Of Terror",
      img: "/images/ho8.jpeg",
      description: "A blood-curdling horror story about a town trapped in an endless night of terror."
    },
    {
      title: "Killing It Softly",
      img: "/images/ho9.jpeg",
      description: "A bone-chilling anthology of horror stories that creep into your nightmares."
    },
    {
      title: "Clown In A Cornfield",
      img: "/images/ho10.jpeg",
      description: "A slasher horror novel where a small town’s dark secrets are revealed in a bloodbath."
    }
],
"romantic-fiction": [
  {
    title: "The Princess Bride",
    img: "/images/r1.jpeg",
    pdf: "/pdfs/the Princess Bride.pdf",
    description: "A captivating historical romance about a Scottish laird and his unexpected English bride."
  },
  {
    title: "Outlander",
    img: "/images/r2.jpeg",
    description: "A time-traveling love story that follows Claire Randall as she is swept into 18th-century Scotland."
  },
  {
    title: "Paradise",
    img: "/images/r3.jpeg",
    description: "A passionate romance about second chances and the power of love to heal old wounds."
  },
  {
    title: "The Duke And I",
    img: "/images/r4.jpeg",
    description: "The first book in the Bridgerton series, featuring a charming fake courtship that turns into real love."
  },
  {
    title: "Mr.Perfect",
    img: "/images/r5.jpeg",
    description: "A romantic suspense novel where love and danger collide as a group of friends search for the 'perfect' man."
  },
  {
    title: "North And South",
    img: "/images/r6.jpeg",
    description: "A classic love story set against the backdrop of industrial England, exploring class struggles and romance."
  },
  {
    title: "On The Island",
    img: "/images/r7.jpeg",
    description: "A unique survival romance about two strangers stranded on a deserted island and their growing connection."
  },
  {
    title: "Redeeming Love",
    img: "/images/r8.jpeg",
    description: "A powerful historical romance inspired by the biblical story of Hosea, exploring love and redemption."
  },
  {
    title: "The Rosie Project",
    img: "/images/r9.jpeg",
    description: "A heartwarming romantic comedy about a socially awkward genetics professor's unconventional search for love."
  },
  {
    title: "The Thorn Birds",
    img: "/images/r10.jpeg",
    description: "A sweeping generational saga of forbidden love set in the Australian outback."
  }
],

comics: [
  {
    title: "Spider-Man",
    img: "/images/c1.jpeg",
    pdf:"/pdfs/Spiderman.pdf",
    description: "Follow Peter Parker as he battles villains while navigating teenage life."
  },
  {
    title: "Batman: The Killing Joke",
    img: "/images/c2.jpeg",
    description: "A dark and intense look at the origin of the Joker, Gotham's greatest villain."
  },
  {
    title: "Avengers",
    img: "/images/c3.jpeg",
    description: "Earth's mightiest heroes unite to battle cosmic threats and protect humanity."
  },
  {
    title: "The IDW Collection",
    img: "/images/c4.webp",
    description: "A compilation of some of IDW Publishing’s greatest comic series in one collection."
  },
  {
    title: "Cat's Cafe",
    img: "/images/c5.webp",
    description: "A wholesome and heartwarming comic about friendship, mental health, and cute animals."
  },
  {
    title: "Baby-Sitters Little Sister",
    img: "/images/c6.webp",
    description: "A charming spin-off of the Baby-Sitters Club series, following young Karen Brewer's adventures."
  },
  {
    title: "The Hedgehog",
    img: "/images/c7.webp",
    description: "A fun and adventurous comic inspired by Sonic the Hedgehog, full of speed and excitement."
  },
  {
    title: "Making Friends",
    img: "/images/c8.webp",
    description: "A relatable and magical middle school comic about friendship, creativity, and self-discovery."
  },
  {
    title: "The Snowcat Prince",
    img: "/images/c9.webp",
    description: "A beautifully illustrated fantasy adventure about a young prince searching for his destiny."
  },
  {
    title: "Transformers",
    img: "/images/c10.webp",
    description: "The epic battle between Autobots and Decepticons unfolds in this thrilling sci-fi comic series."
  }
]

};

const BookList = () => {
  const { category } = useParams();
  const books = bookData[category] || [];
  const [favorites, setFavorites] = useState([]); 

  
  const toggleFavorite = (book,event) => {
    event.stopPropagation();
    if (favorites.includes(book)) {
      setFavorites(favorites.filter(fav => fav !== book)); 
    } else {
      setFavorites([...favorites, book]); 
    }
  };
  return (
    <div className={`book-list ${category}`}>
      <h1>{category.replace("-", " ").toUpperCase()} BOOKS</h1>
      <div className="book-container">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div 
              key={index} 
              className="book-card" 
              onClick={() => window.open(book.pdf, "_blank")} 
              style={{ cursor: "pointer" }}
            >
              <img src={book.img} alt={book.title} />
              <div className="book-info">
                <h3>{book.title}</h3>
                <p className="book-description">{book.description}</p>
                <button onClick={(event) => toggleFavorite(book, event)}>
                  {favorites.includes(book) ? "❤️ Remove" : "🤍 Favorite"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No books found in this category.</p>
        )}
      
      </div>
    </div>
  );
};
export default BookList;