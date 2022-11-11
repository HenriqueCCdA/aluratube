import React from 'react';

export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => { alert('Você precisa me configurar primeiro!')},
    toggleMode: () => { alert('Você precisa me configurar primeiro!')},
});

export default function ColorModeProvider(props) {

    const [mode, setMode] = React.useState(props.initialMode);

    function toogleMode(){
        if(mode === 'dark')
            setMode("light");
        else
            setMode("dark");
    }

    return (
        <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleMode: toogleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    );
}