import styles from "./AddMovieForm.module.css"

function AddForm() {
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
                        <label htmlFor="title">Title</label>
                        <input type="text" className={styles.form__input}/>
                    </div>

                    <div className={styles.form__control}>
                        <label htmlFor="date">Year</label>
                        <input type="date" className={styles.form__input}/>
                    </div>
                    <button className={styles.form__button}>Submit</button>
                </div>
            </form>
        </div>

    )
}

export default AddForm;
