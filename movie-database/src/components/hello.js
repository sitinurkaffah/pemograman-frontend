/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 */
const Hello = (props) => {
    // Melakukan destructing props (object)
    const { name, jurusan } = props;

    return (
    <div className="hello">
        <h2>Hello React</h2>
        <p>Saya {name} - Jurusan {jurusan}</p>
    </div>
    );
}

export default Hello;