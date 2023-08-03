import Cabecalho from "../../components/cabecalho";
import Menu from "../../components/menu";
import Banner from "../../components/banner";

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
        </>
    )
}