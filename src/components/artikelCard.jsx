import '@/assets/style/artikelCard.css';

export default function artikelCard(props) {
    const artikel = [
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "History",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#home",
           
        },
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "DIY",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#about",
            
        },
        {
            title:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            excerpt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique luctus enim, sit amet gravida nunc vestibulum eget. Integer ullamcorper tincidunt libero, non commodo quam convallis ut.",
            category : "Filter",
            img:"https://source.unsplash.com/random/367x217/?batik",
            link : "#experience",
            
        }
    ]
    const filteredArtikel = artikel.filter(item => item.category === props.activeCategory);

    return (
        <div className="container-card">
            {filteredArtikel.map((item, index) => (
                <div
                    key={index}
                    className="content"
                >
                    <div className="card">
                        <div className="image-wrapper">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="card-header">
                            <div className="category">
                                <a href="#">{item.category}</a>
                            </div>
                            <a href="#">{item.title}</a>
                            <p>{item.excerpt}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

