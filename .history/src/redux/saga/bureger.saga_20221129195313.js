function* createProductSaga(action) {
  try {
    const { data, callback } = action.payload;
    yield axios.post(`http://localhost:4000/products`, data);
    yield put({ type: SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT) });
    yield callback.goToList();
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.CREATE_PRODUCT),
      payload: {
        error: "Lỗi không xác định",
      },
    });
  },
}
  