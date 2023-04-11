import { useState } from "react";
import styles from "./AddMovieForm.module.css"
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";

//  Menangkap props
function AddForm(props) {
    const { movies, setMovies } = props;

    const [title, setTitle] = useState("");
    const [isTitleError, setIsTitleError] = useState("");
    const [date, setDate] = useState("");
    const [isDateError, setIsDateError] = useState("");
    const [image, setImage] = useState("");
    const [isImageError, setIsImageError] = useState("");
    const [type, setType] = useState("");


    function handleInputChange(event) {
        setTitle(event.target.value);
    }

    function handleInputDate(event) {
        setDate(event.target.value);
    }

    function handleInputImage(event) {
        setImage(event.target.value);
    }

    function handleSelectChange(event) {
        setType(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (title === "") {
            setIsTitleError(true);
            return;
        } else if (date === "") {
            setIsDateError(true);
            return;
        } else if (image === "") {
            setIsImageError(true);
            return;
        } 

        const newMovie = {
            id: nanoid(),
            title: title,
            year: date,
            poster: image,
            type: type,
        };

        setIsTitleError(false);
        setIsDateError(false);
        setIsImageError(false);
        setMovies([...movies, newMovie]);
    }

    return(
        <div className={styles.container}>
            <img className={styles.form__image} 
            src="https://picsum.photos/300/400" 
            alt="">
            </img>
            <form className={styles.form}>
            <div className={styles.form__right}>
                    <h2 className={styles.form__tittle}>Add Movie</h2>
                    <div className={styles.form__control}>
                        <label for="tittle">Tittle</label>
                        <input type="text" className={styles.form__input}
                        value={title}
                        onChange={handleInputChange}/>
                        {isTitleError ? <Alert>Title Wajib Diisi!</Alert> : ""}
                    </div>

                    <div className={styles.form__control}>
                        <label for="year">Year</label>
                        <input type="year" className={styles.form__input}
                        value={date}
                        onChange={handleInputDate}/>
                        {isDateError ? <Alert>Date Wajib Diisi!</Alert> : ""}
                    </div>

                    <div className={styles.form__control}>
                        <label for="image">Link Image</label>
                        <input type="text" className={styles.form__input}
                        value={image}
                        onChange={handleInputImage}/>
                        {isImageError ? <Alert>Link Image Wajib Diisi!</Alert> : ""}
                    </div>

                    <div className={styles.form__control}>
                        <label for="type">Genre Film</label>
                        <select className={styles.form__select} 
                        value={type}
                        onChange={handleSelectChange}
                        >
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                        <option value="Horror">Horror</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Romance">Romance</option>
                        </select>
                    </div>
                </div>
                <button onClick={handleSubmit} className={styles.form__button}>Submit</button>
            </form>
        </div>
    )
}

export default AddForm;