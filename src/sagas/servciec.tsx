import { takeLatest } from '@redux-saga/core/effects';
import * as serviceAPI from '../lib/api/service';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const saveService = createRequestSaga(
  'service/SAVE_SHOPPING_REQUEST',
  serviceAPI.postCreateShopping,
);

export function* savePRoductSaga() {
  yield takeLatest('service/SAVE_SHOPPING_REQUEST', saveService);
}

export default { saveService };
