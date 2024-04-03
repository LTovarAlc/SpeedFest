import "./validatePass.css"

const ValidatePassPage = ()  => {
    return(
        <section className="validatePass-page">
            <div className="validatePass-content">
                <div className="ticketPass">
                    <div className="user__info">
                        <span className="user__info-name">Nombre: "nombre"</span>
                        <span>Correo: "correo"</span>
                        <span>Acompañantes: "Acompañantes"</span>
                    </div>
                    <img src="../../../../img/perrosDePlata.png" className="ticketPass-img" />
                </div>
            </div>
        </section>
    )
}

export default ValidatePassPage