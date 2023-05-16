import { useState } from "react";
import styles from "./AddMovieForm.module.css"
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";

//  Menangkap props
function AddForm(props) {
    const { movies, setMovies } = props;

    const [formData, setFormData] = useState({
        title: "",
        date: "",
        poster: "",
        type: "",
    });

    function handleChange(event) {
    // Destructing name dan value.
        const { name, value } = event.target;

    /**
     * Mengupdate state berupa object:
     * - Menggunakan spread operator:
     * - Update property berdasarkan apapun nilai name.
     */
    setFormData({
        ...formData,
        [name]: value,
    });
}

// Destructing state FormData.
const { title, date, poster, type } = formData;

const [formErrors, setFormErrors] = useState({
    isTitleError: false,
    isDateError: false,
    isPosterError: false,
    isTypeError: false,
});

// Destructing state FormErrors.
const { isTitleError, isDateError, isPosterError, isTypeError } = formErrors;

function validate() {
    if (title === "") {
        setFormErrors({ ...formErrors, 
            isTitleError: true
        });
        return false;
    } else if (date === "") {
        setFormErrors({ ...formErrors, 
            isDateError: true,
            isTitleError: false,
        })
        return false;
    } else if (poster === "") {
        setFormErrors({ ...formErrors,
            isPosterError: true,
            isDateError: false,
        })
        return false;
    } else if (type === "") {
        setFormErrors({ ...formErrors,
            isTypeError: true,
        })
        return false;
    } else {
        setFormErrors({ ...formErrors,
            isTitleError: false,
            isDateError: false,
            isPosterError: false,
            isTypeError: false,
        })
        return true;
    }
}

        function newMovie() {
            const movie = {
            id: nanoid(),
            title: title,
            year: date,
            poster: poster,
            type: type,
        };

        setMovies([...movies, movie]);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
    
        validate() && newMovie();
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
                        <label htmlFor="tittle">Tittle</label>
                        <input type="text" className={styles.form__input}
                        value={title}
                        onChange={handleChange}
                        name="title"/>
                        {isTitleError ? <Alert>Title Wajib Diisi!</Alert> : ""}
                    </div>

                    <div className={styles.form__control}>
                        <label htmlFor="year">Year</label>
                        <input type="year" className={styles.form__input}
                        value={date}
                        onChange={handleChange}
                        name="date"/>
                        {isDateError ? <Alert>Date Wajib Diisi!</Alert> : ""}
                    </div>

                    <div className={styles.form__control}>
                        <label htmlFor="image">Link Image</label>
                        <input type="text" className={styles.form__input}
                        value={poster}
                        onChange={handleChange}
                        name="poster"/>
                        {isPosterError ? <Alert>Link Image Wajib Diisi!</Alert> : ""}
                    </div>

                    <div className={styles.form__control}>
                        <label htmlFor="type">Genre Film</label>
                        <select className={styles.form__select} 
                        value={type}
                        onChange={handleChange}
                        name="type"
                        >
                        <option value="">-- Pilih Genre Film --</option>
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                        <option value="Horror">Horror</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Romance">Romance</option>
                        </select>
                        {isTypeError ? <Alert>Wajib Memilih Type!</Alert> : ""}
                    </div>
                </div>
                <button onClick={handleSubmit} className={styles.form__button}>Submit</button>
            </form>
        </div>
    )
}

export default AddForm;
