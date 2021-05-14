export function itemGet(id) {
  return {
    type: '@item/ITEM_GET',
    payload: { id }
  }
}

export function itemSuccess(data) {
  return {
    type: '@item/ITEM_SUCCESS',
    payload: { data }
  }
}

export function itemFailure() {
  return {
    type: '@item/ITEM_FAILURE'
  }
}

export function itemAutoBidFailure() {
  return {
    type: '@item/ITEM_AUTO_BID_FAILURE'
  }
}

export function itemPost(data) {
  return {
    type: '@item/ITEM_POST',
    payload: { data }
  }
}

export function itemEnableAutoBidding(data) {
  return {
    type: '@item/ITEM_ENABLE_AUTO_BIDDING',
    payload: { data }
  }
}

export function itemUpdateSlider(data) {
  return {
    type: '@item/ITEM_UPDATE_SLIDER',
    payload: data
  }
}

export function itemClear() {
  return {
    type: '@item/ITEM_CLEAR',
  }
}
