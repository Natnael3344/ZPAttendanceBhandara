import { checkInService } from './CheckIn.services';
import { stopSubmit } from 'redux-form';
import * as RootNavigation from '../../setup/routes-manager/RootNavigation';
import { useNavigation } from '@react-navigation/native';
import { CommonActionsCreator } from '../../actions/CommonActionCreators';
import { ErrorToaster, SuccesToaster } from '../../setup/helpers';
export const checkInConstants = {
  SEND_DATA_START : 'SEND_DATA_START',
  SEND_DATA_SUCCESS : 'SEND_DATA_SUCCESS',
  SEND_DATA_FAILURE : 'SEND_DATA_FAILURE',
};

export const checkInActions = {
  checkIn,
};



function checkIn(checkInData) {
  return (dispatch) => {
    dispatch(CommonActionsCreator.fetching(checkInConstants.SEND_DATA_START));
    checkInService.checkIn(checkInData)
      .then(
        user => {
          console.log('test1');
          
          // Handle success logic here
          const successMessage = user.message;
          const param = {};
          console.log('test');
          RootNavigation.navigate('home');
          SuccesToaster(param, successMessage);
          dispatch(CommonActionsCreator.success(checkInConstants.SEND_DATA_SUCCESS, user));
        },
        error => {
          dispatch(CommonActionsCreator.error(checkInConstants.SEND_DATA_FAILURE, error));
          ErrorToaster("Alert", "Something went wrong !!!");
        }
      );
  };
}

