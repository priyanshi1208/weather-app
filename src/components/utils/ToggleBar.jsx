import { ToggleButton } from "@mui/material"

export const ToggleBar = ({ unit, onToggle }) => {
    return (
            <ToggleButton  
            sx={{
              backgroundColor: 'white', // Example color
              fontSize: { xs: '0.8rem', sm: '1rem' }, // Smaller font size on mobile devices
              padding: { xs: '6px 12px', sm: '8px 16px' }, // Adjust padding for responsiveness
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
              width: { xs: '100%', sm: 'auto' }, // Full width on mobile, auto on larger screens
              textAlign: 'center',
            }}
            onClick={onToggle}>
              {unit === "C" ? "Switch to Fahrenheit" : "Switch to Celsius"}
            </ToggleButton>
    )
}