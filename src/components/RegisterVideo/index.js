import React from "react";
import { StyledRegisterVideo } from "./sytles";


function useForm(propsDpForm) {
    const [values, setValues] = React.useState(propsDpForm.initialValues);

    return {
        values,
        handleChange: event => {
            const value = event.target.value;
            const name = event.target.name
            setValues({
                ...values,
                [name]: value
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues : { titulo: "Frost punk", url: "https://youtube.."}
    });
    const [formVisivel, setFormVisivel] = React.useState(true);

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        console.log(formCadastro.values);
                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input
                                placeholder="Titulo do vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                            />
                            <input
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                    )
                : null
            }
        </StyledRegisterVideo>
    );
}