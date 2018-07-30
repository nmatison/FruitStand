import { connect } from 'react-redux';
import {addOrange, addBanana, addPear, clearFruit} from '../actions';
import FruitStand from './fruit_stand';

const mapStateToProps = (state) => ({
  fruits: state.fruits
});

const mapDispatchToProps =  (dispatch) =>({
  addPear: () => dispatch(addPear()),
  addBanana: () => dispatch(addBanana()),
  addOrange: () => dispatch(addOrange()),
  clearFruit: () => dispatch(clearFruit())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FruitStand);
