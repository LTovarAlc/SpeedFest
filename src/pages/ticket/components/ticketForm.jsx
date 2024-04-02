import Input from "./inputs/input"
import "./ticketForm.css"

const TicketForm = () => {
    return(
        <form action="" className="ticketForm">
            <Input text={"Nombre"} type={"text"} name={"name"}/>
            <Input text={"E-mail"} type={"email"} name={"email"}/>
            <select name="select" id="formSelect" className="custom-select" >
                <option value="">Acompañantes</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
            </select>
        </form>
    )
}

export default TicketForm