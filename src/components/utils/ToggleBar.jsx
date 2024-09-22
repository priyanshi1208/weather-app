import { ToggleButton } from "@mui/material"
import { useStyle } from "../../styles/weatherStyle"

export const ToggleBar = ({ unit, onToggle }) => {
  const classes = useStyle()
    return (
            <ToggleButton className= {classes.toggleBar} onClick={onToggle}>
              {unit === "C" ? "Switch to Fahrenheit" : "Switch to Celsius"}
            </ToggleButton>
    )
}