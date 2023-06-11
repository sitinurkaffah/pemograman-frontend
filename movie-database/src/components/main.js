/**
 * Membuat component Main
 * Component Main menampung konten utama
 */
import Hello from "./hello";
function Main() {
    return (
        <main>
            <Hello name="Eva" jurusan="English" />
            <Hello name="Annisa" jurusan="Informatics"/>
            <Hello name="Salma" jurusan="Psycologhy" />            
        </main>
    );
}

export default Main;