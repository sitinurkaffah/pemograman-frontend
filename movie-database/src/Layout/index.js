import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

/**
 * Membuat Component Layout.
 * Layout terdiri dari Navbar, Footer, children.
 * Menggunakan teknik Composition:
 *  - Menampilkan konten dinamis.
 *  - Menggunakan props children.
 */
function Layout(props) {
    return (
    <div>
        <Navbar></Navbar>
        <main>
            <Container>
                {props.children}
            </Container>
            </main>
        <Footer></Footer>
    </div>
    );
}

export default Layout;