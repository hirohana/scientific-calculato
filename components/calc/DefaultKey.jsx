import { useState, useEffect } from 'react'

export default function DefaultKey(props) {
  const [defaultKey, setDefaultKey] = useState(null)

  const fetchDefaultKey = (address) => {
    return fetch(address).then(res => res.json())
  }

  useEffect(() => {
    fetchDefaultKey('/api/defaultKey').then((r) => {
      setDefaultKey(r)
    })
  }, [setDefaultKey])

  return (
    <div>
      <style jsx> {`
      button {
        width: 50px;
        height: 50px;
        }
      `}</style>
      {(defaultKey == null) ?
        <div>wait...</div>
        :
        // Object.entries(defaultKey.key).map((value, key) => (
        //   (value[0] == 'pow') ?
        //     <button className="btn-outline-primary bg-secondary text-white m-1"
        //       key={key} title={value[1].discription} value={value[1].value}
        //       onClick={e => props.onChange(e)} >X{<sup>y</sup>}</button>
        //     : 
        //     <button className="btn-outline-primary bg-secondary text-white m-1"
        //       key={key} title={value[1].discription} value={value[1].value}
        //       onClick={e => props.onChange(e)} >{value[0]}</button>
        // ))
        Object.entries(defaultKey.key).map((value, key) => (
          (value[0] == 'pow') ?
            <button className="btn-outline-primary bg-secondary text-white m-1"
              key={key} title={value[1].discription} value={value[1].value}
              onClick={e => props.onChange(e)} >X{<sup>y</sup>}</button>
            : (value[0] == '=') ?
            <button className="btn-outline-primary bg-primary text-white m-1"
              key={key} title={value[1].discription} value={value[1].value}
              onClick={e => props.onChange(e)} >{value[0]}</button>
            : 
            <button className="btn-outline-primary bg-secondary text-white m-1"
              key={key} title={value[1].discription} value={value[1].value}
              onClick={e => props.onChange(e)} >{value[0]}</button>
        ))
      }
    </div>
  )
}