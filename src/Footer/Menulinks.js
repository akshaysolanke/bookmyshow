import React from 'react'

const Menulinks = () => {
    const data = [
        {
        title: "MOVIES NOW SHOWING IN SELU",
        links: ["Youdha", "Shaitan", "Unn Savli"],
    },
    {
        title: "Upcoming Movies in Selu",
        links: ["Haddhu Ledhuraa", "Rakshasa Tantra", "Arthur The King", "Dilkush", "Bigul","Kaliyugam Pattanamlo"],
    },
    {
        title: "MOVIE UPDATES AND CELEBRITIES",
        links: ["Upcoming Movies", "Movies Now Showing", "Movie Celebrities"],
    },
    {
        title: "MOVIES PER WEEK",
        links: ["Movies Playing Today","Movies Playing Tomorrow","Movies Playing This Weekend"],
    },
    {
        title: "MOVIES BY GENRE",
        links: ["Drama Movies","Comedy Movies","Thriller Movies","Action Movies","Adventure Movies","Romantic Movies","Biography Movies","Sci-Fi Movies","Crime Movies","Adaptation Movies"],
    },
    {
        title: "UPCOMING MOVIES BY GENRE",
        links: ["Movies in Drama","Movies in Thriller","Movies in Action","Movies in Comedy","Movies in Romantic","Movies in Crime","Movies in Horror","Movies in Adventure","Movies in Sci-Fi Movies in Suspense"],
    },
    {
        title: "MOVIES BY LANGUAGE",
        links: ["Movies in Hindi","Movies in English","Movies in Marathi","Movies in Malayalam","Movies in Chattisgarhi","Movies in Khasi","Movies in Assamese","Movies in Sindhi","Movies in Bhojpuri","Movies in Nepali"],
    },
    {
        title: "MOVIES BY FORMAT",
        links: ["Movies in 2D","Movies in 3D","Movies in 4DX 3D ","ovies in MX4D 3D","Movies in 2D SCREEN X","Movies in IMAX 3D","Movies in 3D SCREEN X","Movies in Full Dome","Movies in IMAX 2D","Movies in 70"],
    },
    {
        title: "MOVIES IN TOP CITIES",
        links: ["Movies in Mumbai","Movies in Delhi-NCR","Movies in Chennai","Movies in Bengaluru","Movies in Hyderabad","Movies in Pune","Movies in Ahmedabad","Movi"],
    },
    {
        title: "CINEMAS IN TOP CITIES",
        links: ["Cinemas in Mumbai","Cinemas in Delhi-NCR","Cinemas in Chennai","Cinemas in Bengaluru","Cinemas in Hyderabad","Cinemas in Pune","Cinemas in Ahmeda"],
    },
    {
        title: "COUNTRIES",
        links: ["Indonesia Singapore","UAE","Sri Lanka","West Indies"],
    },
    {
        title: "HELP",
        links: ["About Us","Contact Us","Current Opening","Press Release","Press Coverage ","FAQs","Terms and Conditions","Privacy Policy"],
    },
    {
        title: "BOOKMYSHOW EXCLUSIVES",
        links: ["Lollapalooza India","Superstar","BookASmile ","Gift Cards","List My Show","Offers","Stream","Trailers"],
    },
        
    ];
  return (
   <section className='a_dark text-white' >
    <div className="container py-3 ">
       {data.map((value,index)=>{
        return (
            <div key={index}  className="my-2">
                <h6 className='a_text'>{value.title.toUpperCase()}</h6>
                <div className="a_span_link fw-light">
                    {value.links.map((ele,index)=>{
                        return <span key={index} className={`${index !== 0 ? "border-start a_span_link border-secondary px-2" : "pe-2"}`}>{ele}</span>

                    })}

                </div>

            </div>
        );
       })}
    </div>
   </section>
  )
}

export default Menulinks
