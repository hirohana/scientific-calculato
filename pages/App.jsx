import {Calculator} from '../components/calc/'

export default function App () {
  const area = {
    width: '350px',
    height: '500px',
    border: '1px solid blue',
    backgroundColor: "#e1e3e8"
  }

  return (
    <div className='container text-center border border-dark rounded-lg' style={area} >
      <Calculator />
    </div>
  )
}