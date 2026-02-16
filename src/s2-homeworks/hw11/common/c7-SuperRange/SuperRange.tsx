import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: "#00CC22",
                width: '147px',

                // Стили для бегунка (thumb)
                '& .MuiSlider-thumb': {
                    height: 20,
                    width: 20,
                    backgroundColor: '#fff',
                    transition: 'none',
                    border: '2px solid currentColor',
                    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                        boxShadow: '0 0 0 8px rgba(0, 204, 34, 0.16)',
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
