import { useEffect } from 'react'

export default function OutputView(props) {

  return (
    <div>
      <style jsx> {`
      h6 {
        margin: 10px 35px 10px;
        }
      `}</style>
      {(props.popFormula == null && props.result == null) ?
        <h6 align='right'>{props.popFormula}<span className='h4'>
          {props.result}</span></h6>
        : <h6 align='right'>{props.popFormula} = <span className='h4'>
          {props.result}</span></h6>
      }
    </div>
  )
}