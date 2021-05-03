import { useEffect, useState } from 'react'
import {
  ErrorMessage, DefaultKey, InfoMessage,
  InputView, OutputView
} from './index'

export default function Calculator() {
  const [result, setResult] = useState(null)
  const [inputArr, setInputArr] = useState([])
  const [formula, setformula] = useState(0)
  const [popFormula, setPopFormula] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [infoMessage, setInfoMessage] = useState('')

  useEffect(() => {
    window.document.onkeydown = () => {
      return false
    }
  })

  const allClear = () => {
    setInputArr([])
    setformula('')
  }

  const clear = () => {
    inputArr.pop()
    setInputArr(inputArr)
    const joined = inputArr.join('')
    setformula(joined)
  }

  const doCalc = () => {
    try {
      setPopFormula(formula)
      const res = looseStringParse(formula)
      setInputArr([])
      setErrorMessage('')
      setInfoMessage('')
      setResult(res)
      setformula(0)
    } catch (err) {
      setErrorMessage('※正しい計算式を入力してください。')
      setPopFormula(null)
      setResult(null)
    }
  }

  const doChange = (e) => {
    switch (e.target.value) {
      case 'Math.sin(':
      case 'Math.cos(':
      case 'Math.tan(':
      case 'Math.pow(':
      case 'Math.sqrt(':
        mathInput(e)
        break
      case 'clear':
        clear()
        break
      case 'allClear':
        allClear()
        break
      case '=':
        inputString(e)
        doCalc()
        break
      default:
        inputString(e)
        break
    }
  }

  const inputString = (e) => {
    inputArr.push(e.target.value)
    setInputArr(inputArr)
    const joined = inputArr.join('')
    setformula(joined)
  }

  const looseStringParse = (str) => {
    return Function('"use strict";return (' + str + ')')()
  }

  const mathInput = (e) => {
    inputString(e)
    switch (e.target.value) {
      case 'Math.sin(':
        setInfoMessage('※計算したい角度を入力してください。(例)Math.sin(45)')
        break
      case 'Math.cos(':
        setInfoMessage('※計算したい角度を入力してください。(例)Math.cos(45)')
        break
      case 'Math.tan(':
        setInfoMessage('※計算したい角度を入力してください。(例)Math.tan(45)')
        break
      case 'Math.pow(':
        setInfoMessage('※第一引数に『底』、続けて『 , 』、第二引数に『指数』を入力してください。(例)Math.pow(2,3)')
        break
      case 'Math.sqrt(':
        setInfoMessage('※平方根を出力します。(例)Math.sqrt(2)')
    }
  }

  return (
    <div>
      <OutputView result={result} popFormula={popFormula} />
      <InputView formula={formula} />
      <ErrorMessage errorMessage={errorMessage} />
      <InfoMessage infoMessage={infoMessage} />
      <DefaultKey onChange={doChange} />
    </div>
  )
}