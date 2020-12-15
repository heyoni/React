import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function getRandomColor() {
    const colors = [
        'red',
        'yello',
        'green',
        'blue',
        'purple',
        'pink',
        'SkyBlue',
        'magenta',
        'orange',
        'AliceBlue',
        'SeaShell',
        'Plum',
        'Peru'
    ];
    const random = Math.floor(Math.random() * 13)
    return colors[random];
}

const mapStateToProps = (state) => ({
    color: state.color,
    number: state.number
})

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color))
    }
})

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;