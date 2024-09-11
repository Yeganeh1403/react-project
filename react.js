const { useState } = React;

class App1 extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            id: "8",
            imgSrc: "https://images.squarespace-cdn.com/content/v1/5fa5ec79661ee904d2973ca0/dc27d038-8956-4408-88e0-61e3c265f5f5/neptune.png?format=1500w",
            title: "Neptune",
            par: "Neptune is the eighth planet from the sun and one of the most fascinating celestial objects in our solar system. With its vibrant blue color and swirling storms, Neptune has captured the imagination of astronomers and space enthusiasts alike.",
            aHref: "https://www.griproom.com/fun/50-facts-about-50-facts-about-neptune-the-blue-giant"
        }
    }

    componentDidUpdate (prevProps, prevState) {
      if (prevState.id !== this.state.id) {
        switch (this.state.id) {
            case "8" :
                this.setState({
                    imgSrc: "https://images.squarespace-cdn.com/content/v1/5fa5ec79661ee904d2973ca0/dc27d038-8956-4408-88e0-61e3c265f5f5/neptune.png?format=1500w",
                    title: "Neptune",
                    par: "Neptune is the eighth planet from the sun and one of the most fascinating celestial objects in our solar system. With its vibrant blue color and swirling storms, Neptune has captured the imagination of astronomers and space enthusiasts alike.",
                    aHref: "https://www.griproom.com/fun/50-facts-about-50-facts-about-neptune-the-blue-giant"
                });
                break;
            case "7" :
                this.setState({
                    imgSrc: "https://imageio.forbes.com/specials-images/imageserve/5f91806c76fcfa4a1e885d7c/Planet-Uranus-/960x0.jpg?format=jpg&width=960",
                    title: "Uranus",
                    par: "The key reason why the seventh planet is about to be relatively easy to locate in the night sky is Jupiter, which can briefly be used as a celestial signpost. The giant planet—and Uranus—was soon to sink into the sun’s glare, disappearing for a few weeks before re-emerging into the pre-dawn sky.",
                    aHref: "https://www.forbes.com/sites/jamiecartereurope/2024/04/18/exactly-when-and-how-to-see-jupiter-and-uranus-together-this-weekend/"
                });
                break;
            case "6" :
                this.setState({
                    imgSrc: "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/11/exploring-saturn-marvelous-ringed-planet.jpg",
                    title: "Saturn",
                    par: "In this article, we have presented to you some cool Information about Saturn. This includes some Fun Facts about Saturn, that will leave you even more in awe of this exotic planet.Are you ready to find out all about Saturn and its stunning set of rings? Let’s begin, with some Saturn Planet Information that every hungry Space explorer must know!",
                    aHref: "https://www.eurokidsindia.com/blog/decoding-saturn-the-actual-lord-of-the-rings-in-our-solar-system.php"
                });
                break;
            case "5" :
                this.setState({
                    imgSrc: "https://starwalk.space/gallery/images/jupiter-guide/1140x641.jpg",
                    title: "Jupiter",
                    par: "Jupiter is one of the brightest planets in our skies and the largest and most massive planet in the Solar System. It has faint rings, numerous moons, and an unstable surface. Is there something else? We made an overview of Jupiter and gathered all the mind-blowing facts about this vast planet. Enjoy!",
                    aHref: "https://starwalk.space/en/news/jupiter-explained-the-mind-blowing-facts"
                })
                break;
            default :
                break;
        }
      }
    }

    handleClick = (event) => {
        this.setState({
            id: event.target.id
        });
    }

    render () {
        return (
            <div>
              <h1>Change Post Part</h1>
              <div id="links">
                <button type="button" onClick={this.handleClick} id="5">Jupiter</button>
                <button type="button" id="6" onClick={this.handleClick}>Saturn</button>
                <button type="button" id="7" onClick={this.handleClick}>Uranus</button>
                <button type="button" id="8" onClick={this.handleClick}>Neptune</button>
              </div>
              <div id="context">
                <img src={this.state.imgSrc} />
                <h2>{this.state.title}</h2>
                <p>{this.state.par}</p>
                <a href={this.state.aHref}><button type="button">More Information</button></a>
              </div>
            </div>
        )
    }
}

