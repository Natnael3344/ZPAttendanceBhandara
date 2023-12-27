import * as RootNavigation from '../../setup/routes-manager/RootNavigation';
import { CommonActionsCreator } from '../../actions/CommonActionCreators';
import { ErrorToaster, SuccesToaster } from '../../setup/helpers';
import { userImagesService } from './UserImages.services';
export const userImagesConstants = {
  SEND_DATA_START : 'SEND_DATA_START',
  SEND_DATA_SUCCESS : 'SEND_DATA_SUCCESS',
  SEND_DATA_FAILURE : 'SEND_DATA_FAILURE',
};

export const userImagesActions = {
  userImages,
};



function userImages(imagesData) {
  return (dispatch) => {
    dispatch(CommonActionsCreator.fetching(userImagesConstants.SEND_DATA_START));
    userImagesService.userImages(imagesData)
      .then(
        user => {
          console.log('test1');
          
          // Handle success logic here
          const successMessage = user.message;
          const param = {};
          console.log('test');
          RootNavigation.navigate('dashboard');
          SuccesToaster(param, successMessage);
          dispatch(CommonActionsCreator.success(userImagesConstants.SEND_DATA_SUCCESS, user));
        },
        error => {
          dispatch(CommonActionsCreator.error(userImagesConstants.SEND_DATA_FAILURE, error));
          ErrorToaster("Alert", "Something went wrong !!!");
        }
      );
  };
}

