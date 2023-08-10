import '@/assets/style/artikelCard.css';


    

    // return (
    //     <div className="container-card">
    //         {artikel.map((item, index) => (
    //             <div
    //                 key={index}
    //                 className="content"
    //             >
    //                 <div className="card">
    //                     <div className="image-wrapper">
    //                         <img src={item.img} alt="" />
    //                     </div>
    //                     <div className="card-header">
    //                         <div className="category">
    //                             <a href="#">{item.category}</a>
    //                         </div>
    //                         <a href="#">{item.title}</a>
    //                         <span>{item.excerpt}</span>
    //                     </div>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // );

      
export default function artikelCard({
    artikel,
    onClick,
    excerptVisible = true, // Default to show excerpt
  }) {
    return (
      <div className="container-card">
        {artikel.map((item, index) => (
          <div key={index}>
            <div className="card" onClick={() => onClick(index)}>
              <div className="image-wrapper">
                <img src={item.img} alt="" />
              </div>
              <div className="card-header">
                <div className='category'>
                  <a href="#">{item.category}</a>
                </div>
                <a href="#">{item.title}</a>
                {excerptVisible && <span>{item.excerpt}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  