class App2 extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            Neptune: [],
            Uranus: [],
            Saturn: [],
            Jupiter: [],
            loading: true
        }
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({
                Neptune: [
                    "https://images.squarespace-cdn.com/content/v1/5fa5ec79661ee904d2973ca0/dc27d038-8956-4408-88e0-61e3c265f5f5/neptune.png?format=1500w",
                    "Neptune",
                    "Neptune is the eighth planet from the sun and one of the most fascinating celestial objects in our solar system. With its vibrant blue color and swirling storms, Neptune has captured the imagination of astronomers and space enthusiasts alike." 
                ],
                Uranus: [
                    "https://imageio.forbes.com/specials-images/imageserve/5f91806c76fcfa4a1e885d7c/Planet-Uranus-/960x0.jpg?format=jpg&width=960",
                    "Uranus",
                    "The key reason why the seventh planet is about to be relatively easy to locate in the night sky is Jupiter, which can briefly be used as a celestial signpost. The giant planet—and Uranus—was soon to sink into the sun’s glare, disappearing for a few weeks before re-emerging into the pre-dawn sky."
                ],
                Saturn: [
                    "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/11/exploring-saturn-marvelous-ringed-planet.jpg",
                    "Saturn",
                    "In this article, we have presented to you some cool Information about Saturn. This includes some Fun Facts about Saturn, that will leave you even more in awe of this exotic planet.Are you ready to find out all about Saturn and its stunning set of rings? Let’s begin, with some Saturn Planet Information that every hungry Space explorer must know!"
                ],
                Jupiter: [
                    "https://starwalk.space/gallery/images/jupiter-guide/1140x641.jpg",
                    "Jupiter",
                    "Jupiter is one of the brightest planets in our skies and the largest and most massive planet in the Solar System. It has faint rings, numerous moons, and an unstable surface. Is there something else? We made an overview of Jupiter and gathered all the mind-blowing facts about this vast planet. Enjoy!"
                ],
                loading: false
            })
        }, 7000);
    }

    render () {
        return (
            <div id="posts">
                <h1>Get Post Part</h1>
                  {this.state.loading ? (
                    <h2>loading...</h2>
                  ) : (
                    Object.values(this.state).map((planet, index) => (
                      <div key={index}>
                          <img src={planet[0]} alt={planet[1]}/>
                          <h2>{planet[1]}</h2>
                          <p>{planet[2]}</p>
                      </div>
                    ))
                  )}
            </div>
        )
    }
}

