import React, {Component} from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'
import { BackHandler } from "react-native";
import { addNavigationHelpers, NavigationActions } from "react-navigation";

// // here is our redux-aware our smart component
// function ReduxNavigation (props) {
//   const { dispatch, nav } = props;
//   const navigation = ReactNavigation.addNavigationHelpers({
//     dispatch,
//     state: nav
//   });
//
//   return <AppNavigation navigation={navigation} />
// }

class ReduxNavigation extends Component{
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };
  render() {
    const { dispatch, nav } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav
    });
    return <AppNavigation navigation={navigation} />
  }
}

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
