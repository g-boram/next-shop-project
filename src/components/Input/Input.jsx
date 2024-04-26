import React, { useState } from 'react'
import styles from './Input.module.scss'
import Icon from '../icon/Icon'
import classNames from 'classnames'
const Input = ({
  id,
  label,
  name = '',
  labelVisible,
  icon,
  email,
  password,
  placeholder = '',
  readOnly,
  disabled,
  value,
  error: errorProp,
  className = '',
  onChange,
  ...restProps
}) => {

  // 입력값을 보관 할 상태값
  const [inputValue, setInputValue] = useState(value? value : '');
  // 비밀번호 보이기 활성화 상태값
  const [isPasswordVidible, setisPasswordVidible] = useState(false)

  // input의 타입을 체크할 함수
  const checkType = () => {
    if(email) {
      return 'email'
    }

    if(password) {
      return isPasswordVidible ? 'text' : 'password';
    }
    return 'text'
  }

  // 변경된 입력값을 바꿔줄 함수
  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e);
  }

  const iconType = isPasswordVidible ? 'show' : 'hide';
  const iconLabel = `비밀번호 ${isPasswordVidible ? '표시' : '감춤'}`
  
  return (
    <div className={classNames(styles.formControl, className)}>
      <label
        htmlFor={id}
        className={classNames(styles.label, labelVisible || styles.labelHiddden)}
      >{label}</label>

      <div className={classNames(styles.inputWrapper, errorProp && styles.inputWrapperError)}>
        {icon ? <Icon type={icon} /> : null}
        <input 
          id={id}
          type={checkType()}
          name={name}
          className={classNames(styles.input)}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          value={inputValue}
          onChange={handleChange}
          {...restProps}
        />

        {password ? (
          <button 
            type='button'
            className={styles.button}
            onClick={() => setisPasswordVidible(prev => !prev)}
            disabled={disabled}
          >
            <Icon type={iconType} alt={iconLabel} title={iconLabel} />
          </button>
        ) : null}
      </div>

      {errorProp && (
        <span role='alert' className={styles.error}>
          {errorProp.message}
        </span>
      )}
    </div>
  )
}

export default Input