class App3 extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            imgSrc: "",
            title: "",
            par: "",
            comments: []
        }
    }

    handleClick = (event) => {
        document.getElementById("comments").style.border = "1px solid black";
        switch (event.target.id) {
            case "neptune":
                this.setState ({
                    imgSrc: "https://images.squarespace-cdn.com/content/v1/5fa5ec79661ee904d2973ca0/dc27d038-8956-4408-88e0-61e3c265f5f5/neptune.png?format=1500w",
                    title: "Neptune",
                    par: "Neptune is the eighth planet from the sun and one of the most fascinating celestial objects in our solar system. With its vibrant blue color and swirling storms, Neptune has captured the imagination of astronomers and space enthusiasts alike.",
                    comments: ["Comments", "I love Neptune and I think it is the best planet in solar system.", "I wish I could see Neptune one day. it is one of my greatest dreams."]
                });
                break;
            case "uranus":
                this.setState ({
                    imgSrc: "https://imageio.forbes.com/specials-images/imageserve/5f91806c76fcfa4a1e885d7c/Planet-Uranus-/960x0.jpg?format=jpg&width=960",
                    title: "Uranus",
                    par: "The key reason why the seventh planet is about to be relatively easy to locate in the night sky is Jupiter, which can briefly be used as a celestial signpost. The giant planet—and Uranus—was soon to sink into the sun’s glare, disappearing for a few weeks before re-emerging into the pre-dawn sky.",
                    comments: ["Comments","I love Uranus and I think it is the best planet in solar system.", "I wish I could see Uranus one day. it is one of my greatest dreams."]
                });
                break;
            case "saturn":
                this.setState ({
                    imgSrc: "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/11/exploring-saturn-marvelous-ringed-planet.jpg",
                    title: "Saturn",
                    par: "In this article, we have presented to you some cool Information about Saturn. This includes some Fun Facts about Saturn, that will leave you even more in awe of this exotic planet.Are you ready to find out all about Saturn and its stunning set of rings? Let’s begin, with some Saturn Planet Information that every hungry Space explorer must know!",
                    comments: ["Comments","I love Saturn and I think it is the best planet in solar system.", "I wish I could see Saturn one day. it is one of my greatest dreams."]
                });
                break;
            case "jupiter":
                this.setState ({
                    imgSrc: "https://starwalk.space/gallery/images/jupiter-guide/1140x641.jpg",
                    title: "Jupiter",
                    par: "Jupiter is one of the brightest planets in our skies and the largest and most massive planet in the Solar System. It has faint rings, numerous moons, and an unstable surface. Is there something else? We made an overview of Jupiter and gathered all the mind-blowing facts about this vast planet. Enjoy!",
                    comments: ["Comments","I love Jupiter and I think it is the best planet in solar system.", "I wish I could see Jupiter one day. it is one of my greatest dreams."]
                });
                break;
            default:
                break;
        }
    }
    
    render () {
        return (
            <div id="show-post-part">
                <h1>Show Post Part</h1>
                <div id='links'>
                    <button type="button" id="neptune" onClick={this.handleClick}>Neptune</button>
                    <button type="button" id="uranus" onClick={this.handleClick}>Uranus</button>
                    <button type="button" id="saturn" onClick={this.handleClick}>Saturn</button>
                    <button type="button" id="jupiter" onClick={this.handleClick}>Jupiter</button>
                </div>
                <div id="context2">
                    <img src={this.state.imgSrc} />
                    <h2>{this.state.title}</h2>
                    <p>{this.state.par}</p>
                    <div id="comments">
                        <h3>{this.state.comments[0]}</h3>
                        <p>{this.state.comments[1]}</p>
                        <p>{this.state.comments[2]}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const Authors1 = () => {
    const [names, setName] = useState(["Lily Thompson", "William Johnson", "Olivia White", "Ethan Carter"]);
    const [descriptions, setDes] = useState(["My name is Lily Thompson.", "My name is William Johnson.", "My name is Olivia White.", "My name is Ethan Carter."]);
    const [expertises, expSet] = useState(["UX/UI Designer", "Data Scientist", "Cybersecurity Analyst", "Full Stack Developer"]);

    return (
        <div id="authors">
            <h1>Show Post With Functional Component</h1>
            {names.map((name, index) => (
                <div class="author-card" key={index} id={name.toLowerCase().replace(" ", "-")}>
                    <p>{name}</p>
                    <p>{descriptions[index]}</p>
                    <p>{expertises[index]}</p>
                </div>
            ))}
        </div>
    )
}

class Authors2 extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            names: ["Lily Thompson", "William Johnson", "Olivia White", "Ethan Carter"],
            descriptions: ["My name is Lily Thompson.", "My name is William Johnson.", "My name is Olivia White.", "My name is Ethan Carter."],
            expertises: ["UX/UI Designer", "Data Scientist", "Cybersecurity Analyst", "Full Stack Developer"]
        }
    }

    render () {
        return (
            <div id="authors">
                <h1>Show Post With Class Component</h1>
                {this.state.names.map((name, index) => (
                    <div class="author-card" key={index} id={name.toLowerCase().replace(" ", "-")}>
                        <p>{name}</p>
                        <p>{this.state.descriptions[index]}</p>
                        <p>{this.state.expertises[index]}</p>
                    </div>
                ))}
            </div>
        )
    }
}

ReactDOM.render(<App1 />, document.getElementById('root1'));
ReactDOM.render(<App2 />, document.getElementById("root2"));
ReactDOM.render(<App3 />, document.getElementById("root3"));
ReactDOM.render(<Authors1 />, document.getElementById("root4"));
ReactDOM.render(<Authors2 />, document.getElementById("root5"));