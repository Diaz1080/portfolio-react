import "./Aflix.scss"

const Aflix = () => {
    return (

        <div className="container-fluid A">
        <nav className="row">
            <div className="col">
            <img src="https://fontmeme.com/permalink/221025/e32c8b0cb8655f593d53e821877e03e2.png" alt="netflix-font" border="0" className="img-fluid"/>
            </div>
            <div className="col-8" id="linksBar">
                <span>Home</span>
                <span>TV Show</span>
                <span>Movies</span>
                <span>New & Popular</span>
            </div>
            <div className="col-3 text-end" id="icons" >
                <span className="material-symbols-outlined">
                    search
                </span>
                <span className="material-symbols-outlined">
                        notifications_active
                </span>
                <span className="material-symbols-outlined">
                            account_circle
                </span>
            </div>
        </nav>
        <section className="row" id="headlineContent">
            <div className="col-5" id="col-1">
                <div id="seriesRow">
                    <img src="/img/netflix-N.png" id="netflixN" alt="screenshot"/> SERIES
                </div>
                
                    <div id="showName">
                        <h1>BRIDGERTON</h1>
                     </div>
                     
                     <div id="top10">
                        <img src="/img/netflix-top10-icon.png" id="netflixN" alt="screenshot"/> #2 in TV Shows Today
                     </div>
                     <div id="about">
                        <p>The eight close-knit siblings of the Bridgerton family
                         lookfor the love and hapiness in London high society.
                         Inspired by Julia Quinn's bestselling novels.</p>
                     </div>
                     <div >
                         <button id="play" className="d-inline-flex align-items-center"><span className="material-symbols-outlined">
                             play_arrow 
                             </span>Play</button>
                         <button id="more" className="d-inline-flex align-items-center"><span className="material-symbols-outlined">
                             info
                             </span>
                             More info
                         </button>
                     </div>
            </div>
            
            <div className="col-5">
                <div>
                    
                </div>
            </div>
            <div className="col-2 d-inline-flex align-items-center justify-content-end"
            id="ratingCol">
                <span className="material-symbols-outlined justify-content-end" > refresh </span>
					<span id="rating">TV-MA</span>
            </div>
        </section>
        <section >
            <div>Released in the past Year</div>
            <div className="row">
                <div className="col">
                    <img src="/img/show1.jpg" className="img-fluid" alt="screenshot"/>
                </div>
                <div className="col">
                    <img src="/img/show2.jpg" className="img-fluid" alt="screenshot"/>
                </div>
                <div className="col">
                    <img src="/img/show3.jpg" className="img-fluid" alt="screenshot"/>
                </div>
                <div className="col">
                    <img src="/img/show4.jpg" className="img-fluid" alt="screenshot"/>
                </div>
                <div className="col">
                    <img src="/img/show5.jpg" className="img-fluid" alt="screenshot"/>
                </div>
                <div className="col">
                    <img src="/img/show7.jpg" className="img-fluid" alt="screenshot"/>
                </div>
            </div>
        </section>
       <section>
        <div>Trending Now</div>
        <div className="row">
            <div className="col">
                <img src="/img/show6.webp" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show8.webp" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show9.jpg" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show10.webp" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show11.jpg" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show12.jpg" className="img-fluid" alt="screenshot"/>
            </div>
        </div>
       </section>
       <section>
        <div>Continue watching for Alba</div>
        <div className="row">
            <div className="col">
                <img src="/img/show13.webp" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show14.webp" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show15.jpg" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show16.webp" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show17.jpg" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show18.jpg" className="img-fluid" alt="screenshot"/>
            </div>
        </div>
       </section>
       <section>
        <div>Recently Added</div>
        <div className="row" id="row">
            <div className="col" d="row">
                <img src="/img/show19.jpg" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col" >
                <img src="/img/show20.jpg" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show21.webp" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show22.jpg" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show23.webp" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show24.webp" className="img-fluid" alt="screenshot"/>
            </div>
        </div>
       </section>
       <section>
        <div>New Releases</div>
        <div className="row">
            <div className="col">
                <img src="/img/show25.jpg" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show26.webp" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show27.jpg" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show28.jpg" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show29.jpg" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show30.jpg" className="img-fluid" alt="screenshot"/>
            </div>
        </div>
       </section>
       <section>
        <div>Casual Viewing</div>
        <div className="row">
            <div className="col">
                <img src="/img/show31.jpg" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show32.webp" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show33.webp" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show34.webp" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show35.webp" className="img-fluid" alt="screenshot"/>
            </div>
            <div className="col">
                <img src="/img/show36.jpg" className="img-fluid" alt="screenshot"/>
            </div>
        </div>
       </section>
    </div>
    );
};

export default Aflix;