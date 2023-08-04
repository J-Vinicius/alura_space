import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
import Banner from "../../components/banner";
import Rodape from "../../components/Rodape";
import Galeria from "../../components/Galeria";

import styles from "./PaginaInicial.module.scss"

export default function PaginaInicial () {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
            <div>
                <Galeria />
            </div>
            <Rodape />
        </>
    )
}