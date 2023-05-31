import styled from "styled-components";

// Membuat Styled Component Movie
const StyledHero = styled.div`
    margin: 1rem;

    section {
    display: flex;
    flex-direction: column;
    text-align: center;
    }

    div {
    margin-bottom: 1rem;
    }

    h2 {
    color: #023e8a;
    margin-bottom: 1rem;
    font-size: 2.44rem;
    }

    h3 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 1.59rem;
    }

    p {
    color: #64748b;
    margin-bottom: 1rem;
    }

    img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
    }

@media (min-width: 768px) {
    /*
     * Nothing TODO Here.
     * We dont change style Hero. 
     */
}

@media (min-width: 992px) {

    max-width: 1200px;
    margin: 3rem auto;


    section {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    }

    div {
    flex-basis: 40%;
    }

    div {
    flex-basis: 40%;
    }
`;

export default StyledHero;