import Section from "./components/topPage/section/Section";
import ResponsiveAppBar from "./components/MUIheader/MUIheader";
import MenuSlider from "./components/topPage/menu_slider/MenuSlider"
import SlideShow from "./components/topPage/commitment/SlideShow"
import Map from "./components/map/Map";


export default async function Home() {
    return (
        <>
            <div>
                <ResponsiveAppBar />
                <SlideShow/>
                <MenuSlider/>
                <Section />
                <Map/>
            </div>
        </>
    );
}
