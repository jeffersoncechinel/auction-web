export function settingsGet() {
  return {
    type: '@settings/SETTINGS_GET',
  }
}

export function settingsSuccess(data) {
  return {
    type: '@settings/SETTINGS_SUCCESS',
    payload: { data }
  }
}

export function settingsFailure() {
  return {
    type: '@settings/SETTINGS_FAILURE'
  }
}

export function settingsPost(amount) {
  return {
    type: '@settings/SETTINGS_POST',
    payload: amount
  }
}
