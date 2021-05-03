export default function ErrorMessage(props) {
  return (
    <div>
      <h6 className='text-danger m-2'>{props.errorMessage}</h6>
    </div>
  )
}