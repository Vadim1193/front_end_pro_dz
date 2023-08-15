
const advantage = [
    {   
        id: 1,
        title: 'Declarative', 
        description: `Building interactive user interfaces with React is nice and easy. 
            You just need to describe how parts of the application's interface look in different states. 
            React will update them in a timely manner when the data changes.
        ` 
    },
    {   
        id: 2,
        title: 'Based on components', 
        description: `Create encapsulated stateful components and then combine them into complex user interfaces.
            Because the component's logic is written in JavaScript and not contained in templates, it's easy to 
            pass all sorts of data throughout the application and keep the state out of the DOM.
        ` 
    },
    {   
        id: 3,
        title: 'Learn once, write anywhere', 
        description: `We don't need to know anything about the rest of your tech stack, so you can develop 
        new functionality in React without changing existing code.React can also run on the server 
        using Node.js and on mobile platforms using React Native .
        `
    },
]

function Card(props) { 
    return (
        <div className="wrapper-card">
            <h2 className="title-cards">{props.title}</h2>
            <p className="description-card">{props.description}</p>
        </div>
    )
}

export default function Cards() {
    return (
        <>
            {advantage.map(item => (
                <Card
                    title={item.title}
                    description={item.description} 
                    key={item.id} 
                />
            ))}
        </>
    )
}
