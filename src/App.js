import './App.css'

function App () {
  return (
    <div className={'app'}>
      <div className={'random-number'}>
        {getRandomInDiapason(1, 6)}
      </div>
    </div>
  )
}

function getRandomInDiapason (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max + 1)
  return Math.floor(Math.random() * (max - min)) + min
}

export default App
