import React from "react"

const Textarea = ({ maxLength, readonly, disabled, placeholder, required, rows, autoFoucus, children }) => (
  <textarea
    maxLength={maxLength}
    disabled={disabled}
    readOnly={readonly}
    placeholder={placeholder}
    required={required}
    rows={rows}
    autoFoucus={autoFoucus}
  >
    {children}
  </textarea>
)

export default Textarea
