const DEFAULT_CONFIG = {
  min: 1,
  max: 6,
}

export function useSavedConfig () {
  let config
  try {
    let saved = JSON.parse(localStorage.getItem('config'))
    config = { ...DEFAULT_CONFIG, ...(saved ?? []) }
  }
  catch (e) {
    config = DEFAULT_CONFIG
  }
  const saveConfig = c => localStorage.setItem('config', JSON.stringify(c))
  return [config, saveConfig]
}