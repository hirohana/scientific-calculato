export default function InputView(props) {
  return (
    <div>
      <style jsx> {`
      input {
        width: 250px;
        height: 30px;
        border: 2px solid #4281f5; 
        z-index: 10;
        outline: 0;
        margin: 5px 20px;
        }
      `}</style>
      <input type='text' size='200px' value={props.formula} 
        style={{textAlign: 'right'}} readOnly></input>
    </div>
  )
}