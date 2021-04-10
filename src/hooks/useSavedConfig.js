export const DEFAULT_CONFIG = {
  min: 1,
  max: 6,
}

export function useSavedConfig () {
  let saved = JSON.parse(localStorage.getItem('config'))
  let config = { ...DEFAULT_CONFIG, ...(saved ?? []) }
  const saveConfig = c => localStorage.setItem('config', JSON.stringify(c))
  return [config, saveConfig]
}