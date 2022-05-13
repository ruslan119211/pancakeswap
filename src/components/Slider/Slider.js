import {withStyles} from "@material-ui/core";
import Slider from "@material-ui/core/Slider";

export const PrettoSlider = withStyles({
    root: {
        color: '#31D0AA',
        height: 8,
        maxWidth: 170,
        marginRight: 10
    },
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: '#27262c',
        border: '2px solid currentColor',
        marginTop: -6,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },

    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);
