export default function Header (props) {
  return (
    <div>
      <style jsx> {`
      h1 {
        margin: 30px 10px;
        }
      `}</style>
      <h1 className='bg-secondary px-3 text-white text-center display-4'>
        {'関数電卓'}
      </h1>
    </div>
  )
}