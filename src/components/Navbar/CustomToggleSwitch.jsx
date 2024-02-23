import { MaterialUISwitch } from "../../utils/Navbar/Toggle.js"
// eslint-disable-next-line react/prop-types
const CustomToggleSwitch = ({switchMode, mode}) => {
    return (
        <MaterialUISwitch
            onChange={() => switchMode(mode === false ? "dark" : "light")}
            sx={{
                m: 5,
                '& .MuiSwitch-thumb': {
                    background: mode === false ? '-webkit-linear-gradient(225deg, rgb(1, 106, 112) 0%, rgb(0, 223, 162) 100%)': '#132043',
                    // border: '.5px solid #D8D9DA',

                },
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    background: mode === false ? '-webkit-linear-gradient(225deg, rgb(1, 106, 112) 0%, rgb(0, 223, 162) 100%)': '#132043',

                },
                '& .MuiSwitch-track': {
                    opacity: 1,
                    background: mode === false ? '-webkit-linear-gradient(225deg, rgb(1, 106, 112) 0%, rgb(0, 223, 162) 100%)': '#132043',
                    borderRadius: 20 / 2,
                },
            }}
            defaultChecked
        />
    );
}

export default CustomToggleSwitch;
