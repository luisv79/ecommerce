import Slide from './modules/Slide';
import Banner from './modules/Banner';
import Free from './modules/Free';
import Mostseen from './modules/Mostseen';
import Mostsold from './modules/Mostsold';
function Home() {
    return(
        <>
        <div className="container-fluid">
           <Slide/>
           <Banner/>
            <Free/>
            <Mostseen/>
            <Mostsold/> 
        </div>
        </>
    )
    
}

export default Home;