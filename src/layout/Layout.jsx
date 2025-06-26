import Navbar from "../components/Navbar"; 
import Footer from "../pages/Footer";
import Top from "../components/Top";
const Layout = ({ children }) => {

    return (
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    );
    }
    
    export default Layout;